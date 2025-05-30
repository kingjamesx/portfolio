// TypeScript interfaces
export interface NavItem {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  year: string;
  image: string;
  link: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}
