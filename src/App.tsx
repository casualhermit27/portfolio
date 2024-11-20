import { Mail, Github, Linkedin } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ScrollProgress } from './components/ScrollProgress';
import { GradientSphere } from './components/GradientSphere';
import { TypeWriter } from './components/TypeWriter';

const App = () => {
  return (
    <div className="min-h-screen bg-white/70 pt-28 relative">
      <ScrollProgress />
      <GradientSphere />
      <Navbar />
      
      <main className="px-6 max-w-6xl mx-auto">
        <Section id="about" title="About">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-medium mb-8 leading-relaxed">
              UX designer crafting thoughtful digital experiences. Currently focusing on healthcare and accessibility.
            </h1>
            <TypeWriter 
              text="Previously worked with teams at Google, Microsoft, and various startups to create user-centered solutions that make a difference."
            />
          </div>
        </Section>

        <Section id="work" title="Selected Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProjectCard
              title="Health Companion App"
              description="Redesigning patient care experience"
              year="2023"
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000"
              link="#"
            />
            <ProjectCard
              title="Accessibility Design System"
              description="Component library for inclusive design"
              year="2023"
              image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2000"
              link="#"
            />
          </div>
        </Section>

        <Section id="resume" title="Resume">
          <div className="max-w-2xl">
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
        </Section>

        <Section title="Connect">
          <div className="flex flex-col gap-8">
            <p className="text-neutral-600 max-w-xl">
              Always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate.
            </p>
            <div className="flex gap-6">
              <a 
                href="mailto:hello@example.com" 
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default App;