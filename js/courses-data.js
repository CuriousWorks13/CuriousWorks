/**
 * Curious Works — shared course catalog data.
 * Single source of truth used by courses.html (catalog), index.html (featured),
 * and enroll.html (course picker / summary lookup).
 *
 * PLACEHOLDER DATA: instructor names, spot counts, and schedule details below
 * are examples only — replace with real program details before launch.
 */

const CW_ICONS = {
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="18" r="2.4"/><path d="M8.1 8.3 10 16M15.9 8.3 14 16M8.4 7h7.2"/></svg>',
  pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 3.5v2.4M12 18.1v2.4M20.5 12h-2.4M5.9 12H3.5M17.7 6.3l-1.7 1.7M8 16l-1.7 1.7M17.7 17.7 16 16M8 8 6.3 6.3"/></svg>',
  orbit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(-24 12 12)"/></svg>',
  spiral: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3a9 9 0 1 1-6.4 15.3M12 7a5 5 0 1 1-3.6 8.5M12 11a1.4 1.4 0 1 1-1 2.4"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 6.5l-3 11"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18"/></svg>'
};

const CW_COURSES = [
  {
    slug: 'intro-artificial-intelligence',
    title: 'Introduction to Artificial Intelligence',
    field: 'Technology',
    icon: 'network',
    description: 'A hands-on first look at how machines learn — from pattern recognition to simple neural networks — through visual tools and real examples.',
    ageRange: 'Grades 5–8',
    level: 'Beginner',
    duration: '6 weeks · 60 min/session',
    instructor: 'Aiden Cho', // placeholder
    spotsTotal: 20,
    spotsLeft: 6
  },
  {
    slug: 'science-of-the-human-body',
    title: 'The Science of the Human Body',
    field: 'Life Science',
    icon: 'pulse',
    description: 'Explore how the heart, brain, lungs, and muscles work together, through models, diagrams, and simple hands-on experiments.',
    ageRange: 'Grades 3–6',
    level: 'Beginner',
    duration: '5 weeks · 45 min/session',
    instructor: 'Maya Whitfield', // placeholder
    spotsTotal: 18,
    spotsLeft: 11
  },
  {
    slug: 'engineering-and-design',
    title: 'Engineering & Design',
    field: 'Engineering',
    icon: 'gear',
    description: 'Learn the engineering design process by building, testing, and redesigning simple structures and machines from everyday materials.',
    ageRange: 'Grades 4–8',
    level: 'Intermediate',
    duration: '7 weeks · 60 min/session',
    instructor: 'Priya Natarajan', // placeholder
    spotsTotal: 16,
    spotsLeft: 4
  },
  {
    slug: 'astronomy-and-space',
    title: 'Astronomy & Space',
    field: 'Space Science',
    icon: 'orbit',
    description: 'Journey through the solar system and beyond — planets, stars, and space exploration — with interactive models and sky-mapping activities.',
    ageRange: 'Grades 3–7',
    level: 'Beginner',
    duration: '5 weeks · 45 min/session',
    instructor: 'Daniel Osei', // placeholder
    spotsTotal: 20,
    spotsLeft: 14
  },
  {
    slug: 'psychology-and-the-brain',
    title: 'Psychology & the Brain',
    field: 'Psychology',
    icon: 'spiral',
    description: 'An introduction to how the brain shapes thought, memory, and emotion — and why people think and act the way they do.',
    ageRange: 'Grades 6–8',
    level: 'Intermediate',
    duration: '6 weeks · 50 min/session',
    instructor: 'Sofia Marchetti', // placeholder
    spotsTotal: 16,
    spotsLeft: 2
  },
  {
    slug: 'intro-to-coding',
    title: 'Introduction to Coding',
    field: 'Technology',
    icon: 'code',
    description: 'Build real programs from scratch, starting with block-based logic and moving into text-based code, one project at a time.',
    ageRange: 'Grades 3–8',
    level: 'Beginner',
    duration: '8 weeks · 60 min/session',
    instructor: 'Ethan Park', // placeholder
    spotsTotal: 24,
    spotsLeft: 9
  },
  {
    slug: 'business-and-entrepreneurship',
    title: 'Business & Entrepreneurship',
    field: 'Business',
    icon: 'chart',
    description: 'Turn an idea into a plan — students design a product, build a brand, and pitch a business in a final showcase.',
    ageRange: 'Grades 6–8',
    level: 'Intermediate',
    duration: '6 weeks · 60 min/session',
    instructor: 'Renee Ibarra', // placeholder
    spotsTotal: 18,
    spotsLeft: 8
  },
  {
    slug: 'creative-problem-solving',
    title: 'Creative Problem Solving',
    field: 'Critical Thinking',
    icon: 'spark',
    description: 'Tackle open-ended challenges and design puzzles that build flexible thinking, teamwork, and creative confidence.',
    ageRange: 'Grades 3–6',
    level: 'Beginner',
    duration: '4 weeks · 45 min/session',
    instructor: 'Julian Reyes', // placeholder
    spotsTotal: 20,
    spotsLeft: 17
  }
];

function cwFindCourse(slug) {
  return CW_COURSES.find(function (c) { return c.slug === slug; });
}
