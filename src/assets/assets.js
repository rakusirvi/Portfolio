import Certificate from "./ProjectImages/Certificate.jpeg";
import Prime from "./ProjectImages/Prime.png";
import QuickShow from "./ProjectImages/QuickShow.png";
import ResQnow from "./ProjectImages/ResQnow.png";
import Protfolio from "./ProjectImages/Protfolio.png";
import ProtfolioImg1 from "./ProjectImages/ProtfolioImg1.png";
import PrimeImg1 from "./ProjectImages/PrimeImg1.png";
export const projects = [
  {
    id: "P01",
    title: "RESQNOW – Emergency Alert & Response System",
    description:
      "Presented at the 20th Aavishkar Inter-Collegiate Research Convention (Zonal Round), RESQNOW is a smart emergency alert and response system designed to improve rescue coordination and communication. Showcased under the Engineering & Technology category at the UG level, the project reflects innovation in real-time safety solutions.",
    detailDescription:
      "RESQNOW is designed to provide real-time emergency alerts and improve rescue coordination. It integrates IoT devices with mobile applications to ensure faster communication during emergencies.",
    projectTimeline: "Completed",
    img1: ResQnow,

    img2: ResQnow,

    learning:
      "Learned IoT integration with ESP32, real-time communication protocols, and mobile app development.",
    futureEnhancement:
      "Adding AI-based predictive alerts and integration with local emergency services.",
    purpose:
      "To create a reliable emergency response system that bridges communication gaps during crises.",
    collaborativeMember: ["Farhat", "Rakesh Choudhary", "Anjali", "Sneha"],
    techStack: ["HTML", "Js", "Flutter", "Iot (Esp32)"],
    liveDemo: "https://github.com/rakusirvi/ResQnowApp",
    thumbnail: ResQnow,
  },

  {
    id: "P02",
    title: "QuickShow",
    description:
      "QuickShow is a movie discovery app built with React and Clerk. It allows users to browse current and upcoming films with a clean, responsive UI and smooth navigation.",
    detailDescription:
      "QuickShow provides a seamless movie browsing experience with authentication and responsive design.",
    projectTimeline: "Pending",
    img1: QuickShow,
    img2: QuickShow,
    learning:
      "Improved skills in API integration, authentication with Clerk, and responsive UI design.",
    futureEnhancement:
      "Adding personalized recommendations and watchlist functionality.",
    purpose:
      "To simplify movie discovery with a modern, user-friendly interface.",
    collaborativeMember: ["Rakesh Choudhary"],
    techStack: [
      "React",
      "JavaScript",
      "TailWindCSS",
      "Clerk Auth",
      "Responsive UI",
    ],
    liveDemo: "https://github.com/rakusirvi/client",
    thumbnail: QuickShow,
  },

  {
    id: "P03",
    title: "Prime Project - Brand Clone",
    description:
      "A clone project inspired by the Prime energy drink brand, built to practice real-world UI/UX design and front-end development. It replicates the product’s branding, packaging visuals, and website interface to showcase skills in responsive design, modern layouts, and creative presentation.",
    detailDescription:
      "Prime Clone replicates the Prime brand’s identity, packaging visuals, and website interface to practice UI/UX workflows.",
    projectTimeline: "Pending",
    img1: Prime,
    img2: PrimeImg1,
    learning:
      "Learned how to translate physical branding into digital UI and maintain responsiveness.",
    futureEnhancement:
      "Adding backend integration for product data and user accounts.",
    purpose:
      "To strengthen front-end skills in responsive layouts, component structuring, and branding consistency.",
    collaborativeMember: ["Rakesh Choudhary"],
    techStack: ["React", "CSS", "Responsive UI"],
    liveDemo: "https://rakusirvi.github.io/Prime-Drink/",
    thumbnail: Prime,
  },

  {
    id: "P04",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio built with React JS and Tailwind CSS, using useState, useEffect, React Router, and toast notifications. It showcases my projects, skills, and contact information with a scroll-based navbar and mobile-friendly design.",
    detailDescription:
      "Portfolio website showcasing projects, skills, and contact details with smooth navigation and responsive design.",
    projectTimeline: "Pending",
    img1: Protfolio,
    img2: ProtfolioImg1,
    learning:
      "Learned React Router, state management, and responsive design principles.",
    futureEnhancement: "Adding Backend and dark/light theme toggle.",
    purpose:
      "To present my work and skills in a professional, interactive way.",
    collaborativeMember: ["Rakesh Choudhary"],
    techStack: ["React", "Responsive UI", "TailwindCSS"],
    liveDemo: "https://rakusirvi.github.io/Prime-Drink/",
    thumbnail: Protfolio,
  },
];

export const AI = [
  "Emergent AI – Workflow automation",
  "OpenAI - GPT, Whisper, DALL‑E, Codex",
  "Gemini & Open AI ",
];

export const Certification = [
  {
    id: "C01",
    title: "Hackathon Participation ",
    thumbnail: Certificate,
    description:
      "We participated in HackoColypse 2.0, a 36‑hour hackathon with the motto of developing innovative solutions that generate revenue while benefiting society.Our project, EcoMarket, is a Sustainable AI‑powered Circular Economy Hub designed to reduce waste and promote reuse.",

    liveDemo: "https://rakusirvi.github.io/Prime-Drink/",
  },
];

export const tech = {
  Language: ["C", "C++", "Java(Servlets)", "Python"],
  frameWork: ["React", "Flutter"],
  developerTool: [
    "VsCode",
    "Android Studio",
    "Eclipse",
    "intelliJ",
    "My-sql WorkBench",
  ],
  backend: ["Firebase", "MySQL"],
};
