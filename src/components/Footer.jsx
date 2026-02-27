import { Gamepad2, Building2, Mail, Phone } from "lucide-react";
import { SiFacebook, SiX, SiYoutube, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";

export function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    "Privacy Policy",
    "Data deletion",
    "Terms of Use",
    "Community Commitment",
  ];

  const socialLinks = [
    { name: "Facebook", icon: <SiFacebook />, href: "#" },
    { name: "X", icon: <SiX />, href: "#" },
    { name: "YouTube", icon: <SiYoutube />, href: "#" },
    { name: "Instagram", icon: <SiInstagram />, href: "#" },
  ];

  return (
    <footer className="bg-[#211f1f] border-t border-white/5 pt-12 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP SECTION: CONTACT & BRANDING */}
        <div className=" gap-20 lg:grid-cols-2 mb-20">
          
          {/* LEFT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
 
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center lg:items-start"
          >
            <button
              onClick={handleLogoClick}
              className="group flex items-center lg:items-end gap-4 transition-all mb-6 "
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/5 transition-all">
                <Gamepad2 className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <span className="text-2xl mb-3 font-black tracking-[0.3em] text-white uppercase italic">
                Teraxel Limited
              </span>
            </button>
          </motion.div>
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                 
                  <p className="font-bold text-gray-200 text-sm">UNIT 1603, 16TH FLOOR, THE L. PLAZA 367-375 QUEEN’S ROAD CENTRAL SHEUNG WAN HONG KONG.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  
                  <p className="font-bold text-gray-200">contact@teraxellimited.com</p>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-center gap-6 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                 
                  <p className="font-bold text-gray-200">+84 123 456 789</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: BRAND LOGO & DECORATION */}

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Legal Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-widest">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="hover:text-purple-400 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          © 2026 Teraxel Limited Game Studio. Powered by Innovation.
        </div>
      </div>
    </footer>
  );
}