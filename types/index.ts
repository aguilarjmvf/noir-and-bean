export interface Product {
  id: string;
  name: string;
  origin: string;
  country: string;
  elevation?: string;
  process?: string;
  roast: "Light" | "Light-Medium" | "Medium" | "Medium-Dark" | "Dark";
  tastingNotes: string;
  price: number;
  image: string;
  badge?: string;
  slug?: string;
  /** Long-form copy shown on the product detail page. */
  description?: string;
  /** Harvest window, e.g. "November 2024". */
  harvest?: string;
}

/** A single block of an article body, rendered on the post detail page. */
export interface ArticleBlock {
  type: "paragraph" | "heading";
  text: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  /** Deck / standfirst shown under the title on the detail page. */
  subtitle?: string;
  /** Full article body for the detail page. */
  content?: ArticleBlock[];
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface NavLink {
  label: string;
  href: string;
}
