import { Resend } from 'resend';

// Do NOT initialize Resend here directly.
// Instead, use a function that creates it only when needed.

export function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined in environment variables');
  }
  return new Resend(process.env.RESEND_API_KEY);
}