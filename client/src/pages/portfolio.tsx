import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { ProjectCard } from "@/components/ui/project-card";
import { ContactForm } from "@/components/ui/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  FolderOpen
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
      const sections = ["home", "about", "projects", "contact"];
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
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Databases", icon: "🗄️" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data, and customizable widgets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
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
                Hi, I'm <span className="gradient-text">Alex</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-600 mb-6">
                Full-Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I create beautiful, functional web applications that solve real-world problems. 
                Passionate about clean code, elegant design, and exceptional user experiences.
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600" 
                alt="Professional developer portrait" 
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover hover-lift"
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
                With over 5 years of experience in web development, I've had the privilege of working with 
                startups and established companies to bring their digital visions to life. My approach combines 
                technical expertise with creative problem-solving to deliver exceptional results.
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
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-blue-100">Projects Completed</p>
                  </div>
                  <FolderOpen className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">5+</p>
                    <p className="text-blue-100">Years Experience</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-200" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold">20+</p>
                    <p className="text-blue-100">Happy Clients</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-200" />
                </div>
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
                  <span className="text-slate-600">alex.johnson@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary text-xl w-6 mr-4" />
                  <span className="text-slate-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary text-xl w-6 mr-4" />
                  <span className="text-slate-600">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-slate-900 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: Twitter, href: "https://twitter.com" },
                    { icon: Dribbble, href: "https://dribbble.com" }
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
              <h3 className="text-xl font-bold mb-4">Alex Johnson</h3>
              <p className="text-slate-400 mb-4">
                Full-Stack Developer passionate about creating exceptional digital experiences.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Twitter, href: "https://twitter.com" }
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
                <p className="text-slate-400">alex.johnson@email.com</p>
                <p className="text-slate-400">+1 (555) 123-4567</p>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <hr className="border-slate-700 my-8" />
          
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
