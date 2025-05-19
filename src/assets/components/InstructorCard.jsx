import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "./useIsMobile"; // adjust the path if needed

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

const InstructorCard = ({
  image,
  instructorName,
  instructorDetails,
  onPrev,
  onNext,
  direction,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-12 select-none cursor-default min-h-[500px]">
      {/* Left Arrow (Desktop Only) */}
      <button
        onClick={onPrev}
        className="hidden md:flex absolute top-1/2 left-0
                 bg-white bg-opacity-40 hover:bg-opacity-70
                 text-[#4a3091] rounded-full p-3 shadow-md cursor-pointer z-10"
        style={{ transform: "translate(-150%, -50%)" }}
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Animation Container */}
      <div className="relative w-full min-h-[400px]">
        {isMobile ? (
          // No animation on mobile
          <div
            key={instructorName}
            className="bg-white/10 backdrop-blur-2xl rounded-xl shadow-xl p-8
                       flex flex-col md:grid md:grid-cols-2 gap-8"
          >
            <img
              src={image}
              alt={instructorName}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-white">
                {instructorName}
              </h2>
              <p className="text-white/80 text-lg whitespace-pre-wrap">
                {instructorDetails}
              </p>
            </div>
          </div>
        ) : (
          // AnimatePresence with swipe animation on desktop
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={instructorName}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="bg-white/10 backdrop-blur-2xl rounded-xl shadow-xl p-8
                       flex flex-col md:grid md:grid-cols-2 gap-8"
            >
              <img
                src={image}
                alt={instructorName}
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="flex flex-col ">
                <h2 className="text-3xl font-semibold mb-4 text-white">
                  {instructorName}
                </h2>
                <p className="text-white/80 text-lg whitespace-pre-wrap">
                  {instructorDetails}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Right Arrow (Desktop Only) */}
      <button
        onClick={onNext}
        className="hidden md:flex absolute top-1/2 right-0
                 bg-white bg-opacity-40 hover:bg-opacity-70
                 text-[#4a3091] rounded-full p-3 shadow-md cursor-pointer z-10"
        style={{ transform: "translate(150%, -50%)" }}
      >
        <FaArrowRight size={24} />
      </button>

      {/* Mobile Navigation Buttons */}
      <div className="flex justify-between mt-6 md:hidden">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 text-white rounded-lg shadow"
        >
          <FaArrowLeft />
          Previous
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/40 text-white rounded-lg shadow"
        >
          Next
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default InstructorCard;
