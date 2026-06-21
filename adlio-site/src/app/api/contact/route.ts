import { NextResponse } from 'next/server';
import { ContactSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { transporter } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ContactSchema.parse(body);
    const { name, email, company, message } = validatedData;

    await prisma.contactSubmission.create({
      data: { name, email, company, message },
    });

    transporter.sendMail({
      from: `"Adlio Limited" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'your-email@example.com',
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }).catch((err) => {
      console.error('Email send failed:', err);
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }
    console.error('Contact submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}