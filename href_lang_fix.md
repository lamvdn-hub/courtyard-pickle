# 🌐 hreflang Implementation Checklist

## Phase 1: Preparation
- [x] Ensure you are on the `main` branch.
- [x] Open `app/layout.tsx`.
- [x] Locate the `metadata` export (around line 19).

## Phase 2: Implementation
- [x] Update the `alternates` object in the `metadata` export to include the `languages` property.

### Target Metadata Structure
```typescript
export const metadata: Metadata = {
  // ... other metadata
  alternates: {
    canonical: 'https://courtyardpickledanang.com',
    languages: {
      'vi': 'https://courtyardpickledanang.com/?lang=vi',
      'en': 'https://courtyardpickledanang.com/?lang=en',
    },
  },
};
```

### Critical Rules
- [x] **Do not** touch any other part of the `metadata` object.
- [x] **Do not** add `'use client'` to `layout.tsx`; it must remain a Server Component for SEO.
- [x] The `languages` property is a Next.js built-in; no additional packages are required.

## Phase 3: Verification & QA
- [x] **Verify English Variant**
    - [x] Load `https://courtyardpickledanang.com/?lang=en`
    - [x] View page source (Ctrl+U) and confirm these tags are in the `<head>`:
        - [x] `<link rel="alternate" hreflang="vi" href="https://courtyardpickledanang.com/?lang=vi"/>`
        - [x] `<link rel="alternate" hreflang="en" href="https://courtyardpickledanang.com/?lang=en"/>`
    - [x] Confirm canonical points to the language-specific URL:
        - [x] `<link rel="canonical" href="https://courtyardpickledanang.com/?lang=en"/>` 
- [x] **Verify Vietnamese Variant**
    - [x] Load `https://courtyardpickledanang.com/?lang=vi`
    - [x] Confirm the same two `hreflang` tags are present.
    - [x] Confirm canonical points to: `https://courtyardpickledanang.com/?lang=vi`

---
*Note: If the canonical on the English variant still points to the bare domain, Google may treat the English content as a duplicate and ignore it.*
