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
