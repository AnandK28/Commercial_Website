# Ex02 Commercial Website
## Date: 2/11/26

## AIM
To create a commercial website using CSS Flexbox.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for Homepage, Products / Services, About Us, Contact Details and User Account.

### STEP 5
Include social media links at the footer with copyright information.

### STEP 6
Define global styles for fonts, colors, and layout.

### STEP 7
Style the header, navigation bar, and sections.

### STEP 8
Use Flexbox for layout design.

### STEP 9
Add hover effects and transitions for interactivity.

### STEP 10
Add Images and Media.

### STEP 11
Use optimized images for a professional look.

### STEP 12
Open the HTML file in a browser to check layout and functionality.

### STEP 13
Fix styling issues and refine content placement.

### STEP 14
Deploy the website.

### STEP 15
Upload to GitHub Pages for free hosting.

## PROGRAM
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Commercial smartphone store featuring flagship phones, technical specifications, certified trade-in services, and direct support.">
  <title>Apex Mobile | Smartphones &amp; Connected Devices</title>

  <!-- Typography: Inter for clean, legible, high-contrast readability -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Font Awesome for clean, functional icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Core Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- STEP 3 & STEP 7: Navigation Bar (Flexbox layout) -->
  <header class="site-header" id="header">
    <div class="nav-container">
      <a href="#home" class="brand" id="brand-link">
        <span class="brand-mark"><i class="fa-solid fa-mobile-screen"></i></span>
        <span class="brand-title">Apex Mobile</span>
      </a>

      <nav class="main-nav" id="main-nav" aria-label="Main Navigation">
        <ul class="nav-menu">
          <li><a href="#home" class="nav-item active">Home</a></li>
          <li><a href="#products" class="nav-item">Phones</a></li>
          <li><a href="#services" class="nav-item">Services</a></li>
          <li><a href="#about" class="nav-item">About</a></li>
          <li><a href="#contact" class="nav-item">Contact</a></li>
          <li><a href="#account" class="nav-item">Account</a></li>
        </ul>
      </nav>

      <div class="nav-utilities">
        <button class="nav-icon-button" id="cart-button" aria-label="Shopping Cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <span class="cart-count" id="cart-counter">1</span>
        </button>
        <a href="#account" class="button button-secondary button-compact" id="nav-login-link">Sign In</a>
        <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <main>
    <!-- STEP 4: Section 1 - Homepage / Hero -->
    <section class="section hero-section" id="home">
      <div class="site-wrapper">
        <div class="hero-grid">
          <div class="hero-text-block">
            <h1 class="hero-heading">Apex 9 Pro</h1>
            <p class="hero-subheading">
              6.7-inch Super Actua LTPO display, Tensor G4 processor, 50 MP triple camera system, and all-day battery life. Available in 128 GB, 256 GB, and 512 GB configurations.
            </p>
            <div class="hero-actions">
              <a href="#products" class="button button-primary">Buy from $999</a>
              <a href="#services" class="button button-secondary">Trade In Your Current Phone</a>
            </div>
            <div class="spec-strip">
              <div class="spec-unit">
                <span class="spec-value">6.7"</span>
                <span class="spec-label">120 Hz OLED</span>
              </div>
              <div class="spec-unit">
                <span class="spec-value">50 MP</span>
                <span class="spec-label">Main + 5x Telephoto</span>
              </div>
              <div class="spec-unit">
                <span class="spec-value">5,060 mAh</span>
                <span class="spec-label">30W Fast Charging</span>
              </div>
              <div class="spec-unit">
                <span class="spec-value">IP68</span>
                <span class="spec-label">Water &amp; Dust Proof</span>
              </div>
            </div>
          </div>
          <div class="hero-image-block">
            <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80" 
                 alt="Apex 9 Pro flagship smartphone hardware display" 
                 class="hero-photo"
                 loading="eager">
          </div>
        </div>
      </div>
    </section>

    <!-- STEP 4: Section 2 - Products Section -->
    <section class="section products-section" id="products">
      <div class="site-wrapper">
        <div class="section-title-wrap">
          <h2 class="section-heading">Smartphones and Hardware</h2>
          <p class="section-lead">Choose the model that fits your workflow and budget.</p>
        </div>

        <div class="filter-controls" id="product-filter-bar">
          <button class="filter-btn active" data-category="all">All Models</button>
          <button class="filter-btn" data-category="pro">Pro Series</button>
          <button class="filter-btn" data-category="standard">Standard</button>
          <button class="filter-btn" data-category="fold">Foldable</button>
        </div>

        <div class="card-grid" id="product-container">
          <!-- Card 1 -->
          <article class="product-item" data-category="pro">
            <div class="product-visual">
              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" 
                   alt="Apex 9 Pro Smartphone" 
                   class="product-image"
                   loading="lazy">
            </div>
            <div class="product-details">
              <div class="product-header">
                <h3 class="product-title">Apex 9 Pro</h3>
                <span class="product-price">$999</span>
              </div>
              <p class="product-summary">Professional-grade triple camera with 5x optical zoom, titanium frame, and 120 Hz display.</p>
              <ul class="product-features-list">
                <li><i class="fa-solid fa-check"></i> 6.7-inch OLED 120 Hz display</li>
                <li><i class="fa-solid fa-check"></i> 50 MP wide + 48 MP telephoto</li>
                <li><i class="fa-solid fa-check"></i> 12 GB RAM, up to 512 GB storage</li>
              </ul>
              <div class="product-action-row">
                <button class="button button-primary button-full purchase-btn" data-title="Apex 9 Pro" data-cost="999">Add to Bag</button>
              </div>
            </div>
          </article>

          <!-- Card 2 -->
          <article class="product-item" data-category="standard">
            <div class="product-visual">
              <img src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80" 
                   alt="Apex 9 Smartphone" 
                   class="product-image"
                   loading="lazy">
            </div>
            <div class="product-details">
              <div class="product-header">
                <h3 class="product-title">Apex 9</h3>
                <span class="product-price">$699</span>
              </div>
              <p class="product-summary">Compact 6.3-inch form factor with flagship performance and dual camera system.</p>
              <ul class="product-features-list">
                <li><i class="fa-solid fa-check"></i> 6.3-inch OLED 60 Hz to 120 Hz</li>
                <li><i class="fa-solid fa-check"></i> 50 MP wide + 12 MP ultrawide</li>
                <li><i class="fa-solid fa-check"></i> 8 GB RAM, 128 GB or 256 GB</li>
              </ul>
              <div class="product-action-row">
                <button class="button button-primary button-full purchase-btn" data-title="Apex 9" data-cost="699">Add to Bag</button>
              </div>
            </div>
          </article>

          <!-- Card 3 -->
          <article class="product-item" data-category="fold">
            <div class="product-visual">
              <img src="https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80" 
                   alt="Apex Fold Smartphone" 
                   class="product-image"
                   loading="lazy">
            </div>
            <div class="product-details">
              <div class="product-header">
                <h3 class="product-title">Apex Fold</h3>
                <span class="product-price">$1,799</span>
              </div>
              <p class="product-summary">Book-style foldable device opening to an 8.0-inch tablet-class internal workspace.</p>
              <ul class="product-features-list">
                <li><i class="fa-solid fa-check"></i> 8.0-inch inner display + 6.3-inch cover</li>
                <li><i class="fa-solid fa-check"></i> Precision gear zero-gap hinge</li>
                <li><i class="fa-solid fa-check"></i> 16 GB RAM, 512 GB storage</li>
              </ul>
              <div class="product-action-row">
                <button class="button button-primary button-full purchase-btn" data-title="Apex Fold" data-cost="1799">Add to Bag</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- STEP 4: Section 3 - Services Section -->
    <section class="section services-section" id="services">
      <div class="site-wrapper">
        <div class="section-title-wrap">
          <h2 class="section-heading">Services &amp; Ownership Support</h2>
          <p class="section-lead">Warranty protection, hardware repair, and cellular connectivity setup.</p>
        </div>

        <div class="card-grid">
          <div class="service-panel">
            <div class="service-top">
              <span class="service-glyph"><i class="fa-solid fa-arrow-right-arrow-left"></i></span>
              <h3 class="service-name">Direct Trade-In Credit</h3>
            </div>
            <p class="service-description">
              Receive up to $700 towards your new phone when you send in an eligible device. Prepaid shipping box included.
            </p>
            <a href="#contact" class="link-action">Calculate Device Value &rarr;</a>
          </div>

          <div class="service-panel">
            <div class="service-top">
              <span class="service-glyph"><i class="fa-solid fa-shield"></i></span>
              <h3 class="service-name">Apex Care Coverage</h3>
            </div>
            <p class="service-description">
              Two years of hardware coverage including accidental damage protection and 24-hour battery replacements.
            </p>
            <a href="#contact" class="link-action">Read Warranty Terms &rarr;</a>
          </div>

          <div class="service-panel">
            <div class="service-top">
              <span class="service-glyph"><i class="fa-solid fa-sim-card"></i></span>
              <h3 class="service-name">Carrier &amp; eSIM Setup</h3>
            </div>
            <p class="service-description">
              Direct digital eSIM activation across major 5G networks with no activation fee or physical store visit needed.
            </p>
            <a href="#contact" class="link-action">Check Compatibility &rarr;</a>
          </div>

          <div class="service-panel">
            <div class="service-top">
              <span class="service-glyph"><i class="fa-solid fa-wrench"></i></span>
              <h3 class="service-name">Authorized Repair Centers</h3>
            </div>
            <p class="service-description">
              Certified repairs using original equipment manufacturer parts with same-day appointments in 42 major cities.
            </p>
            <a href="#contact" class="link-action">Find a Location &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- STEP 4: Section 4 - About Us Section -->
    <section class="section about-section" id="about">
      <div class="site-wrapper">
        <div class="split-layout">
          <div class="split-media">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" 
                 alt="Apex engineering and test facility" 
                 class="about-photo"
                 loading="lazy">
          </div>
          <div class="split-content">
            <h2 class="section-heading">Built with Focus and Transparency</h2>
            <p class="text-paragraph">
              Apex Mobile manufactures smartphones for customers who value dependable hardware, clean software without pre-installed bloatware, and direct technical service.
            </p>
            <p class="text-paragraph">
              All devices receive guaranteed operating system and security updates for seven years from initial release. We publish repair manuals and provide modular replacement parts directly to consumers and independent repair technicians.
            </p>
            <div class="stats-table">
              <div class="stat-entry">
                <span class="stat-big">7 Years</span>
                <span class="stat-sub">Guaranteed OS &amp; Security Updates</span>
              </div>
              <div class="stat-entry">
                <span class="stat-big">100%</span>
                <span class="stat-sub">Recycled Aluminum Enclosures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STEP 4: Section 5 - User Account Section -->
    <section class="section account-section" id="account">
      <div class="site-wrapper">
        <div class="section-title-wrap">
          <h2 class="section-heading">Customer Account</h2>
          <p class="section-lead">Manage your orders, device registrations, and service requests.</p>
        </div>

        <div class="account-card">
          <div class="account-segmented-control">
            <button class="account-segment-btn active" id="btn-tab-signin">Sign In</button>
            <button class="account-segment-btn" id="btn-tab-register">Register Device</button>
          </div>

          <!-- Sign In Form -->
          <div class="account-form-panel" id="panel-signin">
            <form id="signin-form" onsubmit="return false;">
              <div class="input-field">
                <label for="signin-email">Email Address</label>
                <input type="email" id="signin-email" name="email" autocomplete="email" placeholder="name@domain.com" required>
              </div>
              <div class="input-field">
                <div class="field-label-split">
                  <label for="signin-password">Password</label>
                  <a href="#" class="inline-help">Reset password</a>
                </div>
                <input type="password" id="signin-password" name="password" autocomplete="current-password" placeholder="Password" required>
              </div>
              <button type="submit" class="button button-primary button-full" id="signin-submit">Sign In</button>
            </form>
          </div>

          <!-- Register Device Form -->
          <div class="account-form-panel" id="panel-register" style="display: none;">
            <form id="register-form" onsubmit="return false;">
              <div class="input-field">
                <label for="reg-imei">Device IMEI or Serial Number</label>
                <input type="text" id="reg-imei" name="imei" placeholder="15-digit number from device box or settings" required>
              </div>
              <div class="input-field">
                <label for="reg-purchase-date">Purchase Date</label>
                <input type="date" id="reg-purchase-date" name="purchase_date" required>
              </div>
              <div class="input-field">
                <label for="reg-owner-email">Owner Email</label>
                <input type="email" id="reg-owner-email" name="owner_email" placeholder="name@domain.com" required>
              </div>
              <button type="submit" class="button button-primary button-full" id="register-submit">Verify Warranty</button>
            </form>
          </div>

          <div class="account-status-message" id="account-status" style="display: none;"></div>
        </div>
      </div>
    </section>

    <!-- STEP 4: Section 6 - Contact Details Section -->
    <section class="section contact-section" id="contact">
      <div class="site-wrapper">
        <div class="section-title-wrap">
          <h2 class="section-heading">Contact and Support</h2>
          <p class="section-lead">Direct lines to sales assistance and certified hardware specialists.</p>
        </div>

        <div class="contact-grid">
          <div class="contact-details-box">
            <div class="contact-row">
              <span class="contact-label">Customer Support</span>
              <span class="contact-value"><a href="tel:18005550199">+1 (800) 555-0199</a></span>
              <span class="contact-note">Monday to Friday: 8:00 AM to 8:00 PM EST</span>
            </div>

            <div class="contact-row">
              <span class="contact-label">Direct Email</span>
              <span class="contact-value"><a href="mailto:support@apexmobile.com">support@apexmobile.com</a></span>
              <span class="contact-note">Average response time: 4 business hours</span>
            </div>

            <div class="contact-row">
              <span class="contact-label">Corporate Office</span>
              <span class="contact-value">Apex Mobile Inc.<br>450 Howard Street, Suite 400<br>San Francisco, CA 94105</span>
            </div>
          </div>

          <div class="contact-form-box">
            <form id="support-inquiry-form" onsubmit="return false;">
              <div class="form-double-row">
                <div class="input-field">
                  <label for="inquiry-name">Full Name</label>
                  <input type="text" id="inquiry-name" name="name" required placeholder="Alex Morgan">
                </div>
                <div class="input-field">
                  <label for="inquiry-email">Email Address</label>
                  <input type="email" id="inquiry-email" name="email" required placeholder="alex@domain.com">
                </div>
              </div>

              <div class="input-field">
                <label for="inquiry-topic">Topic</label>
                <select id="inquiry-topic" name="topic" required>
                  <option value="" disabled selected>Select a department</option>
                  <option value="orders">Orders &amp; Delivery</option>
                  <option value="tradein">Device Trade-In</option>
                  <option value="technical">Technical Support</option>
                  <option value="enterprise">Corporate Procurement</option>
                </select>
              </div>

              <div class="input-field">
                <label for="inquiry-message">Inquiry Details</label>
                <textarea id="inquiry-message" name="message" rows="4" required placeholder="Describe your question or order number"></textarea>
              </div>

              <button type="submit" class="button button-primary button-full" id="inquiry-submit">Submit Inquiry</button>
              <div class="inquiry-feedback" id="inquiry-feedback" style="display: none;"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- STEP 5: Footer with Social Media Links & Copyright Information -->
  <footer class="site-footer">
    <div class="site-wrapper">
      <div class="footer-primary-row">
        <div class="footer-company-info">
          <span class="footer-brand-title">Apex Mobile</span>
          <p class="footer-desc">Commercial mobile hardware, certified service centers, and direct consumer support.</p>
        </div>

        <div class="footer-navigation-columns">
          <div class="footer-col">
            <span class="footer-heading">Products</span>
            <ul class="footer-links">
              <li><a href="#products">Apex 9 Pro</a></li>
              <li><a href="#products">Apex 9</a></li>
              <li><a href="#products">Apex Fold</a></li>
              <li><a href="#services">Trade-In</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <span class="footer-heading">Support</span>
            <ul class="footer-links">
              <li><a href="#services">Care Coverage</a></li>
              <li><a href="#services">Repair Status</a></li>
              <li><a href="#account">Device Registration</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <span class="footer-heading">Social</span>
            <!-- STEP 5: Social Media Links -->
            <ul class="footer-links">
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter"></i> X / Twitter</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- STEP 5: Copyright Information -->
      <div class="footer-bottom-row">
        <span class="footer-copyright">&copy; 2026 Apex Mobile Inc. All rights reserved.</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sale</a>
          <a href="#">Warranty Guidelines</a>
          <a href="#">Recycling Program</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Notification Bar for Bag updates -->
  <div class="notification-bar" id="notification-bar" aria-live="polite"></div>

  <!-- Client Logic -->
  <script src="script.js"></script>
