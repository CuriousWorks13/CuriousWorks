/**
 * Curious Works — shared course catalog data.
 * Single source of truth used by courses.html (catalog), index.html (featured),
 * and enroll.html (course picker / summary lookup).
 *
 * PLACEHOLDER DATA: instructor names, spot counts, and schedule details below
 * are examples only — replace with real program details before launch.
 */

/**
 * Every course runs the same four terms per year. Each term spans the first
 * Saturday through the last Sunday of its month, meeting Saturdays & Sundays
 * (8 sessions ≈ the 4-week course length). Terms below all land on exactly
 * 8 weekend dates within the month itself — none needed the "spill into the
 * start of next month" fallback, but that's the rule to follow if a future
 * term's month doesn't line up to 8 sessions on its own.
 */
const CW_TERMS = [
  { key: 'nov-2026', label: 'November 2026', range: 'Nov 7 – Nov 29, 2026' },
  { key: 'dec-2026', label: 'December 2026', range: 'Dec 5 – Dec 27, 2026' },
  { key: 'feb-2027', label: 'February 2027', range: 'Feb 6 – Feb 28, 2027' },
  { key: 'apr-2027', label: 'April 2027', range: 'Apr 3 – Apr 25, 2027' }
];

const CW_ICONS = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20C4 11 11 4 20 4c0 9-7 16-16 16Z"/><path d="M4 20 12 12"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="M8.5 14h7"/></svg>',
  atom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 20s-7-4.35-9.5-8.5C1 8 2.5 4.5 6 4.5c2 0 3.5 1.2 4 2.5.5-1.3 2-2.5 4-2.5 3.5 0 5 3.5 3.5 7C19 15.65 12 20 12 20Z"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7l5 5-5 5"/><path d="M13 17h6"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 6.5l-3 11"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8.1 8.3 10 16M15.9 8.3 14 16M8.4 7h7.2"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  plusminus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v8M8 9h8M8 17h8"/></svg>',
  variable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 5l14 14M19 5 5 19"/></svg>',
  shapes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><circle cx="7" cy="7" r="3.2"/><rect x="13" y="4" width="7" height="7" rx="1"/><path d="M8 20l4-8 4 8Z"/></svg>',
  wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c1.5-4 3-6 4.5-6s3 8 4.5 8 3-8 4.5-8 3 6 4.5 6"/></svg>',
  integral: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M16 4c-2 0-3 1.5-3 4v8c0 2.5-1 4-3 4"/><path d="M8 4h2M14 20h2"/></svg>'
};

