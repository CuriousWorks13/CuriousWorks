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
            '<a class="social-icon" href="#" aria-label="Instagram (placeholder)">IG</a>' +
            '<a class="social-icon" href="#" aria-label="YouTube (placeholder)">YT</a>' +
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
            '<li><a href="mailto:hello@example.com">hello@example.com <span class="placeholder-tag">Placeholder</span></a></li>' +
            '<li>Serving students nationwide <span class="placeholder-tag">Placeholder</span></li>' +
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

function cwInitChrome() {
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

/** Renders a course card. `withLink` (default true) points Enroll Now at enroll.html?course=slug */
function cwCourseCardHTML(course, options) {
  const opts = options || {};
  const badgeClass = course.spotsLeft <= 4 ? 'spots-badge low' : 'spots-badge';
  const spotsText = course.spotsLeft <= 0 ? 'Waitlist only' : course.spotsLeft + ' spots left of ' + course.spotsTotal;

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
