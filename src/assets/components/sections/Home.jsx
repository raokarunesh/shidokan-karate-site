import { useState, useEffect } from "react";
import home_banner from "/src/assets/home-banner.png";
import home_banner2 from "/src/assets/home-banner2.png";
import home_banner3 from "/src/assets/home-banner3.png";
const images = [home_banner, home_banner2, home_banner3];
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className="select-none cursor-default min-h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out border-b border-b-gray-200"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="min-h-screen flex justify-center flex-col items-center">
        <h1
          id="title"
          className="text-center text-4xl md:text-6xl lg:text-7xl text-white  transition-all duration-300 ease-in-out hover:text-[#4a3091]"
        >
          THE SHIDOKAN KARATE INDIA
        </h1>
        <p className="flex text-white justify-center items-center max-w-xl text-center pt-6 font-bold text-sm md:text-md lg:text-lg transition-all duration-300 ease-in-out hover:text-[#4a3091]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
          perferendis quod quos qui consequatur eveniet aspernatur, et optio
          accusamus id fuga rem.
        </p>
        <div className="flex pt-6 gap-6 text-3xl text-[#4a3091]">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white transition-all duration-300 ease-in-out hover:text-[#4a3091]" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white transition-all duration-300 ease-in-out hover:text-[#4a3091]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
