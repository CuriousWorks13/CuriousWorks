/**
 * Curious Works — shared UI components (navbar, footer, course cards, reveal
 * animations, counters). Loaded on every page after courses-data.js.
 */

const CW_NAV_LINKS = [
  { href: 'about.html', label: 'About Us' },
  { href: 'courses.html', label: 'Courses' },
  { href: 'impact.html', label: 'Impact' },
  { href: 'join.html', label: 'Join Us' },
  { href: 'contact.html', label: 'Contact' }
];

/**
 * Light/dark theme. CW_DEFAULT_THEME is what new visitors see before they've
 * chosen for themselves; change it to 'light' or 'dark' to change the
 * site-wide default. Their own choice (once made) always wins via localStorage.
 * Keep this key in sync with the inline "prevent flash" script in each page's <head>.
 */
const CW_THEME_KEY = 'cw_theme';
const CW_DEFAULT_THEME = 'dark';

const CW_ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.2 19.8l1.8-1.8M18 6l1.8-1.8"/></svg>';
const CW_ICON_MOON = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 1 0 11 11Z"/></svg>';

function cwGetTheme() {
  try {
    return localStorage.getItem(CW_THEME_KEY) || CW_DEFAULT_THEME;
  } catch (e) {
    return CW_DEFAULT_THEME;
  }
}

/** Applies a theme site-wide: root attribute, logo images, and toggle button icon. */
function cwApplyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  document.querySelectorAll('.brand-mark').forEach(function (img) {
    img.src = theme === 'light' ? 'assets/logo-mark-light.png' : 'assets/logo-mark.png';
  });
  document.querySelectorAll('.brand-wordmark').forEach(function (img) {
    img.src = theme === 'light' ? 'assets/wordmark-light.png' : 'assets/wordmark.png';
  });

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.innerHTML = theme === 'light' ? CW_ICON_MOON : CW_ICON_SUN;
    toggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }

  try { localStorage.setItem(CW_THEME_KEY, theme); } catch (e) { /* localStorage unavailable — choice just won't persist */ }
}

/** Creates the fixed corner theme toggle button, once per page. */
function cwInitThemeToggle() {
  if (!document.getElementById('theme-toggle')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'theme-toggle';
    btn.className = 'theme-toggle';
    document.body.appendChild(btn);
    btn.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      cwApplyTheme(current === 'light' ? 'dark' : 'light');
    });
  }
  cwApplyTheme(cwGetTheme());
}

function cwHeaderTemplate(activePage) {
  const links = CW_NAV_LINKS.map(function (link) {
    const page = link.href.replace('.html', '');
    const active = page === activePage ? ' active' : '';
    return '<a href="' + link.href + '" class="' + active.trim() + '">' + link.label + '</a>';
  }).join('');

  const registerActive = activePage === 'register' ? ' active' : '';

  return (
    '<div class="navbar">' +
      '<a href="index.html" class="brand" aria-label="Curious Works home">' +
        '<img class="brand-mark" src="assets/logo-mark.png" alt="" height="34">' +
        '<img class="brand-wordmark" src="assets/wordmark.png" alt="Curious Works" height="20">' +
      '</a>' +
      '<nav class="nav-links" id="nav-links">' +
        links +
        '<a href="register.html" class="' + registerActive.trim() + '">Register</a>' +
        '<div class="nav-cta">' +
          '<a href="enroll.html" class="btn btn-primary btn-sm">Enroll Now</a>' +
        '</div>' +
      '</nav>' +
      '<button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>' +
    '</div>'
  );
}

