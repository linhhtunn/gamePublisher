import { motion } from 'framer-motion';
import Slider from 'react-slick';


export function Partners() {
  const partners = [
    { id: 1, name: 'Tech Global', logo: 'https://inhoangkien.vn/wp-content/uploads/2022/11/Logo-Tap-doan-vien-thong-Viettel-Moi-02-01-1024x640.jpg' },
    { id: 2, name: 'Gaming Pro', logo: 'https://inkythuatso.com/uploads/images/2021/11/logo-mobifone-inkythuatso-01-02-08-50-14.jpg' },
    { id: 3, name: 'Digital Solutions', logo: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1' },
    { id: 4, name: 'Software Inc', logo: 'https://static.vecteezy.com/system/resources/thumbnails/014/018/563/small/amazon-logo-on-transparent-background-free-vector.jpg' },
    { id: 5, name: 'Digital Agency', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJG171pMu9VTeNIjsIA8d5_-Sy8MvUBmZEA&s' },
    { id: 6, name: 'Esports Team', logo: 'https://cdn-media.sforum.vn/storage/app/media/thunguyen/y-nghia-logo-apple-2.jpg' },
    { id: 7, name: 'Tech Startup', logo: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg' },
    { id: 8, name: 'Innovation Labs', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1956.jpg?width=672&height=454&name=ibm-logo-1956.jpg' },
    { id: 9, name: 'Nexus Gaming', logo: 'https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-1.jpg?width=662&height=441&name=adobe-logo-1.jpg' },
    { id: 10, name: 'Future Media', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_UF6AUy6dw9nNsUptL9xGPDDT9MAlHVkRw&s' },
    { id: 11, name: 'Alpha Code', logo: 'https://logovina.com/wp-content/uploads/2017/01/logo-cong-ty-phan-mem-sap-1.jpg' },
    { id: 12, name: 'Cyber Sport', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/1280px-Oracle_Logo.svg.png' },
    { id: 13, name: 'Cloud Systems', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzwD4F8zzFbQOZIrS5lHuIS1kJKHd5mhYjQ&s' },
    { id: 14, name: 'Vortex Studio', logo: 'https://media.designrush.com/inspiration_images/732004/conversions/PALANTIR-LOGO-DESIGN-SVG-mobile.jpg' },
    { id: 15, name: 'Titan Interactive', logo: 'https://fortifydata.com/wp-content/uploads/2022/05/CROWDSTRIKE.png' },
    { id: 16, name: 'Nebula Games', logo: 'https://atlassian.design/21f597d1f31e99180e9ccf2e82b47ac0/logo-centered.png' },
    { id: 17, name: 'Quantum Dev', logo: 'https://images.seeklogo.com/logo-png/49/1/snowflake-logo-png_seeklogo-497451.png' },
    { id: 18, name: 'Global Connect', logo: 'https://logowik.com/content/uploads/images/servicenow9653.jpg' },
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