const CW_COURSES = [
  // --- Science ---
  {
    slug: 'biology',
    title: 'Biology',
    field: 'Science',
    icon: 'leaf',
    description: 'Explore cells, genetics, and ecosystems through hands-on models and experiments that reveal how living things work.',
    ageRange: 'Grades 6–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Maya Whitfield', // placeholder
    spotsTotal: 15,
    spotsLeft: 8
  },
  {
    slug: 'chemistry',
    title: 'Chemistry',
    field: 'Science',
    icon: 'flask',
    description: 'Mix, react, and observe: an introduction to atoms, molecules, and chemical reactions through safe, guided experiments.',
    ageRange: 'Grades 7–8',
    level: 'Intermediate',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Priya Natarajan', // placeholder
    spotsTotal: 15,
    spotsLeft: 5
  },
  {
    slug: 'physics',
    title: 'Physics',
    field: 'Science',
    icon: 'atom',
    description: 'Investigate motion, forces, and energy through simple experiments that make the rules of the physical world click.',
    ageRange: 'Grades 7–8',
    level: 'Intermediate',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Daniel Osei', // placeholder
    spotsTotal: 15,
    spotsLeft: 7
  },
  {
    slug: 'anatomy-and-physiology',
    title: 'Anatomy & Physiology',
    field: 'Science',
    icon: 'heart',
    description: 'Explore how the heart, brain, lungs, and muscles work together, through models, diagrams, and simple hands-on experiments.',
    ageRange: 'Grades 6–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Sofia Marchetti', // placeholder
    spotsTotal: 15,
    spotsLeft: 10
  },

  // --- Computer Science & Technology ---
  {
    slug: 'python',
    title: 'Python',
    field: 'Computer Science & Technology',
    icon: 'terminal',
    description: 'Write real programs from scratch: variables, loops, and functions, building toward small games and tools.',
    ageRange: 'Grades 5–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Ethan Park', // placeholder
    spotsTotal: 15,
    spotsLeft: 6
  },
  {
    slug: 'html',
    title: 'HTML',
    field: 'Computer Science & Technology',
    icon: 'code',
    description: 'Build real web pages from scratch, learning the building blocks every website is made of.',
    ageRange: 'Grades 5–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Noah Bennett', // placeholder
    spotsTotal: 15,
    spotsLeft: 10
  },
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    field: 'Computer Science & Technology',
    icon: 'network',
    description: 'A hands-on first look at how machines learn, from pattern recognition to simple neural networks, through visual tools and real examples.',
    ageRange: 'Grades 5–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Aiden Cho', // placeholder
    spotsTotal: 15,
    spotsLeft: 5
  },

  // --- Business ---
  {
    slug: 'introduction-to-business',
    title: 'Introduction to Business',
    field: 'Business',
    icon: 'chart',
    description: 'Turn an idea into a plan: students design a product, build a brand, and pitch a business in a final showcase.',
    ageRange: 'Grades 6–8',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Renee Ibarra', // placeholder
    spotsTotal: 15,
    spotsLeft: 7
  },

  // --- Mathematics ---
  {
    slug: 'pre-algebra',
    title: 'Pre-Algebra',
    field: 'Mathematics',
    icon: 'plusminus',
    description: 'Build a rock-solid foundation in operations, fractions, and ratios to get ready for algebra.',
    ageRange: 'Grades 5–6',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Lily Chen', // placeholder
    spotsTotal: 15,
    spotsLeft: 11
  },
  {
    slug: 'algebra-1',
    title: 'Algebra 1',
    field: 'Mathematics',
    icon: 'variable',
    description: 'Master variables, equations, and functions with plenty of practice and real-world problem solving.',
    ageRange: 'Grades 6–7',
    level: 'Beginner',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Marcus Webb', // placeholder
    spotsTotal: 15,
    spotsLeft: 8
  },
  {
    slug: 'geometry',
    title: 'Geometry',
    field: 'Mathematics',
    icon: 'shapes',
    description: 'Explore shapes, proofs, and spatial reasoning through visual, hands-on problem solving.',
    ageRange: 'Grades 7–8',
    level: 'Intermediate',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Ava Torres', // placeholder
    spotsTotal: 15,
    spotsLeft: 6
  },
  {
    slug: 'algebra-2',
    title: 'Algebra 2',
    field: 'Mathematics',
    icon: 'variable',
    description: 'Extend algebra into polynomials, exponentials, and functions, building toward trigonometry and calculus.',
    ageRange: 'Grades 7–8',
    level: 'Intermediate',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Marcus Webb', // placeholder
    spotsTotal: 15,
    spotsLeft: 3
  },
  {
    slug: 'trigonometry',
    title: 'Trigonometry',
    field: 'Mathematics',
    icon: 'wave',
    description: 'Learn the relationships between angles and sides, and how trig functions describe waves and cycles.',
    ageRange: 'Grade 8',
    level: 'Intermediate',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Ryan Delacroix', // placeholder
    spotsTotal: 15,
    spotsLeft: 7
  },
  {
    slug: 'introduction-to-calculus',
    title: 'Introduction to Calculus',
    field: 'Mathematics',
    icon: 'integral',
    description: 'A first look at limits, derivatives, and rates of change for students ready to go beyond algebra.',
    ageRange: 'Grade 8',
    level: 'Advanced',
    duration: '4 weeks · 1 hr/session · Online',
    instructor: 'Grace Kim', // placeholder
    spotsTotal: 15,
    spotsLeft: 3
  }
];

function cwFindCourse(slug) {
  return CW_COURSES.find(function (c) { return c.slug === slug; });
}