function cwFooterTemplate() {
  const year = new Date().getFullYear();
  return (
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="index.html" class="brand" aria-label="Curious Works home">' +
            '<img class="brand-mark" src="assets/logo-mark.png" alt="" height="30">' +
            '<img class="brand-wordmark" src="assets/wordmark.png" alt="Curious Works" height="18">' +
          '</a>' +
          '<div class="footer-tagline">Pushing past our limits.</div>' +
          '<p>A student-led educational initiative bringing curiosity-driven learning to elementary and middle school students everywhere.</p>' +
          '<div class="social-row">' +
            '<a class="social-icon" href="https://www.instagram.com/curiousworks_/" target="_blank" rel="noopener" aria-label="Instagram">IG</a>' +
            '<a class="social-icon" href="#" aria-label="LinkedIn (placeholder)">in</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Explore</h4>' +
          '<ul>' +
            '<li><a href="about.html">About Us</a></li>' +
            '<li><a href="courses.html">Courses</a></li>' +
            '<li><a href="impact.html">Impact</a></li>' +
            '<li><a href="join.html">Join Us</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Get Started</h4>' +
          '<ul>' +
            '<li><a href="enroll.html">Enroll Now</a></li>' +
            '<li><a href="register.html">Register</a></li>' +
            '<li><a href="join.html">Become an Instructor</a></li>' +
            '<li><a href="contact.html">Contact Us</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>Contact</h4>' +
          '<ul>' +
            '<li><a href="mailto:info.curiousworks@gmail.com">info.curiousworks@gmail.com</a></li>' +
            '<li>Serving students nationwide</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="divider"></div>' +
      '<div class="footer-bottom">' +
        '<span>&copy; ' + year + ' Curious Works. All rights reserved.</span>' +
        '<span>Built by students, for students.</span>' +
      '</div>' +
    '</div>'
  );
}

/** Injects the fixed, viewport-pinned background (orbs + particles) once per page. */
function cwInitBackground() {
  if (document.querySelector('.site-bg')) return;
  const bg = document.createElement('div');
  bg.className = 'site-bg';
  bg.setAttribute('aria-hidden', 'true');
  bg.innerHTML =
    '<div class="orb orb-1"></div>' +
    '<div class="orb orb-2"></div>' +
    '<div class="orb orb-3"></div>' +
    '<canvas id="particle-canvas"></canvas>';
  document.body.insertBefore(bg, document.body.firstChild);
}

/**
 * Newsletter signup popup — appears 5s after page load, once ever (tracked
 * via localStorage), skipped on the Register page itself and for anyone who
 * has already registered. Submits to the same Formspree endpoint as the
 * full Register form.
 */
function cwInitNewsletterPopup() {
  if (localStorage.getItem('cw_popup_seen')) return;
  if (document.body.getAttribute('data-page') === 'register') return;

  setTimeout(function () {
    if (localStorage.getItem('cw_popup_seen')) return;
    cwShowNewsletterPopup();
  }, 5000);
}

function cwMarkPopupSeen() {
  try { localStorage.setItem('cw_popup_seen', '1'); } catch (e) { /* ignore */ }
}

function cwShowNewsletterPopup() {
  const overlay = document.createElement('div');
  overlay.className = 'newsletter-overlay';
  overlay.id = 'newsletter-overlay';
  overlay.innerHTML =
    '<div class="newsletter-modal" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">' +
      '<button type="button" class="newsletter-close" id="newsletter-close" aria-label="Close">&times;</button>' +
      '<div class="card-icon">✦</div>' +
      '<h3 id="newsletter-title">Never miss a class.</h3>' +
      '<p>Get an email when new courses and terms open up. No spam, unsubscribe anytime.</p>' +
      '<form id="newsletter-form" novalidate>' +
        '<div class="field">' +
          '<label for="newsletter-email" class="sr-only">Email Address</label>' +
          '<input type="email" id="newsletter-email" name="_replyto" placeholder="you@example.com" required>' +
        '</div>' +
        '<input type="hidden" name="_subject" value="New Curious Works Newsletter Signup (Popup)">' +
        '<button type="submit" class="btn btn-primary btn-block">Notify Me</button>' +
      '</form>' +
      '<div class="confirm-panel hidden" id="newsletter-confirm">' +
        '<div class="confirm-icon">✓</div>' +
        '<h3>You\'re on the list!</h3>' +
        '<p>We\'ll email you about new courses and important updates.</p>' +
      '</div>' +
      '<button type="button" class="btn-ghost newsletter-dismiss" id="newsletter-dismiss">No thanks</button>' +
    '</div>';

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  function close() {
    cwMarkPopupSeen();
    document.body.style.overflow = '';
    overlay.remove();
    document.removeEventListener('keydown', onKeydown);
  }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  document.getElementById('newsletter-close').addEventListener('click', close);
  document.getElementById('newsletter-dismiss').addEventListener('click', close);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', onKeydown);

  cwHandleForm('#newsletter-form', '#newsletter-confirm', {
    endpoint: 'https://formspree.io/f/myezezwb',
    onSuccess: function () {
      cwMarkPopupSeen();
      document.body.style.overflow = '';
      setTimeout(close, 2500);
    }
  });

  setTimeout(function () {
    const input = document.getElementById('newsletter-email');
    if (input) input.focus();
  }, 50);
}

