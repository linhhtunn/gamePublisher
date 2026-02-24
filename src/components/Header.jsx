import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Sử dụng framer-motion bản ổn định
import { Gamepad2, Globe, Search } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('VN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Danh sách menu - Hãy đảm bảo ID này trùng với id="id_cua_section" ở các file component
  const navItems = [
    { name: 'ABOUT', section: 'about' },      // Cuộn lên đầu
    { name: 'PROJECTS', section: 'portfolio' }, // Cuộn đến Portfolio
    { name: 'CONTACT', section: 'footer' },    // Cuộn đến Footer
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left - Logo phong cách Gaming */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm bg-purple-600 transition-transform group-hover:rotate-12">
              <Gamepad2 className="h-6 w-6 text-white" />
              <div className="absolute inset-0 bg-white/20 translate-y-10 group-hover:translate-y-0 transition-transform" />
            </div>
            <span className="text-xl font-black uppercase italic tracking-tighter text-white">
              PHOENIX<span className="text-purple-500">.</span>
            </span>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="group relative text-[11px] font-black tracking-[0.2em] text-gray-400 transition-colors hover:text-white"
                  >
                    {item.name}
                    {/* Đường gạch chân khi hover */}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right - Language & Search */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSelectedLanguage(selectedLanguage === 'EN' ? 'VN' : 'EN')}
              className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{selectedLanguage}</span>
            </button>

<div
  className={`flex items-center gap-3 px-4 h-10 w-64 rounded-full transition-all duration-300 ${
    isScrolled
      ? 'bg-white/10 backdrop-blur-md border border-white/20'
      : 'bg-white/5 border border-white/10'
  }`}
>
  <input
    type="text"
    placeholder="Search"
    className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
  />
  <Search className="h-4 w-4 text-gray-400" />
</div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}