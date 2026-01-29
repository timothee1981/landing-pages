/**
 * Newsletter Signup API Endpoint
 * Handles email subscriptions via Resend Contacts API
 * Includes anti-bot protection: honeypot, timing check, and email validation
 * 
 * Required Environment Variables:
 * - RESEND_API_KEY: Your Resend API key
 * - FROM_EMAIL: Email address for sending (must be verified in Resend)
 */

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// ===== ANTI-BOT PROTECTION =====

/**
 * Check if honeypot field was filled (bots fill hidden fields)
 */
function isHoneypotFilled(honeypot: string | undefined): boolean {
  return !!honeypot && honeypot.length > 0;
}

/**
 * Check if form was submitted too quickly (bots are fast)
 * Returns true if submission is suspiciously fast (< 2 seconds for simple forms)
 */
function isSubmittedTooFast(formLoadedAt: number | undefined): boolean {
  if (!formLoadedAt) return false;
  const now = Date.now();
  const timeTaken = now - formLoadedAt;
  return timeTaken < 2000; // Less than 2 seconds = likely bot
}

/**
 * Check if email looks fake/disposable
 */
function isSuspiciousEmail(email: string): boolean {
  const suspiciousDomains = [
    'tempmail', 'throwaway', 'fakeinbox', 'guerrillamail',
    'mailinator', '10minutemail', 'trashmail', 'yopmail',
    'sharklasers', 'spam4.me', 'dispostable'
  ];
  const emailLower = email.toLowerCase();
  return suspiciousDomains.some(domain => emailLower.includes(domain));
}

// ===== MAIN API HANDLER =====

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email, _gotcha, _timestamp } = data;

    // ===== ANTI-BOT CHECKS =====

    // 1. Honeypot check - if filled, it's a bot
    if (isHoneypotFilled(_gotcha)) {
      console.log('🤖 Bot detected: Honeypot filled');
      // Return fake success to not alert the bot
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Timing check - if too fast, likely a bot
    if (isSubmittedTooFast(_timestamp)) {
      console.log('🤖 Bot detected: Form submitted too quickly');
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Suspicious email check
    if (isSuspiciousEmail(email)) {
      console.log('🤖 Suspicious email detected:', email);
      return new Response(
        JSON.stringify({ success: false, error: 'Please use a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ===== VALIDATION =====

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Add contact to Resend (no audienceId required)
    const { error: contactError } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (contactError) {
      // Handle duplicate contact (not really an error)
      if (contactError.message?.includes('already exists')) {
        return new Response(
          JSON.stringify({ success: true, message: "You're already subscribed!" }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
      console.error('Contact creation error:', contactError);
      throw contactError;
    }

    // Optional: Send welcome email
    // Note: Requires verified domain in Resend to send to external emails
    // With default "onboarding@resend.dev", you can only send to your own email
    const fromEmail = import.meta.env.FROM_EMAIL || 'Newsletter <onboarding@resend.dev>';
    
    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Welcome! 🎵',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333;">Thanks for subscribing! 🎵</h1>
          <p style="color: #666; line-height: 1.6;">
            You're now on the list for exclusive updates, early access to tickets, and special content.
          </p>
          <p style="color: #666; line-height: 1.6;">
            Stay tuned for more!
          </p>
        </div>
      `,
    });

    // Log email errors but don't fail the subscription
    if (emailError) {
      console.error('Welcome email failed:', emailError);
      console.error('Note: Verify your domain in Resend to send to external emails.');
    }


    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to subscribe' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
