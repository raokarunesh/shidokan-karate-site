import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "/src/assets/img1.png";
import img2 from "/src/assets/img2.png";
import img3 from "/src/assets/img3.png";
import img4 from "/src/assets/img4.png";
import img5 from "/src/assets/img5.png";
import img6 from "/src/assets/img6.png";

const instructors = [
  {
    image: img1,
    name: "Shihan Ram Chhetri",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
  {
    image: img2,
    name: "Sensei Arun Kumar Shahi",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
  {
    image: img3,
    name: "Sensei Sameer Parashurami",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
  {
    image: img4,
    name: "Shihan Binojkumar",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
  {
    image: img5,
    name: "Sensei Shiju PB",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
  {
    image: img6,
    name: "Sensei Indrajeet",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
  },
];

const InstructorSlide = ({ image, name, details }) => (
  <div className="bg-white/10 backdrop-blur-2xl rounded-xl shadow-xl p-8 flex flex-col md:grid md:grid-cols-2 gap-8 min-h-[550px]">
    <img
      src={image}
      alt={name}
      className="w-full h-auto object-contain rounded-xl"
      style={{ maxHeight: "400px" }}
    />
    <div className="flex flex-col overflow-y-auto max-h-[400px]">
      <h2 className="text-3xl font-semibold mb-4 text-white">{name}</h2>
      <p className="text-white/80 text-lg whitespace-pre-wrap overflow-y-auto scrollbar-thin scrollbar-thumb-[#4a3091]/80 scrollbar-track-transparent">
        {details}
      </p>
    </div>
  </div>
);

const About = () => {
  return (
    <section
      id="aboutus"
      className="min-h-screen bg-gradient-to-b from-white to-[#4a3091] px-4 py-6 md:py-16 relative"
    >
      <h1 className="text-4xl font-bold text-center text-[#4a3091] mb-6 md:mb-16 select-none">
        About Us
      </h1>

      <div className="relative max-w-6xl  mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className=""
        >
          {instructors.map((inst, idx) => (
            <SwiperSlide key={idx}>
              <InstructorSlide
                image={inst.image}
                name={inst.name}
                details={inst.details}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          className="custom-prev absolute top-1/2 left-0 z-20 p-3 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-full shadow-md cursor-pointer"
          style={{ transform: "translate(-150%, -50%)" }}
          aria-label="Previous Slide"
        >
          <FaArrowLeft size={24} color="#4a3091" />
        </button>
        <button
          className="custom-next absolute top-1/2 right-0 z-20 p-3 bg-white bg-opacity-40 hover:bg-opacity-70 rounded-full shadow-md cursor-pointer"
          style={{ transform: "translate(150%, -50%)" }}
          aria-label="Next Slide"
        >
          <FaArrowRight size={24} color="#4a3091" />
        </button>
      </div>
    </section>
  );
};

export default About;
