import img1 from "/src/assets/img1.jpg";

const About = () => {
  return (
    <section
      id="aboutus"
      className="min-h-screen bg-gradient-to-b from-white to-[#4a3091] px-4 py-16"
    >
      <h1 className="text-4xl font-bold text-center text-[#4a3091] mb-12">
        About Us
      </h1>

      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-2xl grid sm:grid-cols-2 gap-8 p-8 rounded-xl shadow-xl">
        <img
          src={img1}
          alt="About Us"
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="flex flex-col ">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            Lorem, ipsum dolor.
          </h2>
          <p className="text-white/80 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            nostrum alias vitae possimus non mollitia numquam, soluta distinctio
            ad, dicta blanditiis aliquam enim suscipit odio natus aperiam
            dolores fugit sequi iusto adipisci voluptatem beatae debitis! Sequi
            ut obcaecati exercitationem, eius quo maiores autem? Ut repudiandae
            laboriosam magni totam mollitia saepe perferendis dignissimos aut
            voluptatum iste!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
