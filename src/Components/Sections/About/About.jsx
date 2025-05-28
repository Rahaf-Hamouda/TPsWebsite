import React from "react";
import './About.css'
import gasStationImage from "./../../../assets/Images/gasstation.jpg";

const About = () => {
  return (
    <section className="h-screen w-full py-12 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center font-sans text-base">
<h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl text-center"> <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> About Us </span> </h1>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2 px-6">
          <p className="text-lg font-normal text-gray-400 lg:text-xl">
            We specialize in fuel infrastructure solutions, providing integrated services including design, construction, maintenance, and development of fuel stations and storage facilities. We also offer advanced automation systems, professional technical testing, and fuel tank cleaning.
          </p>
         <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Fuel Infrastructure Solutions", text: "Building fuel stations and storage facilities with international safety and quality standards." },
              { title: "Comprehensive Maintenance", text: "Preventive and emergency maintenance, including electrical, mechanical, civil, and automation services." },
              { title: "Station & Storage Development", text: "Capacity expansion, increased pumping power, and smart monitoring solutions." },
              { title: "Automation & Monitoring", text: "Advanced digital solutions for remote control and management of multiple fuel stations." },
              { title: "Fuel Tank Cleaning", text: "Professional cleaning using specialized materials to ensure tank safety and fuel quality." },
              { title: "Technical Testing", text: "Ultrasonic testing, magnetic field analysis, and penetrant liquid testing for tanks and pipelines." }
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-md transform transition duration-200 hover:scale-102 hover:shadow-emerald-400"
              >
                <h3 className="text-lg font-semibold text-emerald-500">{service.title}</h3>
                <p className="mt-1 text-gray-400 text-sm">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex justify-end px-4 relative">
<img
  src={gasStationImage}
  alt="Gas Station"
  className="rounded-lg shadow-md max-w-full grow-img"
/>
<div className="absolute left-6 bottom-6 bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg max-w-sm">
  <h2 className="text-xl font-bold text-white">Future Vision</h2>
  <p className="mt-2 text-gray-300 text-lg">
    We strive to enhance fuel stations by improving efficiency, sustainability, and service quality. Our goal is to create a more seamless refueling experience while reducing environmental impact, ensuring a future where fuel stations are more convenient and eco-friendly.
  </p>
</div>
        </div>
      </div>
    </section>
  );
};



    // <section className="py-12 px-6 bg-gray-900 text-white text-center">
    //   <h1 className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl">
    //     <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
    //       About Us
    //     </span>
    //   </h1>
    //   <p className="text-lg font-normal text-gray-400 lg:text-xl max-w-3xl mx-auto">
    //     We specialize in fuel infrastructure solutions, providing integrated services including design, construction, maintenance, and development of fuel stations and storage facilities. We also offer advanced automation systems, professional technical testing, and fuel tank cleaning.
    //   </p>
    //   <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {[
    //       { title: "Fuel Infrastructure Solutions", text: "Building fuel stations and storage facilities with international safety and quality standards." },
    //       { title: "Comprehensive Maintenance", text: "Preventive and emergency maintenance, including electrical, mechanical, civil, and automation services." },
    //       { title: "Station & Storage Development", text: "Capacity expansion, increased pumping power, and smart monitoring solutions." },
    //       { title: "Automation & Monitoring", text: "Advanced digital solutions for remote control and management of multiple fuel stations." },
    //       { title: "Fuel Tank Cleaning", text: "Professional cleaning using specialized materials to ensure tank safety and fuel quality." },
    //       { title: "Technical Testing", text: "Ultrasonic testing, magnetic field analysis, and penetrant liquid testing for tanks and pipelines." }
    //     ].map((service, index) => (
    //       <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-left">
    //         <h3 className="text-xl font-bold text-emerald-500">{service.title}</h3>
    //         <p className="mt-2 text-gray-400">{service.text}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section>


export default About;