</body>
</html>

```

```css
/* ==========================================================================
   APEX MOBILE - COMMERCIAL STYLESHEET (style.css)
   Clean, authentic, high-contrast commercial design.
   Adheres to strict design guidelines:
   - No purple-blue gradients
   - No gradient headline text
   - No frosted-glass / glassmorphism cards
   - No low-contrast dark mode
   - Strict 8-point typographic & spacing grid
   - Comprehensive Flexbox layouts (STEP 8)
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Design System Tokens (STEP 6)
   -------------------------------------------------------------------------- */
:root {
  /* Neutral Color Palette (High-Contrast Commercial Store) */
  --color-page-bg: #ffffff;
  --color-surface-subtle: #f5f5f7;
  --color-surface-card: #ffffff;
  --color-border: #d2d2d7;
  --color-border-light: #e5e5ea;

  /* Typography Colors */
  --color-text-primary: #1d1d1f;
  --color-text-secondary: #6e6e73;
  --color-text-tertiary: #86868b;
  --color-text-inverse: #ffffff;

  /* Primary Accent (Commercial Action Blue) */
  --color-action: #0071e3;
  --color-action-hover: #0077ed;
  --color-action-active: #0062c4;

  /* Fonts */
  --font-stack: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;

  /* Spacing Scale (Mathematical 8px Grid) */
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;

  /* Layout */
  --max-width: 1140px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-pill: 980px;
}

