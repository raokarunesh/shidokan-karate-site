import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  const instructors = [
    // your instructors array here
  ];

  return (
    <section
      id="aboutus"
      className="min-h-screen bg-gradient-to-b from-white to-[#4a3091] px-4 py-6 md:py-16"
    >
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
        }
        .swiper-pagination-bullet-active {
          background: #4a3091;
        }
      `}</style>

      <h1 className="text-4xl font-bold text-center text-[#4a3091] mb-6 md:mb-16 select-none">
        About Us
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        className="max-w-4xl mx-auto"
      >
        {instructors.map(({ image, name, details }, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/10 backdrop-blur-2xl rounded-xl shadow-xl p-3 md:p-8 flex flex-col md:flex-row gap-6">
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="w-full md:w-1/2 object-contain rounded-xl max-h-[300px] md:max-h-full"
                style={{ objectFit: "contain" }}
              />

              {/* Content */}
              <div className="flex flex-col justify-center md:w-1/2 text-white">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {name}
                </h2>
                <div
                  className="text-lg overflow-y-auto max-h-[200px] md:max-h-[250px] whitespace-pre-wrap pr-2"
                  style={{ scrollbarWidth: "thin" }}
                >
                  {details}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-70 text-[#4a3091] rounded-full p-3 shadow-md z-10 hidden md:flex">
          <FaArrowLeft size={24} />
        </button>
        <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-40 hover:bg-opacity-70 text-[#4a3091] rounded-full p-3 shadow-md z-10 hidden md:flex">
          <FaArrowRight size={24} />
        </button>
      </Swiper>
    </section>
  );
};

export default About;
