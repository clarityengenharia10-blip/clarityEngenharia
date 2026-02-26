
export interface Product {
  id: string;
  name: string;
  category: string;
  series: string;
  description: string;
  image: string;
  badge?: string;
  specs: string[];
  variations?: string[];
  powerRange?: string;
  brand?: string;
  detailedSpecs?: { [key: string]: string };
  docs?: { name: string; url: string; type: 'datasheet' | 'manual' }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}