/* --------------------------------------------------------------------------
   2. Reset & Global Styles (STEP 6)
   -------------------------------------------------------------------------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-stack);
  background-color: var(--color-page-bg);
  color: var(--color-text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: 1rem;
  color: inherit;
  border: none;
  background: none;
}

.site-wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-24);
}

.section {
  padding: var(--space-80) 0;
}

/* Section Header Structure */
.section-title-wrap {
  margin-bottom: var(--space-48);
}

.section-heading {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-primary);
  margin-bottom: var(--space-8);
}

.section-lead {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
}

/* --------------------------------------------------------------------------
   3. Buttons & Controls (STEP 9: Tactile, Non-fade Hover States)
   -------------------------------------------------------------------------- */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  white-space: nowrap;
}

.button-primary {
  background-color: var(--color-action);
  color: var(--color-text-inverse);
}

.button-primary:hover {
  background-color: var(--color-action-hover);
}

.button-primary:active {
  background-color: var(--color-action-active);
}

.button-secondary {
  background-color: var(--color-surface-subtle);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.button-secondary:hover {
  background-color: #ebebee;
}

.button-compact {
  padding: 6px 14px;
  font-size: 0.875rem;
}

.button-full {
  width: 100%;
}

.link-action {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-action);
  display: inline-flex;
  align-items: center;
  gap: var(--space-8);
}

