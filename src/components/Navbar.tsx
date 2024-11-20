import { Menu } from 'lucide-react';




export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="text-center py-3 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
        <a href="/" className="text-sm font-medium">Sarah Chen</a>
      </div>
      
      <div className="fixed left-16 top-1/2 -translate-y-1/2">
        <div className="hidden md:flex flex-col gap-8 text-sm">
          <a href="#about" className="hover:text-neutral-600 transition-colors">About</a>
          <a href="#work" className="hover:text-neutral-600 transition-colors">Projects</a>
          <a href="#resume" className="hover:text-neutral-600 transition-colors">Resume</a>
        </div>

        <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};