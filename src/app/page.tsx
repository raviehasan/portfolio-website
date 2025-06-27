"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Download, BookOpen, Zap, Code, Brain, Star, Menu, X } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experiences', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "HTML/CSS", "Dart", "Go", "Rust"],
    "Frameworks & Libraries": ["Spring Boot", "Django", "Flutter", "React", "Vue.js", "shadcn/ui"],
    "AI & Data Science": ["PyTorch", "Scikit-learn", "Hugging Face", "OpenSearch", "Matplotlib", "Pandas", "NumPy"],
    "Databases & Tools": ["PostgreSQL", "OpenSearch", "Figma", "Jira", "Microsoft Office", "Canva"],
    "DevOps & Development": ["Google Cloud Platform", "GitHub Actions", "Docker", "System Design (EERD, Class, Context)", "SonarQube", "Datadog", "Sentry", "Google Analytics"]
  };

  const projects = [
    {
      title: "Talent Pool Web Application",
      tech: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "Vite", "SonarQube", "Datadog", "Sentry", "Google Analytics"],
      description: [
        "Partnered up with Rencanakan.id to design and build a scalable recruitment platform, streamlining the workflow between Talents and Contractors.",
        "Delivered features such as digital professional profiles, contractor-side candidate filtering, and WhatsApp integration.",
        "Applied Test-Driven Development (TDD), implemented secure coding practices, enforced code quality with SonarQube code analysis, and achieved 100% test coverage through unit and integration tests for production readiness.",
        "Designed reusable UI components using shadcn/ui, aligned with usability principles, and documented via Storybook.",
        "Integrated CI/CD pipelines with dev-staging-production workflows; implemented full monitoring and observability using Datadog (performance), Sentry (error and logging), Google Analytics (users’ behavior), and custom metrics and alerting.",
        "Worked closely in a cross-functional team and published 10 technical articles covering software architecture, testing, design patterns, team collaboration, software best practices, and many more on medium.com/@ravieabud.",
      ],
      links: {
        "Pitch Deck": "https://drive.google.com/file/d/17GnQ3p1lTweQB1L258jcUGSCGI3yGRKt/view?usp=sharing",
        "Frontend Repo": "https://github.com/Rencanakan-id/rencanakan-talent_pool-frontend",
        "Backend Repo": "https://github.com/Rencanakan-id/rencanakan-talent_pool-backend",
        "Talents Web": "https://rencanakanid-prod.netlify.app/",
        "Contractors Web": "https://rencanakan-system.netlify.app/",
      },
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Credit Card Fraud Detection",
      tech: ["Python", "Scikit-learn", "Reinforcement Learning"],
      description: [
        "Built a hybrid fraud detection framework combining supervised and reinforcement learning to simulate dynamic adversarial behavior in credit card transactions.",
        "Developed a fraud environment modeled as a Markov Decision Process, where a fraudster agent (Monte Carlo and SARSA) interacts with a configurable classifier to maximize fraudulent gains.",
        "Trained multiple supervised classifiers on engineered features and integrated the best-performing model into a dynamic reinforcement learning simulation environment with adjustable detection thresholds.",
        "Conducted extensive experiments analyzing agent policy adaptation under static and dynamic threshold scenarios; showed that frequent threshold changes disrupt convergence and reduce fraud impact.",
        "Led a comparative study between Monte Carlo and SARSA agents, highlighting trade-offs in adaptability and learning stability under non-stationary conditions.",
      ],
      links: {
        "Report and Analysis Paper": "https://drive.google.com/file/d/1IO26ONwFoqQdlIPCFK6X3pAwVQg1o4cI/view?usp=sharing",
        "Codes Repo": "https://github.com/raviehasan/cc-fraud-detection"
      },
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Multilingual NLI with Transformers",
      tech: ["PyTorch", "Hugging Face", "RemBERT"],
      description: [
        "Engineered a complete PyTorch pipeline to fine-tune and evaluate encoder-only transformer models.",
        "Implemented advanced training strategies, such as gradient accumulation, AdamW optimizer with a cosine scheduler.",
        "Applied regularization techniques and early stopping to improve models’ generalization and prevent overfitting.",
        "Conducted a rigorous ablation study on RemBERT model, demonstrating the critical role of Multi-Head Attention and Layer Normalization in contextual learning and training stability.",
        "Performed in-depth analysis using confusion matrices, error breakdowns, and t-SNE visualizations; authored a comprehensive report highlighting the effect of architectural and hyperparameter choices.",
      ],
      links: {
        "Report and Analysis Slide": "https://drive.google.com/file/d/1swDHfAothXzg004rP552ZUBHntQ9ij7V/view?usp=sharing",
        "Codes Repo": "https://github.com/raviehasan/natural-language-inference-classification"
      },
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "ESEMPEHA Search Engine",
      tech: ["Django", "OpenSearch", "Docker", "LLMs"],
      description: [
        "Developed an advanced information retrieval system for scientific facts, built with Django and powered by OpenSearch, integrating both traditional keyword search and semantic search using sentence transformers.",
        "Implemented query correction, autocomplete, and AI-generated summaries using large language models.",
        "Engineered a custom domain-specific tokenizer and semantic embedding index to enhance scientific search accuracy.",
        "Designed a responsive frontend with Tailwind CSS and real-time UX enhancements (query correction and completion).",
        "Containerized system using Docker and implemented scalable architecture, suitable for research and deployment.",
      ],
      links: {
        "Full-Stack Repo": "https://github.com/raviehasan/esempeha-search-engine",
        "Web Demo Video": "http://ristek.link/video-presentasi-esempeha"
      },
      icon: <Star className="w-6 h-6" />
    }
  ];

  const experiences = [
    {
      role: "Teaching Assistants in Multiple Courses",
      company: "Faculty of Computer Science, Universitas Indonesia",
      period: "Aug 2023 – Present",
      courses: ["Data Structures and Algorithms", "Introduction to AI and Data Science", "Automata and Theory of Languages", "Platform-Based Development", "Design and Analysis of Algorithms", "Calculus 2", "Linear Algebra", "Discrete Mathematics 1"],
      description: [
        "Design and curate both programming and mathematical assignments, labs, and projects tailored to to each course’s objectives—from theoretical foundations to real-world applications.",
        "Conduct regular tutorial and exam preparation sessions, and ensure that students feel comfortable in seeking help.",
        "Assess student works and provided personalized constructive feedback to support growth and deeper understanding.",
        "For algorithm-intensive courses, author programming problems in the style of competitive programming to sharpen students’ analytical skills and algorithm design.",
        "For theoretical courses, develop structured exercises to strengthen students’ understanding of mathematical modeling.",
        "For AI and data science courses, support students in bridging mathematical theory, data-driven reasoning, and algorithmic implementation, enabling them to apply core AI concepts to real-world case studies.",
        "For software development courses, guide students through end-to-end web (Django) and mobile development (Flutter) and deliver live demos for each assignment and project.",
      ]
    },
    {
      role: "Staff of Student's Career and Scholarly Development Department",
      company: "BEM Faculty of Computer Science, Universitas Indonesia",
      period: "Apr 2023 – Mar 2024",
      description: [
        "Actively supported and facilitated various student development events, including internship workshops, IELTS preparation, and technical competitions.",
        "Led the appreciation program for student competition winners by collecting achievement data, coordinating publication, and managing token of appreciation distribution to boost motivation and student morale.",
      ]
    },
    {
      role: "Staff of Software Engineering Academy",
      company: "COMPEST",
      period: "Apr 2023 – Nov 2023",
      description: [
        "Recruited and collaborated with experienced software engineering professionals to serve as bootcamp speakers and project mentor.",
        "Facilitated mentor-student group pairings and ensured effective guidance throughout project development.",
        "Conducted candidate selection by interviewing applicants and assessing their technical projects.",
      ]
    },
    {
      role: "Intern Staff of Science Bureau",
      company: "BEM Faculty of Computer Science, Universitas Indonesia",
      period: "Sep 2022 - Dec 2022",
      description: [
        "Served as Vice Project Lead for the Science Fun Fact event, managing the project from ideation to execution and promoting scientific curiosity and engagement within the faculty.",
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-40 bg-background/95 backdrop-blur-xl border-b border-border/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Ravie Hasan Abud
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "About", id: "about" },
                { name: "Education", id: "education" },
                { name: "Experiences", id: "experience" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  className={`nav-link relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-accent bg-accent/10' 
                      : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeSection === item.id ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 border-t border-border/30"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {[
                    { name: "About", id: "about" },
                    { name: "Education", id: "education" },
                    { name: "Experiences", id: "experiences" },
                    { name: "Skills", id: "skills" },
                    { name: "Projects", id: "projects" }
                  ].map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={`#${item.id}`}
                      className="nav-link block px-4 py-3 rounded-lg text-foreground/80 hover:text-accent hover:bg-accent/10 transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center tech-grid relative px-2 sm:px-4">
        <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 break-words leading-tight"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="gradient-text">Ravie Hasan Abud</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-muted mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Computer Science Student | AI, ML, and Software Development Enthusiast
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base md:text-base lg:text-lg text-text-muted mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Ravie is a dedicated final-year computer science student at Universitas Indonesia with a strong passion for artificial intelligence, machine learning, and software development. Experienced in building full-stack applications and conducting research-driven machine learning projects. Proficient in Python, Java, JavaScript, Dart, and Go, with experience using frameworks such as Spring Boot, Flutter, Django, and React. Known for being responsible, detail-oriented, eagerness to embrace new challenges, and highly committed to continuous learning. He is currently seeking professional opportunities to grow and make a meaningful impact in the tech industry.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.a 
                href="mailto:ravieabud@gmail.com" 
                className="social-link group flex-col sm:flex-row"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title="Email"
              >
                <Mail size={20} className="group-hover:text-accent transition-colors mb-1 sm:mb-0 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">Email</span>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/ravieabud" 
                className="social-link group flex-col sm:flex-row"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                title="LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-accent transition-colors mb-1 sm:mb-0 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://github.com/raviehasan" 
                className="social-link group flex-col sm:flex-row"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title="GitHub"
              >
                <Github size={20} className="group-hover:text-accent transition-colors mb-1 sm:mb-0 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://medium.com/@ravieabud" 
                className="social-link group flex-col sm:flex-row"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                title="Medium"
              >
                <BookOpen size={20} className="group-hover:text-accent transition-colors mb-1 sm:mb-0 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">Medium</span>
              </motion.a>
              <motion.a 
                href="/CV - Ravie Hasan Abud.pdf" 
                download="CV - Ravie Hasan Abud.pdf"
                className="social-link group bg-accent/10 border-accent/30 flex-col sm:flex-row"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title="Download CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} className="group-hover:text-accent transition-colors mb-1 sm:mb-0 sm:mr-2 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm">CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-accent glow-icon" />
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-card-bg p-8 rounded-2xl border border-border backdrop-blur-sm hover:glow-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">Universitas Indonesia</h3>
              <p className="text-accent mb-2">Bachelor of Computer Science</p>
              <p className="text-text-muted mb-4">2022 – Present | Depok, Indonesia</p>
              <div className="text-xl font-semibold">
                <span className="gradient-text pulse-glow">Cumulative GPA: 3.94/4.00</span>
              </div>
            </motion.div>
            <motion.div 
              className="bg-card-bg p-8 rounded-2xl border border-border backdrop-blur-sm hover:glow-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">SMA Negeri 1 Bogor</h3>
              <p className="text-accent mb-2">Mathematics and Natural Science</p>
              <p className="text-text-muted">2019 – 2022</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider animated-divider"></div>

      {/* Experiences Section */}
      <section id="experiencs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work & Organizational Experiences
          </motion.h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-card-bg p-8 rounded-2xl border border-border backdrop-blur-sm hover:glow-card group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-accent text-lg">{exp.company}</p>
                  </div>
                  <span className="text-text-muted font-mono bg-accent/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 self-start whitespace-nowrap">{exp.period}</span>
                </div>
                {exp.courses && (
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Courses:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.courses.map((course, i) => (
                        <motion.span 
                          key={i} 
                          className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm hover:bg-accent/30 transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  {exp.description.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <span className="text-text-muted leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider animated-divider"></div>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hard Skills
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                className="bg-card-bg p-6 rounded-2xl border border-border backdrop-blur-sm hover:glow-card group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* <h3 className="text-xl font-semibold mb-4 text-center hover:text-accent transition-colors">{category}</h3> */}
                <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-accent rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                      <span className="text-text-muted">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold gradient-text mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Soft Skills
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 px-4">
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Adaptability</h3>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Problem Solving</h3>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Collaboration</h3>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Communication</h3>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Attention to Detail</h3>
              </motion.div>
              <motion.div 
                className="text-center p-3 sm:p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-sm sm:text-lg font-semibold mb-1">Critical Thinking</h3>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold gradient-text mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Languages
            </motion.h2>
            <div className="flex justify-center space-x-4">
              <motion.div 
                className="text-center p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* <div className="text-xl font-semibold gradient-text">Indonesian</div> */}
                <h3 className="text-xl font-semibold mb-1">Indonesian</h3>
                <div className="text-text-muted">Native</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-card-bg rounded-2xl border border-border hover:glow-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* <div className="text-xl font-semibold gradient-text">English</div> */}
                <h3 className="text-xl font-semibold mb-1">English</h3>
                <div className="text-text-muted">Professional working proficiency</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider animated-divider"></div>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold gradient-text mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-card-bg p-8 rounded-2xl border border-border backdrop-blur-sm group hover:glow-card relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 text-accent opacity-50 group-hover:opacity-100 transition-opacity">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm hover:bg-accent/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="space-y-3 mb-6">
                  {project.description.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <span className="text-text-muted leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {Object.entries(project.links).map(([type, url]) => (
                    <motion.a
                      key={type}
                      href={url}
                      className="flex items-center space-x-2 text-accent hover:text-accent-bright transition-colors group"
                      whileHover={{ scale: 1.05, x: 3 }}
                    >
                      <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                      <span className="capitalize">{type}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p 
            className="text-text-muted mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with Next.js, React, Tailwind CSS, and Framer Motion
          </motion.p>
          <motion.p 
            className="text-text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2024 Ravie Hasan Abud. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
