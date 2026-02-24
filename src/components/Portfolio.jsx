import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { X, Play } from 'lucide-react';

// Xóa bỏ toàn bộ khối "interface Game" ở đây

export function Portfolio() {
  // Không dùng kiểu <Game | null> ở useState
  const [selectedGame, setSelectedGame] = useState(null);

  // Không dùng kiểu Game[] ở đây
  const games = [
    {
      id: 1,
      title: 'Cyber Warriors',
      category: 'Action RPG',
      image: 'https://images.unsplash.com/photo-1729971830570-121af7d90cfb?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      id: 2,
      title: 'Fantasy Realm',
      category: 'MMORPG',
      image: 'https://images.unsplash.com/photo-1763044655339-b58c31f55e62?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    {
      id: 3,
      title: 'Speed Legends',
      category: 'Racing',
      image: 'https://images.unsplash.com/photo-1760553121003-93afc4d88ae0?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    },
    {
      id: 4,
      title: 'Galactic Wars',
      category: 'Sci-Fi Shooter',
      image: 'https://images.unsplash.com/photo-1634585738250-09ee92cae0f8?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    },
    {
      id: 5,
      title: 'Wild Adventure',
      category: 'Open World',
      image: 'https://images.unsplash.com/photo-1765706729543-348de9e073b1?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    },
    {
      id: 6,
      title: 'eSports Arena',
      category: 'Competitive',
      image: 'https://images.unsplash.com/photo-1635372708431-64774de60e20?auto=format&fit=crop&q=80&w=1080',
      trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    },
  ];

  return (
    <section id="portfolio" className="bg-[#050505] py-32 overflow-hidden text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center "
        >
          <h2 className="mb-4 text-5xl font-black text-white md:text-7xl uppercase tracking-tighter italic leading-none">
            Portfolio Game 
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Phá vỡ giới hạn của trải nghiệm giải trí kỹ thuật số
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedGame(game)}
              className="group relative cursor-pointer h-62.5 overflow-hidden rounded-sm"
            >
              <img
                src={game.image}
                alt={game.title}
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-3 inline-block bg-purple-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                  {game.category}
                </div>
                <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-6">
                  {game.title}
                </h3>
                <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <span>Xem Trailer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              className="relative w-150 max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGame(null)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-white/50 hover:text-white uppercase font-bold text-xs tracking-widest"
              >
                Đóng <X size={24} />
              </button>
              <div className="overflow-hidden rounded-sm bg-[#111]">
                <div className="aspect-video w-150 h-90 bg-black">
                   <video key={selectedGame.trailerUrl} autoPlay controls className="w-full h-full">
                      <source src={selectedGame.trailerUrl} type="video/mp4" />
                   </video>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 gap-6">
                  <div>
                    <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px]">
                      {selectedGame.category}
                    </span>
                    <h3 className="mt-2 text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                      {selectedGame.title}
                    </h3>
                  </div>
                  <button className="bg-white px-10 py-4 text-black font-black uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all">
                    Chơi ngay
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}