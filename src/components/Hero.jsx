import { Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80" // Giảm opacity video để text nổi hơn
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay đa tầng: Đen ở trên và Gradient ở dưới chân */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-20">
        <div className="max-w-10xl text-center">
          {/* Tagline nhỏ phía trên */}
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-4 block text-sm font-bold tracking-[0.4em] text-purple-500 uppercase"
          >
            Leading Game Publisher
          </motion.span>

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
  <h1 className="mb-6 text-5xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tight">
    Tạo Nên trải nghiệm<br />
    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-red-500">
      game Đỉnh Cao
    </span>
  </h1>
</motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10 max-w-10xl text-lg text-white md:text-2xl leading-relaxed "
          >
            Chúng tôi không chỉ làm game, chúng tôi kiến tạo những thế giới mới. Studio dẫn đầu với hơn 100 triệu người chơi mỗi tháng.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex  items-center justify-center gap-4"
          >
            {/* Button chính: Hiệu ứng Gradient Gaming */}
            <button className="group relative overflow-hidden rounded-sm bg-linear-to-r from-purple-600 to-pink-600 px-10 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                <Play className="h-5 w-5 fill-current" />
                Xem Demo Reel
              </span>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20" />
            </button>

            {/* Button phụ: Ghost button */}
            <button className="px-10 py-4 border border-white/20 hover:border-white hover:bg-white/10 text-sm font-black uppercase tracking-widest text-white transition-all rounded-sm">
              Tất cả dự án
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Làm lại theo style minimalist */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}