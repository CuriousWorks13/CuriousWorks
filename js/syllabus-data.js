/**
 * Curious Works — shared syllabus data.
 * Every course runs 8 sessions across 4 weeks (2 sessions/week).
 * Keyed by course slug (see js/courses-data.js for course metadata).
 */

const CW_SYLLABI = {

  // --- Science ---
  biology: [
    { title: 'What Is Life? Intro to Biology', topics: ['The traits that define living things', 'Branches of biology', 'How scientists ask biological questions'] },
    { title: 'Cells: The Building Blocks', topics: ['Cell theory', 'Prokaryotic vs. eukaryotic cells', 'Exploring cells through interactive models'] },
    { title: 'Cell Structures & Organelles', topics: ['The nucleus, mitochondria & more', 'Plant cells vs. animal cells', 'How organelles work together'] },
    { title: 'DNA & Genetics Basics', topics: ['What DNA is and where it lives', 'Genes, traits & heredity', 'Punnett squares and predicting traits'] },
    { title: 'From Cells to Organisms: Body Systems', topics: ['Cells to tissues to organs to systems', 'How systems work together', 'A tour of the human body'] },
    { title: 'Ecosystems & Food Webs', topics: ['Producers, consumers & decomposers', 'Energy flow through an ecosystem', 'Building a food web'] },
    { title: 'Adaptation & Evolution', topics: ['How traits help organisms survive', 'Natural selection basics', 'Case studies of adaptation'] },
    { title: 'Final Project: Design Your Own Ecosystem', topics: ['Apply every concept from the course', 'Design a balanced, living ecosystem', 'Present your ecosystem to the class'] }
  ],

  chemistry: [
    { title: 'What Is Chemistry? (Matter & States)', topics: ['What chemistry actually studies', 'Matter, mass & properties', 'Solids, liquids, gases & changing states'] },
    { title: 'Atoms & Elements', topics: ['Structure of the atom', 'Protons, neutrons & electrons', 'Reading element symbols'] },
    { title: 'The Periodic Table', topics: ['Periods, groups & families', 'Metals, nonmetals & metalloids', 'Reading an element box'] },
    { title: 'Molecules & Compounds', topics: ['Atoms combining into molecules', 'Chemical formulas', 'Counting atoms & molecule shapes'] },
    { title: 'Chemical Bonds', topics: ['Why atoms bond', 'Ionic vs. covalent bonds', 'Valence electrons & bond strength'] },
    { title: 'Chemical Reactions', topics: ['Reactants & products', 'Conservation of mass', 'Balancing chemical equations'] },
    { title: 'Mixtures, Solutions & Acids/Bases', topics: ['Mixtures vs. compounds', 'Solutions & concentration', 'The pH scale'] },
    { title: 'Final Project: Everyday Chemistry Detective', topics: ['Investigate a real substance step by step', 'Apply every concept from the course', 'Present your chemical profile'] }
  ],

  physics: [
    { title: 'What Is Physics? Motion Basics', topics: ['What physics studies', 'Describing motion', 'Distance vs. displacement'] },
    { title: 'Speed, Velocity & Acceleration', topics: ['Calculating speed', 'Velocity as speed + direction', 'What acceleration really means'] },
    { title: 'Forces & Newton\'s Laws', topics: ['What a force is', "Newton's three laws", 'Balanced vs. unbalanced forces'] },
    { title: 'Gravity & Friction', topics: ['How gravity pulls on mass', 'Friction and why things slow down', 'Everyday examples of both'] },
    { title: 'Energy: Kinetic & Potential', topics: ['What energy is', 'Kinetic vs. potential energy', 'Energy transformations'] },
    { title: 'Work & Simple Machines', topics: ['What "work" means in physics', 'Levers, pulleys & inclined planes', 'How simple machines make work easier'] },
    { title: 'Waves, Light & Sound', topics: ['What a wave is', 'How light and sound travel', 'Reflection & refraction basics'] },
    { title: 'Final Project: Design a Rube Goldberg Machine', topics: ['Apply forces, energy & simple machines', 'Plan a multi-step chain reaction', 'Present and explain the physics behind it'] }
  ],

  'anatomy-and-physiology': [
    { title: 'Intro to the Human Body & Body Systems', topics: ['Levels of organization: cells to systems', 'A map of the major body systems', 'How systems depend on each other'] },
    { title: 'The Skeletal System', topics: ['Bones, joints & their jobs', 'How bones protect & support the body', 'Major bones to know'] },
    { title: 'The Muscular System', topics: ['Types of muscles', 'How muscles move bones', 'Voluntary vs. involuntary muscle'] },
    { title: 'The Circulatory System & Heart', topics: ['How the heart pumps blood', 'Arteries, veins & capillaries', 'What blood carries through the body'] },
    { title: 'The Respiratory System', topics: ['How breathing works', 'The path of oxygen through the lungs', 'Gas exchange basics'] },
    { title: 'The Nervous System & Brain', topics: ['Brain, spinal cord & nerves', 'How signals travel through the body', 'Reflexes & reaction time'] },
    { title: 'The Digestive System', topics: ['The journey of food through the body', 'Key organs and their roles', 'How nutrients are absorbed'] },
    { title: 'Final Project: Build-a-Body Systems Map', topics: ['Connect every system covered', 'Trace how systems work together', 'Present your full-body map'] }
  ],

  // --- Computer Science & Technology ---
  python: [
    { title: 'Intro to Python', topics: ['Writing and running your first program', 'print() and basic syntax', 'Getting input from the user with input()'] },
    { title: 'Variables & Data Types', topics: ['Storing values in variables', 'Numbers, strings & booleans', 'Converting between types'] },
    { title: 'Math & Strings', topics: ['Doing math in Python', 'String methods & formatting', 'Building a Mad Libs-style program'] },
    { title: 'Conditionals', topics: ['if / elif / else logic', 'Comparison & logical operators', 'Nested conditionals'] },
    { title: 'Loops', topics: ['for loops and while loops', 'Looping over strings & ranges', 'Avoiding infinite loops'] },
    { title: 'Lists', topics: ['Creating & indexing lists', 'Adding, removing & updating items', 'Collecting user input into a list'] },
    { title: 'Functions', topics: ['Defining & calling functions', 'Parameters & return values', 'Writing a function that uses a list'] },
    { title: 'Final Project', topics: ['Combine variables, loops, conditionals & functions', 'Build a complete small program', 'Present and demo your project'] }
  ],

  html: [
    { title: 'Welcome to HTML', topics: ['What HTML is and how the web is built', 'Tags, elements & structure', 'Building your first web page'] },
    { title: 'Text Formatting, Lists & Links', topics: ['Headings & paragraphs', 'Ordered & unordered lists', 'Linking between pages'] },
    { title: 'Images & Attributes', topics: ['Adding images with <img>', 'Attributes like src, alt & href', 'Sizing and positioning content'] },
    { title: 'Tables', topics: ['Structuring data with tables', 'Rows, columns & headers', 'When (and when not) to use a table'] },
    { title: 'Forms', topics: ['Building input fields & buttons', 'Labels & form structure', 'Collecting user input on a page'] },
    { title: 'Semantic HTML & Classes/IDs', topics: ['Why semantic tags matter', 'header, nav, main, footer', 'Using classes & IDs for structure'] },
    { title: 'Intro to CSS Styling', topics: ['Linking a stylesheet', 'Colors, fonts & spacing', 'Styling elements by class & ID'] },
    { title: 'Final Project: Personal Webpage', topics: ['Plan a complete personal page', 'Combine every tag learned in the course', 'Style and present your finished page'] }
  ],

  'artificial-intelligence': [
    { title: 'What Is AI? Where You See It Every Day', topics: ['Defining artificial intelligence', 'AI in apps kids already use', 'AI vs. regular programming'] },
    { title: 'Pattern Recognition: How Machines "See"', topics: ['What a pattern is to a computer', 'Sorting & classifying examples', 'Hands-on pattern recognition activity'] },
    { title: 'Data: The Fuel Behind AI', topics: ['Why AI needs data to learn', 'Labeled vs. unlabeled data', 'Where training data comes from'] },
    { title: 'Intro to Machine Learning', topics: ['What "learning" means for a machine', 'Training vs. testing', 'A visual walkthrough of a simple model'] },
    { title: 'Training a Simple Model', topics: ['Hands-on with a visual ML tool', 'Watching accuracy improve with training', 'What happens when training goes wrong'] },
    { title: 'Neural Networks Basics', topics: ['Inspired by the brain: an intro', 'Layers, nodes & connections', 'A simple visual neural network demo'] },
    { title: 'AI Ethics: Bias & Fairness', topics: ['How bias enters AI systems', 'Real-world examples of AI bias', 'Designing fairer systems'] },
    { title: 'Final Project: Train Your Own Mini Classifier', topics: ['Apply the full ML pipeline', 'Train a simple visual classifier', 'Present what your model learned'] }
  ],

  // --- Business ---
  'introduction-to-business': [
    { title: 'What Is a Business? Needs vs. Wants', topics: ['What makes something a business', 'Needs vs. wants', 'Spotting business ideas in daily life'] },
    { title: 'Finding a Problem Worth Solving', topics: ['Identifying a real problem', 'Talking to your "customer"', 'Turning a problem into an idea'] },
    { title: 'Designing Your Product', topics: ['From idea to product', 'What makes a product stand out', 'Sketching your product'] },
    { title: 'Building a Brand: Name, Logo, Voice', topics: ['Choosing a business name', 'Designing a simple logo', 'Defining your brand\'s voice'] },
    { title: 'Pricing & Basic Finances', topics: ['Cost vs. price vs. profit', 'Setting a fair price', 'A simple budget for your business'] },
    { title: 'Marketing Your Idea', topics: ['Who is your audience?', 'Simple ways to spread the word', 'Crafting a marketing message'] },
    { title: 'Preparing Your Pitch', topics: ['What goes into a business pitch', 'Structuring your pitch story', 'Practicing & getting feedback'] },
    { title: 'Final Project: Pitch Showcase', topics: ['Present your full business plan', 'Pitch your product & brand', 'Answer questions like a real founder'] }
  ],

  // --- Mathematics ---
  'pre-algebra': [
    { title: 'Number Sense & Order of Operations', topics: ['Whole numbers, integers & order of operations', 'PEMDAS in action', 'Solving multi-step numeric problems'] },
    { title: 'Fractions: Add, Subtract, Multiply, Divide', topics: ['Common denominators', 'Multiplying & dividing fractions', 'Mixed numbers & simplifying'] },
    { title: 'Decimals & Percents', topics: ['Converting between fractions, decimals & percents', 'Percent of a number', 'Real-world percent problems'] },
    { title: 'Ratios & Proportions', topics: ['What a ratio describes', 'Setting up proportions', 'Solving proportion word problems'] },
    { title: 'Intro to Negative Numbers', topics: ['The number line & negatives', 'Adding & subtracting negatives', 'Real-world uses of negative numbers'] },
    { title: 'Intro to Variables & Expressions', topics: ['What a variable represents', 'Writing algebraic expressions', 'Evaluating expressions'] },
    { title: 'Solving One-Step Equations', topics: ['Balancing an equation', 'Solving with addition & subtraction', 'Solving with multiplication & division'] },
    { title: 'Final Project: Real-World Problem Set', topics: ['Apply every topic from the course', 'Solve a set of real-world problems', 'Present your problem-solving process'] }
  ],

  'algebra-1': [
    { title: 'Variables & Expressions', topics: ['Writing & simplifying expressions', 'Combining like terms', 'The distributive property'] },
    { title: 'Solving Linear Equations', topics: ['Multi-step equations', 'Equations with variables on both sides', 'Checking your solution'] },
    { title: 'Solving Inequalities', topics: ['Graphing on a number line', 'Solving multi-step inequalities', 'Flipping the sign'] },
    { title: 'Graphing on the Coordinate Plane', topics: ['Plotting points', 'x- and y-intercepts', 'Graphing simple equations'] },
    { title: 'Linear Functions & Slope', topics: ['What slope means', 'Slope-intercept form', 'Writing an equation from a graph'] },
    { title: 'Systems of Equations', topics: ['Solving by graphing', 'Solving by substitution', 'Real-world systems problems'] },
    { title: 'Exponents & Polynomials Basics', topics: ['Rules of exponents', 'Adding & subtracting polynomials', 'Multiplying simple polynomials'] },
    { title: 'Final Project: Model a Real-World Situation', topics: ['Turn a real scenario into an equation', 'Graph and interpret your model', 'Present your findings'] }
  ],

  geometry: [
    { title: 'Points, Lines, Angles & Planes', topics: ['Basic geometric definitions', 'Types of angles', 'Angle relationships'] },
    { title: 'Triangles & the Pythagorean Theorem', topics: ['Triangle classification', 'The Pythagorean theorem', 'Finding a missing side'] },
    { title: 'Polygons & Their Properties', topics: ['Naming polygons', 'Interior & exterior angles', 'Regular vs. irregular polygons'] },
    { title: 'Perimeter, Area & Circles', topics: ['Perimeter & area formulas', 'Circles: radius, diameter & circumference', 'Area of a circle'] },
    { title: 'Surface Area & Volume of 3D Shapes', topics: ['Prisms, cylinders & pyramids', 'Calculating surface area', 'Calculating volume'] },
    { title: 'Transformations', topics: ['Translations, rotations & reflections', 'Symmetry', 'Transformations on the coordinate plane'] },
    { title: 'Intro to Geometric Proofs', topics: ['What a proof is and why it matters', 'Simple two-column proofs', 'Proving triangle congruence'] },
    { title: 'Final Project: Design a Blueprint', topics: ['Apply shapes, area & volume', 'Design a scaled blueprint', 'Present and explain your design'] }
  ],

  'algebra-2': [
    { title: 'Review: Functions & Graphs', topics: ['What makes a relation a function', 'Function notation', 'Reading & sketching graphs'] },
    { title: 'Quadratic Equations & Parabolas', topics: ['Standard form of a quadratic', 'Graphing a parabola', 'Vertex & axis of symmetry'] },
    { title: 'Factoring & the Quadratic Formula', topics: ['Factoring quadratics', 'Using the quadratic formula', 'Choosing the fastest method'] },
    { title: 'Polynomial Functions', topics: ['Degree & end behavior', 'Adding, subtracting & multiplying polynomials', 'Finding roots'] },
    { title: 'Exponential Functions & Growth', topics: ['Exponential vs. linear growth', 'Graphing exponential functions', 'Real-world growth & decay'] },
    { title: 'Logarithms Basics', topics: ['What a logarithm undoes', 'Log rules', 'Solving simple log equations'] },
    { title: 'Rational Expressions', topics: ['Simplifying rational expressions', 'Multiplying & dividing', 'Solving rational equations'] },
    { title: 'Final Project: Modeling with Functions', topics: ['Choose the right function type for real data', 'Build & graph your model', 'Present your model\'s predictions'] }
  ],

  trigonometry: [
    { title: 'Right Triangles & the Trig Ratios', topics: ['Sine, cosine & tangent defined', 'SOH-CAH-TOA', 'Finding missing sides & angles'] },
    { title: 'Sine, Cosine & Tangent in Action', topics: ['Solving real right-triangle problems', 'Angles of elevation & depression', 'Using a calculator correctly'] },
    { title: 'The Unit Circle', topics: ['Building the unit circle', 'Key angles & their coordinates', 'Connecting the circle to the ratios'] },
    { title: 'Graphing Sine & Cosine Waves', topics: ['Amplitude & period', 'Graphing y = sin(x) and y = cos(x)', 'Shifting & stretching wave graphs'] },
    { title: 'Radians vs. Degrees', topics: ['Converting between radians & degrees', 'Why radians matter in math', 'Practicing conversions'] },
    { title: 'The Law of Sines & Law of Cosines', topics: ['Solving non-right triangles', 'When to use each law', 'Real-world triangle problems'] },
    { title: 'Real-World Applications: Waves & Cycles', topics: ['Modeling tides, sound & seasons', 'Reading a wave graph', 'Writing a wave equation'] },
    { title: 'Final Project: Model a Real Wave Pattern', topics: ['Choose a real cyclical pattern', 'Build & graph a matching model', 'Present your wave model'] }
  ],

  'introduction-to-calculus': [
    { title: 'What Is Calculus? Rates of Change', topics: ['Why calculus was invented', 'Average vs. instantaneous rate of change', 'Calculus in everyday life'] },
    { title: 'Intro to Limits', topics: ['What a limit describes', 'Estimating limits from a graph', 'Estimating limits from a table'] },
    { title: 'Limits & Continuity', topics: ['Evaluating limits algebraically', 'What makes a function continuous', 'Spotting discontinuities'] },
    { title: 'What Is a Derivative?', topics: ['The derivative as a slope', 'Connecting derivatives to rate of change', 'Estimating a derivative from a graph'] },
    { title: 'Derivative Rules & Shortcuts', topics: ['The power rule', 'Derivatives of simple polynomials', 'Practicing derivative shortcuts'] },
    { title: 'Applications: Slopes & Motion', topics: ['Finding the slope of a tangent line', 'Position, velocity & acceleration', 'Real-world motion problems'] },
    { title: 'Intro to Integrals', topics: ['The integral as area under a curve', 'Connecting integrals to derivatives', 'Estimating area with simple shapes'] },
    { title: 'Final Project: Analyzing a Real-World Function', topics: ['Apply limits, derivatives & integrals', 'Analyze a real-world function fully', 'Present your complete analysis'] }
  ]

};

function cwFindSyllabus(slug) {
  return CW_SYLLABI[slug] || null;
}