.link-action:hover {
  text-decoration: underline;
}

/* --------------------------------------------------------------------------
   4. Header & Navigation (STEP 3, 7, 8: Flexbox)
   -------------------------------------------------------------------------- */
.site-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--color-border-light);
  z-index: 1000;
}

.nav-container {
  max-width: var(--max-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--space-24);
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  gap: var(--space-8);
  color: var(--color-text-primary);
}

.brand-mark {
  font-size: 1.125rem;
}

.brand-title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.main-nav {
  display: flex;
}

.nav-menu {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  gap: var(--space-32);
}

.nav-item {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  font-weight: 400;
  transition: color 0.15s ease;
}

.nav-item:hover,
.nav-item.active {
  color: var(--color-text-primary);
}

.nav-utilities {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  gap: var(--space-16);
}

.nav-icon-button {
  position: relative;
  font-size: 0.9375rem;
  color: var(--color-text-primary);
  cursor: pointer;
  padding: 6px;
}

.cart-count {
  position: absolute;
  top: -2px;
  right: -6px;
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
  font-size: 0.6875rem;
  font-weight: 600;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 22px;
  height: 18px;
  cursor: pointer;
}

.mobile-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
  border-radius: 2px;
}

/* --------------------------------------------------------------------------
   5. Hero Section (STEP 4, 7, 8, 10, 11)
   -------------------------------------------------------------------------- */
