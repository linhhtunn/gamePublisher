import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

/**
 * @param {{ end: number; suffix?: string }} props
 * @param {number} props.end
 * @param {string} [props.suffix='']
 */
function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export function Numbers() {
  const stats = [
    { number: 10, suffix: 'M+', label: 'Downloads' },
    { number: 200, suffix: '+', label: 'Games' },
    { number: 50, suffix: '+', label: 'Partners' },
    { number: 4.8, suffix: '★', label: 'Rating' },
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background slightly darker */}
      <div className="absolute inset-0 " />
      <div className="text-6xl lg:text-7xl font-black tracking-wider text-center text-white mb-26">
                 EXPERIENCE
                </div>
      {/* Ambient glow with animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-100 rounded-full opacity-20 blur-[200px]"
        style={{
          background: 'radial-gradient(ellipse, #6A3FB3 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-linear-to-r from-transparent via-purple-500 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
              }}
              className="text-center relative group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-purple-500/0 blur-3xl rounded-full group-hover:bg-purple-500/30 transition-all duration-500"
                initial={false}
              />
              
              {/* Decorative corner accents */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ scale: 1.2 }}
              />

              <motion.div 
                className="relative"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 40px rgba(168, 85, 247, 0.5)',
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                <div className="text-6xl lg:text-7xl font-black tracking-wider text-white mb-3">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <motion.div 
                  className="text-lg text-gray-400 uppercase tracking-wide"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1, color: '#a855f7' }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>

              {/* Pulsing dot */}
              <motion.div
                className="absolute top-0 right-0 w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
        {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

    </section>
  );
}
