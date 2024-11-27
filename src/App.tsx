import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { GradientSphere } from './components/GradientSphere';
import { ResumeModal } from './components/ResumeModal';
import { motion } from 'framer-motion';
import { BackgroundShapes } from './components/BackgroundShapes';
import { Navbar } from './components/Navbar';
import '../src/styles/globals.css'
import { ContactForm } from './components/ContactForm';
import { CustomCursor } from './components/CustomCursor';
import { Background } from './components/Background';
import { ConnectButton } from './components/ConnectButton';
import { CopyToClipboard } from './components/CopyToClipboard';
import { LoadingAnimation } from './components/LoadingAnimation';
import { TypeAnimation } from 'react-type-animation';

interface ResumeButtonProps {
  imageUrl: string;
}

export const ResumeButton = ({ imageUrl }: ResumeButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  return (
    <>
      <div className="cursor-hover-target">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group relative inline-flex items-center justify-center px-8 py-3 
                   overflow-hidden font-medium transition duration-300 ease-out 
                   border-2 border-violet-500 rounded-full shadow-md"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full 
                        text-white duration-300 -translate-x-full 
                        bg-gradient-to-r from-blue-500 to-violet-500 
                        group-hover:translate-x-0 ease">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              >
              </path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full 
                        text-violet-500 transition-all duration-300 transform 
                        group-hover:translate-x-full ease">
            View Resume
          </span>
          <span className="relative invisible">View Resume</span>
        </button>
      </div>
      
      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
      />
    </>
  );
};

interface WorkItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  index: number;
}