.hero-section {
  background-color: var(--color-surface-subtle);
  border-bottom: 1px solid var(--color-border-light);
  padding: var(--space-64) 0;
}

.hero-grid {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  justify-content: space-between;
  gap: var(--space-48);
}

.hero-text-block {
  flex: 1;
}

.hero-heading {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);
  line-height: 1.1;
  margin-bottom: var(--space-16);
}

.hero-subheading {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-24);
  max-width: 540px;
}

.hero-actions {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  gap: var(--space-16);
  margin-bottom: var(--space-32);
}

.spec-strip {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-32);
  padding-top: var(--space-24);
  border-top: 1px solid var(--color-border);
}

.spec-unit {
  display: flex;
  flex-direction: column;
}

.spec-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.spec-label {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}

.hero-image-block {
  flex: 1;
  display: flex;
  justify-content: center;
}

.hero-photo {
  max-width: 420px;
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
  background-color: #ffffff;
}

/* --------------------------------------------------------------------------
   6. Products Section (STEP 4, 8, 10, 11)
   -------------------------------------------------------------------------- */
.filter-controls {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-8);
  margin-bottom: var(--space-32);
}

.filter-btn {
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  cursor: pointer;
}

.filter-btn:hover {
  background-color: var(--color-surface-subtle);
  color: var(--color-text-primary);
}

