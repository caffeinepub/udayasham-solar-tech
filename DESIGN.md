# Design Brief

**Tone**: Modern, clean, premium renewable energy brand. Trustworthy, energetic, professional without flashiness.

**Differentiation**: Warm saffron/orange solar vibes paired with deep navy stability. India-first aesthetic with Marathi localization. Card-based composition with crisp borders, subtle shadows. Premium geometric sans-serif display font (Satoshi) paired with refined body font (DM Sans).

## Color Palette

| Token | OKLCH | Usage |
|-------|-------|-------|
| **Primary** | `0.28 0.08 260` | Deep navy—trust, stability, energy sector |
| **Accent** | `0.68 0.22 48` | Warm saffron—solar energy, warmth, vibrancy, primary CTA |
| **Secondary** | `0.72 0.15 210` | Sky blue—clean energy, clarity, secondary actions |
| **Success** | `0.65 0.19 140` | Green—positive outcomes, growth |
| **Warning** | `0.68 0.20 45` | Warm amber—caution, attention |
| **Destructive** | `0.55 0.22 25` | Warm red—error, critical action |
| **Muted** | `0.92 0.01 210` | Warm off-white—disabled, secondary text |
| **Background** | `1.0 0 0` | Pure white—clarity, openness |
| **Foreground** | `0.15 0 0` | Near-black—high contrast text |
| **Border** | `0.88 0.02 210` | Warm grey—card/section boundaries |

## Typography

| Layer | Font | Usage | Weight |
|-------|------|-------|--------|
| **Display** | Satoshi | Headings, hero titles, brand moments | 600–700 |
| **Body** | DM Sans | Body copy, form labels, navigation | 400–600 |
| **Mono** | Space Grotesk | Code, technical labels, structured data | 400 |

## Structural Zones

| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| **Header** | Primary (navy) | None | Navigation, logo, primary CTA |
| **Hero** | Gradient overlay (primary → transparent) | None | High visual impact, service intro |
| **Content Section** | Background (white) | None | Main content area |
| **Alternating Row** | Muted/10 (warm off-white) | None | Visual breathing room, rhythm |
| **Card** | Background (white) | Border (warm grey) | Elevated content, products, services |
| **Footer** | Primary (navy) | Border-t | Contact info, company branding |
| **Admin Dashboard** | Background (white) | None | Minimal styling, info density |

## Component Patterns

- **Buttons**: Primary (accent bg, navy text), Secondary (navy border, navy text), Tertiary (no border, grey text)
- **Cards**: White background, warm grey border, subtle shadow (`shadow-card` utility)
- **Inputs**: Light off-white border, navy focus ring (accent stroke)
- **Badges**: Semantic color (success/warning/destructive), navy text on light backgrounds
- **Headers**: Navy background, white text, accent underline for active states

## Motion

- **Transition default**: `transition-smooth` — 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- **Focus states**: Accent ring (0.5rem blur, saffron glow) on buttons, inputs, navigation
- **Hover states**: Accent text color or +5% lightness on card backgrounds

## Constraints

- No arbitrary color values; all colors via CSS variables
- No default Tailwind shadows; use `shadow-card` or `shadow-elevated` utilities
- Light mode optimized; dark mode uses inverted navy backgrounds with lighter accent
- Mobile-first responsive design (`sm:`, `md:`, `lg:` breakpoints)
- No decorative gradients or glassmorphism; gradients reserved for CTA buttons and accent text only

## Signature Detail

Gradient accent text for hero headlines (`text-gradient-accent` utility) — saffron to sky blue — creates a memorable solar/energy brand moment without overstepping. Used sparingly on landing page hero and key product callouts.
