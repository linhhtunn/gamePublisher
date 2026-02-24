import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const StatItem = ({ target, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, target]);

  return (
    <div ref={ref} className="text-center p-8 bg-gray-900/50 rounded-2xl border border-white/5">
      <motion.div className="text-5xl md:text-6xl font-black text-red-500 mb-2">
        <motion.span>{rounded}</motion.span>+
      </motion.div>
      <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">{label}</div>
    </div>
  );
};

export const Numbers = () => (
  <section className="py-20 bg-black">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <StatItem target={5000} label="Người chơi tích cực" />
      <StatItem target={120} label="Giải đấu quốc tế" />
      <StatItem target={98} label="Tỉ lệ hài lòng" />
    </div>
  </section>
);