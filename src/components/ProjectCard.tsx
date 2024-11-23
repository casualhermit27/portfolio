import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  image: string;
  link: string;
  className?: string;
}

export const ProjectCard = ({ title, description, year, image, link, className }: ProjectCardProps) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href={link}
        className="group block"
      >
        <motion.div 
          className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-lg mb-4 h-64"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium text-sm group-hover:text-neutral-600 transition-colors">{title}</h3>
            <p className="text-xs text-neutral-600 mt-1">{description}</p>
          </div>
          <motion.div 
            className="flex items-center gap-2 text-xs text-neutral-500"
            whileHover={{ x: 2, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <span>{year}</span>
            <ArrowUpRight className="h-3 w-3" />
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
};