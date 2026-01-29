

# Canta Website - Implementation Plan

## Overview
A sleek, modern fintech website for Canta - a cross-border payment solution for Africa. The design will feature a dark theme with vibrant accent colors, smooth Framer Motion animations, and the custom Tomato Grotesk font family throughout.

---

## Design System

### Typography
- **Tomato Grotesk Bold** - Headlines and hero text
- **Tomato Grotesk SemiBold** - Section titles and CTAs
- **Tomato Grotesk Medium** - Subheadings and navigation
- **Tomato Grotesk Regular** - Body text and descriptions

### Color Palette
- **Background**: Deep dark (#0A0A0F) with subtle gradients
- **Primary Accent**: Electric purple/violet (#0059b2) 
- **Secondary Accent**: Cyan/teal (#ccffff) for contrast
- **Text**: White and gray tones for readability
- **Success/Money**: Green accents for financial elements

---

## Pages & Sections

### 1. Home Page
**Hero Section**
- Bold headline: "Send Money Beyond Africa's Borders"
- Animated tagline with typing or fade effects
- Floating phone mockup showing the Canta app
- Two CTAs: "Download App" (iOS/Android store buttons) + "Learn More"
- Animated gradient background with subtle moving particles

**Features Section**
- 4 feature cards with icons and hover animations:
  - 💸 Low Transfer Fees
  - ⚡ Fast Transactions (minutes, not days)
  - 🌍 Multi-Currency Support
  - 🔒 Secure & Compliant
- Staggered fade-in animations on scroll

**How It Works Section**
- Step-by-step process (3-4 steps)
- Animated connecting lines between steps
- Icons with subtle pulse/glow effects

**Testimonials Section**
- Carousel/slider with user testimonials
- Profile photos, names, countries
- Star ratings and quotes
- Smooth slide transitions

**Download CTA Section**
- Large app store badges (iOS & Android)
- Phone mockup with app preview
- Floating elements with parallax effect

**Footer**
- Company info and logo
- Quick links to all pages
- Social media icons
- Newsletter signup
- Copyright and legal links

---

### 2. About Us Page
- Company story and mission
- Team values with icon cards
- Stats/numbers (transactions processed, countries served, etc.)
- Vision for African finance
- Animated elements on scroll

---

### 3. Contact Us Page
- Contact form (name, email, subject, message)
- Office locations (if applicable)
- Support email and phone
- FAQ accordion section
- Social media links
- Map integration placeholder

---

### 4. Blog Page
- Blog post grid/list layout
- Featured post at top
- Category filters
- Search functionality
- Post cards with image, title, date, excerpt
- Pagination

---

## Animations (Framer Motion)
- **Page transitions**: Smooth fade and slide between pages
- **Scroll animations**: Elements animate in as they enter viewport
- **Hover effects**: Buttons scale, cards lift with shadows
- **Micro-interactions**: Icon animations, button ripples
- **Hero animations**: Staggered text reveal, floating elements
- **Loading states**: Skeleton loaders and spinners

---

## Navigation
- Sticky header with blur effect on scroll
- Logo on left, nav links center, Download CTA on right
- Mobile hamburger menu with slide-out drawer
- Active page indicator

---

## Mobile Responsiveness
- Fully responsive across all breakpoints
- Mobile-first approach for key interactions
- Touch-friendly buttons and spacing
- Optimized images and performance

---

## Technical Implementation
- Framer Motion for all animations
- React Router for page navigation
- Lucide React icons throughout
- Custom Tomato Grotesk fonts configured in Tailwind
- Reusable component architecture
- Optimized assets and lazy loading

