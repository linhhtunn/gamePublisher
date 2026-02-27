import { motion } from 'framer-motion';

export const StarBackground = () => {
  // Tạo mảng 200-300 ngôi sao là đủ đẹp, 500 có thể gây lag nhẹ trên máy yếu
  const stars = Array.from({ length: 300 });

  return (
    // THÊM: bg-[#0a192f] hoặc bg-blue-950 để có nền xanh dương đậm
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black bg-gradient-to-b from-black via-[#1a2a6c] to-[#2848d5]">
      
      {/* Lớp phủ Gradient để nền xanh có chiều sâu (tùy chọn) */}
      <div className="absolute inset-0 bg-radial-at-t from-blue-900/20 via-transparent to-transparent" />

      {stars.map((_, i) => {
        // Tính toán kích thước ngẫu nhiên trước để dùng cho cả width và height
        const size = Math.random() * 2 + 1; 
        
        return (
          <motion.div
            key={i}
            // GIỮ NGUYÊN: bg-white để ngôi sao màu trắng
            // THÊM: shadow để ngôi sao có hiệu ứng tỏa sáng (glow)
            className="absolute bg-white rounded-full shadow-[0_0_5px_white]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              // Hiệu ứng nhấp nháy
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};