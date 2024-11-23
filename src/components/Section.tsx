interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`mb-32 ${className}`}>
      {title && <h2 className="text-lg font-medium mb-8">{title}</h2>}
      {children}
    </section>
  );
};