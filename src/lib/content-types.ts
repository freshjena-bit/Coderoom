// Shared types for learning content

export interface QuizQuestion {
  question: string;
  options: string[]; // 4 options
  answer: number; // index of correct option (0-3)
  explanation: string;
}

export interface MaterialData {
  level: number;      // 1-8
  order: number;      // order within level
  title: string;
  slug: string;       // unique, kebab-case
  description: string; // 1-2 sentence summary
  icon: string;       // emoji
  isProject: boolean;
  content: string;    // markdown content with code examples
  quiz: QuizQuestion[]; // 3 questions per material
}

export const LEVEL_INFO: Record<number, { title: string; subtitle: string; icon: string; color: string }> = {
  1: { title: "Dasar IT & Teknologi", subtitle: "Fondasi IT, hardware & OS", icon: "💻", color: "emerald" },
  2: { title: "Pemrograman", subtitle: "Logika & bahasa pemrograman", icon: "⌨️", color: "orange" },
  3: { title: "Web Development", subtitle: "HTML, CSS, JavaScript & framework", icon: "🌐", color: "sky" },
  4: { title: "Jaringan Komputer", subtitle: "Protokol, routing & infrastruktur", icon: "🔌", color: "yellow" },
  5: { title: "Database", subtitle: "SQL, NoSQL & desain data", icon: "🗄️", color: "green" },
  6: { title: "Cybersecurity", subtitle: "Keamanan siber & ethical hacking", icon: "🛡️", color: "violet" },
  7: { title: "Cloud & DevOps", subtitle: "Docker, AWS, CI/CD & server", icon: "☁️", color: "amber" },
  8: { title: "AI & Machine Learning", subtitle: "Data science & neural networks", icon: "🤖", color: "rose" },
};
