# Codebase SEO & AEO Checklist

This checklist tracks the SEO (Search Engine Optimization) and AEO (Answer Engine Optimization) tasks to be completed in the codebase.

---

## 📋 Phase 1: Content Optimization
- [x] **Business Name Consistency**: Apply confirmed business name consistently across:
    - Footer logo
    - Footer copyright line
    - Footer tagline paragraph
    - All FAQ answers that mention the name
    - Both schema files
- [x] **Hero Slideshow Alt Text**: Add unique alt text to every image in the Hero slideshow including facility name and city.

---

## 🏷️ Phase 2: Meta Tags — Page Head
- [x] **Title Tag**: Add `<title>Courtyard Pickle — Pickleball Court Rental in Da Nang</title>`
- [x] **Meta Description**: Add `<meta name="description" content="Book sheltered pickleball courts in Da Nang at Courtyard Pickle. Court rentals, coaching, and social play at 27 Thị Xuân Quý, Ngũ Hành Sơn." />`
- [x] **Robots Tag**: Add `<meta name="robots" content="index, follow" />`
- [x] **Canonical Tag**: Add `<link rel="canonical" href="https://yourdomain.com" />`
- [x] **HTML Lang Attribute**: Add `lang` attribute to `<html>` tag (e.g., `lang="en"` or `lang="vi"`).
- [x] **Open Graph Tags**:
    - `og:title`
    - `og:description`
    - `og:url`
    - `og:type`
    - `og:image`

---

## 🛠️ Phase 3: Schema Implementation
- [ ] **Local Business Schema**: Replace `PLACEHOLDER_URL` in `layout.tsx` with the real domain.
- [ ] **FAQ Schema Scope**: Confirm `faqSchema` object in `faq-schema.tsx` sits outside the component function.
- [ ] **FAQ Schema Directive**: Confirm `faq-schema.tsx` has no `'use client'` directive.

---

## 🗺️ Phase 4: SVG Facility Diagram
- [ ] **SVG Metadata**: Confirm `<title>` and `<desc>` are the first children inside both desktop and mobile SVGs.
- [ ] **SVG Descriptions**: Confirm both SVG `<desc>` tags say "pickleball courts" (not "padel courts").
- [ ] **Accessibility Text**: Confirm sr-only paragraph says "pickleball" (not "picklball").
- [ ] **SVG ID Uniqueness**: Confirm desktop and mobile SVG IDs are unique (e.g., `facility-map-desktop-title` vs `facility-map-mobile-title`).

---

## 📍 Phase 5: NAP Consistency (Name, Address, Phone)
*Run after real domain is confirmed and all content fixes above are complete.*
- [ ] **Business Name**: Identical across footer, tagline, schema, and Google Business Profile.
- [ ] **Address**: Identical across footer, FAQ, tagline, and schema: `27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam`.
- [ ] **Phone Number**: Identical across schema, FAQ, and footer.
- [ ] **Opening Hours**: Identical across footer, FAQ, and schema.

---

## ⚙️ Phase 6: Technical SEO
- [ ] **robots.txt**: Verify it exists and is not blocking crawlers (`Disallow: /` must not be present).
- [ ] **sitemap.xml**: Verify it is generated and accessible.
- [ ] **Domain Redirection**: Confirm `www.yourdomain.com` redirects to `yourdomain.com` (canonical version).

---

## ✅ Phase 7: Verification After Deploy
- [ ] **Head Tags**: View source and confirm `<title>` and `<meta name="description">` are present.
- [ ] **JSON-LD Schema**: View source and confirm both blocks are present and outside `<main>`.
- [ ] **SVG Schema**: Search for `facility-map-desktop-title` in server-rendered HTML.
- [ ] **Sitemap Check**: Load `yourdomain.com/sitemap.xml` in browser.
- [ ] **Robots Check**: Load `yourdomain.com/robots.txt` in browser.
