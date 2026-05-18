# Software Requirements Specification (SRS)
## Horcrux Café - Harry Potter Themed Restaurant Web Application

**Version:** 1.0  
**Date:** February 14, 2026  
**Prepared by:** Development Team  
**Project Name:** Horcrux Café Web Application

---

## 1. Introduction

### 1.1 Purpose
This Software Requirements Specification (SRS) document provides a comprehensive description of the Horcrux Café web application. It details the functional and non-functional requirements, system constraints, and design considerations for a Harry Potter-themed restaurant ordering and review platform.

### 1.2 Document Conventions
- **Priority Levels:** High (Critical), Medium (Important), Low (Nice-to-have)
- **User Roles:** Guest, Customer, Administrator
- **Currency:** Galleons (fictional Harry Potter currency)

### 1.3 Intended Audience
This document is intended for:
- Development team members
- Project managers and stakeholders
- Quality assurance testers
- UI/UX designers
- System administrators
- Future maintenance developers

### 1.4 Product Scope
Horcrux Café is a single-page web application (SPA) built with React that provides an immersive Harry Potter-themed dining experience. The application enables customers to:
- Browse magical menu items organized by themed categories
- Place food orders with table selection
- Submit and view customer reviews with photo uploads
- Explore café information and upcoming magical events
- Experience an engaging, theme-consistent user interface

---

## 2. Overall Description

### 2.1 Product Perspective
The Horcrux Café web application is a standalone, client-side React application that operates independently without backend integration in its current version. It utilizes:
- React 18.3.1 for component-based UI development
- React Router DOM 7.1.3 for client-side routing
- Tailwind CSS 3.4.17 for styling and theming
- Vite 6.0.5 as the build tool and development server

The application is designed as a Progressive Web Application (PWA) candidate with potential for future backend integration for order processing, user authentication, and persistent data storage.

### 2.2 Product Functions
The primary functions of the Horcrux Café application include:

1. **Welcome & Navigation**
   - Display themed landing page with magical animations
   - Provide navigation to all major sections
   - Present café branding and theme elements

2. **Menu Browsing & Ordering**
   - Display categorized menu items (7 themed categories)
   - Show item details (name, description, price)
   - Add items to shopping cart
   - Review cart contents
   - Select table number for order
   - Confirm order placement

3. **Café Information**
   - Display café history and background
   - Show upcoming magical events
   - Present café features and ambiance details

4. **Customer Reviews**
   - Submit text reviews
   - Upload photos with reviews
   - Display submitted reviews in chronological order

5. **Visual Experience**
   - Animated magical backgrounds (nebula effects, sparkles)
   - Themed UI elements (floating candles, golden snitches, owls)
   - House-themed color schemes
   - Responsive design for mobile and desktop


### 2.3 User Classes and Characteristics

#### 2.3.1 Guest Users
- **Characteristics:** First-time visitors, casual browsers
- **Technical Expertise:** Basic web navigation skills
- **Permissions:** View all content, browse menu, read reviews
- **Primary Goals:** Explore café offerings, understand theme

#### 2.3.2 Customers
- **Characteristics:** Active users placing orders
- **Technical Expertise:** Comfortable with e-commerce interfaces
- **Permissions:** All guest permissions plus order placement, review submission
- **Primary Goals:** Order food, share experiences, engage with theme

#### 2.3.3 Administrators (Future)
- **Characteristics:** Café staff managing content
- **Technical Expertise:** Moderate technical skills
- **Permissions:** Manage menu items, moderate reviews, view orders
- **Primary Goals:** Maintain content accuracy, monitor customer feedback

### 2.4 Operating Environment
- **Client Platform:** Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Device Types:** Desktop computers, tablets, smartphones
- **Screen Resolutions:** 320px (mobile) to 2560px+ (desktop)
- **Network:** Internet connection required for initial load
- **Operating Systems:** Windows, macOS, Linux, iOS, Android