.filter-btn.active {
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
  border-color: var(--color-text-primary);
}

/* Card Grid (STEP 8: Flexbox) */
.card-grid {
  display: flex; /* STEP 8: Flexbox */
  flex-wrap: wrap;
  gap: var(--space-24);
}

.product-item {
  flex: 1 1 calc(33.333% - var(--space-24));
  min-width: 280px;
  background-color: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.product-visual {
  height: 220px;
  background-color: var(--color-surface-subtle);
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--space-8);
}

.product-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.product-price {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.product-summary {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-16);
}

.product-features-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin-bottom: var(--space-24);
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}

.product-features-list li {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.product-features-list i {
  color: var(--color-action);
  font-size: 0.75rem;
}

.product-action-row {
  margin-top: auto;
}

/* --------------------------------------------------------------------------
   7. Services Section (STEP 4, 8)
   -------------------------------------------------------------------------- */
.services-section {
  background-color: var(--color-surface-subtle);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
}

.service-panel {
  flex: 1 1 calc(50% - var(--space-24));
  min-width: 280px;
  background-color: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-32);
  display: flex;
  flex-direction: column;
}

.service-top {
  display: flex;
  align-items: center;
  gap: var(--space-16);
  margin-bottom: var(--space-16);
}

.service-glyph {
  font-size: 1.25rem;
  color: var(--color-text-primary);
  width: 40px;
  height: 40px;
  background-color: var(--color-surface-subtle);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.service-description {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-24);
  flex-grow: 1;
}

/* --------------------------------------------------------------------------
   8. About Us Section (STEP 4, 8, 10, 11)
   -------------------------------------------------------------------------- */
.split-layout {
  display: flex; /* STEP 8: Flexbox */
  align-items: center;
  gap: var(--space-48);
}

.split-media {
  flex: 1;
}

.about-photo {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
}

.split-content {
  flex: 1;
}

.text-paragraph {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-16);
}

.stats-table {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-32);
  margin-top: var(--space-32);
  padding-top: var(--space-24);
  border-top: 1px solid var(--color-border-light);
}

.stat-entry {
  display: flex;
  flex-direction: column;
}

.stat-big {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-primary);
}

.stat-sub {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}

/* --------------------------------------------------------------------------
   9. User Account Section (STEP 4, 8)
   -------------------------------------------------------------------------- */
.account-section {
  background-color: var(--color-surface-subtle);
  border-top: 1px solid var(--color-border-light);
  border-bottom: 1px solid var(--color-border-light);
}

.account-card {
  max-width: 520px;
  margin: 0 auto;
  background-color: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-32);
}

.account-segmented-control {
  display: flex; /* STEP 8: Flexbox */
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  margin-bottom: var(--space-24);
}

.account-segment-btn {
  flex: 1;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  background-color: var(--color-surface-subtle);
  cursor: pointer;
  text-align: center;
}

