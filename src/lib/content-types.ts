// Shared types for learning content

export interface QuizQuestion {
  question: string;
  options: string[]; // 4 options
  answer: number; // index of correct option (0-3)
  explanation: string;
}

export interface MaterialData {
  level: number;      // 1-7
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
  1: { title: "Dasar", subtitle: "Fondasi pemrograman & tools", icon: "📖", color: "emerald" },
  2: { title: "HTML", subtitle: "Struktur halaman web", icon: "🌐", color: "orange" },
  3: { title: "CSS", subtitle: "Styling & layout", icon: "🎨", color: "sky" },
  4: { title: "JavaScript", subtitle: "Interaktivitas & logika", icon: "⚙️", color: "yellow" },
  5: { title: "Backend (Node.js)", subtitle: "Server & API", icon: "🚀", color: "green" },
  6: { title: "Database", subtitle: "Penyimpanan data", icon: "🗄️", color: "violet" },
  7: { title: "Project Akhir", subtitle: "Bangun aplikasi nyata", icon: "🏆", color: "amber" },
};