const WorkItem = ({ year, title, description, image, tech, link, index }: WorkItemProps & { index: number }) => {
  const isTopRow = index < 3;

  return (
    <div className="group relative">
      {/* Base card with clean borders */}
      <div className="relative p-6 rounded-xl bg-white/50 
                    border border-neutral-200
                    transition-all duration-300 ease-out cursor-pointer
                    hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-100
                    hover:border-neutral-300">
        {/* Card content */}
        <div className="relative">
          <span className="text-neutral-400 text-sm font-mono mb-2 block">{year}</span>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-neutral-600 text-sm">{description}</p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.slice(0, 2).map((item, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full 
                         bg-white border border-neutral-200
                         text-neutral-600"
              >
                {item}
              </span>
            ))}
            {tech.length > 2 && (
              <span className="px-2 py-1 text-xs rounded-full 
                           bg-white border border-neutral-200
                           text-neutral-600">
                +{tech.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover card */}
      <div className={`opacity-0 group-hover:opacity-100 pointer-events-none
                    absolute left-[105%] w-[400px]
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    bg-white
                    rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]
                    border border-neutral-200
                    transform translate-x-8 group-hover:translate-x-0
                    scale-95 group-hover:scale-100
                    z-50
                    ${isTopRow ? 'top-0' : 'bottom-0'}`}>
        {/* Content */}
        <div className="relative p-6">
          {/* Large image */}
          <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-lg border border-neutral-100">
            <img 
              src={image} 
              alt={title}
              className="object-cover w-full h-full transform 
                       scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
            />
          </div>
          
          {/* Project info */}
          <div className="space-y-4">
            <div>
              <span className="text-neutral-400 text-sm font-mono">{year}</span>
              <h4 className="text-xl font-medium mt-1">{title}</h4>
            </div>
            
            <p className="text-neutral-600 leading-relaxed">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-sm rounded-full 
                           bg-white border border-neutral-200
                           text-neutral-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-violet-600 
                         hover:text-violet-700 transition-colors group/link mt-2"
              >
                View Project 
                <svg 
                  className="w-4 h-4 ml-1 transform transition-transform duration-300 
                           group-hover/link:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    d="M5 12h14M12 5l7 7-7 7" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    year: "2024",
    title: "Airbnb Feature Implementation",
    description: "A case study exploring new feature design for Airbnb's platform. Focused on improving user experience through detailed UI/UX design and interactive prototyping.",
    image: "/airbnb/airbnb thumbnail 1.png",
    logo: "https://cdn.worldvectorlogo.com/logos/airbnb.svg",
    tech: ["Figma", "UI/UX", "Prototyping", "User Research"],
    link: "https://www.figma.com/your-project-link",
    color: "border-rose-500/20 hover:border-rose-500/40",
    hoverBg: "hover:bg-rose-500/[0.02]"
  },
  {
    year: "2023",
    title: "Project One",
    description: "A clean and minimal dashboard for data visualization with real-time updates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "https://project-link.com",
    color: "border-violet-500/20 hover:border-violet-500/40",
    hoverBg: "hover:bg-violet-500/[0.02]"
  },
  {
    year: "2023",
    title: "Project Two",
    description: "Real-time analytics platform with customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "https://project-link.com",
    color: "border-blue-500/20 hover:border-blue-500/40",
    hoverBg: "hover:bg-blue-500/[0.02]"
  },
  {
    year: "2022",
    title: "Project Three",
    description: "E-commerce platform with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2340&auto=format&fit=crop",
    tech: ["React", "Python", "AWS"],
    link: "https://project-link.com",
    color: "border-emerald-500/20 hover:border-emerald-500/40",
    hoverBg: "hover:bg-emerald-500/[0.02]"
  },
  {
    year: "2022",
    title: "Project Four",
    description: "Social media dashboard with content management.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2340&auto=format&fit=crop",
    tech: ["Vue.js", "Firebase", "TailwindCSS"],
    link: "https://project-link.com",
    color: "border-amber-500/20 hover:border-amber-500/40",
    hoverBg: "hover:bg-amber-500/[0.02]"
  },
  {
    year: "2022",
    title: "Project Five",
    description: "AI-powered code generation platform.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2344&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "React"],
    link: "https://project-link.com",
    color: "border-rose-500/20 hover:border-rose-500/40",
    hoverBg: "hover:bg-rose-500/[0.02]"
  },
  {
    year: "2021",
    title: "Project Six",
    description: "Blockchain-based voting system.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2340&auto=format&fit=crop",
    tech: ["Solidity", "React", "Node.js"],
    link: "https://project-link.com",
    color: "border-cyan-500/20 hover:border-cyan-500/40",
    hoverBg: "hover:bg-cyan-500/[0.02]"
  }
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="work" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full my-auto py-32">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-16 cursor-hover-target tracking-wide font-primary text-center">
            Selected Work
          </h2>
          
          <div className="relative rounded-2xl border border-neutral-200/10 
                        bg-gradient-to-b from-white/[0.03] to-transparent
                        backdrop-blur-sm p-8">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="group relative"
                >
                  {/* Project Pill */}
                  <div className={`relative flex items-center justify-between px-12 py-6
                                rounded-full border-2 backdrop-blur-[2px]
                                transition-all duration-500
                                ${project.color} ${project.hoverBg}
                                min-w-[800px] cursor-hover-target`}>
                    {/* Left: Thumbnail and Project Info */}
                    <div className="flex items-center gap-8">
                      {/* Project Thumbnail/Logo */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden
                                    border-2 border-neutral-200/10 bg-white">
                        <img 
                          src={project.logo || project.image}
                          alt={project.title}
                          className="object-contain w-full h-full p-3"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="flex items-center gap-16">
                        <span className="text-sm text-neutral-500 w-20 tracking-wide font-primary">
                          {project.year}
                        </span>
                        <h3 className="text-xl min-w-[200px] tracking-wide font-primary">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Tech Stack */}
                    <div className="flex items-center gap-12">
                      <div className="flex gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs rounded-full 
                                     bg-white/10 backdrop-blur-sm
                                     border border-neutral-200/10
                                     font-primary tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-3 py-1 text-xs rounded-full 
                                         bg-white/10 backdrop-blur-sm
                                         border border-neutral-200/10
                                         font-primary tracking-wide">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0,
                          x: activeIndex === index ? 0 : -10 
                        }}
                        className={`text-2xl ${project.color.split(' ')[0].replace('/20', '')}`}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Hover Preview */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-[calc(100%+2rem)] top-0 w-[450px]
                              bg-white/5 backdrop-blur-[8px]
                              rounded-xl border ${project.color.split(' ')[0]}
                              shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                              p-6 z-50 pointer-events-none`}
                  >
                    <div className="space-y-4">
                      {/* Larger Project Image */}
                      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="object-contain w-full h-full"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed font-primary">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 text-sm rounded-full 
                                     bg-white border border-neutral-200
                                     text-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('about');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });

    const handleScroll = (isScrollingDown: boolean) => {
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -window.innerHeight/2 && rect.top <= window.innerHeight/2;
      });

      const nextSection = isScrollingDown ? currentSection + 1 : currentSection - 1;

      if (nextSection >= 0 && nextSection < sections.length) {
        sections[nextSection].scrollIntoView({ behavior: 'smooth' });
      }
    };

    const preventPartialScroll = (event: WheelEvent) => {
      event.preventDefault();
      handleScroll(event.deltaY > 0);
    };

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        handleScroll(event.key === 'ArrowDown');
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      if (Math.abs(deltaY) > 50) {
        handleScroll(deltaY > 0);
      }
    };

    // Add all event listeners
    window.addEventListener('wheel', preventPartialScroll, { passive: false });
    window.addEventListener('keydown', handleKeyboard);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      // Cleanup observer and event listeners
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.unobserve(section);
      });
      window.removeEventListener('wheel', preventPartialScroll);
      window.removeEventListener('keydown', handleKeyboard);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  if (loading) {
    return <LoadingAnimation onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative cursor-wrapper">
        <CustomCursor />
        <ConnectButton />
        <BackgroundShapes />
        <Navbar currentSection={currentSection} />
        <GradientSphere />
        
        <main className="relative z-10 p-[6px]">
          {/* Global background with orbs */}
          <div className="fixed inset-0 -z-10">
            {/* Solar system - centered container */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]">
              {/* Sun - centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                            w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200 to-orange-400 
                            blur-sm animate-pulse opacity-30" />
              
              {/* Mercury - 45deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[200px] h-[200px] rounded-full border border-neutral-200/20 
                            animate-orbit-8 rotate-[45deg]">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2
                              w-2 h-2 rounded-full bg-gray-300/50" />
              </div>
              
              {/* Venus - 120deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[300px] h-[300px] rounded-full border border-neutral-200/20 
                            animate-orbit-12 rotate-[120deg]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2
                              w-3 h-3 rounded-full bg-amber-200/50" />
              </div>
              
              {/* Earth - 200deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[400px] h-[400px] rounded-full border border-neutral-200/20 
                            animate-orbit-16 rotate-[200deg]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2
                              w-4 h-4 rounded-full bg-gradient-to-b from-blue-300/50 to-green-300/50" />
              </div>

              {/* Mars - 280deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[500px] h-[500px] rounded-full border border-neutral-200/20 
                            animate-orbit-20 rotate-[280deg]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2
                              w-3 h-3 rounded-full bg-red-300/50" />
              </div>

              {/* Jupiter - 160deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[650px] h-[650px] rounded-full border border-neutral-200/20 
                            animate-orbit-25 rotate-[160deg]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2
                              w-8 h-8 rounded-full bg-gradient-to-r from-amber-200/50 to-orange-300/50" />
              </div>

              {/* Saturn - 75deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[800px] h-[800px] rounded-full border border-neutral-200/20 
                            animate-orbit-30 rotate-[75deg]">
                <div className="absolute top-0 left-[50%] -translate-x-1/2">
                  {/* Saturn's body */}
                  <div className="w-7 h-7 rounded-full 
                                bg-gradient-to-r from-orange-400/50 to-amber-500/50" />
                  {/* Saturn's rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  w-28 h-8 [border-radius:100%] border-2 border-neutral-200/50
                                  -rotate-15 scale-x-100 scale-y-25" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  w-24 h-7 [border-radius:100%] border-2 border-neutral-300/50
                                  -rotate-15 scale-x-100 scale-y-25" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                  w-20 h-6 [border-radius:100%] border-2 border-neutral-100/50
                                  -rotate-15 scale-x-100 scale-y-25" />
                  </div>
                </div>
              </div>

              {/* Uranus - 320deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[950px] h-[950px] rounded-full border border-neutral-200/20 
                            animate-orbit-35 rotate-[320deg]">
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2
                              w-5 h-5 rounded-full bg-gradient-to-b from-cyan-200/50 to-blue-200/50" />
              </div>

              {/* Neptune - 240deg start */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center
                            w-[1100px] h-[1100px] rounded-full border border-neutral-200/20 
                            animate-orbit-40 rotate-[240deg]">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2
                              w-4 h-4 rounded-full bg-gradient-to-b from-blue-400/50 to-blue-600/50" />
              </div>
            </div>
          </div>

          {/* About section content */}
          <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
              <motion.div className="space-y-8">
                {/* Greeting - centered */}
                <motion.span 
                  className="text-sm font-mono bg-gradient-to-r from-neutral-500 to-neutral-400 bg-clip-text text-transparent"
                >
                  Hi there, I'm
                </motion.span>

                {/* Name - centered */}
                <motion.h1 
                  className="text-6xl font-bold text-neutral-900 font-display"
                >
                  Harsha Chaganti
                </motion.h1>

                {/* Role - centered */}
                <motion.div 
                  className="text-3xl font-display font-semibold"
                >
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">AI-Augmented</span>
                  {' '}Front-End Developer
                </motion.div>

                {/* Description - centered */}
                <motion.p 
                  className="text-lg text-neutral-600 max-w-2xl"
                >
                  I design <span className="text-violet-600">user-centric interfaces</span> and leverage{' '}
                  <span className="text-blue-600">AI tools</span> to generate optimized front-end code, 
                  bridging the gap between creativity and technical implementation for seamless web experiences.
                </motion.p>

                {/* Buttons - Subtle style with larger size and rounded corners */}
                <motion.div className="flex gap-6 pt-4 justify-center">
                  <motion.a
                    href="#work"
                    className="relative px-8 py-3 text-base font-medium tracking-wide
                             text-violet-600 transition-colors duration-300
                             border border-violet-200 rounded-full
                             hover:bg-violet-50 hover:border-violet-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View My Work
                  </motion.a>

                  <motion.a
                    href="#connect"
                    className="relative px-8 py-3 text-base font-medium tracking-wide
                             text-neutral-600 transition-colors duration-300
                             border border-neutral-200 rounded-full
                             hover:bg-neutral-50 hover:border-neutral-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get in Touch
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Work section with minimal design */}
          <WorkSection />

          {/* Resume section */}
          <Section id="resume" className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-12">Resume</h2>
              <div className="max-w-2xl">
                <div className="mb-8">
                  <ResumeButton imageUrl="/Resume.jpg" />
                </div>
                
                <div className="pointer-events-none">
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Experience</h3>
                    <div className="space-y-12 relative">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-blue-200 to-violet-200"></div>
                      
                      {/* Oracle Cerner */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 transform -translate-x-1/2"></div>
                        
                        <h4 className="font-medium flex items-center justify-between">
                          <span>Software Engineer @ Oracle Cerner</span>
                          <span className="text-sm text-neutral-500">2022 - Present</span>
                        </h4>
                        
                        <div className="mt-2 space-y-3">
                          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                              Developed and optimized interactive dashboards using Python, Django, and JavaScript, 
                              delivering real-time data insights and enhancing decision-making processes at Oracle Cerner.
                            </p>
                          </div>
                          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                              Monitored and audited physical and virtual network devices to ensure optimal 
                              performance and compliance with organizational standards.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* System Intern */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 transform -translate-x-1/2"></div>
                        
                        <h4 className="font-medium flex items-center justify-between">
                          <span>System Intern @ Cerner Healthcare Solutions</span>
                          <span className="text-sm text-neutral-500">2022 January - 2022 August</span>
                        </h4>
                        
                        <div className="mt-2">
                          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                            Developed responsive front-end interfaces and integrated RESTful APIs using Spring Boot to enhance dashboard functionality and user experience.
                            </p>
                          </div>
                          <div className="mt-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                            Contributed to building and optimizing dashboards by collaborating with back-end teams, ensuring seamless data flow and improved system responsiveness.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Education</h3>
                    <div className="space-y-12 relative">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-blue-200 to-violet-200"></div>
                      
                      {/* Christ University */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 transform -translate-x-1/2"></div>
                        
                        <h4 className="font-medium flex items-center justify-between">
                          <span>Bachelor's in Computer Science and Engineering</span>
                          <span className="text-sm text-neutral-500">2018 - 2022</span>
                        </h4>
                        
                        <div className="mt-2">
                          <div className="p-4 bg-white rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                              Christ University, Bangalore
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* CMR College */}
                      <div className="relative pl-8">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 transform -translate-x-1/2"></div>
                        
                        <h4 className="font-medium flex items-center justify-between">
                          <span>Pre-University</span>
                          <span className="text-sm text-neutral-500">2016-2018</span>
                        </h4>
                        
                        <div className="mt-2">
                          <div className="p-4 bg-white rounded-lg border border-neutral-200">
                            <p className="text-neutral-600 relative z-10">
                              CMR National PU College, Bangalore
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Connect section */}
          <Section id="connect" className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-xl mx-auto px-6">
              <div className="text-center">
                <h2 className="text-3xl font-medium mb-8 cursor-hover-target">Let's Connect</h2>
                
                <p className="text-neutral-600 text-lg mb-12 mx-auto max-w-md">
                  Always interested in hearing about new projects and opportunities. 
                  Feel free to reach out if you'd like to collaborate.
                </p>
              </div>

              <ContactForm />

              <div className="flex justify-center gap-6 mt-12 social-container">
                <div className="relative group">
                  <a href="mailto:harshachaganti2@gmail.com" 
                    className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                             transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                             border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target inline-flex"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  
                  {/* Combined Email Box */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                                  bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 
                                  transition-all duration-200 border border-neutral-200 whitespace-nowrap
                                  flex flex-col items-center p-2">
                    {/* Triangle */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 
                                    border-8 border-transparent border-b-white"></div>
                    
                    {/* Email and Copy Button */}
                    <CopyToClipboard text="harshachaganti2@gmail.com" />
                  </div>
                </div>

                <a href="https://www.linkedin.com/in/harsha-chaganti/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                           transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                           border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://dribbble.com/casualhermit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                           transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                           border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target"
                  aria-label="Dribbble"
                >
                  <svg 
                    className="h-5 w-5" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/>
                  </svg>
                </a>
              </div>
            </div>
          </Section>
        </main>
      </div>
      <div className="relative">
        
      </div>
    </div>
  );
};

export default App;