function cwInitChrome() {
  cwInitBackground();
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const activePage = document.body.getAttribute('data-page') || '';

  if (header) {
    header.innerHTML = cwHeaderTemplate(activePage);
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    toggle.addEventListener('click', function () {
      const isOpen = header.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (footer) {
    footer.innerHTML = cwFooterTemplate();
  }

  cwInitThemeToggle();
  cwInitScrollReveal();
}

function cwInitScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in-view'); });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { observer.observe(el); });

  // Safety net: guarantee content never stays invisible if something
  // (a slow layout, an unrelated script error) keeps the observer from firing.
  setTimeout(function () {
    document.querySelectorAll('.reveal:not(.in-view)').forEach(function (el) {
      el.classList.add('in-view');
    });
  }, 2500);
}

/**
 * Per-visitor enrollment tracking (localStorage). There is no backend yet, so
 * this only reflects what THIS browser has actually enrolled in — it never
 * fabricates other people's activity. Once a real backend exists, swap this
 * for a live spots-remaining count from the API.
 */
function cwGetEnrolledSlugs() {
  try {
    return JSON.parse(localStorage.getItem('cw_enrollments') || '[]');
  } catch (e) {
    return [];
  }
}

function cwMarkEnrolled(slug) {
  try {
    const list = cwGetEnrolledSlugs();
    if (!list.includes(slug)) {
      list.push(slug);
      localStorage.setItem('cw_enrollments', JSON.stringify(list));
    }
  } catch (e) { /* localStorage unavailable — spots display just won't persist */ }
}

function cwSpotsLeftFor(course) {
  const takenByMe = cwGetEnrolledSlugs().includes(course.slug) ? 1 : 0;
  return Math.max(0, course.spotsLeft - takenByMe);
}

/** Renders a course card. `withLink` (default true) points Enroll Now at enroll.html?course=slug */
function cwCourseCardHTML(course, options) {
  const opts = options || {};
  const spotsLeft = cwSpotsLeftFor(course);
  const badgeClass = spotsLeft <= 4 ? 'spots-badge low' : 'spots-badge';
  const spotsText = spotsLeft <= 0 ? 'Waitlist only' : spotsLeft + ' spots left of ' + course.spotsTotal;
  const termPills = CW_TERMS.map(function (t) {
    return '<span class="term-pill">' + t.range + '</span>';
  }).join('');

  return (
    '<article class="course-card reveal" data-field="' + course.field + '">' +
      '<div class="course-banner">' + (CW_ICONS[course.icon] || '') + '</div>' +
      '<div class="course-body">' +
        '<span class="course-field">' + course.field + '</span>' +
        '<h3>' + course.title + '</h3>' +
        '<p class="course-desc">' + course.description + '</p>' +
        '<div class="course-meta">' +
          '<div class="meta-item"><span class="meta-label">Grade Range</span><span class="meta-value">' + course.ageRange + '</span></div>' +
          '<div class="meta-item"><span class="meta-label">Level</span><span class="meta-value">' + course.level + '</span></div>' +
          '<div class="meta-item"><span class="meta-label">Duration</span><span class="meta-value">' + course.duration + '</span></div>' +
          '<div class="meta-item"><span class="meta-label">Instructor</span><span class="meta-value">' + course.instructor + '</span></div>' +
        '</div>' +
        '<div class="term-availability">' +
          '<span class="meta-label">Available Terms</span>' +
          '<div class="term-pill-row">' + termPills + '</div>' +
        '</div>' +
        '<span class="' + badgeClass + '">' + spotsText + '</span>' +
        '<a href="' + (opts.withLink === false ? '#' : 'enroll.html?course=' + course.slug) + '" class="btn btn-primary btn-block">Enroll Now</a>' +
      '</div>' +
    '</article>'
  );
}

/** Animates a numeric counter from 0 to target when it scrolls into view. */
function cwAnimateCounters(selector) {
  const counters = document.querySelectorAll(selector || '[data-count]');
  if (!counters.length) return;

  function animate(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(function (el) { observer.observe(el); });
}

document.addEventListener('DOMContentLoaded', cwInitChrome);
document.addEventListener('DOMContentLoaded', cwInitNewsletterPopup);
