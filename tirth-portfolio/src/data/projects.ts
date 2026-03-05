export interface Project {
    title: string;
    description: string;
    tags: ("AI/ML" | "Data Engineering" | "Cloud")[];
    tech: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "Depression Detection from Audio",
      description:
        "Hybrid CNN + Transformer model classifying depression presence and severity from vocal biomarkers in human speech. Trained on the E-DAIC corpus to identify complex acoustic patterns and temporal relationships.",
      tags: ["AI/ML"],
      tech: ["Python", "CNN", "Transformer", "Audio Processing"],
    },
    {
      title: "Fake Profile Detection",
      description:
        "LSTM-SVM hybrid and ANN framework to identify fraudulent social media profiles. Leverages temporal context from LSTMs, discriminative power of SVMs, and pattern recognition of ANNs for superior accuracy.",
      tags: ["AI/ML"],
      tech: ["LSTM", "SVM", "ANN", "Python"],
    },
    {
      title: "Stray Animal Recognition",
      description:
        "YOLOv8-powered system for identifying stray animals in urban settings. Live feed videos are intermittently captured and divided into frames for real-time analysis and urban animal management.",
      tags: ["AI/ML"],
      tech: ["YOLOv8", "Computer Vision", "Python", "Object Detection"],
    },
  ];
  
  export const publication = {
    title: "Deep Learning Based Marathi Sentence Recognition",
    subtitle: "Using Devnagari Character Identification",
    conference: "IEEE CSCITA 2023",
    authors: "R. Patil, B. Narkhede, S. Gaonkar and T. Dave",
    doi: "10.1109/CSCITA55725.2023.10104985",
  };