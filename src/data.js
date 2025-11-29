// src/data.js
export const PROFILE = {
  name: "Raad Shahamat Alif",
  title: "ML Engineer · Medical Imaging · Multimodal AI · RAG",
  email: "raadalif25@gmail.com",
  phone: "+880-1621076161",
  github: "https://github.com/RaadShahamat",
  linkedin: "https://www.linkedin.com/in/raad-shahamat-alif/",
  photo: "/assets/profile.jpg",
  location: "Khulna, Bangladesh",
  cv: "/assets/Raad_CV.pdf"
};

// Research Interests (keeps earlier comprehensive list + your exact bullets)
export const RESEARCH_INTERESTS = [
  "Medical Imaging",
  "Biomedical Image Processing",
  "Biomedical Signal Processing",
  "Computer Vision",
  "LLM",
  "Multimodal AI",
  "Deep Learning",
  "NLP",
  "RAG Systems",
  "Transformers"
];

// Research details (thesis, completed research, ongoing)
export const RESEARCH_DETAILS = {
  thesis: {
    title: "Brain Tumor Classification",
    summary:
      "Hybrid CNN + Transformer ensemble for multi-class brain tumor classification using power-law preprocessing, CLAHE, morphological ops, and ensemble fusion.",
    tags: ["Medical Imaging", "Ensemble", "CNN", "Transformer"]
  },
  completed: [
    {
      title: "Speech Emotion Recognition",
      summary:
        "Transformer + LSTM hybrid for SER using MFCC, spectrogram features and robust augmentation pipelines.",
      tags: ["Audio", "Transformers", "LSTM"]
    }
  ],
  ongoing: [
    {
      title: "ECG Image Digitization",
      summary:
        "Computer vision pipeline for extracting waveforms from scanned ECG images and reconstructing clinical signals for downstream analysis.",
      tags: ["ECG", "Signal Reconstruction", "CV"]
    }
  ]
};

// Skills (structured as in CV)
export const SKILLS = {
  programming: ["Python", "Perl", "SKILL", "C", "C++", "JavaScript", "HTML", "CSS"],
  ml_dl: ["TensorFlow", "Keras", "PyTorch", "scikit-learn", "Albumentations"],
  nlp: ["NLTK", "spaCy", "TF-IDF", "Embeddings", "RAG"],
  data: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  db_tools: ["Oracle", "MySQL", "PostgreSQL"],
  web: ["React", "FastAPI", "Django", "Vite", "Tailwind"],
  embedded: ["Arduino", "ESP6 Camera", "Bluetooth Module", "Sonar Module"],
  deployment: ["Render", "Netlify", "Railway"]
};

// Competitions (as provided)
export const COMPETITIONS = {
  completed: [
    {
      title: "BITFEST Datathon 2025",
      link: "https://www.kaggle.com/competitions/bitfest-datathon-2025",
      platform: "Kaggle",
      date: "2025"
    },
    {
      title: "DIU - Data Visionary (Presentation)",
      link: "#", // leave as # if no public link; you can replace with actual link
      platform: "DIU",
      date: "22 April 2025",
      note: "Presented at DIU Data Visionary"
    }
  ],
  ongoing: [
    {
      title: "PhysioNet - ECG Image Digitization",
      link: "https://www.kaggle.com/competitions/physionet-ecg-image-digitization",
      platform: "Kaggle",
      started: "2025"
    },
    {
      title: "Hull Tactical Market Prediction",
      link: "https://www.kaggle.com/competitions/hull-tactical-market-prediction",
      platform: "Kaggle",
      started: "2025"
    }
  ]
};

// Sample pathway track (editable by you later)
export const PATHWAY = [
  { year: "2019", title: "Foundations: Programming Languages", details: "C, C++ learning & problem solving " },
  { year: "2020", title: "Foundations: Python", details: "Python basics, syntax, and programming concepts" },
  { year: "2021", title: "Foundations: Python & Math", details: "Advanced Python, linear algebra, basic to advanced calculus" },
  { year: "2022", title: "Machine Learning", details: "Classical ML algorithms, feature engineering" },
  { year: "2023", title: "Deep Learning", details: "CNNs, basic training pipelines, transfer learning" },
  { year: "2023", title: "NLP & RAG", details: "TF-IDF, embeddings, retrieval pipelines" },
  { year: "2024", title: "Computer Vision & Medical Imaging", details: "MRI preprocessing, segmentation basics" },
  { year: "2024", title: "Research", details: "thesis work and Collaborative research" },
  { year: "2025", title: "Multimodal & Deployment", details: "RAG, LLM experiments, deployment pipelines" },
  { year: "2025", title: "Competitions & Industrial Experience", details: "Participated in competitions and gained industrial experience" },
  { year: "2026", title: "Reinforcement Learning & LLM", details: "Currently focusing on reinforcement learning and large language models" }
];

// Projects array kept minimal - your existing projects will be used
export const PROJECTS = [
    {
    id: 1,
    title: "UConnect 🎓- University Community Platform",
    description: "UConnect is a university-exclusive social media platform, empowering students to share knowledge, collaborate on research, and connect with like-minded peers.",
    tags: ["React", "WebSocket", "FastAPI", "PostgreSQL", "Full-Stack", "HuggingFace"],
    repo: "https://github.com/RaadShahamat/UConnect",
    video: "https://www.youtube.com/watch?v=Hj1TYA_trqc"
  },
  {
    id: 2,
    title: "Bangla PDF RAG - Bangla AI Teacher",
    description: "Context-aware question-answering from Bangla PDFs.",
    tags: ["RAG", "NLP", "Bangla"],
    repo: "https://github.com/RaadShahamat/BanglaPDF_RAG",
    video: null
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    description: "TF-IDF based content recommender with Streamlit UI. Web scraping for dynamic data fetching. Proper data preprocessing and EDA.",
    tags: ["Recommender", "ML", "Streamlit", "TF-IDF", "Pandas","web scraping"],
    repo: "https://github.com/RaadShahamat",
    video:
      "https://youtu.be/-AnCXMkwJX0"
  },
  {
    id: 4,
    title: "Camera-Equipped-Quadruped-Spider-Robot",
    description:
      "This project is an Arduino sketch providing the foundational control logic for an 8-DOF (Degrees of Freedom) Quadruped Robot (spider-bot). It enables the robot to execute basic movements, special actions, and adjust its stance, all driven by serial commands (typically from a Bluetooth module or similar wireless link).",
    tags: ["Arduino nano", "Robotics", "Embedded Systems", "Bluetooth", "ESP6 Camera", ],
    repo: "https://github.com/RaadShahamat/Camera-Equipped-Quadruped-Spider-Robot-",
    video: null
  },
  {
    id: 5,
    title: "Brain Tumor Classification (Thesis)",
    description:
      "Hybrid CNN + Transformer ensemble with power-law preprocessing.",
    tags: ["Medical Imaging", "DL", "Transformers"],
    repo: null,
    video: null
  }
];

export const EDUCATION = [
  {
    school: "Khulna University of Engineering & Technology (KUET)",
    degree: "BSc in ECE",
    years: "2020 - 2025",
    gpa: "3.72 / 4.00"
  }
];

export const AWARDS = [
  "Dean's Award (1st, 3rd & 4th Year)",
  "Learnathon 3.0 Completion",
  "EDGE Course on Machine Learning"
];

export const CERTIFICATES = [
  { id: 1, title: "EDGE ML Course", img: "/assets/edge.png" },
  { id: 2, title: "DIU Data Visionary", img: "/assets/diu.jpg" },
  { id: 3, title: "Learnathon 3.0", img: "/assets/learnathon.jpg" }
];
