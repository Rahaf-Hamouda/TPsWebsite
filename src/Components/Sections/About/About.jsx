import React from "react";

const About = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white text-center">
      <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          About Us
        </span>
      </h1>
      <p className="text-lg font-normal text-gray-400 lg:text-xl max-w-3xl mx-auto">
        We specialize in fuel infrastructure solutions, providing integrated services including design, construction, maintenance, and development of fuel stations and storage facilities. We also offer advanced automation systems, professional technical testing, and fuel tank cleaning.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Fuel Infrastructure Solutions", text: "Building fuel stations and storage facilities with international safety and quality standards." },
          { title: "Comprehensive Maintenance", text: "Preventive and emergency maintenance, including electrical, mechanical, civil, and automation services." },
          { title: "Station & Storage Development", text: "Capacity expansion, increased pumping power, and smart monitoring solutions." },
          { title: "Automation & Monitoring", text: "Advanced digital solutions for remote control and management of multiple fuel stations." },
          { title: "Fuel Tank Cleaning", text: "Professional cleaning using specialized materials to ensure tank safety and fuel quality." },
          { title: "Technical Testing", text: "Ultrasonic testing, magnetic field analysis, and penetrant liquid testing for tanks and pipelines." }
        ].map((service, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-left">
            <h3 className="text-xl font-bold text-emerald-500">{service.title}</h3>
            <p className="mt-2 text-gray-400">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
