import { Code, Rocket, BarChart3, Zap } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp,Target, DollarSign, Globe } from 'lucide-react';

export function InvestorsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    { icon: Target, title: 'User Acquisition & Performance Marketing', description: 'Proven expertise in driving quality users at scale', gradient: 'from-[#0ea5e9] to-[#2dd4bf]' },
    { icon: TrendingUp, title: 'Data-driven CPI Optimization', description: 'A/B testing framework for continuous improvement', gradient: 'from-[#f97316] to-[#fbbf24]' },
    { icon: DollarSign, title: 'Hybrid Monetization Systems', description: 'Optimized for Ads + IAP models', gradient: 'from-[#d946ef] to-[#f43f5e]' },
    { icon: Globe, title: 'Global Distribution', description: 'Across iOS & Android markets worldwide', gradient: 'from-[#22c55e] to-[#14b8a6]' },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden ">
      {/* Glow nền mờ */}
      <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
                 {/* Text Content Right */}
          <div className="order-1 lg:order-2">
            
          
             {/* Căn ngang ảnh với button  */}
     <div className="flex items-center justify-center grid lg:grid-cols-2 gap-20 ">
                    {/* CỘT TRÁI: CÁC BUTTON DỊCH VỤ */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                 {/* Icon with circle glow */}
                <motion.div 
                  className="relative w-16 h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-green-500/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="relative z-10 w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 hover:bg-green-500/30 transition-all"
                    whileHover={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)' }}
                  >
                    <TrendingUp className="w-7 h-7 text-green-400" />
                  </motion.div>
                </motion.div>
                <motion.h2 
                  className="text-5xl font-black text-white tracking-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  For Investors & Strategic Partners
                </motion.h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12"
            >
              We operate with a data-first mindset and scalable acquisition strategy.
            </motion.p>

                        <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold mb-3 text-white"
            >
              What we provide:
            </motion.h3>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="group relative cursor-pointer w-full max-w-125"
              >
                {/* Ánh sáng loang phía sau */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 `} />
                
                {/* Viền sáng của button */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 `} />
                
                {/* Nội dung button */}
                <div className="relative flex items-center gap-6 p-4 bg-[#0a0a0a] rounded-2xl w-full h-full border border-white/5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} flex-shrink-0 shadow-lg`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{service.title}</h4>
                    <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* CỘT PHẢI: ẢNH HÌNH CHỮ NHẬT SẮC NÉT & SÁNG VIỀN KHI HOVER */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-[1.5px]  mt-55 rounded-3xl overflow-hidden transition-all duration-500"
          >
            {/* Viền sáng loang cho ảnh khi hover (Giống button) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            <div className="absolute inset-0 p-[1.5px] rounded-3xl bg-white/10 group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500" />

            {/* Container ảnh hình chữ nhật */}
            <div className="relative rounded-[22px] overflow-hidden aspect-[16/10] bg-[#0a0a0a]">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" // Sử dụng ảnh chất lượng cao, q=80 để sắc nét
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Gaming Workspace"
              />
              
              {/* Hiệu ứng ánh sáng quét xuống */}
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), rgba(59, 130, 246, 0.3), transparent)',
                  height: '40%',
                }}
                animate={{ top: ['-40%', '140%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>


        </div>
      </div>
     </div>
    </section>
  );
}