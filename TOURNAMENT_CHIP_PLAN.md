# Tournament Chip — Management Plan & Hero Section Implementation

This document outlines the implementation and operational plan for the Tournament announcement chip in the Hero section.

## 📋 Overview
The Tournament Chip is a dynamic UI element that cycles through four defined states across the lifecycle of each tournament. To simplify maintenance, all tournament-specific data is extracted into a configuration file.

---

## 🏗️ Phase 1: Data Architecture & Configuration
To avoid editing component code for every update, we use a dedicated configuration file.

### ⚙️ Config Structure (`tournament.config.ts`)
The config file should be located at the root or in a `/config` directory.

| Field | Type | Description |
| :--- | :--- | :--- |
| `state` | `announced` \| `today` \| `recent` \| `hidden` | The current lifecycle stage of the tournament. |
| `name` | `string` | The official name of the tournament. |
| `date` | `string` | Date string (e.g., "May 15th") — primarily for the `announced` state. |
| `link` | `string` | The URL for the Call-to-Action (CTA). |
| `linkLabel` | `string` | The text for the CTA button/link. |

### ✅ Task Checklist: Configuration
- [x] Create directory `config/` if it doesn't exist.
- [x] Create `config/tournament.config.ts`.
- [x] Define the `TournamentConfig` interface for type safety.
- [x] Populate the config with initial data (e.g., `state: 'hidden'`).

---

## 🎨 Phase 2: Component Implementation
The component must handle these states without skipping any.

### 1. Announced (Awareness Phase)
- **Active:** From confirmation until the day before the event.
- **Content:** Tournament name, date, and registration/details link.

### 2. Tournament Day (Immediate Action)
- **Active:** Day of the event only.
- **Content:** Date is removed. Copy changes to "In play today" or "Tournament day".

### 3. Recent (Post-Event Traffic)
- **Active:** 3–7 days after the tournament.
- **Content:** Past tense copy (e.g., "Recent tournament" or "Results").

### 4. Hidden (Default)
- **Active:** No active or recent tournament.

### ✅ Task Checklist: Component
- [x] Create `components/TournamentChip.tsx`.
- [x] Import `tournamentConfig` into the component.
- [x] Implement conditional rendering logic based on `tournamentConfig.state`.
- [x] Apply premium styling:
    - [x] Subtle background gradients.
    - [x] Hover animations for the CTA link.
    - [x] Responsive padding and font sizes.
- [x] Add unit tests or visual checks for all 4 states.

---

## 🚀 Phase 3: Integration & Order
The chip will be integrated into the **Hero Section**.

### ✅ Task Checklist: Hero Integration
- [x] Locate the `HeroSection` component.
- [x] Insert `<TournamentChip />` at the top of the content stack.
- [x] Verify the vertical order:
    1. Tournament Chip
    2. Main Heading (H1)
    3. Subtext/Description
    4. CTA Buttons
    5. Reviews/Trust Strip
- [x] Ensure smooth transitions and no layout shifts when the chip state changes.

---

## ✅ State Transition Checklist (Operational)
Use this for every tournament cycle:

- [ ] **Tournament Confirmed**
    - Set `state` to `announced`
    - Fill `name`, `date`, `link`, and `linkLabel`
- [ ] **Day Before Tournament**
    - Verify copy and links are correct
- [ ] **Tournament Morning**
    - Set `state` to `today`
    - Update `link` to live updates destination
- [ ] **1–3 Days After**
    - Set `state` to `recent`
    - Update `link` to archive or Facebook post
    - Update `linkLabel` (e.g., "View Photos")
- [ ] **7 Days After (or when archive is ready)**
    - Set `state` to `hidden`

---

## 🛠️ Future Scaling
*Note: This is for future consideration and not part of the immediate implementation.*
- **Headless CMS:** When volume increases, migrate the `tournament.config.ts` data to a CMS (like Sanity) to allow non-developers to update the state via a web UI.

