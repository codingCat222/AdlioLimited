import { NextResponse } from 'next/server';
import { NewsletterSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { getResendClient } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = NewsletterSchema.parse(body);
    const { email } = validatedData;

    await prisma.newsletterSignup.create({
      data: { email },
    });

    const resend = getResendClient();

    await resend.emails.send({
      from: 'Adlio <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL || 'your-email@example.com'],
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: ${email}</p>`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}