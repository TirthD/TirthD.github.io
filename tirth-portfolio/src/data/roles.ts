export interface RoleContent {
    title: string;
    summary: string;
    skills: string[];
    highlights: string[];
  }
  
  export const roleContent: Record<string, RoleContent> = {
    aiml: {
      title: "AI / Machine Learning",
      summary:
        "Passionate about building intelligent systems — from CNNs and Transformers for audio analysis to computer vision with YOLOv8.",
      skills: [
        "Python", "TensorFlow", "Keras", "CNN", "Transformer",
        "NLP", "Computer Vision", "LSTM", "SVM", "Deep Learning",
      ],
      highlights: [
        "MS in Artificial Intelligence at Northeastern (Khoury)",
        "TA for CS 5100: Foundations of AI",
        "Published IEEE paper on Deep Learning for character recognition",
        "Depression detection via hybrid CNN + Transformer",
        "Dental lesion detection research using ML models",
      ],
    },
    data: {
      title: "Data Engineering",
      summary:
        "Experienced in building scalable data pipelines and optimizing cloud data platforms with Snowflake and the modern data stack.",
      skills: [
        "SQL", "Python", "Snowflake", "Streamlit", "Snowpark",
        "PostgreSQL", "MySQL", "Data Pipelines", "ETL", "Window Functions",
      ],
      highlights: [
        "Full-time Snowflake Engineer at LTIMindtree",
        "Built FinOps framework for cost optimization",
        "Developed monitoring solutions with Snowpark Container Services",
        "Advanced SQL with ranking algorithms and window functions",
      ],
    },
    cloud: {
      title: "Cloud Engineering",
      summary:
        "Understanding of cloud infrastructure across public and private platforms with hands-on AWS and Snowflake experience.",
      skills: [
        "AWS", "Snowflake", "Snowpark Container Services",
        "Cloud Architecture", "Infrastructure", "Monitoring", "Streamlit",
      ],
      highlights: [
        "Cloud infrastructure research at TCS",
        "Snowflake cloud platform expertise at LTIMindtree",
        "AWS environment analysis and architecture",
        "Google Cloud Challenge completed successfully",
        "Built cloud-native monitoring solutions",
      ],
    },
  };