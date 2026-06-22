import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional().default(''),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});