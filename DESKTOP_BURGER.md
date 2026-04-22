# Desktop Hamburger Menu — Implementation Plan

## Phase 1: Remove Horizontal Link List
- [x] Locate the horizontal navigation link list in the navbar component.
- [x] Remove the link list entirely or hide it at all breakpoints (it is no longer needed on any screen size).

## Phase 2: Update Hamburger Menu Visibility & Layout
- [x] Locate the hamburger icon in the navbar component.
- [x] Remove the breakpoint class that hides the hamburger icon on desktop (make it visible at all screen sizes).
- [x] Ensure no other changes are made to the hamburger design or its trigger behaviour.
- [x] Confirm the right side of the navbar reading left to right is: Language Switcher → CTA Button → Hamburger.

## Phase 3: Update Overlay Navigation Links
- [x] Locate the overlay menu component.
- [x] Add the following missing sections to the overlay in the specified order:
  1. How It Works
  2. Facility
  3. Pricing
  4. Testimonials
  5. Tournaments
  6. FAQ
  7. Contact
- [x] Ensure existing overlay features (width, animation, mobile behaviour, hamburger icon design, CTA button, language switcher, tournament chip, and section components) remain completely unchanged.
