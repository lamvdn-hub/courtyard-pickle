# Courtyard Pickle — Suggested UI/UX Upgrades
**Last updated: 15 April 2026**
*Continuous development roadmap. Not for immediate post-launch implementation.*

---

## Phase 1 — High Impact, Low Effort (IN PROGRESS)

- [x] **1.1 Google Reviews Badge**
  **Status:** Implemented (Static Fallback active) — *Note for future: Consider migrating to third-party widget ID (e.g., Elfsight) for dynamic sync if required.*
  **Impact:** High — immediate credibility signal near the hero or CTA section
  **Effort:** Low

  Display the aggregate star rating and review count from the Google Business Profile. Place near the hero CTA or directly above the "Ready to play?" CTA section. Links to the full Google Business Profile when clicked.

  **Requirements:**
  - Google Business Profile must be verified and have existing reviews
  - Use Google Places API or a third-party widget (e.g. Elfsight) to embed dynamically
  - Static fallback acceptable if API is not feasible — manually update rating and count periodically

---

- [ ] **1.2 Desktop Sticky CTA**
  **Status:** REMOVED by user request
  **Impact:** High — desktop users currently rely only on the nav button
  **Effort:** Low

  A floating "Đặt sân ngay" button that appears on desktop after the user scrolls past the hero section. Disappears when the user reaches the footer. Same accent green styling as the primary CTA. Does not appear on mobile — mobile already has the sticky bottom bar.

---

- [x] **1.3 Pricing Table**
  **Status:** Implemented
  **Impact:** High — removes the need to hunt through FAQ for pricing information
  **Effort:** Low–Medium

  A clean card-based breakdown displayed above the FAQ section. Each card represents a pricing tier — walk-in rate, hourly booking, any membership or recurring options. Keep it simple: plan name, price, what is included, and a CTA button on each card.

  **Requirements:**
  - Confirm all pricing tiers and inclusions with client before building
  - Bilingual — VN and EN versions required

---

## Phase 2 — Medium Impact, Medium Effort

- [x] **2.1 Testimonials Section**
  **Status:** Implemented
  **Impact:** High — strongest conversion driver for a local sports venue
  **Effort:** Low — content sourced from existing Google Business Profile reviews

  A dedicated section displaying selected individual quotes from real customers, sourced from the Google Business Profile review entries. Serves a different purpose from the Google Reviews badge — the badge shows aggregate credibility ("4.8 stars, 47 reviews"), the testimonials section shows personal, specific experiences in the customer's own words.

  **Content sourcing:**
  - Pull the 3–5 best written reviews from the Google Business Profile
  - Attribute each quote to the reviewer's first name only
  - Link the section or a "See all reviews" CTA to the full Google Business Profile page for verification
  - No fabricated or paraphrased quotes — use exact review text only

  **Design:**
  - 3-column card layout on desktop, single column stacked on mobile
  - Each card: quote text, reviewer first name, star rating (5 stars)
  - Subtle card background consistent with existing card styling on the page
  - Section heading: "Khách Hàng Nói Gì" / "What Players Say"
  - Optional: reviewer avatar placeholder using first initial if no photo is available

  **Placement:** Between the Facility section and the CTA section — after users have seen the space, before the booking push.

  **Requirements:**
  - Minimum 3 strong reviews sourced before building
  - Bilingual — show VN reviews on VN version, EN reviews on EN version if available
  - If EN reviews are not available, translate the best VN reviews for the EN version

---

- [x] **2.2 Map Embed**
  **Status:** Implemented
  **Impact:** Medium — removes location uncertainty for first-time visitors
  **Effort:** Low

  A Google Maps iframe embedded in the footer, placed below the Location column text. The address and operating hours remain as text above the map. The map displays with the "Courtyard Pickle" pin centered.

  **Placement:** Below the existing address text in the Location column of the footer, spanning the full column width.

  **Requirements:**
  - Use Google Maps Embed API — free, no API key required for basic iframe embed
  - Confirm pin label matches the Google Business Profile name exactly

