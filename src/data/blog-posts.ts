import type { BlogPost } from "@/types";

export const BLOG_POSTS = [
  {
    title: "Everything you need to know about the new GST rates for 2026",
    date: "April 2, 2026",
    category: "GST",
    readTime: "5 min read",
    excerpt: "A comprehensive breakdown of the latest GST rate revisions and how they impact your business filings this year.",
    gradientFrom: "#0F9B8E",
    gradientTo: "#132B55",
    authorInitials: "MJ",
    authorName: "Meera Joshi",
  },
  {
    title: "Top 5 legal compliances for startups in their first year",
    date: "March 28, 2026",
    category: "Compliance",
    readTime: "7 min read",
    excerpt: "From company incorporation to first GST filing — the compliance checklist every new founder needs in Year 1.",
    gradientFrom: "#1B3A6B",
    gradientTo: "#243F73",
    authorInitials: "RK",
    authorName: "Rajiv Kumar",
  },
  {
    title: "How to save income tax under the new regime vs old regime",
    date: "March 15, 2026",
    category: "Income Tax",
    readTime: "6 min read",
    excerpt: "A side-by-side comparison with real-world examples to help you choose the right tax regime for FY 2025-26.",
    gradientFrom: "#0A7A6F",
    gradientTo: "#1B3A6B",
    authorInitials: "SP",
    authorName: "Sneha Patel",
  },
] satisfies readonly BlogPost[];
