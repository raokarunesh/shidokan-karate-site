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
    }, 9999);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className="relative select-none cursor-default min-h-screen w-full bg-cover bg-center transition-all duration-1000 ease-in-out border-b border-b-gray-200"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="min-h-screen flex p-14 flex-col items-center">
        <h1
          id="title"
          className="text-center text-4xl md:text-6xl lg:text-6xl   text-black transition-all duration-300 ease-in-out hover:text-[#560606]"
        >
          SHIDOKAN KARATE FOUNDATION-INDIA
        </h1>
        <h1
          id="title"
          className="text-center text-sm md:text-xl text-[#560606] transition-all duration-300 ease-in-out hover:text-[#560606]"
        >
          YUAN KYOKUSHIN-KICK BOXING-GRAPPLING-MIXED MARTIAL ARTS
        </h1>
        <p
          id="japanese-text"
          className="flex text-red-700 justify-center items-center max-w-xl text-center  font-bold text-xl md:text-4xl lg:text-5xl transition-all duration-300 ease-in-out hover:text-[#b100b0]"
        >
          士道館空手道財団インド
        </p>
        {/* <div className="flex pt-6 gap-6 text-3xl text-[#4a3091]">
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
        </div> */}

        <h1
          id="title"
          className="absolute bottom-32 text-center text-[#560606]  transition-all duration-300 ease-in-out hover:text-[#b100b0]"
        >
          AFFILIATED BY
        </h1>
        <h1
          id="title"
          className="absolute bottom-25 text-center
          text-2xl text-[#560606]  transition-all duration-300 ease-in-out hover:text-[#b100b0]"
        >
          WORLD KARATE ASSOCIATION
        </h1>
        <h1
          id="title"
          className="absolute bottom-13 text-center text-4xl md:text-5xl lg:text-5xl   text-black transition-all duration-300 ease-in-out hover:text-[#560606]"
        >
          THE SHIDOKAN JAPAN
        </h1>
        <p
          id="japanese-text"
          className="absolute bottom-5 flex text- text-red-700 text-xl md:text-3xl lg:text-3xl justify-center items-center max-w-xl text-center font-bold  transition-all duration-300 ease-in-out hover:text-[#b100b0]"
        >
          士道館空手道財団インド
        </p>
      </div>
    </section>
  );
};

export default Home;
