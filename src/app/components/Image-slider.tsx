"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
    { path: "/images/ts.png", name: "TypeScript Logo "},
    { path: "/images/bootstrape.jpg", name: "Bootstrape Logo "},
    { path: "/images/js.png", name: "JavaScript Logo "},
    { path: "/images/tail.png", name: "Tailwind Logo"},
    { path: "/images/next-js.png", name: "Nextjs Logo "},
  { path: "/images/html.png", name: "HTML Logo"},
    { path: "/images/css.png", name: "CSS Logo"},
    { path: "/images/react-js.png", name: "CSS Logo"},
];

 const ImageSlider: React.FC = () => {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img
                src={image.path}
                alt={image.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-xl " 
/>
            </SwiperSlide>
      ))
        }

      </Swiper>
  );
};



export default ImageSlider;