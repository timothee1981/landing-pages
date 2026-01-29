# Image Placeholders

This directory contains images for the landing pages.

## Required Images

### Hero Images

- `hero-rock.jpg` - 1920x1080 - Dark dramatic background
- `artist-minimal.jpg` - 800x1000 - Clean portrait shot
- `artist-acoustic.jpg` - 800x1000 - Warm, natural lighting
- `artist-indie.jpg` - 800x1000 - Creative, artistic shot

### Album Covers (600x600)

- `album-1.jpg` through `album-4.jpg`
- `album-acoustic.jpg`
- `album-classical.jpg`
- `album-urban-1.jpg` through `album-urban-4.jpg`

### Artist Photos

- `band-photo.jpg` - 1200x800 - Group shot
- `emma-portrait.jpg` - 800x1000
- `pianist-portrait.jpg` - 800x1000
- `lunar-moths.jpg` - 800x1000
- `kyro-1.jpg` through `kyro-4.jpg` - 600x600

### Social/Instagram Posts (400x400)

- `post-1.jpg` through `post-6.jpg`

### Preview Images (for index page)

- `preview-rock.jpg` - 800x450
- `preview-minimal.jpg` - 800x450
- `preview-acoustic.jpg` - 800x450
- `preview-urban.jpg` - 800x450
- `preview-classical.jpg` - 800x450
- `preview-indie.jpg` - 800x450

## Image Sources

Free stock images for development:

- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- Search terms: "musician", "concert", "album cover", "artist portrait"

## Optimization

Before production, optimize images:

```bash
# Using sharp-cli
npx sharp-cli *.jpg --output optimized/ --format webp --quality 80
```
