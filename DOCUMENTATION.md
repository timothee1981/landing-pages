# Music Landing Pages Documentation

> **High-Converting Landing Page Templates for Musicians, Artists & Recording Studios**

A collection of 6 professionally designed landing page variations built with Astro, Tailwind CSS, and integrated Resend for email capture. Each template is optimized for conversions and designed to help artists grow their audience.

---

## 🎯 Choose Your Path

**What's your experience level?** Pick the right approach for you:

| Your Situation                               | What to Do                                                                     | Difficulty        |
| -------------------------------------------- | ------------------------------------------------------------------------------ | ----------------- |
| 🆕 **"I've never coded before"**             | Use `Contact4` (mailto) + skip Resend entirely. Just change one email address! | ⭐ Easy           |
| 🆕 **"I want a contact form but no coding"** | Use [Formspree](#no-code-alternative-formspree) - copy/paste their form, done! | ⭐ Easy           |
| 🔧 **"I can follow instructions"**           | Use `Contact1/2/3` + Resend setup with our step-by-step guide                  | ⭐⭐⭐ Medium     |
| 💻 **"I'm a developer"**                     | Full Resend integration with newsletter, verified domain, etc.                 | ⭐⭐⭐⭐ Advanced |

> 💡 **Honest advice:** If you just want people to contact you, **`Contact4` or Formspree is all you need**. The Resend setup is more powerful but requires technical knowledge.

---

## ⏱️ How Long Does Setup Take?

Typical setup times (first-time users):

| Setup Type                      | Time Estimate | What's Involved                                      |
| ------------------------------- | ------------- | ---------------------------------------------------- |
| **Mailto version** (`Contact4`) | ~10 minutes   | Change one email address, done!                      |
| **Formspree version**           | 20–30 minutes | Create account, copy form code, customize            |
| **Resend full setup**           | 45–90 minutes | API keys, environment variables, domain verification |

> 💼 **Short on time?** If you'd prefer not to spend time on technical setup, you can purchase the **Done-For-You Install** service after buying the template. We'll handle all the configuration so you can focus on your music.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Landing Page Variations](#landing-page-variations)
4. [Customization Guide](#customization-guide)
5. [Components Reference](#components-reference)
6. [Theming System](#theming-system)
7. [Email Integration (Resend)](#email-integration-resend)
8. [SEO Optimization](#seo-optimization)
9. [Deployment](#deployment)
10. [Installation Guides](#installation-guides) ⭐ _New to this? Start here!_
    - [Installing Node.js](#installing-nodejs)
    - [What are npm and Yarn?](#what-are-npm-and-yarn)
    - [Setting Up a Resend Account](#setting-up-a-resend-account)
11. [Troubleshooting](#troubleshooting)
12. [Frequently Asked Questions](#-frequently-asked-questions)
13. [License & Copyright](#-license--copyright)

---

## Quick Start

### Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** installed → [See installation guide below](#installing-nodejs) if not installed
- **npm or yarn** package manager → [Learn about package managers below](#what-are-npm-and-yarn) (npm comes with Node.js!)
- **Resend account** (for email features) → [See setup guide below](#setting-up-a-resend-account) - optional, only needed for contact forms

> 💡 **New to all this?** Check out the README.txt file first for help opening terminals and viewing this documentation.

### Installation

> ⚠️ **Important:** If you opened this project in VS Code and opened a terminal there, you are **already in the correct folder**. Skip the `cd` command and go straight to `npm install`.

**Step 1: Make sure you're in the right folder**

If you opened VS Code with this project folder, you're already there! Your terminal should show something like:

```
C:\Users\YourName\...\MusicLandingPages>
```

or on Mac/Linux:

```
~/path/to/MusicLandingPages$
```

If you're NOT in the MusicLandingPages folder yet, here's the easiest way to open a terminal in the right location:

**On Windows (easiest methods):**

1. Open File Explorer and navigate to the MusicLandingPages folder
2. Click on the address bar at the top (where it shows the folder path)
3. Type `cmd` and press Enter → Command Prompt opens in that folder!

_Or:_ Right-click inside the folder → "Open in Terminal" or "Open PowerShell window here"

_Or:_ If you have Git installed: Right-click → "Open Git Bash here"

**On Mac:**

1. Open Finder and navigate to the MusicLandingPages folder
2. Right-click on the folder
3. Hold the Option key and click "Copy [folder] as Pathname"
4. Open Terminal (Cmd+Space, type "Terminal")
5. Type `cd ` (with a space), then paste (Cmd+V) and press Enter

**Step 2: Install and run**

```bash
npm install
```

☝️ **What this does:** Downloads all the code libraries (dependencies) this project needs. You only need to run this **once** when you first set up the project, or after updating.

```bash
npm run dev
```

☝️ **What this does:** Starts a local development server on your computer. After running this, you'll see a message like:

```
  🚀  astro  v4.x.x started in XXXms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
```

**To view your website:**

1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to: **http://localhost:4321**
3. You should see your landing page! 🎉

> 💡 **Tip:** The dev server "watches" your files. When you edit and save a file, the browser automatically refreshes to show your changes!

**To stop the server:** Press `Ctrl+C` in the terminal.

```bash
npm run build
```

☝️ **What this does:** Creates an optimized, production-ready version of your website in a folder called `dist/`. Use this when you're ready to deploy your site to the internet.

```bash
npm run preview
```

☝️ **What this does:** Lets you preview the production build locally (after running `npm run build`). Opens at **http://localhost:4321** - useful to test that everything works before deploying.

### Environment Variables

Create a `.env` file in the root directory:

```env
# Resend API Key (get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxx

# Your verified sending domain email (the "from" address on emails)
FROM_EMAIL=hello@yourdomain.com

# Email to receive contact form submissions (where messages are sent TO)
CONTACT_EMAIL=booking@yourdomain.com
```

> 💡 **Tip:** `FROM_EMAIL` and `CONTACT_EMAIL` can be the same email address if you want (e.g., both `hello@yourdomain.com`).

> ⚠️ **SECURITY WARNING - READ THIS!**
>
> - **NEVER push your `.env` file to GitHub!** It contains your secret API keys.
> - The `.gitignore` file already excludes `.env` - make sure it stays that way.
> - If you accidentally push your API key, **revoke it immediately** in your Resend dashboard and create a new one.
> - **Delete the `.env.example` file** after creating your real `.env` file (it's just a template).

---

## Project Structure

```
MusicLandingPages/
├── public/
│   └── landing/
│       └── images/           # All landing page images
├── src/
│   ├── components/
│   │   ├── bios/             # 6 bio section variations
│   │   ├── contact/          # 3 contact form variations
│   │   ├── heroes/           # 6 hero section variations
│   │   ├── releases/         # 6 release section variations
│   │   ├── shared/           # Navigation, Footer
│   │   └── social/           # 3 social section variations
│   ├── data/
│   │   └── landingConfig.ts  # Central configuration
│   ├── layouts/
│   │   └── LandingLayout.astro
│   ├── pages/
│   │   ├── api/
│   │   │   ├── contact.ts    # Contact form endpoint
│   │   │   └── newsletter.ts # Newsletter signup endpoint
│   │   ├── index.astro       # Landing page showcase
│   │   ├── landing-1.astro   # Bold/Rock template
│   │   ├── landing-2.astro   # Minimal/Electronic template
│   │   ├── landing-3.astro   # Warm/Acoustic template
│   │   ├── landing-4.astro   # Urban/Hip-hop template
│   │   ├── landing-5.astro   # Classical/Elegant template
│   │   └── landing-6.astro   # Indie/Creative template
│   └── styles/
│       └── landing-base.css  # Base styles & utilities
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Landing Page Variations

### 1. Bold / Rock (`landing-1.astro`)

**Best for:** Rock bands, metal acts, high-energy performers

**Theme:** Dark background with red accents

**Components:**

- `Hero1` - Full-screen with video background option
- `Bio1` - Timeline-based milestone layout
- `Release1` - Large Spotify embed with streaming links
- `Social1` - Icon row layout
- `Contact1` - Full contact form

**Color Palette:**

```css
--color-primary: #dc2626; /* Red-600 */
--color-secondary: #991b1b; /* Red-800 */
--color-dark: #0a0a0a; /* Neutral-950 */
--color-light: #ffffff;
--color-accent: #fca5a5; /* Red-300 */
```

---

### 2. Minimal / Electronic (`landing-2.astro`)

**Best for:** Electronic producers, DJs, ambient artists

**Theme:** Black and white, typography-focused

**Components:**

- `Hero2` - Typography-centric minimal design
- `Bio2` - Card-based with highlights
- `Release2` - Album grid layout
- `Social1` - Icon row layout
- `Contact2` - Email capture only

**Color Palette:**

```css
--color-primary: #ffffff;
--color-secondary: #737373;
--color-dark: #0a0a0a;
--color-light: #ffffff;
--color-accent: #a3a3a3;
```

---

### 3. Warm / Acoustic (`landing-3.astro`)

**Best for:** Singer-songwriters, folk artists, acoustic performers

**Theme:** Earth tones with amber accents

**Components:**

- `Hero3` - Split-screen with artist photo
- `Bio3` - Paragraph-style personal story
- `Release3` - Single track focus with lyrics
- `Social1` - Icon row layout
- `Contact1` - Full contact form

**Color Palette:**

```css
--color-primary: #d97706; /* Amber-600 */
--color-secondary: #92400e; /* Amber-800 */
--color-dark: #1c1917; /* Stone-900 */
--color-light: #f5f5f4; /* Stone-100 */
--color-accent: #fbbf24; /* Amber-400 */
```

---

### 4. Urban / Hip-hop (`landing-4.astro`)

**Best for:** Hip-hop artists, R&B singers, rappers

**Theme:** Neon gradients with dark background

**Components:**

- `Hero4` - Stats display with animated gradients
- `Bio4` - Photo gallery with stats
- `Release4` - Carousel/stream count display
- `Social2` - Buttons with follower counts
- `Contact2` - Email capture with incentive

**Color Palette:**

```css
--color-primary: #8b5cf6; /* Violet-500 */
--color-secondary: #06b6d4; /* Cyan-500 */
--color-dark: #0a0a0a;
--color-light: #fafafa;
--color-accent: #c4b5fd;
```

---

### 5. Classical / Elegant (`landing-5.astro`)

**Best for:** Classical musicians, jazz artists, orchestras

**Theme:** Gold and dark, sophisticated

**Components:**

- `Hero5` - Album-focused with vinyl visual
- `Bio5` - Quote and awards display
- `Release5` - Track listing with vinyl design
- `Social1` - Icon row layout
- `Contact3` - CTA buttons with contact options

**Color Palette:**

```css
--color-primary: #ca8a04; /* Yellow-600 (Gold) */
--color-secondary: #a16207; /* Yellow-700 */
--color-dark: #0f0f0f;
--color-light: #fafafa;
--color-accent: #fde047; /* Yellow-300 */
```

---

### 6. Indie / Creative (`landing-6.astro`)

**Best for:** Indie bands, bedroom pop artists, creative projects

**Theme:** Pastel gradients, playful

**Components:**

- `Hero6` - Asymmetric layout
- `Bio6` - Fun facts and personality
- `Release6` - YouTube video embed
- `Social3` - Instagram feed preview
- `Contact2` - Casual email capture

**Color Palette:**

```css
--color-primary: #ec4899; /* Pink-500 */
--color-secondary: #8b5cf6; /* Violet-500 */
--color-dark: #1f1f1f;
--color-light: #fafafa;
--color-accent: #f9a8d4; /* Pink-300 */
```

---

## Customization Guide

### Changing Artist Information

Each landing page has a config object at the top:

```astro
---
const config = {
  artistName: "YOUR ARTIST NAME",
  tagline: "Your tagline here",
  genre: "Your Genre",
  seo: {
    title: "Artist Name | Official Site",
    description: "Your SEO description",
    keywords: ["keyword1", "keyword2"]
  }
};
---
```

**What each SEO field does:**

| Field         | What it does                                                  | Where it appears                                                                       |
| ------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `title`       | The page title                                                | Browser tab, Google search results (the big blue link), when shared on social media    |
| `description` | A short summary of your page (150-160 characters recommended) | Google search results (the text under the blue link), social media previews            |
| `keywords`    | Words people might search to find you                         | Helps search engines understand your page (less important now, but still good to have) |

**Example of how it looks in Google:**

```
🔍 Google Search Results
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MIDNIGHT FURY | Official Landing Page     ← This is your "title"
https://yourwebsite.com
Experience the raw power of MIDNIGHT FURY. ← This is your "description"
Listen to the latest album, get tour dates...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Tips for good SEO:**

- **Title:** Keep it under 60 characters so it doesn't get cut off in Google
- **Description:** Make it compelling! This is what convinces people to click
- **Keywords:** Include your artist name, genre, and what fans might search for

### Swapping Components

Mix and match components from different variations:

```astro
---
// Use Hero from variation 1 with Bio from variation 3
import Hero1 from '../components/heroes/Hero1.astro';
import Bio3 from '../components/bios/Bio3.astro';
import Release2 from '../components/releases/Release2.astro';
---
```

### Adding Custom Sections

> ⚠️ **This section is for advanced users.** If you're just getting started, you can skip this - the existing components have everything most artists need!

Want to add something that doesn't exist yet (like a Merch section, Tour Dates, or Video Gallery)? You can create your own component.

**Here's a simple example - a Merch section:**

**Step 1:** Create a new file at `src/components/custom/Merch.astro`

**Step 2:** Add this code:

```astro
---
// This part runs on the server (between the --- lines)
// It defines what data this component needs

// "Props" means "properties" - the data you pass to the component
export interface Props {
  products: Array<{    // An array (list) of products
    name: string;      // Each product has a name (text)
    price: string;     // A price (text like "$25")
    image: string;     // An image path (like "/images/shirt.jpg")
    url: string;       // A link to buy it
  }>;
}

// This line gets the products data that was passed in
const { products } = Astro.props;
---

<!-- This part is the HTML that gets displayed -->
<section id="merch" class="section-padding bg-color-dark">
  <div class="container">
    <h2 class="text-3xl font-bold mb-8">Merch</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* This loops through each product and creates a card for it */}
      {products.map((product) => (
        <a href={product.url} class="group">
          <img src={product.image} alt={product.name} class="rounded-lg" />
          <h3 class="font-semibold mt-2">{product.name}</h3>
          <p class="text-sm opacity-70">{product.price}</p>
        </a>
      ))}
    </div>
  </div>
</section>
```

**Step 3:** Use it in your landing page:

```astro
---
// At the top of your landing page, import the component
import Merch from '../components/custom/Merch.astro';
---

<!-- Then use it in your page, passing in your products -->
<Merch
  products={[
    {
      name: "Tour T-Shirt",
      price: "$25",
      image: "/landing/images/merch/tshirt.jpg",
      url: "https://your-merch-store.com/tshirt"
    },
    {
      name: "Album Vinyl",
      price: "$30",
      image: "/landing/images/merch/vinyl.jpg",
      url: "https://your-merch-store.com/vinyl"
    }
  ]}
/>
```

**In plain English:**

1. You create a reusable "component" (a piece of your page)
2. You tell it what data it needs (in this case, a list of products)
3. You use it in your page and pass in the actual data
4. It loops through your data and creates the HTML for each item

> 💡 **Don't want to code?** You can also just copy an existing section from another landing page and modify the HTML directly - no need to create fancy components!
>
> 🤖 **Need help?** You can ask an AI assistant (like ChatGPT, Claude, or GitHub Copilot) to create custom components for you! Just describe what you want, like: _"Create an Astro component for a tour dates section with date, city, venue, and ticket link"_ - and it will generate the code for you.

---

## Components Reference

### Hero Components

| Component | Style         | Features                                     |
| --------- | ------------- | -------------------------------------------- |
| `Hero1`   | Bold/Dramatic | Video background, full-screen, animated text |
| `Hero2`   | Minimal       | Typography-focused, clean layout             |
| `Hero3`   | Split-screen  | Photo on one side, text on other             |
| `Hero4`   | Urban         | Animated gradient, stats display             |
| `Hero5`   | Album-focused | Vinyl record visual, album cover             |
| `Hero6`   | Asymmetric    | Offset layout, playful positioning           |

### Bio Components

| Component | Style     | Features                       |
| --------- | --------- | ------------------------------ |
| `Bio1`    | Timeline  | Milestone-based progression    |
| `Bio2`    | Cards     | Highlights with image          |
| `Bio3`    | Paragraph | Long-form personal story       |
| `Bio4`    | Gallery   | Multiple photos with stats     |
| `Bio5`    | Quote     | Press quotes with awards       |
| `Bio6`    | Fun Facts | Personality-driven with emojis |

### Release Components

| Component  | Style        | Features                         |
| ---------- | ------------ | -------------------------------- |
| `Release1` | Large Embed  | Spotify player + streaming links |
| `Release2` | Album Grid   | Multiple releases displayed      |
| `Release3` | Single Track | One track focus with lyrics      |
| `Release4` | Carousel     | Swipeable releases with streams  |
| `Release5` | Vinyl        | Track list with vinyl visual     |
| `Release6` | Video        | YouTube embed with credits       |

### Contact Components

| Component  | Style             | Features                                           | Difficulty            |
| ---------- | ----------------- | -------------------------------------------------- | --------------------- |
| `Contact1` | Full Form         | Name, email, message fields                        | ⭐⭐⭐ (needs Resend) |
| `Contact2` | Email Capture     | Newsletter signup only                             | ⭐⭐⭐ (needs Resend) |
| `Contact3` | CTA Buttons       | Direct links/emails                                | ⭐ Easy               |
| `Contact4` | **Mailto Button** | Opens visitor's email app - **NO setup required!** | ⭐ Easiest            |

### Social Components

| Component | Style          | Features              |
| --------- | -------------- | --------------------- |
| `Social1` | Icon Row       | Simple icon links     |
| `Social2` | Buttons        | With follower counts  |
| `Social3` | Instagram Feed | Grid of posts preview |

---

## Theming System

### How Themes Work

Each theme is defined in `tailwind.config.mjs` and applied via the `theme` prop on `LandingLayout`:

```astro
<LandingLayout theme="rock">
  <!-- Content -->
</LandingLayout>
```

The layout injects CSS custom properties based on the theme:

```css
:root {
  --color-primary: /* theme primary */;
  --color-secondary: /* theme secondary */;
  --color-dark: /* theme dark */;
  --color-light: /* theme light */;
  --color-accent: /* theme accent */;
}
```

### Using Theme Colors

In your components, use the CSS variables:

```astro
<div class="bg-color-dark text-color-light">
  <h1 class="text-color-primary">Heading</h1>
  <p class="text-color-secondary">Subheading</p>
  <button class="bg-color-accent">CTA</button>
</div>
```

### Creating a Custom Theme

1. Add to `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      'custom': {
        primary: '#your-color',
        secondary: '#your-color',
        dark: '#your-color',
        light: '#your-color',
        accent: '#your-color',
      }
    }
  }
}
```

2. Add to `LandingLayout.astro`:

```astro
const themeStyles = {
  // ... existing themes
  custom: `
    --color-primary: #your-color;
    --color-secondary: #your-color;
    --color-dark: #your-color;
    --color-light: #your-color;
    --color-accent: #your-color;
  `
};
```

---

## 📬 Contact Form Options (Choose One!)

You have **three options** for handling contact forms. Pick the one that matches your comfort level:

### Option 1: Simple Mailto (Easiest - No Setup!)

Use `Contact4.astro` - it just opens the visitor's email app (Gmail, Outlook, etc.) with your email pre-filled.

**Setup:**

1. Open `src/components/contact/Contact4.astro`
2. Change `your-email@example.com` to your real email
3. Done! ✅

**Use it in your landing page:**

```astro
---
import Contact4 from '../components/contact/Contact4.astro';
---

<Contact4 />
```

**Pros:** Zero configuration, works immediately, 100% reliable  
**Cons:** Opens their email app instead of a sleek form on your site

---

### Option 2: No-Code Alternative (Formspree)

If you want a nice contact form WITHOUT setting up Resend, use [Formspree](https://formspree.io) (free for 50 submissions/month).

**How to set it up:**

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
3. Create a simple form in your landing page:

```html
<!-- Add this anywhere in your landing page -->
<section class="py-20 bg-gray-900">
  <div class="max-w-md mx-auto px-4">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>

    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      class="space-y-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        class="w-full px-4 py-3 bg-gray-800 text-white rounded-lg"
      ></textarea>
      <button
        type="submit"
        class="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
```

4. Replace `YOUR_FORM_ID` with your actual Formspree form ID
5. Done! Messages go straight to your email ✅

**Pros:** Real contact form, no coding required, free tier available  
**Cons:** Limited submissions on free tier, third-party service

> 💡 **Other no-code alternatives:** [Netlify Forms](https://www.netlify.com/products/forms/) (if deploying on Netlify), [Basin](https://usebasin.com/), [Getform](https://getform.io/)

---

### Option 3: Full Resend Integration (Advanced)

If you want full control, newsletter signups, and custom email templates, use Resend. **This requires technical setup** - see below.

---

## Email Integration (Resend)

### Setup

1. Create account at [resend.com](https://resend.com)
2. Get API key from the dashboard
3. Add to `.env` file
4. **Uncomment the Resend code** in `src/pages/api/contact.ts` (see below)
5. **Delete the `.env.example` file** (it's just a template)

> 🔐 **Keep your API key secret!** Never share it, never commit it to Git, never post it online. If exposed, anyone can send emails using your account.

### ⚠️ IMPORTANT: Resend Free Tier Limitation

**Without a verified domain**, Resend can ONLY send emails to the email address you used to sign up for Resend.

| Scenario               | Can send FROM                                           | Can send TO                                                                                                   |
| ---------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **No domain verified** | `onboarding@resend.dev` only                            | Only YOUR signup email (e.g., if you signed up with `john@gmail.com`, emails can only go to `john@gmail.com`) |
| **Domain verified**    | Any email at your domain (e.g., `hello@yourdomain.com`) | ANY email address                                                                                             |

**Example problem:** You signed up for Resend with `john@gmail.com`, but your `.env` has `CONTACT_EMAIL=john@hotmail.com`. Emails will FAIL because `john@hotmail.com` is not your signup email.

**Solution:** Either:

1. Set `CONTACT_EMAIL` to the exact email you used to sign up for Resend, OR
2. Verify your own domain in Resend (Dashboard → Domains → Add Domain)

### Enabling the Contact Form

The contact form code is **commented out by default**. To enable it:

1. Open `src/pages/api/contact.ts`
2. Follow the numbered steps in the comments (STEP 1, STEP 2, STEP 3)
3. Uncomment the import at the top: `import { Resend } from 'resend';`
4. Uncomment the Resend initialization and email sending code
5. Make sure your `.env` file has all required variables

### Contact Form Code Example

```typescript
// src/pages/api/contact.ts
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  const { name, email, message, subject } = await request.json();

  await resend.emails.send({
    // Use 'onboarding@resend.dev' for testing, or your verified domain email
    from: import.meta.env.FROM_EMAIL || "onboarding@resend.dev",
    to: import.meta.env.CONTACT_EMAIL,
    replyTo: email, // So you can reply directly to the sender
    subject: `[Contact] ${subject || "New Inquiry"}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }));
}
```

### Newsletter Signup

```typescript
// src/pages/api/newsletter.ts
import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Add contact to Resend (no audienceId required)
    const { error: contactError } = await resend.contacts.create({
      email,
      unsubscribed: false,
    });

    if (contactError) {
      // Handle duplicate contact (not really an error)
      if (contactError.message?.includes("already exists")) {
        return new Response(
          JSON.stringify({
            success: true,
            message: "You're already subscribed!",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      throw contactError;
    }

    // Optional: Send welcome email
    // Note: Requires verified domain in Resend to send to external emails
    await resend.emails.send({
      from: import.meta.env.FROM_EMAIL,
      to: email,
      subject: "Welcome! 🎵",
      html: `<p>Thanks for subscribing!</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Successfully subscribed!" }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error: any) {
    console.error("Newsletter signup error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to subscribe" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
```

> **Note:** To send welcome emails to subscribers, you must verify your domain in Resend. The default `onboarding@resend.dev` sender can only send to your own account email.

---

## SEO Optimization

### Built-in Features

Each landing page includes:

- ✅ Meta title and description
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Canonical URL
- ✅ JSON-LD structured data
- ✅ Semantic HTML structure

### Customizing SEO

In your landing page:

```astro
<LandingLayout
  title="Artist Name | New Album Out Now"
  description="Stream the new album and get exclusive tour dates..."
  keywords={["artist name", "new album", "tour 2024"]}
  ogImage="/images/social-share.jpg"
>
```

### Performance

- Static HTML generation (no JS needed for content)
- Optimized images with lazy loading
- Minimal CSS (Tailwind purges unused styles)
- Google Lighthouse score: 95-100

---

## Deployment

### Choosing Your Landing Page

Before deploying, you need to choose which landing page variation to use as your main site. You have 6 options:

| Landing Page      | Style                | Best For                                       |
| ----------------- | -------------------- | ---------------------------------------------- |
| `landing-1.astro` | Bold / Rock          | Rock bands, metal acts, high-energy performers |
| `landing-2.astro` | Minimal / Electronic | DJs, electronic producers, ambient artists     |
| `landing-3.astro` | Warm / Acoustic      | Singer-songwriters, folk artists               |
| `landing-4.astro` | Urban / Hip-hop      | Hip-hop artists, R&B singers, rappers          |
| `landing-5.astro` | Classical / Elegant  | Classical musicians, jazz artists              |
| `landing-6.astro` | Indie / Creative     | Indie bands, bedroom pop artists               |

#### Making Your Chosen Template the Homepage

Once you've customized your chosen landing page, make it your homepage:

**Option 1: Rename the file**

```bash
# Example: Make landing-3 (Acoustic) your homepage
mv src/pages/index.astro src/pages/index-showcase.astro
mv src/pages/landing-3.astro src/pages/index.astro
```

test locally (run npm run dev in you command prompt) to see if changes have been applied)

**Option 2: Copy the content**

1. Open your chosen `landing-X.astro` file
2. Copy all the content
3. Replace everything in `src/pages/index.astro`

**Option 3: Redirect (keep showcase)**
Keep the showcase index and set up a redirect to your chosen page in your hosting platform.

---

### 🚀 Deployment Platforms

> ⚠️ **Choose ONE platform:** The sections below cover different hosting options. Pick the platform that works best for you. We recommend **Vercel** for beginners.

| Platform      | Difficulty | Free Tier | Best For                   |
| ------------- | ---------- | --------- | -------------------------- |
| Vercel        | Easy       | Yes       | Beginners, fastest setup   |
| Netlify       | Easy       | Yes       | Alternative to Vercel      |
| Cloudflare    | Medium     | Yes       | Advanced users, global CDN |
| Static Export | Easy       | Varies    | Any static host            |

---

### Step 1: Push Your Code to GitHub (Required First)

Before deploying to any platform, you need your code on GitHub.

#### If you don't have Git initialized yet:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Music Landing Page"
```

#### Create a GitHub Repository:

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Name your repository (e.g., `my-artist-website`)
4. Keep it **Public** or **Private** (both work with Vercel/Netlify)
5. **Don't** initialize with README (you already have files)
6. Click **"Create repository"**

#### Connect and Push:

```bash
# Add GitHub as remote (replace with YOUR repository URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push your code
git branch -M main
git push -u origin main
```

> 💡 **Tip:** After this initial setup, whenever you make changes, just run:
>
> ```bash
> git add .
> git commit -m "Your message describing changes"
> git push
> ```

---

### Step 2: Deploy to Vercel (Recommended)

Vercel offers the easiest deployment for Astro sites with free hosting.

#### Prerequisites

- ✅ GitHub account with your code pushed (completed in Step 1)
- Vercel account (free at [vercel.com](https://vercel.com))

#### 2.1: Install Vercel Adapter

```bash
npm install @astrojs/vercel
```

#### 2.2: Update Astro Config

> ⚠️ **Important:** You must complete these steps before deploying. If you deploy without these changes, the build will fail.

Edit `astro.config.mjs`:

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // Add this

export default defineConfig({
  integrations: [tailwind()],
  output: "server", // Change to 'server'
  adapter: vercel(), // Add this line
  build: {
    assets: "assets",
  },
});
```

#### 2.3: Commit and Push Changes

```bash
git add .
git commit -m "Add Vercel adapter for deployment"
git push
```

#### 2.4: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. **Add Environment Variables** (required for contact form to work):
   - Click "Environment Variables"
   - Add each variable:

   | Name             | Value                          | Example                  |
   | ---------------- | ------------------------------ | ------------------------ |
   | `RESEND_API_KEY` | Your Resend API key            | `re_abc123...`           |
   | `FROM_EMAIL`     | Sender email address           | `hello@yourdomain.com`   |
   | `CONTACT_EMAIL`  | Your email to receive messages | `booking@yourdomain.com` |

   > ⚠️ **Important:** These must match your `.env` file exactly. Without these, the contact form and newsletter will NOT work on the deployed site.

6. Click **"Deploy"**

#### 2.5: Wait for Deployment

Vercel will:

1. Clone your repository
2. Install dependencies
3. Build your site
4. Deploy to their CDN

This takes 1-3 minutes. You'll get a URL like `your-project.vercel.app`.

> 💡 **Troubleshooting tip:** If the deployment fails, go to your project dashboard on Vercel and click the "Deployments" tab. Click on the failed deployment to view the build logs.

#### 2.6: Set Up Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your domain
4. Update DNS records at your domain registrar:
   - **Type:** CNAME
   - **Name:** `@` or `www`
   - **Value:** `cname.vercel-dns.com`

---

### Alternative: Deploy to Netlify

> ℹ️ **Note:** Make sure you've completed [Step 1: Push to GitHub](#step-1-push-your-code-to-github-required-first) before continuing.

#### Install Netlify Adapter

```bash
npm install @astrojs/netlify
```

#### Update Astro Config

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: netlify(),
  build: {
    assets: "assets",
  },
});
```

#### Step 3: Deploy

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub and select your repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Add environment variables in **Site settings** → **Environment**
7. Click **"Deploy site"**

---

### Deploying to Cloudflare Pages

#### Step 1: Install Cloudflare Adapter

```bash
npm install @astrojs/cloudflare
```

#### Step 2: Update Astro Config

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  build: {
    assets: "assets",
  },
});
```

#### Step 3: Deploy via Cloudflare Dashboard

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variables
5. Deploy

---

### Static Export (Any Host)

If you don't need the contact form/newsletter (server-side features), you can deploy as a static site:

#### Step 1: Update Config for Static Output

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "static", // Static output, no server needed
  build: {
    assets: "assets",
  },
});
```

#### Step 2: Build and Upload

```bash
npm run build
# Upload the `dist` folder to any static host
```

Works with: GitHub Pages, Amazon S3, Firebase Hosting, Surge, etc.

> ⚠️ **Note:** With static output, the contact form and newsletter signup will NOT work. You'll need to use a third-party form service like Formspree or Netlify Forms.

---

## Installation Guides

These guides will help you install the required tools if you don't have them yet.

---

### Installing Node.js

Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. It's required to build and run this project.

#### On Windows

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (Long Term Support - recommended for most users)
3. Run the downloaded installer (.msi file)
4. Click "Next" through the installer (default options are fine)
5. **Important:** Check the box that says "Automatically install necessary tools" if prompted
6. Click "Install" and wait for completion
7. Restart your computer (recommended)

**Verify installation:**
Open a new terminal/command prompt and type:

```bash
node --version
```

You should see something like `v20.x.x` or higher.

#### On Mac

**Option 1: Download from website**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** for macOS
3. Run the .pkg installer
4. Follow the installation prompts

**Option 2: Using Homebrew (if you have it)**

```bash
brew install node
```

**Verify installation:**

```bash
node --version
```

#### On Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt update

# Install Node.js
sudo apt install nodejs npm

# Or for the latest LTS version, use NodeSource:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verify installation:**

```bash
node --version
npm --version
```

---

### What are npm and Yarn?

**npm** (Node Package Manager) and **Yarn** are "package managers" for JavaScript.

Think of them like an app store for code libraries. When you run `npm install`, it reads the `package.json` file and automatically downloads all the code libraries (called "packages" or "dependencies") that this project needs to work.

#### npm

- **Comes with Node.js** - If you installed Node.js, you already have npm!
- Most commonly used package manager
- Commands start with `npm`

**Common npm commands:**

```bash
npm install          # Install all project dependencies
npm run dev          # Run development server
npm run build        # Build for production
npm install [package]  # Add a new package to the project
```

#### Yarn

- Alternative to npm, created by Facebook
- Needs to be installed separately
- Some developers prefer it for speed and features

**To install Yarn (optional):**

```bash
npm install -g yarn
```

**Common Yarn commands:**

```bash
yarn                 # Install all project dependencies (same as npm install)
yarn dev             # Run development server
yarn build           # Build for production
yarn add [package]   # Add a new package to the project
```

#### Which should I use?

**For this project, just use npm** - it comes with Node.js and all the commands in this documentation use npm. You don't need to install Yarn unless you specifically want to.

---

### Setting Up a Resend Account

Resend is an email service that allows your website to send emails (like contact form submissions and newsletter signups). **This is optional** - you only need it if you want the contact form and newsletter to work.

#### Step 1: Create an Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Start for free" or "Sign up"
3. Create an account with your email or GitHub
4. **Remember this email!** It's important for Step 3.

#### Step 2: Get Your API Key

1. After signing in, go to the Dashboard
2. Click on "API Keys" in the left sidebar
3. Click "Create API Key"
4. Give it a name like "Music Landing Page"
5. Copy the API key (it starts with `re_`)
6. **Important:** Save this key somewhere safe - you won't be able to see it again!

#### Step 3: Understand the Free Tier Limitation

> ⚠️ **CRITICAL: Read this before testing!**

**Without a verified domain**, Resend can ONLY deliver emails to the email address you used to sign up.

| Your Resend signup email | `CONTACT_EMAIL` in .env | Will it work?             |
| ------------------------ | ----------------------- | ------------------------- |
| `john@gmail.com`         | `john@gmail.com`        | ✅ Yes                    |
| `john@gmail.com`         | `john@hotmail.com`      | ❌ No - different email!  |
| `john@gmail.com`         | `jane@gmail.com`        | ❌ No - different person! |

**This means:** If you signed up for Resend with `myname@gmail.com`, your `CONTACT_EMAIL` in the `.env` file MUST also be `myname@gmail.com` until you verify your own domain.

#### Step 4: Verify Your Domain (Optional but Recommended)

Verifying your domain removes the free tier limitation and lets you:

- Send emails TO any email address
- Send emails FROM any email at your domain (e.g., `hello@yourdomain.com`, `booking@yourdomain.com`)

**To verify:**

1. Go to "Domains" in the left sidebar
2. Click "Add Domain"
3. Enter your domain name (e.g., `yourdomain.com`)
4. Add the DNS records shown to your domain provider (GoDaddy, Namecheap, Cloudflare, etc.)
5. Wait for verification (can take up to 48 hours, but usually faster)

#### Step 5: Add to Your Project

Create a `.env` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=hello@yourdomain.com
CONTACT_EMAIL=your@email.com
```

**Replace these values:**

| Variable         | What to put                                                                                | Example                                           |
| ---------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `RESEND_API_KEY` | Your API key from Step 2                                                                   | `re_abc123xyz...`                                 |
| `FROM_EMAIL`     | If domain verified: any email at your domain. If NOT verified: use `onboarding@resend.dev` | `hello@yourdomain.com` or `onboarding@resend.dev` |
| `CONTACT_EMAIL`  | If domain verified: any email. If NOT verified: **must be your Resend signup email**       | `booking@yourdomain.com` or your signup email     |

#### Step 6: Enable the Code

The contact form code is commented out by default. **You must uncomment it!**

1. Open `src/pages/api/contact.ts`
2. Read the instructions in the file
3. Uncomment the import: `import { Resend } from 'resend';`
4. Uncomment STEP 1, STEP 2, and optionally STEP 3
5. Save the file

> ⚠️ **IMPORTANT SECURITY STEPS:**
>
> 1. **Delete `.env.example`** after creating your real `.env` file
> 2. **Never push `.env` to GitHub** - it's already in `.gitignore`, but double-check!
> 3. **Never share your API key** with anyone or post it online
> 4. If you accidentally expose your key, go to Resend → API Keys → Delete it → Create a new one

#### Resend Free Tier Limits

- 100 emails/day
- 3,000 emails/month
- Perfect for getting started!

---

## Troubleshooting

### 🔍 Before Asking for Help, Check These 5 Things

Most issues can be solved by checking this quick list:

- [ ] **Did you restart the dev server after changing `.env`?** → Press `Ctrl+C` to stop, then run `npm run dev` again
- [ ] **Are you in the correct folder?** → Your terminal should show `MusicLandingPages` in the path
- [ ] **Did you push to GitHub after adding the adapter?** → Run `git add . && git commit -m "Add adapter" && git push`
- [ ] **Is your `CONTACT_EMAIL` the same as your Resend signup email?** → Required for free tier!
- [ ] **Did you set `output: 'server'` in `astro.config.mjs`?** → Required for contact forms to work

> ✅ If you've checked all 5 and still have issues, continue to the solutions below.

---

### Common Issues and Solutions

#### "npm: command not found"

**Problem:** Node.js is not installed or not in PATH.

**Solution:**

1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Install the LTS version
3. Restart your terminal
4. Verify: `node --version`

---

#### "npm install" fails with errors

**Problem:** Various dependency issues.

**Solution:**

```bash
# Clear npm cache and reinstall
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
```

**Windows (PowerShell):**

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm cache clean --force
npm install
```

---

#### "Port 4321 already in use"

**Problem:** Another process is using the port.

**Solution 1:** Kill the process

```bash
# macOS/Linux
lsof -ti:4321 | xargs kill -9

# Windows (PowerShell)
Stop-Process -Id (Get-NetTCPConnection -LocalPort 4321).OwningProcess -Force
```

**Solution 2:** Use a different port

```bash
npm run dev -- --port 3000
```

---

#### Contact form not sending emails

**Checklist:**

- ✅ `.env` file exists in project root
- ✅ `RESEND_API_KEY` is correct (starts with `re_`)
- ✅ `CONTACT_EMAIL` is your real email
- ✅ Server is restarted after changing `.env`
- ✅ Check spam/junk folder

**Debug:** Check browser console (F12) for error messages.

---

#### Styles not updating

**Problem:** Browser caching old CSS.

**Solutions:**

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server:

```bash
# Stop server (Ctrl+C)
npm run dev
```

---

#### Images not showing

**Checklist:**

- ✅ Image is in `public/` folder
- ✅ Path starts with `/` (e.g., `/landing/images/photo.jpg`)
- ✅ Filename matches exactly (case-sensitive!)
- ✅ File extension is correct

**Example:**

```html
<!-- Correct -->
<img src="/landing/images/artist-photo.jpg" />

<!-- Wrong -->
<img src="landing/images/artist-photo.jpg" />
<img src="/landing/images/Artist-Photo.jpg" />
```

---

#### Build fails on Vercel/Netlify

**Common causes:**

1. Missing environment variables
2. Wrong adapter installed
3. Case-sensitive filename issues

**Debug:** Check the build logs for specific error messages.

#### "Unterminated string literal" error

**Problem:** Multi-line strings in JSX attributes need template literals.

**Wrong:**

```astro
<Bio3
  bio="This is a long bio
  that spans multiple lines"
/>
```

**Correct:**

```astro
<Bio3
  bio={`This is a long bio
  that spans multiple lines`}
/>
```

---

## ❓ Frequently Asked Questions

### General

**Q: Can I use this template for client projects?**

Yes! You can use this template for unlimited personal and client projects.

**Q: Can I resell this template?**

No. You cannot resell or redistribute the template itself. You can only use it to build websites.

**Q: Which landing page should I choose?**

Choose based on your music genre:

- **Rock/Metal:** Landing 1 (Bold)
- **Electronic/DJ:** Landing 2 (Minimal)
- **Folk/Acoustic:** Landing 3 (Warm)
- **Hip-hop/R&B:** Landing 4 (Urban)
- **Classical/Jazz:** Landing 5 (Elegant)
- **Indie/Creative:** Landing 6 (Indie)

---

### Technical

**Q: Can I use this without the contact form?**

Yes! Simply remove or comment out the Contact component in your landing page.

**Q: Can I mix components from different landing pages?**

Absolutely! Import any component from any variation:

```astro
---
import Hero1 from '../components/heroes/Hero1.astro';
import Bio3 from '../components/bios/Bio3.astro';
import Release2 from '../components/releases/Release2.astro';
---
```

**Q: Can I use a different email service instead of Resend?**

Yes, but you'll need to modify `src/pages/api/contact.ts` and `newsletter.ts` to use your preferred service's API.

**Q: How do I add Google Analytics?**

Add the tracking script to `src/layouts/LandingLayout.astro` in the `<head>` section.

**Q: Can I deploy as a static site?**

Yes! Change `output: 'server'` to `output: 'static'` in `astro.config.mjs`. Note: The contact form won't work without server-side code.

---

### Customization

**Q: How do I change my artist information?**

Edit the `config` object at the top of your landing page:

```astro
const config = {
  artistName: "YOUR NAME",
  tagline: "Your tagline here",
  genre: "Your Genre",
  seo: {
    title: "Your Name | Official Site",
    description: "Your SEO description",
    keywords: ["keyword1", "keyword2"]
  }
};
```

**Q: How do I change colors?**

Each landing page uses a theme. You can customize colors in `tailwind.config.mjs` or use a different theme by changing the `theme` prop on `LandingLayout`.

**Q: How do I add a music player?**

Embed players from Spotify, SoundCloud, or Bandcamp using their embed codes. Add them to any component.

**Q: How do I add more social links?**

Edit the `socialLinks` array in the Social component:

```astro
<Social1
  socialLinks={[
    { platform: "spotify", url: "https://open.spotify.com/artist/..." },
    { platform: "instagram", url: "https://instagram.com/..." },
    { platform: "tiktok", url: "https://tiktok.com/@..." },
  ]}
/>
```

---

## 📄 License & Copyright

© 2026 Chromatic Webdesign. All rights reserved.

### ✅ You CAN:

- Use this template for your personal website
- Use this template for client projects (unlimited)
- Modify and customize all code
- Use for commercial projects
- Remove visible branding (footer credits)

### ❌ You CANNOT:

- Resell or redistribute this template
- Claim original authorship
- Remove copyright notices from source code
- Share the template files with others
- Upload to template marketplaces
