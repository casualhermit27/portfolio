interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-medium mb-12 text-neutral-500">{title}</h2>
        {children}
      </div>
    </section>
  );
};