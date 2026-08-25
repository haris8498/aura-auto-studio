# AURA AUTO STUDIO — Design Direction

## Three stylistic approaches

### Theme Name: Obsidian Atelier
**Very Brief Intro:** A cinematic black-on-black automotive atelier with warm metal accents, editorial typography, and gallery-like pacing. It frames detailing as a craft discipline rather than a commodity service.

**Probability:** 0.07

### Theme Name: Roadside Modernism
**Very Brief Intro:** A restrained, daylight-forward system inspired by modernist garages: concrete, off-white, graphite, and safety-orange micro-accents. It feels technical, honest, and highly considered.

**Probability:** 0.03

### Theme Name: Midnight Velocity
**Very Brief Intro:** A nocturnal motorsport direction with deep charcoal, restrained amber highlights, sharp diagonals, and kinetic transitions. It adds energy while keeping the brand premium rather than flashy.

**Probability:** 0.09

## Chosen approach: Obsidian Atelier

### Design Movement
Contemporary luxury editorial design crossed with a high-end automotive atelier: art-book composition, museum-grade negative space, and tactile material references translated into a digital interface.

### Core Principles
1. **Cinematic restraint:** Let large imagery, controlled contrast, and generous breathing room create desire without visual noise.
2. **Precision over decoration:** Thin rules, aligned metadata, and measured spacing should feel engineered, not ornamental.
3. **Material depth:** Use matte black, smoked glass, bronze-gold light, and fine grain to imply real surfaces and craftsmanship.
4. **Asymmetric editorial rhythm:** Favor offset columns, split compositions, and staggered content over repetitive centered blocks.

### Color Philosophy
The palette begins in near-black graphite so the vehicle and its finish become the hero. Warm brass-gold is reserved for actions, rules, data, and light—used sparingly so it reads as a premium material instead of a generic accent. Bone-white and ash-gray keep long-form content legible without flattening the mood.

### Layout Paradigm
A scroll-led atelier journey: an immersive hero, then modular editorial spreads that alternate between full-bleed imagery, offset text columns, and narrow technical rails. The page should feel like moving through a private studio rather than scanning a template.

### Signature Elements
- Fine brass hairlines that appear as section markers, card accents, and timeline connectors.
- “AURA / 01” style mono metadata labels that make the interface feel like a calibrated studio instrument.
- Soft bronze light leaks and a very subtle grain layer over black surfaces.

### Interaction Philosophy
Interactions should feel deliberate and physical. Hovering reveals more surface detail through a slow image push-in, brass line draw, or measured elevation—not a flashy bounce. Buttons should feel like machined controls: crisp press feedback, clear focus rings, and an immediate sense of response.

### Animation
Use reveal-on-scroll with 30–60ms stagger between nearby elements, 180–260ms hover transitions, and 600–900ms cinematic image movement only for hero or feature imagery. Favor opacity and transform only. Keep parallax subtle and disable non-essential motion under `prefers-reduced-motion`.

### Typography System
Use **Bebas Neue** for oversized display headlines and **DM Sans** for body copy, with **IBM Plex Mono** for micro-labels and section metadata. Headlines are uppercase, tightly tracked, and broken into intentional lines; body copy stays at 15–18px with generous line-height; metadata remains 10–11px with increased tracking.

### Brand Essence
Premium automotive detailing and protection for drivers in Lahore who treat their vehicle as a standard to uphold—not an object to maintain. **Precise. Cinematic. Assured.**

### Brand Voice
Headlines are brief, declarative, and tactile. CTAs are direct without sounding transactional. Microcopy is confident, specific, and never over-promises.

Example lines:
- “Your vehicle leaves cleaner, sharper, and better protected.”
- “Bring the finish back to its first impression.”

### Wordmark & Logo
Build a compact monogram from two mirrored, beveled “A” forms that create an abstract aperture or aura ring. Pair it with a custom-spaced uppercase wordmark so the symbol can stand alone in the header and favicon without relying on default typography.

### Signature Brand Color
**Aurum Brass — `#C7A56A`**. A muted, slightly aged metallic gold that feels like warm studio light on polished trim.

## Style Decisions
- All primary UI surfaces stay in an obsidian-to-graphite range; no purple or electric-blue gradients.
- Gold is an intentional signal for action, emphasis, and craft—not a full-surface fill.
- Cards are sharp or minimally clipped; avoid repeated pill shapes and heavy rounding.
- Hero and feature photography must have dark tonal range so light copy remains readable with a controlled overlay.
- Every page-level file should include a short comment reminding future edits of the Obsidian Atelier direction.
