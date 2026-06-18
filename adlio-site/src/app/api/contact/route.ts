import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { getResendClient } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ContactSchema.parse(body);
    const { name, email, company, message } = validatedData;

    await prisma.contactSubmission.create({
      data: { name, email, company, message },
    });

    // Initialize Resend INSIDE the function, not at the top level
    const resend = getResendClient();

    await resend.emails.send({
      from: 'Adlio <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'your-email@example.com'],
      subject: `New Contact from ${name}`,
      html: `<h2>New Message</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company || 'N/A'}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}