### 2.5 Design and Implementation Constraints
- **Technology Stack:** React 18.3.1, React Router DOM 7.1.3, Tailwind CSS 3.4.17
- **Build Tool:** Vite 6.0.5
- **Browser Compatibility:** ES6+ JavaScript support required
- **No Backend:** Current version operates entirely client-side
- **State Management:** Local component state (no Redux/Context in current implementation)
- **Data Persistence:** None (cart and reviews reset on page refresh)
- **Licensing:** Harry Potter IP considerations for commercial use


### 2.6 Assumptions and Dependencies

#### Assumptions
1. Users have stable internet connectivity for initial application load
2. Users' browsers support modern JavaScript (ES6+) and CSS3
3. Users are familiar with Harry Potter universe and themed references
4. Menu items and prices are fictional and for demonstration purposes
5. No real payment processing is required in current version
6. Users understand the application is themed entertainment

#### Dependencies
1. **React Ecosystem:** Application depends on React 18.3.1 and React Router DOM 7.1.3
2. **Build Tools:** Vite 6.0.5 for development and production builds
3. **Styling Framework:** Tailwind CSS 3.4.17 for consistent theming
4. **Browser APIs:** Modern browser APIs for routing and state management
5. **CDN/Hosting:** Requires web hosting service for deployment
6. **External Resources:** Some images loaded from external URLs (Wikimedia Commons)

---

## 3. System Features and Requirements

### 3.1 Welcome Page (FR-WP)

#### 3.1.1 Description and Priority
**Priority:** High  
The Welcome Page serves as the application's landing page, providing first impressions and navigation to all major features.

#### 3.1.2 Functional Requirements

**FR-WP-01:** Display Café Branding
- The system shall display "Horcrux Café" branding prominently
- The system shall include themed tagline "Welcome to the Great Hall"
- The system shall show Dumbledore quote for thematic immersion

**FR-WP-02:** Provide Navigation Options
- The system shall display three primary action buttons:
  - "Order from the Great Hall" (navigates to /order)
  - "Explore Hogwarts" (navigates to /cafe)
  - "Wizarding Reviews" (navigates to /reviews)
- All buttons shall be clearly visible and accessible

**FR-WP-03:** Animated Background Elements
- The system shall display animated nebula background with color transitions
- The system shall render floating golden snitches with independent animations
- The system shall show floating candles with vertical movement
- The system shall display sparkle effects throughout the viewport


**FR-WP-04:** Responsive Design
- The system shall adapt layout for mobile (320px+), tablet (768px+), and desktop (1024px+)
- The system shall maintain readability across all screen sizes
- Navigation buttons shall stack vertically on mobile devices

### 3.2 Menu Browsing and Ordering (FR-MO)

#### 3.2.1 Description and Priority
**Priority:** High  
Core functionality enabling users to browse menu items, add to cart, and place orders.

#### 3.2.2 Functional Requirements

**FR-MO-01:** Display Menu Categories
- The system shall organize menu items into 7 themed categories:
  - Hogwarts (traditional British fare)
  - Hogsmeade Treats (beverages and sweets)
  - Weasleys Delight (family recipes)
  - Magical Beverages (drinks)
  - Forbidden Treats (adventurous items)
  - Three Brews Cauldron (specialty dishes)
  - Elf Specials (house-elf recipes)
- Each category shall display an emoji icon for visual identification

**FR-MO-02:** Display Menu Items
- Each menu item shall display:
  - Item name
  - Description/backstory
  - Price in Galleons
  - "Add to Cauldron" button
- Items shall be displayed in a responsive grid layout

**FR-MO-03:** Category Selection
- The system shall provide a sidebar with all category options
- Selected category shall be visually highlighted
- Clicking a category shall display only items from that category
- Default category on page load shall be "Hogwarts"

**FR-MO-04:** Add to Cart Functionality
- Users shall be able to add items to cart with single click
- Cart counter shall update immediately upon adding items
- Multiple instances of same item shall be allowed
- No quantity selector required (add multiple times for multiple quantities)


**FR-MO-05:** Cart Review
- The system shall display cart summary in sidebar showing item count
- "Review Order" button shall be enabled only when cart contains items
- Clicking "Review Order" shall navigate to cart review page (/cart)
- Cart state shall be passed to cart review page via navigation state

