# Yahtaj IT - AI-Based IT Solutions Website

## Project Overview
- **Project Name**: Yahtaj IT Business Website
- **Type**: Multi-page AI-powered IT services website
- **Core Functionality**: Showcase AI/IT services, automate client support, manage leads via admin dashboard
- **Target Users**: Businesses seeking AI solutions, IT consulting, automation services

---

## UI/UX Specification

### Layout Structure

**Pages**:
1. `index.html` - Main website (home, services, about, contact)
2. `admin.html` - Admin dashboard
3. `support.html` - AI support system

**Page Sections (index.html)**:
- Fixed navigation header
- Hero section with scroll-triggered animations
- Services section (AI Solutions, Web Development, Automation, Consulting)
- Testimonials/Social proof
- Portfolio/Case studies
- CTA section
- Footer

### Responsive Breakpoints
- Mobile: < 768px (primary focus)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette - Dark Mode (Default)**:
- Background Primary: `#0a0a0f`
- Background Secondary: `#12121a`
- Background Card: `#1a1a24`
- Accent Primary: `#6366f1` (Indigo)
- Accent Secondary: `#8b5cf6` (Purple)
- Accent Gradient: `linear-gradient(135deg, #6366f1, #8b5cf6)`
- Text Primary: `#ffffff`
- Text Secondary: `#a1a1aa`
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`
- Border: `#27272a`

**Color Palette - Light Mode**:
- Background Primary: `#fafafa`
- Background Secondary: `#ffffff`
- Background Card: `#ffffff`
- Accent Primary: `#4f46e5`
- Accent Secondary: `#7c3aed`
- Text Primary: `#18181b`
- Text Secondary: `#71717a`
- Border: `#e4e4e7`

**Typography**:
- Font Family: `'Outfit', 'Segoe UI', sans-serif`
- Headings: 
  - H1: 56px/64px (mobile: 36px)
  - H2: 40px/48px (mobile: 28px)
  - H3: 24px/32px
- Body: 16px/24px
- Small: 14px/20px
- Font Weights: 300, 400, 500, 600, 700

**Spacing System**:
- Base unit: 4px
- Section padding: 80px (mobile: 48px)
- Card padding: 24px
- Gap: 16px, 24px, 32px

**Visual Effects**:
- Card shadows: `0 4px 24px rgba(0,0,0,0.12)`
- Hover shadows: `0 8px 32px rgba(99,102,241,0.2)`
- Border radius: 12px (cards), 8px (buttons), 24px (pills)
- Glassmorphism: `backdrop-filter: blur(12px)`
- Glow effects on accent elements

### Components

**Navigation**:
- Fixed position, transparent to solid on scroll
- Logo (left), nav links (center), theme toggle + CTA (right)
- Mobile: hamburger menu with slide-in drawer
- Active state: accent underline

**Hero Section**:
- Full viewport height
- Animated gradient background with floating particles
- Headline with typewriter or reveal effect
- Subheadline with fade-in
- Two CTAs: "Get Started" (primary), "View Services" (secondary)
- Scroll indicator at bottom

**Service Cards**:
- Icon + title + description
- Hover: scale(1.02) + shadow glow
- Click: navigate to service detail

**Scroll Animations**:
- Fade-up on scroll into viewport
- Staggered delays for lists
- Parallax background layers

**Theme Toggle**:
- Sun/moon icon button
- Smooth transition between themes
- Persist preference in localStorage

**Admin Dashboard**:
- Sidebar navigation
- Stats cards (leads, clients, revenue, tickets)
- Data tables with sorting/filtering
- Charts (conversions over time)
- Quick actions

**AI Support System**:
- Chat interface (like ChatGPT)
- Floating button in corner
- Message history
- Typing indicator
- Context-aware responses

---

## Functionality Specification

### Core Features

**1. Scroll Effects**:
- Intersection Observer for reveal animations
- Smooth scroll to sections
- Progress indicator on page

**2. Theme Switcher**:
- Toggle between dark/light modes
- System preference detection
- LocalStorage persistence

**3. Mobile Navigation**:
- Hamburger menu
- Slide-in from right
- Touch-friendly tap targets (44px min)

**4. Contact/Lead Form**:
- Client-side validation
- Store leads in localStorage (demo)
- Success/error states

**5. Admin Dashboard**:
- View all leads/submissions
- Client management (add/edit/remove)
- AI support ticket overview
- Analytics overview

**6. AI Support Chat**:
- Simulated AI responses (rule-based)
- Context awareness
- File questions or basic support
- History in session

### User Interactions
- Smooth scroll navigation
- Form submissions
- Theme toggling
- Chat with AI support
- Admin CRUD operations

### Data Handling
- localStorage for:
  - Theme preference
  - Leads submissions
  - Admin data (mock)
  - Chat history

---

## Acceptance Criteria

1. ✅ Homepage loads with scroll animations
2. ✅ Theme toggle works and persists
3. ✅ All sections accessible via navigation
4. ✅ Mobile responsive at all breakpoints
5. ✅ Contact form validates and stores data
6. ✅ Admin dashboard displays data
7. ✅ AI chat responds to queries
8. ✅ Page load < 3 seconds
9. ✅ No console errors

---

## Additional Features Added

- SEO meta tags
- Loading animation
- Smooth scroll behavior
- Accessible focus states
- Performance optimizations
- Browser compatibility
- Service Worker ready structure
- Analytics placeholders