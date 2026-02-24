import { Gamepad2 } from "lucide-react";
import { SiFacebook, SiX, SiYoutube, SiInstagram } from "react-icons/si";

export function Footer() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    "Báo chí",
    "Bảo mật",
    "Pháp lý",
    "Điều khoản sử dụng",
    "Chính sách quyền riêng tư",
    "Hỗ trợ người chơi",
    "Xác minh điện tử",
    "Khả năng tiếp cận",
    "Báo cáo thường niên",
    "Cam kết cộng đồng",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <SiFacebook />,
      href: "https://facebook.com",
    },
    {
      name: "X",
      icon: <SiX />,
      href: "https://x.com",
    },
    {
      name: "YouTube",
      icon: <SiYoutube />,
      href: "https://youtube.com",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      href: "https://instagram.com",
    },
  ];

  return (
    <footer className="bg-[#111] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-8">
        
        {/* Main Row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT — Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Gamepad2 className="h-6 w-6 text-white" />
            <span className="text-sm font-semibold tracking-wider text-white uppercase">
              Phoenix Studio
            </span>
          </button>

          {/* CENTER — Legal Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wider text-gray-400 md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* RIGHT — Social Icons */}
          <div className="flex items-center gap-4 md:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex items-center justify-center w-10 h-10 
                           rounded-full bg-white/5 
                           text-gray-400 
                           hover:text-purple-400 
                           hover:bg-purple-500/10
                           transition-all duration-300"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 text-center text-[11px] text-gray-500 uppercase tracking-wider">
          © 2026 Phoenix Game Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}