**FR-MO-06:** Cart Review Page
- The system shall display all items in cart with names and prices
- The system shall provide table number selection (1-30)
- Table number shall be required before order confirmation
- "Confirm Your Order" button shall be disabled until table is selected

**FR-MO-07:** Order Confirmation
- Clicking "Confirm Your Order" shall navigate to confirmation page
- Confirmation page shall acknowledge order placement
- No actual order processing occurs (demonstration only)

### 3.3 Café Information (FR-CI)

#### 3.3.1 Description and Priority
**Priority:** Medium  
Provides background information about the café and upcoming events.

#### 3.3.2 Functional Requirements

**FR-CI-01:** Display Café History
- The system shall display café establishment story
- The system shall describe café location (Diagon Alley)
- The system shall explain recipe sources and inspiration

**FR-CI-02:** Display Café Features
- The system shall present three key features:
  - Great Hall Experience
  - House Tables
  - Magical Ambiance
- Each feature shall include title and description

**FR-CI-03:** Display Upcoming Events
- The system shall show at least 3 upcoming magical events
- Each event shall display:
  - Event title
  - Date
  - Description
  - "Reserve Your Spot" button (non-functional in current version)


### 3.4 Customer Reviews (FR-CR)

#### 3.4.1 Description and Priority
**Priority:** Medium  
Allows customers to submit and view reviews with optional photo uploads.

#### 3.4.2 Functional Requirements

**FR-CR-01:** Review Submission Form
- The system shall provide a textarea for review text input
- The system shall provide file upload input for photo attachment
- The system shall include "Submit Review" button
- Form shall clear after successful submission

**FR-CR-02:** Review Display
- The system shall display all submitted reviews in chronological order
- Each review shall show:
  - Review text
  - Uploaded photo (if provided)
- Reviews shall be displayed in bordered containers

**FR-CR-03:** Photo Handling
- The system shall accept image file uploads
- The system shall display uploaded photos using object URLs
- No server-side storage (photos lost on page refresh)

**FR-CR-04:** Review Validation
- Review text shall be required for submission
- Photo upload shall be optional
- Empty reviews shall not be submitted

### 3.5 Navigation System (FR-NAV)

#### 3.5.1 Description and Priority
**Priority:** High  
Provides consistent navigation across all pages.

#### 3.5.2 Functional Requirements

**FR-NAV-01:** Navigation Bar
- The system shall display navigation bar on all pages
- Navigation bar shall include:
  - Café logo/name (links to home)
  - Home link
  - About Us link
  - Reviews link
  - Order Now link
- Active page shall be visually highlighted


**FR-NAV-02:** Routing
- The system shall implement client-side routing with React Router
- The system shall support the following routes:
  - `/` - Welcome Page
  - `/cafe` - Café Information Page
  - `/reviews` - Reviews Page
  - `/order` - Order Food Page
  - `/cart` - Cart Review Page
  - `/confirmation` - Order Confirmation Page
- Navigation shall occur without page reloads

**FR-NAV-03:** Responsive Navigation
- Navigation shall adapt to mobile screens with wrapped layout
- All navigation links shall remain accessible on small screens

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements (NFR-PERF)

**NFR-PERF-01:** Page Load Time
- Initial page load shall complete within 3 seconds on standard broadband (5 Mbps+)
- Subsequent page navigations shall be instantaneous (client-side routing)

**NFR-PERF-02:** Animation Performance
- Background animations shall maintain 30+ FPS on modern devices
- Animations shall not block user interactions
- Reduced motion preferences shall be respected (future enhancement)

**NFR-PERF-03:** Bundle Size
- Production JavaScript bundle shall not exceed 500KB (gzipped)
- CSS bundle shall not exceed 50KB (gzipped)
- Images shall be optimized for web delivery

**NFR-PERF-04:** Responsiveness
- User interactions (button clicks, form inputs) shall respond within 100ms
- Cart updates shall reflect immediately without delay

### 4.2 Security Requirements (NFR-SEC)

