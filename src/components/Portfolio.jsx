// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion'; 
// import { X, Play } from 'lucide-react';

// // Xóa bỏ toàn bộ khối "interface Game" ở đây

// export function Portfolio() {
//   // Không dùng kiểu <Game | null> ở useState
//   const [selectedGame, setSelectedGame] = useState(null);

//   // Không dùng kiểu Game[] ở đây
//   const games = [
// {
//       id: 1,
//       title: 'Subway Surfers',
//       category: 'Casual',
//       image: 'https://i.pinimg.com/1200x/99/63/af/9963af8a50685afd7d2209097d74c4c3.jpg',
//       trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
//     },
//     {
//      id: 2,
//       title: 'Candy Crush Saga',
//       category: 'Puzzle',
//       image: 'https://www.hollywoodreporter.com/wp-content/uploads/2014/02/candy_crush.jpg?w=2000&h=1126&crop=1',
//       trailerUrl: 'https://www.youtube.com/embed/dmSuqklZT9I',    },
//     {
//    id: 3,
//       title: 'Angry Birds ',
//       category: 'Puzzle',
//       image: 'https://i.pinimg.com/736x/01/11/37/0111379c2ed60dba065c2a97ab637d23.jpg',
//       trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',    },
//     {
//       id: 4,
//       title: 'Cut the Rope',
//       category: 'Puzzle',
//       image: 'https://i.pinimg.com/736x/6c/68/a5/6c68a5f0a48f97b394d9096d1e4b2773.jpg',
//       trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
//     },
//     {
//       id: 5,
//       title: 'Helix Jump',
//       category: 'Hyper Casual',
//       image: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/177774/Originals/hyper-casual-6.jpeg',
//       trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
//     },
//     {
//       id: 6,
//       title: 'Johnny Trigger',
//       category: 'Hyper Casual',
//       image: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/177774/Originals/hyper-casual-7.jpeg',
//       trailerUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
//     },
//   ];

