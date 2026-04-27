import { image } from "framer-motion/client";

export const portfolioData = {
  hero: {
    name: "O.V. Vijitha",
    title: "Full Stack Developer",
    subtitle: "Undergraduate at UCSC | MERN Stack Developer",
    description: "I build modern, responsive, and performant web applications using the MERN stack and a variety of programming languages.",
    resumeLink: "https://drive.google.com/file/d/13DhXWXQ3k1bFdb8jfGAFG_FNcas2c_f6/view?usp=sharing"
  },
  about: {
    title: "About Me",
    description: "Hello! I am O.V. Vijitha, an undergraduate at the University of Colombo School of Computing (UCSC). I have a deep passion for software development and solving complex problems. I love building scalable applications and continuously learning new technologies to improve my skills. My primary focus is on full-stack web development, creating seamless user experiences from frontend interfaces to backend architectures.",
  },
  skills: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "React.js", icon: "react" },
    { name: "Node.js", icon: "node" },
    { name: "Express.js", icon: "express" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "C++", icon: "cpp" },
    { name: "R", icon: "r" }
  ],
  projects: [
    {
      id: 1,
      title: "Flexwell Fitness & Wellness Platform",
      image: "/projects/flexwell.png",
      description: "Flexwell is a PHP-based fitness and wellness platform for managing workouts, meal plans, meetings, notifications, and consultant interactions.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Composer", "PHPMailer", "Dompdf", "Google API Client"],
      github: "https://github.com/vijithaopatha2/flexwell.git",
      live: "#"
    },
    {
      id: 2,
      title: "Vehicle Services and Marketplace Platform",
      image: "/projects/autoconnect.png",
      description: "Built a full-stack vehicle services platform with listings, bookings, insurance, payments, and subscriptions, powered by a modular Node.js/Express API and a React frontend.",
      tech: ["Node.js", "Express.js", "MongoDB", "React", "Vite", "REST APIs"],
      github: "https://github.com/Dark-Zeus/auto-connect.git",
      live: "#"
    },
    {
      id: 3,
      title: "MERN Hotel Reservation System",
      image: "/projects/hotelbooking.png",
      description: "MERN-based hotel booking web app with authentication, room reservations, and an admin dashboard for managing rooms and bookings.",
      tech: ["MongoDB", "Express.js", "React", "Node.js","Stripe Payments", "Nodemailer"],
      github: "https://github.com/vijithaopatha2/hotel-reservation-system-mern.git",
      live: "#"
    }
  ],
  contact: {
    email: "vijithaopatha822@gmail.com",
    github: "https://github.com/vijithaopatha2",
    linkedin: "https://www.linkedin.com/in/o-v-vijitha-171582256/"
  }
};
