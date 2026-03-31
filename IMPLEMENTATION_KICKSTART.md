# The Kitchen Club - Implementation Plan

## Project Overview
Premium, high-conversion indoor pickleball booking prototype. Single-page, front-end only.
Design system: "Electric Country Club" - Deep Forest Green + Optic Yellow + Glassmorphism.

## Design Tokens
- **Primary Background:** Deep Forest Green `#0B241E`
- **Primary CTA/Highlights:** Optic Yellow `#D4FF00`
- **Accents:** Crisp White `#FFFFFF`, Muted Slate `#94A3B8`
- **Glass:** `backdrop-blur-3xl bg-white/10 border-white/15 rounded-2xl`
- **Typography:** Inter (body), tight-kerning bold sans-serif (display)

## Phase 1: Foundation - Design System & Layout Shell
- Override Tailwind CSS custom properties in `globals.css`
- Configure custom colors in `tailwind.config.ts`
- Set up page composition structure in `app/page.tsx`

## Phase 2: Sticky Navigation Bar
- Fixed nav with logo, anchor links, CTA button
- Blur background on scroll
- Mobile hamburger menu

## Phase 3: Hero Section
- Split layout: headline left, court visual right
- "The Kitchen Is Calling." display heading
- Entrance animations

## Phase 4: Floating Booking Bar
- Glassmorphic floating bar with Calendar + Time Tabs
- Hidden by default, appears after date selection
- "Check Availability" scrolls to court grid and highlights courts

## Phase 5: Interactive Court Selection Grid
- 12 courts in responsive grid (2x6 desktop)
- Three states: Available, Occupied, Selected
- Click opens Sheet/Dialog with court details
- Pulse animation when scrolled to via booking bar

## Phase 6: How It Works Section
- 3-step glassmorphic cards
- Pick Your Time -> Choose Your Court -> Show Up & Play

## Phase 7: FAQ / Objection Handling Section
- Shadcn Accordion with strategic Q&As
- Glassmorphic item styling

## Phase 8: Bento-Style Footer
- 4-column grid: Mission, Quick Links, Location/Live Status, Newsletter
- Responsive collapse to 2x2 and single column

## Phase 9: Mobile Bottom CTA
- Fixed bottom bar on mobile only
- "Book Your Court" full-width Optic Yellow button
- Scrolls to booking area on tap

## Phase 10: Polish & Build Verification
- Responsive audit across breakpoints
- Hover/focus states
- Sticky element conflict check
- Final build verification

## File Structure
```
app/
  globals.css          - Design tokens
  layout.tsx           - Root layout + metadata
  page.tsx             - Main composition
components/
  sticky-nav.tsx
  hero-section.tsx
  floating-booking-bar.tsx
  court-grid.tsx
  how-it-works.tsx
  faq-section.tsx
  footer.tsx
  mobile-bottom-cta.tsx
  ui/                  - Shadcn components (pre-installed)
```

## Technical Notes
- Next.js 13.5.1, Tailwind CSS 3.3.3, Shadcn/UI, Lucide React
- Front-end only prototype - no database or backend
- All state managed client-side via React useState
- State lifted to page level for booking bar <-> court grid coordination
