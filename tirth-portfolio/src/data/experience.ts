export interface Experience {
    role: string;
    company: string;
    location: string;
    date: string;
    points: string[];
    tags: ("AI/ML" | "Data Engineering" | "Cloud")[];
  }
  
  export const experiences: Experience[] = [
    {
      role: "Teaching Assistant — CS 5100: Foundations of AI",
      company: "Northeastern University",
      location: "Boston, MA",
      date: "Jan 2026 – Present",
      points: [
        "Conduct weekly office hours covering search algorithms, ML fundamentals, and neural networks with personalized guidance",
        "Evaluate homework and programming projects with detailed feedback on algorithm implementations",
        "Create instructional walkthrough videos for complex AI topics including search strategies and probabilistic reasoning",
      ],
      tags: ["AI/ML"],
    },
    {
      role: "Data Engineer (Snowflake Engineer)",
      company: "LTIMindtree",
      location: "Mumbai, IN",
      date: "Jan 2024 – Jul 2025",
      points: [
        "Developed FinOps framework for Snowflake optimizing cost and performance across storage, compute, and clustering",
        "Built alerts and monitoring for dynamic tables and materialized views via FinOps Streamlit app using Snowpark Container Services",
        "Leveraged SQL (ranking algorithms, window functions), Python, Snowflake, and Snowpark for measurable efficiency gains",
      ],
      tags: ["Data Engineering", "Cloud"],
    },
    {
      role: "Summer Intern",
      company: "Tata Consultancy Services (TCS)",
      location: "Mumbai, IN",
      date: "Jun 2023 – Aug 2023",
      points: [
        "Researched cloud infrastructure models across private and public platforms with focus on storage and data management",
        "Studied AWS and TCS private cloud environments to understand design considerations for customized infrastructure",
        "Analyzed client requirements to evaluate suitable cloud solutions and architectural approaches",
      ],
      tags: ["Cloud"],
    },
    {
      role: "Research Intern",
      company: "K.J. Somaiya College of Engineering",
      location: "Mumbai, IN",
      date: "Jan 2022 – Aug 2022",
      points: [
        "Researched lesion detection in dental x-rays using single-stage, two-stage, and hybrid ML models for binary classification",
        "Compared machine learning algorithms to evaluate accuracy and effectiveness in early lesion detection",
        "Explored deep learning techniques for interpreting complex radiological data in automated dental diagnostics",
      ],
      tags: ["AI/ML"],
    },
  ];