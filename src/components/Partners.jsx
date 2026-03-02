import { motion } from 'framer-motion';
import Slider from 'react-slick';


export function Partners() {
  const partners = [
    { id: 1, name: 'Tech Global', logo: 'https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?q=80&w=1080' },
    { id: 2, name: 'Gaming Pro', logo: 'https://images.unsplash.com/photo-1771775605726-01e404449918?q=80&w=1080' },
    { id: 3, name: 'Digital Solutions', logo: 'https://images.unsplash.com/photo-1760037028517-e5cc6e3ebd3e?q=80&w=1080' },
    { id: 4, name: 'Software Inc', logo: 'https://images.unsplash.com/photo-1764123108291-0f48d2c7e563?q=80&w=1080' },
    { id: 5, name: 'Digital Agency', logo: 'https://images.unsplash.com/photo-1768689892784-75aff3ea5125?q=80&w=1080' },
    { id: 6, name: 'Esports Team', logo: 'https://images.unsplash.com/photo-1759701547421-2972dd046ba4?q=80&w=1080' },
    { id: 7, name: 'Tech Startup', logo: 'https://images.unsplash.com/photo-1692372374563-9ab54f303b7b?q=80&w=1080' },
    { id: 8, name: 'Innovation Labs', logo: 'https://images.unsplash.com/photo-1767630415966-c60ad25f9365?q=80&w=1080' },
    { id: 9, name: 'Nexus Gaming', logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1080' },
    { id: 10, name: 'Future Media', logo: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1080' },
    { id: 11, name: 'Alpha Code', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1080' },
    { id: 12, name: 'Cyber Sport', logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1080' },
    { id: 13, name: 'Cloud Systems', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080' },
    { id: 14, name: 'Vortex Studio', logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1080' },
    { id: 15, name: 'Titan Interactive', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1080' },
    { id: 16, name: 'Nebula Games', logo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1080' },
    { id: 17, name: 'Quantum Dev', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1080' },
    { id: 18, name: 'Global Connect', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080' },
];


  // Chia mảng partners thành 2 hàng
  const half = Math.ceil(partners.length / 2);
  const row1 = partners.slice(0, half);
  const row2 = partners.slice(half);

  const baseSettings = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  // Setting cho hàng 1 (Trái qua Phải mặc định)
  const settingsRow1 = { ...baseSettings };

  // Setting cho hàng 2 (Phải qua Trái)
  const settingsRow2 = { 
    ...baseSettings, 
    rtl: true, // Chạy ngược lại
    speed: 9000 // Chỉnh tốc độ khác một chút nhìn sẽ tự nhiên hơn
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          
          <h2 className=" uppercase text-6xl lg:text-7xl font-black tracking-wider mb-7">
            STRATEGIC PARTNERS
          </h2>
          <span className=" text-xl text-gray-500 font-medium uppercase tracking-[0.3em] mb-2 block">
            Partnering with world-class industry leaders to deliver excellence at scale.
          </span>
        </motion.div>

        <div className="flex flex-col gap-8 grayscale-container">
          {/* HÀNG 1: CHẠY SANG TRÁI */}
          <div className="slider-row">
            <Slider {...settingsRow1}>
              {row1.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </Slider>
          </div>

          {/* HÀNG 2: CHẠY SANG PHẢI (RTL) */}
          <div className="slider-row">
            <Slider {...settingsRow2}>
              {row2.map((partner) => (
                <PartnerLogo key={partner.id} partner={partner} />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <style>{`
        .grayscale-container .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        /* Đảm bảo chuyển động mượt không khựng */
        .slick-slide > div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
}

// Component phụ cho Logo để dễ quản lý size
function PartnerLogo({ partner }) {
  return (
    <div className="px-6 py-4">
      <div className="group flex items-center justify-center h-80 transition-all duration-500">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-100 w-100 object-contain opacity-100 grayscale filter transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
        />
      </div>
    </div>
  );
}