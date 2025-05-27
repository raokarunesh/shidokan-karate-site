const Locations = () => {
  return (
    <section
      id="locations"
      className="min-h-[120vh] bg-gradient-to-t from-white to-[#4a3091] px-4 py-6 md:py-20"
    >
      <h1 className="text-4xl font-bold text-center text-white mb-12 md:mb-20 select-none">
        Locations
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Map */}
        <div className="h-[600px] rounded-2xl overflow-hidden">
          <iframe
            title="Shidokan Karate - Dombivli Branch"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.385998290901!2d73.09056047520903!3d19.222002182012847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795f4993c14db%3A0x8d3aa3ea95455892!2sGEI&#39;s%20Blossom%20International%20School!5e0!3m2!1sen!2sin!4v1748334010488!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address */}
        <div className="bg-white p-6 rounded-2xl shadow-xl h-[600px] flex">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Address</h2>
            <p className="text-gray-700 leading-relaxed">
              Shidokan Karate India - Dombivli East Branch,
              <br />
              GEI's Blossom International School
              <br />
              Dombivli East - 421201 - Maharashtra
              <br />
              Phone: +91 93232 07445
              <br />
              Email: shidokankarateindia@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
