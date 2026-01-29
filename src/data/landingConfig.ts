/**
 * Landing Page Configuration
 * Central configuration for all 6 landing page variations
 */

export interface LandingConfig {
  artistName: string;
  tagline: string;
  genre: string;
  ctaText: string;
  ctaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  bio: {
    short: string;
    full: string;
    highlights?: string[];
  };
  featuredRelease: {
    title: string;
    type: 'album' | 'single' | 'ep';
    coverImage: string;
    spotifyEmbed?: string;
    youtubeEmbed?: string;
    appleMusicUrl?: string;
    spotifyUrl?: string;
    youtubeMusicUrl?: string;
    tidalUrl?: string;
    deezerUrl?: string;
  };
  socialLinks: {
    spotify?: string;
    appleMusic?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    facebook?: string;
    soundcloud?: string;
    bandcamp?: string;
  };
  stats?: {
    monthlyListeners?: string;
    followers?: string;
    streams?: string;
    awards?: string;
  };
  pressQuotes?: {
    quote: string;
    source: string;
  }[];
  contact: {
    email: string;
    bookingEmail?: string;
    pressEmail?: string;
    managementEmail?: string;
  };
  newsletter: {
    enabled: boolean;
    heading?: string;
    subheading?: string;
    incentive?: string;
  };
  seo: {
    title: string;
    description: string;
    image: string;
    keywords: string[];
  };
}

// Default configuration - customize for each landing page
export const defaultConfig: LandingConfig = {
  artistName: "Artist Name",
  tagline: "Your Music, Your Story",
  genre: "Genre",
  ctaText: "Listen Now",
  ctaUrl: "#featured-release",
  secondaryCtaText: "Book Now",
  secondaryCtaUrl: "#contact",
  bio: {
    short: "A brief introduction to the artist that captures attention immediately.",
    full: "The complete story of the artist, their journey, influences, and what drives their music. This section should be compelling and authentic.",
    highlights: [
      "Award or achievement",
      "Notable collaboration",
      "Milestone reached"
    ]
  },
  featuredRelease: {
    title: "Latest Album",
    type: "album",
    coverImage: "/landing/images/album-cover.jpg",
    spotifyEmbed: "https://open.spotify.com/embed/album/ALBUM_ID",
    spotifyUrl: "https://open.spotify.com/album/ALBUM_ID",
    appleMusicUrl: "https://music.apple.com/album/ALBUM_ID"
  },
  socialLinks: {
    spotify: "https://open.spotify.com/artist/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    twitter: "https://twitter.com/",
    tiktok: "https://tiktok.com/@"
  },
  stats: {
    monthlyListeners: "1M+",
    followers: "500K+",
    streams: "100M+"
  },
  pressQuotes: [
    {
      quote: "An extraordinary talent that defines a generation.",
      source: "Rolling Stone"
    }
  ],
  contact: {
    email: "contact@artist.com",
    bookingEmail: "booking@artist.com"
  },
  newsletter: {
    enabled: true,
    heading: "Stay in the Loop",
    subheading: "Get exclusive updates, early access to tickets, and special offers.",
    incentive: "Free unreleased track when you subscribe!"
  },
  seo: {
    title: "Artist Name | Official Website",
    description: "Official landing page for Artist Name. Listen to the latest music, get tour dates, and connect.",
    image: "/landing/images/og-image.jpg",
    keywords: ["artist name", "music", "genre", "new album"]
  }
};

// Theme configurations for each landing page variation
export const themes = {
  theme1: {
    name: "Bold/Rock",
    description: "Dramatic, high-energy design for rock and metal artists",
    colors: "rock",
    font: "display"
  },
  theme2: {
    name: "Minimal/Electronic",
    description: "Clean, typography-focused design for electronic and DJ artists",
    colors: "minimal",
    font: "mono"
  },
  theme3: {
    name: "Warm/Acoustic",
    description: "Organic, warm design for singer-songwriters and acoustic artists",
    colors: "acoustic",
    font: "sans"
  },
  theme4: {
    name: "Urban/Hip-hop",
    description: "Dynamic, vibrant design for hip-hop and R&B artists",
    colors: "urban",
    font: "sans"
  },
  theme5: {
    name: "Classical/Elegant",
    description: "Sophisticated, refined design for classical and jazz musicians",
    colors: "classical",
    font: "display"
  },
  theme6: {
    name: "Indie/Creative",
    description: "Artistic, unconventional design for indie artists",
    colors: "indie",
    font: "sans"
  }
};

// Conversion optimization tips embedded in config
export const conversionTips = {
  hero: [
    "Single, clear CTA above the fold",
    "Strong value proposition in headline",
    "Visual hierarchy guides to action",
    "Mobile-optimized touch targets (min 44px)"
  ],
  bio: [
    "Lead with most compelling fact",
    "Use social proof (numbers, quotes)",
    "Keep scannable with short paragraphs",
    "Include credibility indicators"
  ],
  release: [
    "Embed player for immediate engagement",
    "Multiple streaming platform links",
    "High-quality artwork",
    "Clear release info (date, tracks)"
  ],
  contact: [
    "Minimize form fields",
    "Offer incentive for email signup",
    "Clear privacy statement",
    "Instant confirmation feedback"
  ]
};