.account-segment-btn.active {
  background-color: #ffffff;
  color: var(--color-text-primary);
  font-weight: 600;
}

.input-field {
  margin-bottom: var(--space-16);
}

.input-field label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: 6px;
}

.field-label-split {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.inline-help {
  font-size: 0.75rem;
  color: var(--color-action);
}

.input-field input,
.input-field select,
.input-field textarea {
  width: 100%;
  padding: 10px 12px;
  background-color: #ffffff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-size: 0.9375rem;
}

.input-field input:focus,
.input-field select:focus,
.input-field textarea:focus {
  outline: none;
  border-color: var(--color-action);
}

.account-status-message {
  margin-top: var(--space-16);
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface-subtle);
  font-size: 0.875rem;
  color: var(--color-text-primary);
}

/* --------------------------------------------------------------------------
   10. Contact Section (STEP 4, 8)
   -------------------------------------------------------------------------- */
.contact-grid {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-48);
}

.contact-details-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

.contact-row {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-border-light);
  padding-bottom: var(--space-16);
}

.contact-label {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-tertiary);
  margin-bottom: 4px;
}

.contact-value {
  font-size: 1.0625rem;
  font-weight: 500;
  color: var(--color-text-primary);
}

.contact-value a:hover {
  color: var(--color-action);
}

.contact-note {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  margin-top: 4px;
}

.contact-form-box {
  flex: 1.2;
  background-color: var(--color-surface-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-32);
}

.form-double-row {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-16);
}

.form-double-row .input-field {
  flex: 1;
}

.inquiry-feedback {
  margin-top: var(--space-16);
  padding: 10px 14px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-sm);
  color: #166534;
  font-size: 0.875rem;
}

/* --------------------------------------------------------------------------
   11. Footer (STEP 5, 8, 9)
   -------------------------------------------------------------------------- */
.site-footer {
  background-color: var(--color-surface-subtle);
  border-top: 1px solid var(--color-border-light);
  padding: var(--space-48) 0 var(--space-24) 0;
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}

.footer-primary-row {
  display: flex; /* STEP 8: Flexbox */
  justify-content: space-between;
  gap: var(--space-48);
  margin-bottom: var(--space-48);
}

.footer-company-info {
  max-width: 320px;
}

.footer-brand-title {
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-8);
}

.footer-desc {
  line-height: 1.5;
}

.footer-navigation-columns {
  display: flex; /* STEP 8: Flexbox */
  gap: var(--space-48);
}

.footer-heading {
  display: block;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-16);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.footer-links a:hover {
  color: var(--color-text-primary);
  text-decoration: underline;
}

.footer-bottom-row {
  display: flex; /* STEP 8: Flexbox */
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border-light);
  padding-top: var(--space-24);
  flex-wrap: wrap;
  gap: var(--space-16);
}

.footer-legal {
  display: flex;
  gap: var(--space-16);
}

.footer-legal a:hover {
  color: var(--color-text-primary);
  text-decoration: underline;
}

/* --------------------------------------------------------------------------
   12. Notification Bar
   -------------------------------------------------------------------------- */
.notification-bar {
  position: fixed;
  bottom: var(--space-24);
  right: var(--space-24);
  background-color: var(--color-text-primary);
  color: var(--color-text-inverse);
  padding: 12px 20px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  display: none;
  z-index: 2000;
}

/* --------------------------------------------------------------------------
   13. Responsive Media Queries
   -------------------------------------------------------------------------- */
