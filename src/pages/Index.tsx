import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Portfolio data
const portfolioData = {
  initials: "AG",
  name: "ACHRAF GUAICHE",
  title: "Software Engineer",
  contact: {
    email: "achrafguaiche@gmail.com",
    phone: "+212 6 52 42 12 43",
    location: "Salé, Morocco",
    linkedin: "Achraf Guaiche",
    linkedinUrl: "https://www.linkedin.com/in/achraf-guaiche",
    github: "achraf-guaiche"
  },
  sections: {
    education: "Education",
    competences: "Skills",
    experience: "Professional Experience",
    projects: "Projects"
  },
  education: [
    "BAC (SVT) - 2012",
    "ISTA Diploma - 2014",
    "EST Bachelor (Big Data & AI) - 2025"
  ],
  competences: [
    "HTML, CSS, JS",
    "Bootstrap, Tailwind",
    "Vue, React",
    "Laravel, Node.js, FastAPI, Django",
    "UML, Merise",
    "Docker, Kubernetes (starter)",
    "MySQL, PostgreSQL, MongoDB",
    "Agile Scrum Master",
    "Git, Jenkins (starter)",
    "Vibe coding"
  ],
  experience: [
    {
      period: "06/2019 – Present",
      company: "Freelance",
      role: "Full Stack Developer",
      details: [
        "Guestwaiter — Laravel & Vue.js development. Integrated Stripe and Hubrise API",
        "Full restaurant app development"
      ]
    },
    {
      period: "03/2024 – 05/2024",
      company: "Smart LPP (Freelance)",
      role: "Developer",
      details: [
        "Dashboard + mobile app for sending PDF requests",
        "Template management and letter generation"
      ]
    },
    {
      period: "04/2024 – 05/2024",
      company: "Final-Year Projects Management (Freelance)",
      role: "Developer",
      details: [
        "Management solution for end-of-studies projects: lists, selection and validation",
        "Import and management of reports and files"
      ]
    },
    {
      period: "11/2022 – 12/2023",
      company: "LivCollect (Freelance)",
      role: "Full Stack Developer",
      details: [
        "Restaurant application with clean architecture (Laravel & Vue.js)",
        "Nuxt.js app for SSR improvements"
      ]
    },
    {
      period: "2017 – 2018",
      company: "TransProche (Freelance)",
      role: "Node.js Developer",
      details: [
        "School transport management app (Node.js + MongoDB)"
      ]
    },
    {
      period: "2016 – 2017",
      company: "AdSpace (Freelance)",
      role: "Node.js Developer",
      details: [
        "TV advertising video management app (Node.js + MongoDB)"
      ]
    },
    {
      period: "2015 – 2016",
      company: "IIHEM (Rabat)",
      role: "Maintenance & Development Technician",
      details: [
        "School application maintenance (PHP/MySQL)"
      ]
    }
  ],
  projects: [
    {
      name: "EduLLM - Complete BDIA Assistant",
      desc: "Intelligent web app to help students in Big Data, AI and ML: chatbot, hierarchical summaries, quizzes and recommendations.",
      tags: ["RAG", "Chatbot", "ML"]
    },
    {
      name: "Attendance Management by Face Recognition",
      desc: "Complete attendance automation system using face recognition.",
      tags: ["DeepFace", "Face Recognition"]
    },
    {
      name: "Restaurant Project with ML Product Recommendation",
      desc: "Restaurant application with ML-based product recommendation system.",
      tags: ["Laravel", "ML"]
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <Skills skills={portfolioData.competences} />
        <Experience experiences={portfolioData.experience} />
        <Education education={portfolioData.education} />
        <Projects projects={portfolioData.projects} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
