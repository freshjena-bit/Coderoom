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
  1: { title: "Dasar Cyber", subtitle: "Fondasi keamanan siber & etika", icon: "🛡️", color: "emerald" },
  2: { title: "Jaringan", subtitle: "Protokol, scanning & analisis jaringan", icon: "🌐", color: "orange" },
  3: { title: "Kriptografi", subtitle: "Enkripsi, hash & tanda tangan digital", icon: "🔐", color: "sky" },
  4: { title: "Web Security", subtitle: "OWASP, XSS, SQL Injection & lainnya", icon: "🐛", color: "yellow" },
  5: { title: "Ethical Hacking", subtitle: "Pentest, exploit & Metasploit", icon: "⚔️", color: "green" },
  6: { title: "Forensik & Malware", subtitle: "Analisis malware & investigasi digital", icon: "🔍", color: "violet" },
  7: { title: "Project Akhir", subtitle: "Bangun proyek keamanan nyata", icon: "🏆", color: "amber" },
};