//   return (
//     <section id="portfolio" className=" py-32 overflow-hidden text-white">
//       <div className="mx-auto max-w-7xl px-6">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-20 text-center "
//         >
//           <h2 className="mb-4 text-5xl font-black text-white md:text-7xl uppercase tracking-tighter italic leading-none">
//             Portfolio Game 
//           </h2>
//           <p className="text-xl text-gray-500 font-medium">
//             Expanding the frontiers of interactive digital entertainment
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {games.map((game, index) => (
//             <motion.div
//               key={game.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               onClick={() => setSelectedGame(game)}
//               className="group relative cursor-pointer h-62.5 overflow-hidden rounded-sm"
//             >
//               <img
//                 src={game.image}
//                 alt={game.title}
//                 className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-100" />
              
//               <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
//                 <div className="mb-3 inline-block bg-purple-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
//                   {game.category}
//                 </div>
//                 <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-6">
//                   {game.title}
//                 </h3>
//                 <div className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
//                     <Play className="h-4 w-4 fill-current" />
//                   </div>
//                   <span>Xem Trailer</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {selectedGame && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
//             onClick={() => setSelectedGame(null)}
//           >
//             <motion.div
//               initial={{ y: 100, opacity: 0, scale: 0.9 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 100, opacity: 0, scale: 0.9 }}
//               className="relative w-150 max-w-4xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedGame(null)}
//                 className="absolute -top-12 right-0 flex items-center gap-2 text-white/50 hover:text-white uppercase font-bold text-xs tracking-widest"
//               >
//                 Đóng <X size={24} />
//               </button>
//               <div className="overflow-hidden rounded-sm bg-[#111]">
//                 <div className="aspect-video w-150 h-90 bg-black">
//                    <video key={selectedGame.trailerUrl} autoPlay controls className="w-full h-full">
//                       <source src={selectedGame.trailerUrl} type="video/mp4" />
//                    </video>
//                 </div>
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-3 gap-6">
//                   <div>
//                     <span className="text-purple-500 font-black uppercase tracking-[0.3em] text-[10px]">
//                       {selectedGame.category}
//                     </span>
//                     <h3 className="mt-2 text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
//                       {selectedGame.title}
//                     </h3>
//                   </div>
//                   <button className="bg-white px-10 py-4 text-black font-black uppercase tracking-widest text-xs hover:bg-purple-600 hover:text-white transition-all">
//                     Chơi ngay
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 1. KHAI BÁO DỮ LIỆU GAMES (Để tránh lỗi "games is not defined")
const gamesData = [
  {
    id: 1,
    title: 'Candy Crush Saga',
    category: 'Puzzle',
    image: 'https://www.hollywoodreporter.com/wp-content/uploads/2014/02/candy_crush.jpg?w=2000&h=1126&crop=1',
  },
  {
    id: 2,
    title: 'Color Match',
    category: 'Puzzle',
    image: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?q=80&w=1080',
  },
  {
    id: 3,
   title: 'Angry Birds ',
   category: 'Puzzle',
   image: 'https://i.pinimg.com/736x/01/11/37/0111379c2ed60dba065c2a97ab637d23.jpg',
  },
    {
    id: 4,
    title: 'Cut the Rope',
    category: 'Puzzle',
    image: 'https://i.pinimg.com/736x/d9/c6/95/d9c695bbcad29897b3c92c8f238bf597.jpg',
  },
  {
    id: 5,
    title: 'Temple Run',
    category: 'Casual',
    image: 'https://i.pinimg.com/736x/bb/59/61/bb5961eb70be2e21e9b740f4e2b0c40b.jpg',
  },
  {
    id: 6,
    title: 'Subway Surfers',
    category: 'Casual',
    image: 'https://i.pinimg.com/1200x/99/63/af/9963af8a50685afd7d2209097d74c4c3.jpg',
  },
    {
    id: 7,
    title: 'Among Us',
    category: 'Casual',
    image: 'https://i.pinimg.com/1200x/a1/8b/be/a18bbe41bc4fe64dccfa325becaa4901.jpg',
  },
      {
    id: 8,
    title: 'Plants & Zombies',
    category: 'Casual',
    image: 'https://i.pinimg.com/1200x/0a/f6/f2/0af6f25ff6e2a15e76c4a999113b463a.jpg',
  },
  {
    id: 9,
    title: 'Helix Jump',
    category: 'Hyper Casual',
    image: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/177774/Originals/hyper-casual-6.jpeg',
  },
  {
    id: 10,
    title: 'Johnny Trigger',
    category: 'Hyper Casual',
    image: 'https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/177774/Originals/hyper-casual-7.jpeg',
  },
   {
    id: 11,
    title: 'Color Switch',
    category: 'Hyper Casual',
    image: 'https://i.ytimg.com/vi/LvltAwFXq8Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAX6v-E-fqMYpm8f2N8vo-sOrjoMA',
  },
  {
    id: 12,
    title: 'Stack Ball',
    category: 'Hyper Casual',
    image: 'https://i.pinimg.com/736x/4d/32/c0/4d32c0a4734d1e7b45ec2eb51417ce2d.jpg',
  },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Puzzle');
  const sliderRef = useRef(null);

  // 2. LỌC DỮ LIỆU
  const filteredGames = gamesData.filter(game => game.category === selectedCategory);
  const categories = ['Puzzle', 'Casual', 'Hyper Casual'];

  const sliderSettings = {
    dots: false,
    infinite: filteredGames.length > 3, // Chỉ trượt nếu có nhiều hơn 3 tấm
    speed: 50,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, infinite: filteredGames.length > 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, infinite: filteredGames.length > 1 } }
    ]
  };

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
    <h2 className="mb-4 text-5xl font-black text-white md:text-7xl uppercase tracking-tighter leading-none">
           Portfolio Game 
           </h2>
          <p className="text-xl text-gray-500 font-medium">
            Expanding the frontiers of interactive digital entertainment
           </p>

        </motion.div>

        {/* Tab Buttons */}
        <div className="mb-16 flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-10 py-3 font-bold uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === category ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {category}
              {selectedCategory === category && (
                <>
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-purple-600/20 border border-purple-500 rounded-lg -z-10" />
                  <motion.div layoutId="underline" className="absolute -bottom-2 left-0 right-0 h-1 bg-purple-500" />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Carousel Area */}
        <div className="relative group px-4">
          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute -left-10 top-1/2 z-20 -translate-y-1/2 p-3 bg-black/50 border border-purple-500/50 text-white rounded-full hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute -right-10 top-1/2 z-20 -translate-y-1/2 p-3 bg-black/50 border border-purple-500/50 text-white rounded-full hover:bg-purple-600 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={28} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Slider ref={sliderRef} {...sliderSettings}>
                {filteredGames.map((game) => (
                  <div key={game.id} className="px-3 py-4">
                    <div className="group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t  from-black via-transparent to-transparent opacity-90" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-all">
                        
                        <h3 className="opacity-0 group-hover:opacity-100 text-2xl font-black text-white uppercase">{game.title}</h3>
                        <button className="mt-4 px-5 py-2 bg-white text-black font-bold rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          PLAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
        {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

    </section>
  );
}