---

- [x] **2.3 Tournament Section**
  **Status:** Implemented
  **Impact:** Medium-High — differentiates Courtyard Pickle from competitors, signals active community
  **Effort:** Low (Option B — maintained date field)

  A dedicated section highlighting Courtyard Pickle's tournament culture. Heading: "Giải Đấu Thường Xuyên" / "Regular Tournaments." Displays a card showing the next tournament date, updated by the site owner 1–2 weeks in advance when information is received from the Facebook manager. Includes a link to the Facebook page for full tournament details.

  **Design:**
  - Single featured card with next tournament date field
  - Secondary line: brief description of tournament format or who can join
  - CTA: "Xem chi tiết trên Facebook" / "See details on Facebook" — opens Facebook page in new tab
  - If no upcoming tournament is scheduled: card displays "Giải đấu tiếp theo sắp được công bố" / "Next tournament coming soon"

  **Maintenance workflow:**
  - Site owner updates the date field when tournament info is received from Facebook manager
  - Takes less than one minute to update
  - No backend or CMS required — static update via Antigravity or Bolt

---

- [ ] **2.4 Scroll Animations + Reduced-Motion Support**
  **Status:** Ready to implement — must be implemented together, never separately
  **Impact:** Medium — elevates perceived quality and makes the page feel more premium
  **Effort:** Medium

  Sections fade in or slide up gently as they enter the viewport during scrolling. Applied to: How It Works cards, Facility map section, Pricing table, Testimonials section, FAQ accordion, CTA section.

  **Reduced-motion support is mandatory:** Use the `prefers-reduced-motion` CSS media query to disable all animations for users who have motion reduction enabled in their OS settings. This is a one-line addition alongside every animation rule. Never skip this.

  ```css
  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
  ```

  **Animation style:** Fade-in-up — opacity 0 → 1, translateY 16px → 0, duration 400ms, ease-out. Subtle, not dramatic.

---

## Phase 3 — Lower Urgency, Higher Effort

- [ ] **3.1 Interactive Facility Map**
  **Status:** Deferred — lower urgency, develop after Phase 1 and 2 items are complete
  **Impact:** Medium — adds delight and communicates facility quality through real photography
  **Effort:** Medium–High

  Upgrade the current static SVG facility map so that hovering over (desktop) or tapping (mobile) a zone displays a tooltip or popover with a brief description and optionally a photo of that area.

  **Zones to make interactive:**
  - Court 1 and Court 2 — description of surface, covered status
  - Indoor Café + Front Desk — photo and brief description
  - Outdoor Café — photo and brief description
  - Locker Rooms — description of amenities (showers, hair dryers, etc.)
  - N.A. zones — "Coming soon" label, no further detail

  **Requirements:**
  - Good quality photos of each zone are required before this is worth building
  - Client must provide or approve photos for each interactive zone
  - Mobile tap behavior must be explicitly dismissed — tapping outside the tooltip closes it

---

## Removed from Roadmap

| Feature | Reason |
|---|---|
| Instagram feed | No Instagram account — Facebook post frequency not sufficient to justify implementation |
| Contact inquiry form | Not aligned with this business's nature and contact flow |
| Court tour video | Excluded until professional production budget is available |
| Coaching section | Coaching is community-referred, not a formal service offering — not appropriate for current stage |
| Newsletter / WhatsApp opt-in | Excluded — client does not have content strategy to sustain it |
| Facebook feed strip | Impractical due to API restrictions and insufficient post frequency |

---

## Notes for Implementation

- Implement one item at a time — do not build multiple upgrades simultaneously
- Document the date of each change — needed to compare before/after in GA4
- Allow minimum 7 days of GA4 data after each change before assessing impact
- All new sections require bilingual VN and EN content before implementation
- Scroll animations (2.4) must be implemented simultaneously with reduced-motion support — no exceptions
- Interactive facility map (3.1) cannot be built until client provides zone photography
