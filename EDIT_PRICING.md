# Implementation Plan: Fixed Booking CTA Popover

This document outlines the steps to implement the floating contact panel for the Fixed Booking card in the Pricing section, as described in the [Fixed Booking CTA — Popover Implementation Plan].

## 📋 Task Checklist

### 1. Preparation & Setup
- [x] Locate the Fixed Booking card in `components/pricing-section.tsx`.
- [x] Verify `components/contact-panel.tsx` is available and contains the shared contact UI.
- [x] Add necessary React hooks to `components/pricing-section.tsx` (`useState`, `useRef`, `useEffect`, `useCallback`).

### 2. State & Interaction Logic
- [x] Add `isOpen` state to handle the popover visibility.
- [x] Implement a `clickOutside` listener using a `ref` on the positioning container to close the popover.
- [x] Add a `window` resize listener or use a media query hook to detect the 640px breakpoint for flipping the popover direction.

### 3. Component Structure (Fixed Booking Card)
- [x] Replace the current `<a>` link with a positioning container (`div` with `relative` positioning).
- [x] **Popover Panel**:
    - [x] Create an absolutely positioned `div` inside the container.
    - [x] Embed the `<ContactPanel />` component inside.
    - [x] Add a "CONTACT US" label at the top.
    - [x] Implement the Decorative Arrow (SVG or CSS triangle) on the bottom (desktop) or top (mobile).
- [x] **CTA Button**:
    - [x] Create a `<button>` styled as a ghost/outline button.
    - [x] Add a directional arrow character (e.g., `↑` / `↓`) that toggles based on state.
    - [x] Ensure full width and proper spacing.

### 4. Styling (CSS/Tailwind)
- [x] **Popover Panel Styling**:
    - [x] Background: `#0f2213` (matching navbar dropdown).
    - [x] Border: `1px solid rgba(255, 255, 255, 0.1)`.
    - [x] Z-index: `z-50` or higher.
    - [x] Transitions: Smooth transform and opacity.
- [x] **Mobile Responsive**:
    - [x] At `< 640px`, switch `bottom-[100%]` to `top-[100%]`.
    - [x] Flip the arrow position and direction.

### 5. Accessibility
- [x] Apply `aria-haspopup="true"` and `aria-expanded={isOpen}` to the CTA button.
- [x] Apply `aria-hidden={!isOpen}` to the popover panel.
- [x] Ensure the "Copy" buttons in the `ContactPanel` remain keyboard-accessible.

---

## 🛠 Step-by-Step Implementation Guide

### Phase 1: Logic & Hooks
In `components/pricing-section.tsx`, add the state management:
```tsx
const [isContactOpen, setIsContactOpen] = useState(false);
const containerRef = useRef<HTMLDivElement>(null);
const [isMobile, setIsMobile] = useState(false);

// Handle mobile breakpoint detection
useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 640);
  checkMobile();
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

// Handle click outside
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setIsContactOpen(false);
    }
  };
  if (isContactOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isContactOpen]);
```

### Phase 2: Markup Integration
Refactor the CTA area in the Fixed Booking card:
```tsx
<div ref={containerRef} className="relative mt-auto">
  {/* Popover Panel */}
  <div 
    className={`absolute left-0 right-0 z-50 p-4 rounded-2xl bg-[#0f2213] border border-white/10 shadow-2xl transition-all duration-200 ${
      isContactOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    } ${
      isMobile ? 'top-[calc(100%+12px)]' : 'bottom-[calc(100%+12px)]'
    }`}
  >
    <ContactPanel showHeading />
    
    {/* Decorative Arrow */}
    <div 
      className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent ${
        isMobile 
          ? 'top-[-8px] border-b-[8px] border-b-[#0f2213]' 
          : 'bottom-[-8px] border-t-[8px] border-t-[#0f2213]'
      }`}
    />
  </div>

  {/* CTA Button */}
  <button
    onClick={() => setIsContactOpen(!isContactOpen)}
    aria-haspopup="true"
    aria-expanded={isContactOpen}
    className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 text-white/70 font-medium rounded-xl h-12 text-sm transition-all duration-200 border border-white/10 group"
  >
    {t.pricing.bookNow}
    <span className={`transition-transform duration-200 ${isContactOpen ? 'rotate-180' : ''}`}>
      {isMobile ? '↓' : '↑'}
    </span>
  </button>
</div>
```

### Phase 3: Translation & Assets
- [x] If `t.pricing.bookNow` needs to change to "Contact Us" or similar for this specific card, update the language context or add a new key.

---

## 🧪 Testing Considerations
1. **Scrolling**: Ensure the popover doesn't cause overflow issues or jitter when opening/closing.
2. **Clipboard**: Verify `ContactPanel`'s copy feature works correctly inside this new context.
3. **Responsive**: Toggle between desktop and mobile in dev tools to verify the popover "flips" correctly.
