import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="footer" className="relative py-24 overflow-hidden text-white border-t border-white/5">
      {/* Hiệu ứng nền */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2">
          {/* Thông tin bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              Let's build <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                the future.
              </span>
            </h2>
            <p className="mb-12 text-lg text-gray-400 font-medium max-w-md border-l-2 border-purple-600 pl-6">
              Bạn có một ý tưởng game đột phá? Hãy cùng Phoenix Studio biến nó thành hiện thực.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gray-900 border border-white/5 group-hover:border-purple-500 transition-colors">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Gửi Email</p>
                  <p className="font-bold text-gray-200">contact@phoenixstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-gray-900 border border-white/5 group-hover:border-purple-500 transition-colors">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Hotline</p>
                  <p className="font-bold text-gray-200">+84 123 456 789</p>
                </div>
              </div>
            </div>


          </motion.div>

          {/* Form bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/2 border border-white/10 p-10 rounded-2xl backdrop-blur-sm shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Họ và tên</label>
                  <input
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/5 px-4 py-4 text-white focus:border-purple-500 focus:outline-none transition-all rounded-sm"
                    placeholder="Phoenix Developer"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-white/5 px-4 py-4 text-white focus:border-purple-500 focus:outline-none transition-all rounded-sm"
                    placeholder="contact@studio.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Tin nhắn</label>
                <textarea
                  required rows={4} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/5 px-4 py-4 text-white focus:border-purple-500 focus:outline-none transition-all rounded-sm resize-none"
                  placeholder="Tôi muốn hợp tác..."
                />
              </div>
              <button type="submit" className="group w-full bg-white py-5 text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-purple-600 hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3">
                Gửi tin nhắn
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}