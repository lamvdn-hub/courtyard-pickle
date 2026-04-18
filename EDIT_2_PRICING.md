# Pricing Section — Popover Implementation Plan
### Stack: Next.js · React · TypeScript · Tailwind CSS

This document breaks down the Pricing Section restructure and Contact Popover implementation into clear, actionable phases.

---

## Phase 1: Translation & Localization
Add the necessary keys to support the new UI components and labels.

- [x] **Update `lib/translations.ts` (or `en.ts`/`vi.ts`)**
    - [x] Add `pricing.fixed.contactCta`: "Contact Us to Arrange"
    - [x] Add `pricing.social.title`: "Social Play"
    - [x] Add `pricing.social.calloutBody`: "Occasional open sessions, 50k VND per ticket. Hosted at lower frequency."
    - [x] Add `pricing.social.calloutLink`: "Follow us on Facebook for upcoming dates."
    - [x] Ensure Vietnamese (`vi.ts`) counterparts are added.

---

## Phase 2: ContactPanel Component Overhaul
Update `@/components/contact-panel` to match the new decorative requirements and functional features.

- [x] **Prop Logic & Heading**
    - [x] Add `showHeading?: boolean` to interface.
    - [x] Implement conditional "CONTACT US" label styling: `text-[10px] font-semibold tracking-widest text-white/30 uppercase mb-2`.
- [x] **Facebook Button**
    - [x] Update `href` to Messenger deep link: `https://m.me/YOUR_PAGE_NAME`.
    - [x] Style: `bg-white/5 border-white/10 rounded-xl h-11`.
    - [x] Icon: Blue circular badge with white "f".
- [x] **Call Us Button & State**
    - [x] Add `isCallOpen` local state.
    - [x] Implement rotation logic for `ChevronDown`.
    - [x] Style: Matching Facebook button style.
- [x] **Phone Area & Copy Logic**
    - [x] Create `copyPhone` function using `navigator.clipboard`.
    - [x] Set up `copiedNum` state for feedback.
    - [x] Implement primary/secondary layout with "Copied" feedback state (2s timeout).
    - [x] Add `<hr className="border-white/[0.06]" />` between entries.

---

## Phase 3: PricingSection Layout Restructure
Modify `pricing-section.tsx` to move from a 3-card grid to a 2-card focus.

- [x] **Grid & Container Updates**
    - [x] Change grid from `grid-cols-3` to `grid-cols-1 md:grid-cols-2`.
    - [x] Reduce container `max-w-6xl` to `max-w-4xl`.
- [x] **Card Specific Adjustments**
    - [x] **Casual Play**: Keep as-is (half-width).
    - [x] **Fixed Booking**:
        - [x] Remove `hover:border-lime/30` (keep permanent lime border).
        - [x] Add "Save 17%" badge to Off-peak row.
        - [x] Add "Save 13%" badge to Peak row.
        - [x] Update CTA button to use `t.pricing.fixed.contactCta`.
- [x] **Social Play Callout Strip**
    - [x] Remove Social Play card from grid.
    - [x] Implement `SocialPlayCallout` block below the grid container.
    - [x] Styling: `bg-white/[0.025] border-white/[0.06] rounded-2xl px-5 py-4 mt-5`.

---

## Phase 4: Popover & Animation Refinement
Final polish on the popover wrapper and transitions.

- [x] **Popover Wrapper (Inside PricingSection)**
    - [x] Update background to `bg-[#0f2213]`.
    - [x] Ensure arrow colors (`border-t-[#0f2213]` / `border-b-[#0f2213]`) match exactly.
    - [x] Set `z-index: z-50`.
- [x] **Animations**
    - [x] Narrow transition: `transition-[opacity,transform] duration-200 ease-out`.
    - [x] Ensure mobile `top-[calc(100%+12px)]` and desktop `bottom-[calc(100%+12px)]` positions are correct.

---

## Phase 5: Dynamic Popover Positioning
Replace the current screen-width based positioning (`isMobile`) with a position-aware implementation.

- [x] **State & Refs Updates**
    - [x] Remove `isMobile` state and `resize` event listener.
    - [x] Add `const [opensUpward, setOpensUpward] = useState(true);`
    - [x] Add `const buttonRef = useRef<HTMLButtonElement>(null);`
    - [x] Add `const POPOVER_HEIGHT_ESTIMATE = 300;`
- [x] **Click Handler Logic**
    - [x] Add `handleContactToggle` function to determine `opensUpward` based on `rect.top`.
- [x] **Class Replacements**
    - [x] Update popover position conditional (use `opensUpward` instead of `isMobile`).
    - [x] Update decorative arrow direction conditional.
    - [x] Update CTA button arrow character.
- [x] **Cleanup**
    - [x] Ensure all references to `isMobile` are removed.


## Component Reference Snippets

### Social Play Callout
```tsx
<div className="flex items-start gap-3 max-w-4xl mx-auto mt-5 bg-white/[0.025] border border-white/[0.06] rounded-2xl px-5 py-4">
  <div className="w-2 h-2 rounded-full bg-white/20 shrink-0 mt-[6px]" />
  <p className="text-sm text-white/32 leading-relaxed">
    <span className="font-medium text-white/45">{t.pricing.social.title}</span>
    {' '}— {t.pricing.social.calloutBody}{' '}
    <a href="YOUR_FACEBOOK_PAGE_URL" target="_blank" rel="noopener noreferrer" className="text-lime/60 hover:text-lime/80 transition-colors">
      {t.pricing.social.calloutLink}
    </a>
  </p>
</div>
```

### Savings Badge
```tsx
<span className="text-[10px] font-semibold text-lime/85 bg-lime/10 rounded px-1.5 py-0.5 shrink-0 mt-1">
  Save 17%
</span>
```

### Transition Style
```tsx
className={`... transition-[opacity,transform] duration-200 ease-out ...`}
```
