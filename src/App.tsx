import { useEffect, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { GradientSphere } from './components/GradientSphere';
import { TypeWriter } from './components/TypeWriter';
import { ResumeModal } from './components/ResumeModal';
import { motion } from 'framer-motion';
import { BackgroundShapes } from './components/BackgroundShapes';
import { ChevronDown } from 'lucide-react';
import { Navbar } from './components/Navbar';
import '../src/styles/globals.css'
import { ContactForm } from './components/ContactForm';
import { CustomCursor } from './components/CustomCursor';


interface ResumeButtonProps {
  imageUrl: string;
}

export const ResumeButton = ({ imageUrl }: ResumeButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);  

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="inline-block px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-hover-target"
      >
        View Resume
      </button>
      
      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={imageUrl}
      />
    </>
  );
};

const App = () => {
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

  return (
    <div className="min-h-screen bg-white cursor-none">
      <div className="relative cursor-wrapper">
        <CustomCursor />
        <BackgroundShapes />
        <Navbar currentSection={currentSection} />
        <GradientSphere />
        
        <main className="px-6">
          {/* First full-screen section */}
          <Section id="about" className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-2xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl text-neutral-600 mb-4 hero-content">
                  Hi, I'm <span className="text-black">Harsha Chaganti</span> 
                  <span className="wave">👋</span>
                </h2>
                <h1 className="text-4xl md:text-5xl font-medium mb-8 leading-relaxed hero-content">
                  UX designer crafting thoughtful digital experiences
                </h1>
                <motion.div className="relative max-w-4xl mx-auto">
                  {/* Background ellipse */}
                  <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full border-2 border-indigo-100/30 rounded-[60%] transform -rotate-12" />
                    <div className="absolute inset-0 w-full h-full border border-blue-100/20 rounded-[65%] transform -rotate-6" />
                  </div>
                  
                  {/* Saturn-inspired orb */}
                  <motion.div 
                    className="absolute w-8 h-8"
                    animate={{
                      rotate: 360,
                      x: [-30, 30, -30],
                      y: [-15, 15, -15],
                    }}
                    transition={{
                      rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      x: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      top: '15%',
                      left: '-5%',
                    }}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200/50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 rounded-full border border-amber-200/30 -rotate-12" />
                  </motion.div>
                  
                  {/* Neptune-inspired orb */}
                  <motion.div 
                    className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-cyan-200 to-blue-300 border border-blue-200/50"
                    animate={{
                      rotate: -360,
                      x: [20, -20, 20],
                      y: [10, -10, 10],
                    }}
                    transition={{
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      x: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      bottom: '20%',
                      right: '-3%',
                      boxShadow: 'inset -1px -1px 2px rgba(6, 182, 212, 0.2)'
                    }}
                  />

                  {/* Mars-inspired orb */}
                  <motion.div 
                    className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-red-100 to-orange-200 border border-red-200/50"
                    animate={{
                      rotate: 180,
                      x: [-25, 25, -25],
                      y: [-12, 12, -12],
                    }}
                    transition={{
                      rotate: {
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      x: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    style={{
                      top: '70%',
                      left: '0%',
                      boxShadow: 'inset -1.5px -1.5px 3px rgba(248, 113, 113, 0.2)'
                    }}
                  />

                  {/* Your existing text content */}
                  <motion.p
                    className="text-lg text-neutral-600 hero-content relative px-16 py-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <span className="gradient-text">Front-end Developer</span> & <span className="gradient-text">UI/UX Designer</span>{' '}
                    transforming complex data into engaging digital experiences through intuitive dashboards and visualizations. I blend creative design with technical expertise in{' '}
                    <span className="tech-badge">⚛️ React</span>,{' '}
                    <span className="tech-badge">🎯 Django</span>, and{' '}
                    <span className="tech-badge">💫 JavaScript</span>{' '}
                    to build seamless, user-centric interfaces.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </Section>

          {/* Work section */}
          <Section id="work" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-7xl mx-auto text-center px-6">
              <h2 className="text-3xl font-medium mb-16">Selected Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <ProjectCard
                  title="Health Companion App"
                  description="Redesigning patient care experience"
                  year="2023"
                  image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
                <ProjectCard
                  title="Accessibility Design System"
                  description="Component library for inclusive design"
                  year="2023"
                  image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
                <ProjectCard
                  title="E-commerce Platform"
                  description="Modern shopping experience"
                  year="2023"
                  image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
                <ProjectCard
                  title="Smart Home Dashboard"
                  description="IoT device management interface"
                  year="2022"
                  image="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
                <ProjectCard
                  title="Travel Planning App"
                  description="Seamless journey organization"
                  year="2022"
                  image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
                <ProjectCard
                  title="Financial Analytics"
                  description="Data visualization platform"
                  year="2022"
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                  link="#"
                  className="cursor-hover-target"
                />
              </div>
            </div>
          </Section>

          {/* Resume section */}
          <Section id="resume" className="min-h-screen flex items-center justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-medium mb-12">Resume</h2>
              <div className="max-w-2xl">
                <div className="mb-8">
                  <ResumeButton imageUrl="https://placehold.co/600x400" />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium">Senior UX Designer @ Google</h4>
                      <p className="text-neutral-600">2021 - Present</p>
                      <p className="text-neutral-600">Led design initiatives for healthcare products, focusing on accessibility and user engagement.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">UX Designer @ Microsoft</h4>
                      <p className="text-neutral-600">2018 - 2021</p>
                      <p className="text-neutral-600">Developed inclusive design systems and patterns for enterprise applications.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Master's in Human-Computer Interaction</h4>
                      <p className="text-neutral-600">Stanford University, 2018</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Bachelor's in Design</h4>
                      <p className="text-neutral-600">Rhode Island School of Design, 2016</p>
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
                <h2 className="text-3xl font-medium mb-8">Let's Connect</h2>
                
                <p className="text-neutral-600 text-lg mb-12 mx-auto max-w-md">
                  Always interested in hearing about new projects and opportunities. 
                  Feel free to reach out if you'd like to collaborate.
                </p>
              </div>

              <ContactForm />

              <div className="flex justify-center gap-6 mt-12 social-container">
                <a href="mailto:hello@example.com" 
                  className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                           transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                           border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com" 
                  className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                           transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                           border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" 
                  className="p-3 rounded-lg bg-white/50 hover:bg-white/80
                           transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                           border border-neutral-200 hover:border-violet-200 social-icon cursor-hover-target"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default App;