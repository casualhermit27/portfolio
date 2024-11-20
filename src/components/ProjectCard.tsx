import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  image: string;
  link: string;
}

export const ProjectCard = ({ title, description, year, image, link }: ProjectCardProps) => {
  return (
    <a 
      href={link}
      className="group block"
    >
      <div className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium group-hover:text-neutral-600 transition-colors">{title}</h3>
          <p className="text-sm text-neutral-600 mt-1">{description}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-500">
          <span>{year}</span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
};