**NFR-SEC-01:** Input Validation
- All user inputs shall be sanitized to prevent XSS attacks
- File uploads shall validate file types (images only)
- File size limits shall be enforced (max 5MB per image)


**NFR-SEC-02:** Data Privacy
- No personal information shall be collected in current version
- No cookies or tracking mechanisms shall be implemented
- All data shall remain client-side only

**NFR-SEC-03:** HTTPS
- Application shall be served over HTTPS in production
- Mixed content warnings shall be avoided

### 4.3 Usability Requirements (NFR-USE)

**NFR-USE-01:** Intuitive Interface
- Navigation shall be self-explanatory without instructions
- Button labels shall clearly indicate their function
- Visual feedback shall be provided for all user actions

**NFR-USE-02:** Accessibility
- Color contrast shall meet WCAG 2.1 AA standards (minimum 4.5:1 for text)
- Interactive elements shall be keyboard accessible
- Focus indicators shall be visible for keyboard navigation
- Alt text shall be provided for decorative SVG elements

**NFR-USE-03:** Consistency
- UI patterns shall be consistent across all pages
- Color scheme shall remain consistent with theme
- Typography shall follow established hierarchy

**NFR-USE-04:** Error Handling
- User-friendly error messages shall be displayed for failures
- Form validation errors shall be clear and actionable
- Disabled buttons shall indicate why they're disabled (e.g., empty cart)

### 4.4 Reliability Requirements (NFR-REL)

**NFR-REL-01:** Browser Compatibility
- Application shall function correctly on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Graceful degradation for older browsers
- Feature detection for modern APIs

**NFR-REL-02:** Error Recovery
- Application shall not crash on invalid user input
- Navigation errors shall redirect to home page
- Missing images shall display fallback content


### 4.5 Maintainability Requirements (NFR-MAIN)

**NFR-MAIN-01:** Code Quality
- Code shall follow React best practices and conventions
- Components shall be modular and reusable
- ESLint rules shall be enforced
- Code shall include meaningful comments for complex logic

**NFR-MAIN-02:** Documentation
- Component props shall be documented
- Complex functions shall include JSDoc comments
- README shall include setup and deployment instructions

**NFR-MAIN-03:** Version Control
- Git shall be used for version control
- Meaningful commit messages shall be required
- Feature branches shall be used for development

### 4.6 Portability Requirements (NFR-PORT)

**NFR-PORT-01:** Platform Independence
- Application shall run on Windows, macOS, Linux, iOS, and Android
- No platform-specific code shall be used
- Responsive design shall support all device types

**NFR-PORT-02:** Deployment Flexibility
- Application shall be deployable to any static hosting service
- Build process shall generate optimized static files
- No server-side dependencies required

---

## 5. System Constraints

### 5.1 Technical Constraints
1. **No Backend Integration:** Current version operates entirely client-side without server communication
2. **No Data Persistence:** Cart and reviews are lost on page refresh
3. **No Authentication:** No user accounts or login functionality
4. **No Payment Processing:** Orders are simulated only
5. **Static Content:** Menu items and events are hardcoded in components

### 5.2 Business Constraints
1. **Intellectual Property:** Harry Potter IP owned by Warner Bros. and J.K. Rowling
2. **Commercial Use:** Requires licensing for commercial deployment
3. **Demonstration Purpose:** Current version intended for portfolio/demonstration


### 5.3 Regulatory Constraints
1. **GDPR Compliance:** If deployed in EU, must comply with data protection regulations
2. **Accessibility Laws:** Must meet accessibility standards (ADA, Section 508)
3. **Cookie Laws:** Must disclose any tracking or cookies (none currently used)

---

## 6. Use Cases

### 6.1 Use Case 1: Browse and Order Food

**Actor:** Customer  
**Preconditions:** User has navigated to the application  
**Postconditions:** Order is placed and confirmation is displayed

