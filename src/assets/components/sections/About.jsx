import { useState } from "react";
import InstructorCard from "../InstructorCard";
import img1 from "/src/assets/img1.png";
import img2 from "/src/assets/img2.png";
import img3 from "/src/assets/img3.png";
import img4 from "/src/assets/img4.png";
import img5 from "/src/assets/img5.png";
import img6 from "/src/assets/img6.png";
import { useSwipeable } from "react-swipeable";

const About = () => {
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
      className="min-h-screen bg-gradient-to-b from-white to-[#4a3091] px-4 py-6 md:py-16 "
    >
      <h1 className="text-4xl font-bold text-center text-[#4a3091] mb-6 md:mb-16 select-none">
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
