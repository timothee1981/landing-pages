/**
 * Contact Form API Endpoint
 * Handles contact form submissions via Resend
 * Includes anti-bot protection: honeypot, timing check, and spam detection
 */

import type { APIRoute } from 'astro';

// Note: Import Resend in your actual implementation
// import { Resend } from 'resend';

// ===== ANTI-BOT PROTECTION =====

/**
 * Check if honeypot field was filled (bots fill hidden fields)
 */
function isHoneypotFilled(honeypot: string | undefined): boolean {
  return !!honeypot && honeypot.length > 0;
}

/**
 * Check if form was submitted too quickly (bots are fast)
 * Returns true if submission is suspiciously fast (< 3 seconds)
 */
function isSubmittedTooFast(formLoadedAt: number | undefined): boolean {
  if (!formLoadedAt) return false;
  const now = Date.now();
  const timeTaken = now - formLoadedAt;
  return timeTaken < 3000; // Less than 3 seconds = likely bot
}

/**
 * Basic spam/gibberish detection
 * Checks for common spam patterns in message content
 */
function containsSpamPatterns(text: string): boolean {
  const spamPatterns = [
    // Excessive repeated characters (e.g., "aaaaaaa", "!!!!!")
    /(.)\1{5,}/,
    // Too many URLs
    /(https?:\/\/[^\s]+){3,}/i,
    // Common spam phrases
    /\b(viagra|casino|lottery|winner|congratulations.*won|click here now|act now|limited time|free money)\b/i,
    // Mostly consonants (gibberish like "xkjhgfdsa")
    /^[bcdfghjklmnpqrstvwxz\s]{15,}$/i,
    // All caps message (shouting/spam)
    /^[A-Z\s\d!?.]{50,}$/,
    // Cryptocurrency/scam patterns
    /\b(bitcoin|crypto|nft|wallet.*connect|airdrop|token sale)\b/i,
  ];

  return spamPatterns.some(pattern => pattern.test(text));
}

/**
 * Check if email looks fake/disposable
 */
function isSuspiciousEmail(email: string): boolean {
  const suspiciousDomains = [
    'tempmail', 'throwaway', 'fakeinbox', 'guerrillamail',
    'mailinator', '10minutemail', 'trashmail'
  ];
  const emailLower = email.toLowerCase();
  return suspiciousDomains.some(domain => emailLower.includes(domain));
}

// ===== MAIN API HANDLER =====

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message, newsletter, _gotcha, _timestamp } = data;

    // ===== ANTI-BOT CHECKS =====

    // 1. Honeypot check - if filled, it's a bot
    if (isHoneypotFilled(_gotcha)) {
      console.log('🤖 Bot detected: Honeypot filled');
      // Return fake success to not alert the bot
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Timing check - if too fast, likely a bot
    if (isSubmittedTooFast(_timestamp)) {
      console.log('🤖 Bot detected: Form submitted too quickly');
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 3. Spam content check
    if (containsSpamPatterns(message) || containsSpamPatterns(name)) {
      console.log('🤖 Spam detected: Message contains spam patterns');
      return new Response(
        JSON.stringify({ error: 'Your message was flagged as spam. Please revise and try again.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 4. Suspicious email check
    if (isSuspiciousEmail(email)) {
      console.log('🤖 Suspicious email detected:', email);
      return new Response(
        JSON.stringify({ error: 'Please use a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ===== VALIDATION =====

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ===================================================================
    // 🚨 IMPORTANT: UNCOMMENT THE CODE BELOW TO ENABLE EMAIL SENDING 🚨
    // ===================================================================
    // 
    // Before uncommenting:
    // 1. Make sure you have created a .env file with your RESEND_API_KEY and CONTACT_EMAIL
    // 2. Uncomment the import at the top of this file: import { Resend } from 'resend';
    // 3. Uncomment the resend initialization below
    // 4. Uncomment the email sending code
    //
    // ⚠️ FREE TIER LIMITATION:
    // Without a verified domain, Resend can ONLY send emails to the email 
    // address you used to sign up for Resend. 
    // 
    // Example: If you signed up with john@gmail.com, you can only receive 
    // emails at john@gmail.com until you verify your own domain.
    //
    // To send to ANY email: Verify your domain in Resend Dashboard → Domains
    // After verification, you can use any email@yourdomain.com as FROM_EMAIL
    // ===================================================================

    // STEP 1: Uncomment this line (also uncomment the import at the top of this file)
    // const resend = new Resend(import.meta.env.RESEND_API_KEY);

    // STEP 2: Uncomment this block to send emails
    // const contactEmail = import.meta.env.CONTACT_EMAIL;
    // if (!contactEmail) {
    //   console.error('❌ CONTACT_EMAIL not set in .env file!');
    //   return new Response(
    //     JSON.stringify({ error: 'Server configuration error' }),
    //     { status: 500, headers: { 'Content-Type': 'application/json' } }
    //   );
    // }
    //
    // const { error: emailError } = await resend.emails.send({
    //   // 'from' MUST be either:
    //   // - 'onboarding@resend.dev' (for testing, but can only send to YOUR signup email)
    //   // - An email from your verified domain (e.g., 'hello@yourdomain.com')
    //   from: import.meta.env.FROM_EMAIL || 'Contact Form <onboarding@resend.dev>',
    //   to: [contactEmail],
    //   replyTo: email, // So you can reply directly to the person who contacted you
    //   subject: `New Contact: ${subject || 'General Inquiry'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //     <p><strong>Newsletter Opt-in:</strong> ${newsletter ? 'Yes' : 'No'}</p>
    //   `
    // });
    //
    // if (emailError) {
    //   console.error('❌ Failed to send email:', emailError);
    //   return new Response(
    //     JSON.stringify({ error: 'Failed to send message. Please try again.' }),
    //     { status: 500, headers: { 'Content-Type': 'application/json' } }
    //   );
    // }

    // STEP 3: Uncomment this block if you want newsletter signups from the contact form
    // if (newsletter) {
    //   try {
    //     await resend.contacts.create({
    //       email,
    //       firstName: name.split(' ')[0],
    //       lastName: name.split(' ').slice(1).join(' ') || undefined,
    //       unsubscribed: false,
    //     });
    //     console.log('✅ Added to newsletter:', email);
    //   } catch (contactError) {
    //     // Don't fail the whole request if newsletter signup fails
    //     console.error('Newsletter signup error:', contactError);
    //   }
    // }

    // For demo purposes, just log and return success
    // ⚠️ DELETE THIS LINE once you've uncommented the Resend code above
    console.log('✅ Contact form submission (demo mode - no email sent):', { name, email, subject, message, newsletter });

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