**Main Flow:**
1. User clicks "Order from the Great Hall" on welcome page
2. System displays Order Food Page with default "Hogwarts" category
3. User browses menu items in current category
4. User clicks different category to view other items
5. User clicks "Add to Cauldron" for desired items
6. System updates cart counter
7. User clicks "Review Order" button
8. System navigates to Cart Review Page
9. User reviews cart items
10. User selects table number from dropdown
11. User clicks "Confirm Your Order"
12. System navigates to Order Confirmation Page
13. System displays success message

**Alternative Flows:**
- 3a. User finds desired items in default category, skips step 4
- 7a. Cart is empty, "Review Order" button is disabled
- 10a. User doesn't select table, "Confirm Your Order" button remains disabled

### 6.2 Use Case 2: Submit a Review

**Actor:** Customer  
**Preconditions:** User has navigated to Reviews page  
**Postconditions:** Review is displayed in review list

**Main Flow:**
1. User navigates to Reviews page via navigation bar
2. System displays review form and existing reviews
3. User types review text in textarea
4. User optionally uploads a photo
5. User clicks "Submit Review"
6. System adds review to review list
7. System clears form for next review
8. System displays new review at bottom of list

**Alternative Flows:**
- 4a. User skips photo upload, proceeds with text only
- 5a. Review text is empty, submission fails (current implementation allows empty)


### 6.3 Use Case 3: Explore Café Information

**Actor:** Guest/Customer  
**Preconditions:** User has navigated to the application  
**Postconditions:** User has viewed café information

**Main Flow:**
1. User clicks "Explore Hogwarts" on welcome page or "About Us" in navigation
2. System displays Café Information Page
3. User reads café history and background
4. User views café features (Great Hall, House Tables, Magical Ambiance)
5. User scrolls to view upcoming events
6. User reads event details
7. User optionally clicks "Reserve Your Spot" (non-functional)

**Alternative Flows:**
- 7a. User navigates to another page without interacting with events

### 6.4 Use Case 4: Navigate Between Pages

**Actor:** Guest/Customer  
**Preconditions:** User is on any page of the application  
**Postconditions:** User has navigated to desired page

**Main Flow:**
1. User identifies desired destination in navigation bar
2. User clicks navigation link
3. System performs client-side navigation
4. System displays requested page
5. System highlights active page in navigation

**Alternative Flows:**
- 2a. User clicks café logo to return to home page

---

## 7. Data Requirements

### 7.1 Data Entities

#### 7.1.1 Menu Item
- **name** (string): Display name of the food item
- **price** (number): Price in Galleons
- **desc** (string): Description or backstory
- **category** (string): One of 7 menu categories

#### 7.1.2 Cart Item
- **name** (string): Menu item name
- **price** (number): Item price
- (Note: No quantity tracking, duplicate entries for multiple quantities)


#### 7.1.3 Review
- **text** (string): Review content
- **photo** (File object): Optional uploaded image

#### 7.1.4 Event
- **title** (string): Event name
- **date** (string): Event date
- **description** (string): Event details

#### 7.1.5 Café Feature
- **title** (string): Feature name
- **description** (string): Feature details

### 7.2 Data Storage
- **Current Implementation:** All data stored in component state (React useState)
- **Persistence:** None - data lost on page refresh
- **Future Enhancement:** Backend API with database for persistent storage

---

## 8. External Interface Requirements

### 8.1 User Interfaces

#### 8.1.1 Welcome Page Interface
- Full-screen landing page with centered content card
- Animated background with magical elements
- Three prominent call-to-action buttons
- Footer with copyright information
- Responsive layout adapting to screen size

#### 8.1.2 Order Food Page Interface
- Left sidebar with category navigation (collapsible on mobile)
- Main content area with menu item grid (3 columns on desktop, 1-2 on mobile)
- Cart summary in sidebar
- Consistent navigation bar at top

#### 8.1.3 Cart Review Page Interface
- Centered content card with order summary
- List of cart items with prices
- Table number dropdown selector
- Confirm order button
- Consistent navigation and footer


#### 8.1.4 Reviews Page Interface
- Review submission form at top
- List of submitted reviews below
- Simple, functional layout
- Consistent navigation bar

#### 8.1.5 Café Information Page Interface
- Centered content with café description
- Grid layout for features (3 columns on desktop)
- Grid layout for events (3 columns on desktop)
- Consistent theming and navigation

