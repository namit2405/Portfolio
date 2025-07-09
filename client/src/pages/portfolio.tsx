import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ProjectCard } from "@/components/ui/project-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProfileImage from "../assets/images/Profile.jpeg";
import Resume from "../assets/documents/Namit_Resume.pdf";
import Microsoft from "../assets/images/MicrosoftCertificate.jpeg";
import Olympiad from "../assets/images/olympiad.jpeg";
import NccCamp from "../assets/images/ncccamp.jpeg";
import WebdoxLetter from "../assets/images/webdoxletter.jpeg";
import WebdoxCertificate from "../assets/images/webdoxcertificate.jpeg";
import BombayCorner from "../assets/images/BombayCorner.jpeg";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Calendar,
  Users,
  FolderOpen,
  Download,
  Award,
  FileText,
  ExternalLink,
  Cpu,
  InstagramIcon
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "certificates", "achievements", "personal", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Django", icon: "🎯" },
    { name: "React.js", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Redux", icon: "🔄" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🅱️" },
    { name: "Git/GitHub", icon: "🔧" },
    { name: "JWT/OTP Auth", icon: "🔐" },
    { name: "RESTful APIs", icon: "🔗" }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Guru Nanak Dev University (GNDU), Punjab, India",
      year: "2023 - Present",
      description: "Currently pursuing BCA with focus on Full-Stack Development and Software Engineering"
    },
    {
      degree: "Class 12th (Commerce)",
      school: "Shree Mahavir Jain Sen. Sec. Model School, Jalandhar, Punjab",
      year: "2022",
      description: "Completed higher secondary education in Commerce stream"
    }
  ];

  const certificates = [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2025",
      badge: "☁️",
      image: Microsoft
    },
    {
      name: "Web Development Using Django Backend",
      issuer: "Webdox Computer Institute",
      year: "2025",
      badge: "🎯",
      image: WebdoxCertificate,
      description: "3-Month Comprehensive Course"
    }
  ];

  const experience = [
    {
      title: "Assistant Accountant",
      company: "Ameka Super Market",
      period: "Jan 2024 - Present",
      description: "Managed billing and financial records for ₹10K+ daily transactions. Prepared monthly sales reports and supported daily operations. Maintained 100% accuracy in billing and reporting.",
      technologies: ["Excel", "Accounting Software", "Data Management"]
    },
    {
      title: "Web Development Intern (Django Backend)",
      company: "Webdox Computer Institute",
      period: "May 2025 - June 2025",
      description: "Built 10+ RESTful APIs and backend modules using Django REST Framework. Implemented secure authentication (JWT & OTP) for 100+ users. Optimized database queries, improving data retrieval speed.",
      technologies: ["Django", "Django REST Framework", "Python", "JWT", "OTP Authentication", "PostgreSQL"]
    }
  ];

  const personalDetails = {
    location: "Jalandhar, Punjab, India",
    availability: "Available for freelance and full-time opportunities",
    languages: ["English", "Hindi", "Punjabi"],
    interests: ["Web Development", "Full-Stack Programming", "Team Collaboration", "Logic Problem Solving"],
    workingHours: "Flexible",
    responseTime: "Within 24 hours",
    phone: "+91 6239881326",
    email: "jainnamit34@gmail.com"
  };

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Built a full-stack e-commerce platform with JWT & OTP authentication, product listings, cart, wishlist, and order management. Developed RESTful APIs using Django REST Framework and a responsive React.js frontend with Redux, Axios, and dynamic search/filter features.",
      image: BombayCorner,
      technologies: ["Django", "Django REST Framework", "React.js", "Redux", "Axios", "JWT", "OTP"],
      liveUrl: "https://namits.shop",
      githubUrl: "https://github.com/namit2405"
    },
    // {
    //   title: "Weather Forecast Website",
    //   description: "Designed a dynamic weather forecasting web app using React.js and OpenWeatherMap API. Implemented real-time weather data fetching with Axios and React Hooks, delivering a clean and interactive user interface.",
    //   image: "/assets/images/weather-project.jpg",
    //   technologies: ["React.js", "OpenWeather API", "Axios", "React Hooks"],
    //   liveUrl: "#",
    //   githubUrl: "https://github.com/namitjain34"
    // },
    // {
    //   title: "AI Chatbot",
    //   description: "Engineered a real-time AI chatbot using React.js and Django Channels over WebSockets. Enabled instant two-way communication between users and the server with dynamic frontend message updates and asynchronous backend processing.",
    //   image: "/assets/images/chatbot-project.jpg",
    //   technologies: ["React.js", "Django Channels", "WebSockets", "Real-time Communication"],
    //   liveUrl: "#",
    //   githubUrl: "https://github.com/namitjain34"
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Hi, I'm <span className="gradient-text">Namit Jain</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-600 mb-6">
                Python Full Stack Developer | BCA Student
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Full-stack developer skilled in Django REST Framework and React.js for secure, scalable web apps. 
                Experienced in RESTful APIs, JWT/OTP authentication, and dynamic UIs with Redux and Axios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("projects")}
                  className="bg-primary text-white hover:bg-blue-700"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(Resume, "_blank")}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Get In Touch
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <img
                  src={ProfileImage}
                  alt="Namit Jain - Python Full Stack Developer"
                  className="rounded-2xl shadow-2xl w-80 h-96 object-cover hover-lift"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/Profile.jpeg";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              I'm a passionate developer with a keen eye for design and a love for creating innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">My Journey</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I’m a passionate full-stack developer skilled in Python, Django REST Framework, and React.js. My journey started with a love for technology and grew through hands-on projects like building a complete eCommerce platform with secure authentication and payment integrations. With achievements in coding and design competitions, I continuously learn and aim to build meaningful, user-focused solutions.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeInUp}
                    className="bg-slate-50 rounded-lg p-4 text-center hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <p className="font-medium text-slate-900">{skill.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8">Experience Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">4+</p>
                    <p className="text-blue-100">Technologies Mastered</p>
                  </div>
                  <Cpu className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">2+</p>
                    <p className="text-blue-100">Years of Learning & Development</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">3+</p>
                    <p className="text-blue-100">Projects Completed</p>
                  </div>
                  <FolderOpen className="h-8 w-8 text-blue-200" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              My journey through various roles, building expertise in full-stack development.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                    <p className="text-lg text-primary font-medium">{job.company}</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Education</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Academic foundation that shaped my technical expertise and problem-solving approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary text-lg font-semibold mb-2">{edu.year}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-lg text-slate-700 font-medium mb-3">{edu.school}</p>
                <p className="text-slate-600">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in modern technologies.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 rounded-xl p-6 text-center hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200 group"
                onClick={() => cert.image && window.open(cert.image, "_blank")}
              >
                <div className="text-4xl mb-4">{cert.badge}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mb-2">{cert.year}</p>
                {cert.description && <p className="text-xs text-slate-400">{cert.description}</p>}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 mx-auto text-primary" />
                  <p className="text-xs text-primary mt-1">View Certificate</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Achievements & Activities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Recognition and activities that showcase my commitment to excellence and continuous learning.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <Award className="text-yellow-600 mb-4 h-8 w-8" />
              <h3 className="font-semibold text-slate-900 mb-2">Winner - Logic Making Competition</h3>
              <p className="text-slate-600 mb-2">College IT Fest 2025</p>
              <p className="text-sm text-slate-500">Demonstrated exceptional problem-solving skills and logical thinking abilities</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <Users className="text-blue-600 mb-4 h-8 w-8" />
              <h3 className="font-semibold text-slate-900 mb-2">College Website Development Team</h3>
              <p className="text-slate-600 mb-2">Active Member</p>
              <p className="text-sm text-slate-500">Contributing to college web development projects and initiatives</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <FolderOpen className="text-green-600 mb-4 h-8 w-8" />
              <h3 className="font-semibold text-slate-900 mb-2">NCC Camp Participation</h3>
              <p className="text-slate-600 mb-2">Lovely Professional University</p>
              <p className="text-sm text-slate-500">10-day intensive camp focusing on leadership and discipline</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <Award className="text-purple-600 mb-4 h-8 w-8" />
              <h3 className="font-semibold text-slate-900 mb-2">2nd Rank - City Olympiad</h3>
              <p className="text-slate-600 mb-2">Jalandhar City Level</p>
              <p className="text-sm text-slate-500">Academic excellence recognition at school level</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section id="personal" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Personal Details</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Get to know me better - my availability, interests, and what drives my passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <MapPin className="text-primary mb-4 h-6 w-6" />
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">{personalDetails.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <Calendar className="text-primary mb-4 h-6 w-6" />
              <h3 className="font-semibold text-slate-900 mb-2">Availability</h3>
              <p className="text-slate-600">{personalDetails.availability}</p>
              <p className="text-sm text-slate-500 mt-2">{personalDetails.workingHours}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <Mail className="text-primary mb-4 h-6 w-6" />
              <h3 className="font-semibold text-slate-900 mb-2">Response Time</h3>
              <p className="text-slate-600">{personalDetails.responseTime}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-semibold text-slate-900 mb-3">Languages</h3>
              <div className="space-y-2">
                {personalDetails.languages.map((language, index) => (
                  <p key={index} className="text-slate-600 text-sm">{language}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 md:col-span-2"
            >
              <h3 className="font-semibold text-slate-900 mb-3">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {personalDetails.interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button className="bg-primary text-white hover:bg-blue-700">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Let's Work Together</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-primary text-xl w-6 mr-4" />
                  <span className="text-slate-600">{personalDetails.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary text-xl w-6 mr-4" />
                  <span className="text-slate-600">{personalDetails.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary text-xl w-6 mr-4" />
                  <span className="text-slate-600">{personalDetails.location}</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/namit2405" },
                    { icon: Linkedin, href: "https://linkedin.com/in/namit-jain-b7344831a" },
                    { icon: Mail, href: "mailto:jainnamit34@gmail.com" }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(social.href, "_blank")}
                      className="rounded-full hover:bg-primary hover:text-white hover:border-primary"
                    >
                      <social.icon className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Namit Jain</h3>
              <p className="text-slate-400 mb-4">
                Full-Stack Developer passionate about creating exceptional digital experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/namit2405" },
                  { icon: Linkedin, href: "https://linkedin.com/in/namit-jain-b7344831a" },
                  { icon: InstagramIcon, href: "https://www.instagram.com/namit.here24/" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.href, "_blank")}
                    className="text-slate-400 hover:text-white"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-slate-400">jainnamit34@gmail.com</p>
                <p className="text-slate-400">+91 6239881326</p>
                <p className="text-slate-400">Jalandhar, Punjab</p>
              </div>
            </div>
          </div>
          
          <hr className="border-slate-700 my-8" />
          
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Namit Jain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