@media (max-width: 900px) {
  .hero-grid {
    flex-direction: column;
    text-align: left;
  }

  .split-layout {
    flex-direction: column;
  }

  .contact-grid {
    flex-direction: column;
  }

  .footer-primary-row {
    flex-direction: column;
    gap: var(--space-32);
  }

  .footer-navigation-columns {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .main-nav {
    display: none;
  }

  .main-nav.active {
    display: flex;
    position: absolute;
    top: 52px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid var(--color-border-light);
    padding: var(--space-24);
  }

  .nav-menu {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-16);
    width: 100%;
  }

  .mobile-toggle {
    display: flex;
  }

  .form-double-row {
    flex-direction: column;
    gap: 0;
  }

  .footer-bottom-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

```

```js
/**
 * Apex Mobile - Commercial Client Script (script.js)
 * High-performance, clean interaction logic:
 * - Navigation menu toggle
 * - Active section highlighting
 * - Product category filtering
 * - Add-to-bag notification
 * - Account segmented control tab switching
 * - Form validation and submission
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const navItems = document.querySelectorAll('.nav-item');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 2. Active Section Highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 80;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-item[href="#${id}"]`);

      if (navLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          navItems.forEach(n => n.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  });

  // 3. Product Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Shopping Bag Counter & Notification
  const purchaseButtons = document.querySelectorAll('.purchase-btn');
  const cartCounter = document.getElementById('cart-counter');
  const notificationBar = document.getElementById('notification-bar');
  let currentCount = 1;

  purchaseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const itemTitle = btn.getAttribute('data-title');
      const itemCost = btn.getAttribute('data-cost');
      currentCount += 1;
      if (cartCounter) {
        cartCounter.textContent = currentCount;
      }
      showNotification(`${itemTitle} ($${itemCost}) added to your shopping bag.`);
    });
  });

  function showNotification(message) {
    if (!notificationBar) return;
    notificationBar.textContent = message;
    notificationBar.style.display = 'block';

    clearTimeout(notificationBar.timer);
    notificationBar.timer = setTimeout(() => {
      notificationBar.style.display = 'none';
    }, 3000);
  }

  // 5. Account Segmented Control (Sign In vs Register Device)
  const btnTabSignIn = document.getElementById('btn-tab-signin');
  const btnTabRegister = document.getElementById('btn-tab-register');
  const panelSignIn = document.getElementById('panel-signin');
  const panelRegister = document.getElementById('panel-register');
  const accountStatus = document.getElementById('account-status');

  if (btnTabSignIn && btnTabRegister && panelSignIn && panelRegister) {
    btnTabSignIn.addEventListener('click', () => {
      btnTabSignIn.classList.add('active');
      btnTabRegister.classList.remove('active');
      panelSignIn.style.display = 'block';
      panelRegister.style.display = 'none';
      if (accountStatus) accountStatus.style.display = 'none';
    });

    btnTabRegister.addEventListener('click', () => {
      btnTabRegister.classList.add('active');
      btnTabSignIn.classList.remove('active');
      panelSignIn.style.display = 'none';
      panelRegister.style.display = 'block';
      if (accountStatus) accountStatus.style.display = 'none';
    });
  }

  // Sign In Form Handler
  const signinForm = document.getElementById('signin-form');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signin-email').value;
      if (accountStatus) {
        accountStatus.textContent = `Signed in as ${email}. Redirecting to order history...`;
        accountStatus.style.display = 'block';
      }
    });
  }

  // Register Form Handler
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const imei = document.getElementById('reg-imei').value;
      if (accountStatus) {
        accountStatus.textContent = `Device IMEI ${imei} verified. Apex Care coverage is active until 2028.`;
        accountStatus.style.display = 'block';
      }
    });
  }

  // 6. Contact & Support Inquiry Submission
  const inquiryForm = document.getElementById('support-inquiry-form');
  const inquiryFeedback = document.getElementById('inquiry-feedback');

  if (inquiryForm && inquiryFeedback) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name').value;
      inquiryFeedback.textContent = `Thank you, ${name}. Your ticket reference has been logged. Our support team will follow up via email.`;
      inquiryFeedback.style.display = 'block';
      inquiryForm.reset();

      setTimeout(() => {
        inquiryFeedback.style.display = 'none';
      }, 6000);
    });
  }
});

```

## OUTPUT
<img width="1215" height="850" alt="Screenshot 2026-11-03 131222" src="https://github.com/user-attachments/assets/763e117b-ff18-431f-aa05-039290e91547" />
<img width="1187" height="865" alt="Screenshot 2026-11-03 131247" src="https://github.com/user-attachments/assets/9e482392-a768-43b3-a95a-48dfc197910f" />
<img width="1223" height="820" alt="Screenshot 2026-11-03 131302" src="https://github.com/user-attachments/assets/7de17cd5-3c2c-483b-9455-bbc27ff6cc21" />




## RESULT
The program for creating commercial website using CSS Flexbox is executed successfully.