### 8.2 Hardware Interfaces
- **Input Devices:** Mouse, touchscreen, keyboard
- **Display:** Any device with web browser and screen (320px minimum width)
- **Storage:** Browser local storage (not currently utilized)

### 8.3 Software Interfaces
- **Browser APIs:**
  - DOM API for rendering
  - History API for routing
  - File API for image uploads
  - URL API for object URLs
- **External Resources:**
  - Wikimedia Commons for house crest images
  - Google Fonts (if implemented)

### 8.4 Communications Interfaces
- **HTTP/HTTPS:** For initial application load
- **No API Communication:** Current version has no backend communication
- **Future:** RESTful API for order processing and data persistence

---

## 9. Future Enhancements

### 9.1 Backend Integration (Priority: High)
- **Order Management System**
  - Persistent order storage in database
  - Order status tracking (pending, preparing, ready, delivered)
  - Kitchen display system integration
  - Order history for customers

- **User Authentication**
  - User registration and login
  - Profile management
  - Order history per user
  - Saved preferences (favorite items, default table)


- **Review Management**
  - Persistent review storage
  - Review moderation system
  - Rating system (1-5 stars)
  - Review voting (helpful/not helpful)
  - Photo storage on server/CDN

### 9.2 Enhanced Ordering Features (Priority: High)
- **Advanced Cart Management**
  - Quantity adjustment in cart
  - Remove items from cart
  - Save cart for later
  - Cart total calculation with taxes

- **Customization Options**
  - Dietary restrictions filtering (vegetarian, vegan, gluten-free)
  - Allergen information
  - Special instructions per item
  - Portion size selection

- **Payment Integration**
  - Credit card processing
  - Digital wallet support (Apple Pay, Google Pay)
  - Order receipt generation
  - Tip calculation

### 9.3 Enhanced User Experience (Priority: Medium)
- **Personalization**
  - House sorting quiz
  - Personalized recommendations based on house
  - Favorite items list
  - Recent orders quick reorder

- **Social Features**
  - Share reviews on social media
  - Friend referral system
  - Group ordering for events
  - Photo gallery of customer submissions

- **Gamification**
  - Loyalty points system ("House Points")
  - Achievement badges
  - Leaderboards for most active reviewers
  - Special rewards for frequent visitors


### 9.4 Administrative Features (Priority: Medium)
- **Content Management**
  - Admin dashboard for menu management
  - Add/edit/remove menu items
  - Update event information
  - Manage café information content

- **Analytics and Reporting**
  - Order analytics (popular items, peak times)
  - Revenue reports
  - Customer feedback analysis
  - Inventory tracking integration

- **Review Moderation**
  - Approve/reject reviews
  - Flag inappropriate content
  - Respond to reviews
  - Featured reviews selection

### 9.5 Technical Enhancements (Priority: Medium)
- **Progressive Web App (PWA)**
  - Offline functionality
  - Add to home screen capability
  - Push notifications for order status
  - Background sync

- **Performance Optimization**
  - Image lazy loading
  - Code splitting for faster initial load
  - Service worker caching
  - CDN integration for assets

- **Accessibility Improvements**
  - Screen reader optimization
  - Keyboard navigation enhancements
  - High contrast mode
  - Reduced motion mode
  - Multi-language support

### 9.6 Additional Features (Priority: Low)
- **Reservation System**
  - Table reservation for events
  - Capacity management
  - Waitlist functionality
  - Reservation reminders

- **Interactive Elements**
  - Virtual tour of café
  - 360° photos of dining areas
  - Interactive menu with 3D food models
  - AR menu preview


- **Delivery Integration**
  - Delivery address management
  - Delivery tracking
  - Integration with third-party delivery services
  - Estimated delivery time

---

## 10. Appendices

### 10.1 Glossary

