import { useState } from "react";
import InstructorCard from "../InstructorCard";
import img1 from "/src/assets/img1.jpg";
import { useSwipeable } from "react-swipeable";

const About = () => {
  const instructors = [
    {
      image: img1,
      name: "Shihan Srinivas Rao",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
    },
    {
      image: img1,
      name: "Shihan Ram Chhetri",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
    },
    {
      image: img1,
      name: "Sensei Sameer Parashurami",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
    },
    {
      image: img1,
      name: "Shihan Hari Shankar Sharma",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloremque animi exercitationem porro accusamus aspernatur? Eum ea iusto, dolorem illo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < instructors.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const currentInstructor = instructors[currentIndex];

  return (
    <section
      {...handlers}
      id="aboutus"
      className="min-h-screen bg-gradient-to-b from-white to-[#4a3091] px-4 py-6 md:py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#4a3091] mb-6 md:mb-16">
        About Us
      </h1>

      <InstructorCard
        image={currentInstructor.image}
        instructorName={currentInstructor.name}
        instructorDetails={currentInstructor.details}
        onPrev={goToPrevious}
        onNext={goToNext}
        direction={direction}
      />
    </section>
  );
};

export default About;
