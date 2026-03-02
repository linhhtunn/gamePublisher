import { motion } from 'framer-motion'
import { Zap, Trophy, Users } from 'lucide-react'
import backgroundImage from '../assets/img/backBlue.jpg'
export function About() {

  const features = [
    {
      label: 'Monetization',
      desc: 'Hybrid Ads & IAP strategies maximizing LTV and sustainable growth.',
      Icon: Zap,
      glow: 'from-purple-500/10',
      bgIcon: 'bg-purple-500/10',
      borderIcon: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      line: 'bg-purple-500'
    },
    {
      label: 'Product Optimization',
      desc: 'Data-driven testing to improve retention, engagement, and ROI.',
      Icon: Trophy,
      glow: 'from-yellow-400/10',
      bgIcon: 'bg-yellow-400/10',
      borderIcon: 'border-yellow-400/30',
      iconColor: 'text-yellow-400',
      line: 'bg-yellow-400'
    },
    {
      label: 'User Acquisition',
      desc: 'Performance campaigns with creative testing and CPI optimization to scale globally',
      Icon: Users,
      glow: 'from-cyan-400/10',
      bgIcon: 'bg-cyan-400/10',
      borderIcon: 'border-cyan-400/30',
      iconColor: 'text-cyan-400',
      line: 'bg-cyan-400'
    }
  ]

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-[10%] top-0 h-150 w-150 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-0 h-150 w-150 rounded-full bg-blue-600/10 blur-[120px]" />
        
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-center w-160 mb-4 text-4xl uppercase text-white leading-[1.1]">
              WE ARE <br />
              <span className="md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-purple-600">
                Teraxel Limited
              </span>
            </h2>

            <p className="w-160 mb-8 text-2xl leading-relaxed text-gray-300">
              We are a performance-driven game and app publisher, empowering developers to scale globally.
With expertise in user acquisition, creative testing, and monetization optimization, we transform promising products into high-performing, revenue-generating successes.
From market validation to worldwide distribution, we help partners unlock sustainable growth and maximize lifetime value.            </p>

          </motion.div>

          {/* RIGHT - CARDS */}
          <div className="grid gap-4 w-100 ml-35">

            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex items-center gap-6 overflow-hidden rounded-xl border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/5"
              >

                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-linear-to-r ${item.glow} to-transparent`} />

                {/* Icon Box */}
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ${item.bgIcon} border ${item.borderIcon} group-hover:scale-110 transition-transform duration-300`}>
                  <item.Icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-black  text-white leading-tight">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Line */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`h-1 w-12 ${item.line}`} />
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

    </section>
  )
}