| Term | Definition |
|------|------------|
| **Galleon** | Fictional currency from Harry Potter universe used for pricing |
| **Great Hall** | Main dining hall at Hogwarts School of Witchcraft and Wizardry |
| **Hogsmeade** | Wizarding village near Hogwarts |
| **House** | One of four Hogwarts houses (Gryffindor, Slytherin, Ravenclaw, Hufflepuff) |
| **Horcrux** | Dark magical object from Harry Potter series (used ironically in café name) |
| **Muggle** | Non-magical person in Harry Potter universe |
| **SPA** | Single Page Application - web app that loads single HTML page and dynamically updates |
| **PWA** | Progressive Web App - web app with native app-like features |

### 10.2 Technology Stack Details

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Framework** | React | 18.3.1 | UI component library |
| **Routing** | React Router DOM | 7.1.3 | Client-side routing |
| **Styling** | Tailwind CSS | 3.4.17 | Utility-first CSS framework |
| **Build Tool** | Vite | 6.0.5 | Development server and bundler |
| **Linting** | ESLint | 9.17.0 | Code quality and consistency |
| **Package Manager** | npm | Latest | Dependency management |

### 10.3 File Structure

```
cafe/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── p1.JPG
│   │   ├── react.svg
│   │   └── welcome.jpg
│   ├── components/
│   │   ├── EventList.jsx
│   │   ├── FoodItem.jsx
│   │   ├── Gallery.jsx
│   │   ├── Navbar.jsx
│   │   ├── ReviewForm.jsx
│   │   └── ReviewList.jsx
│   ├── pages/
│   │   ├── CafePage.jsx
│   │   ├── CartReviewPage.jsx
│   │   ├── OrderConfirmationPage.jsx
│   │   ├── OrderFoodPage.jsx
│   │   ├── ReviewPage.jsx
│   │   └── WelcomePage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```


### 10.4 Menu Categories and Items

#### Hogwarts
- Treacle Tart (7 Galleons)
- Roast Beef (15 Galleons)
- Yorkshire Pudding (8 Galleons)
- Spotted Dick (6 Galleons)

#### Hogsmeade Treats
- Butterbeer (5 Galleons)
- Honeydukes Chocolate (8 Galleons)
- Fire Whisky (12 Galleons)
- Pumpkin Pasties (4 Galleons)

#### Weasleys Delight
- Molly's Meat Pies (10 Galleons)
- Christmas Pudding (7 Galleons)
- Mrs. Weasley's Fudge (6 Galleons)
- Corned Beef Sandwich (8 Galleons)

#### Magical Beverages
- Gillywater (4 Galleons)
- Pumpkin Juice (5 Galleons)
- Hot Chocolate (6 Galleons)
- Madam Rosmerta's Mead (9 Galleons)

#### Forbidden Treats
- Acid Pops (3 Galleons)
- Cockroach Clusters (5 Galleons)
- Bertie Bott's Beans (6 Galleons)
- Blood Lollipops (4 Galleons)

#### Three Brews Cauldron
- Leaky Soup (7 Galleons)
- Cauldron Cakes (5 Galleons)
- Dragon Tartare (18 Galleons)
- Knotgrass Mead (10 Galleons)

#### Elf Specials
- Kreacher's Onion Soup (8 Galleons)
- Dobby's Sock Cookies (6 Galleons)
- Kitchen Elf Stew (11 Galleons)
- Free Elf Fruitcake (7 Galleons)

### 10.5 Acceptance Criteria Summary

This SRS document shall be considered complete and acceptable when:
1. All functional requirements (FR-*) are clearly defined and testable
2. All non-functional requirements (NFR-*) include measurable criteria
3. Use cases cover all primary user workflows
4. Future enhancements are documented for roadmap planning
5. Technical constraints and dependencies are explicitly stated
6. All stakeholders have reviewed and approved the document


---

## Document Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Project Manager** | _______________ | _______________ | _______________ |
| **Lead Developer** | _______________ | _______________ | _______________ |
| **QA Lead** | _______________ | _______________ | _______________ |
| **Stakeholder** | _______________ | _______________ | _______________ |

---

## Revision History

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 1.0 | 2026-02-14 | Development Team | Initial SRS document creation |

---

**End of Software Requirements Specification Document**
