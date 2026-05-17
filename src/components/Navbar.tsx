import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useSettings } from '../lib/useSettings';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { settings } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#promotions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/95 border-b border-slate-100 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://thegloryworldvisatravel.com/wp-content/uploads/2025/03/logo.png" 
            alt={settings.siteName} 
            className={cn(
              "h-10 md:h-12 w-auto border-r border-slate-200 pr-3 object-contain transition-transform group-hover:scale-105"
            )}
          />
          <div className="flex flex-col leading-tight">
            <span className={cn(
              "text-base md:text-lg font-black uppercase tracking-tight transition-colors",
              isScrolled ? "text-black" : "text-white"
            )}>
              {settings.siteName}
            </span>
            <span className={cn(
              "text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] transition-colors",
              isScrolled ? "text-blue-600" : "text-white"
            )}>
              {settings.siteAccent}
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full",
                isScrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className={cn(
            "flex items-center gap-4 border-l pl-8",
            isScrolled ? "border-slate-100" : "border-white/20"
          )}>
            <a href={`tel:${settings.phone}`} className={cn(
              "flex items-center gap-2 text-sm font-black transition-colors",
              isScrolled ? "text-blue-600" : "text-white"
            )}>
              <PhoneCall size={16} />
              {settings.phone}
            </a>
            <Link
              to="/admin/login"
              className={cn(
                "rounded-full px-6 py-2.5 text-[11px] font-extrabold transition-all uppercase tracking-wider",
                isScrolled ? "bg-slate-100 text-slate-900 hover:bg-slate-200" : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              )}
            >
              ADMIN
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "rounded-lg p-2 lg:hidden transition-colors",
            isScrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 left-0 h-screen w-full bg-white p-8 lg:hidden z-50 overflow-y-auto"
          >
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-50 text-slate-900 border border-slate-100"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mt-12 flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="text-3xl font-black text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-slate-100"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 text-center">Contact Us</div>
                <a href={`tel:${settings.phone}`} className="text-2xl font-black text-blue-600">
                  {settings.phone}
                </a>
                
                <div className="mt-12 flex flex-col gap-3">
                   <Link
                      to="/admin/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full rounded-2xl bg-slate-900 py-4 text-white font-black uppercase tracking-widest text-sm shadow-xl shadow-slate-200"
                    >
                      ADMIN LOGIN
                    </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
