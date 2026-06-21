import { NextResponse } from 'next/server';
import { NewsletterSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { transporter } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = NewsletterSchema.parse(body);
    const { email } = validatedData;

    await prisma.newsletterSignup.create({
      data: { email },
    });

    transporter.sendMail({
      from: `"Adlio Limited" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || 'your-email@example.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>This email has been added to your newsletter list.</p>
      `,
    }).catch((err) => {
      console.error('Newsletter notification email failed:', err);
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    console.error('Newsletter signup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}