import React, { forwardRef } from "react";
import { FaCode, FaProjectDiagram, FaUsers, FaLightbulb, FaTrophy, FaRocket } from "react-icons/fa"; 

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full py-20 bg-gray-100 min-h-screen text-gray-900"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mt-10 mb-10">Who We Are 👨‍💻</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Empowering Coders */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Empowering Coders</h3>
            <p className="text-gray-700">
              Digitron is a community-driven tech club that helps students 
              enhance their coding skills through mentorship, collaboration, and challenges.
            </p>
          </div>

          {/* Real-World Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaProjectDiagram className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Building Real-World Projects</h3>
            <p className="text-gray-700">
              We conduct hands-on workshops, hackathons, and open-source projects to give 
              students practical experience in software development.
            </p>
          </div>

          {/* Networking & Community */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaUsers className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">A Thriving Network</h3>
            <p className="text-gray-700">
              Our club connects students with industry professionals, alumni, and fellow enthusiasts, 
              providing opportunities for networking and career growth.
            </p>
          </div>

          {/* Innovative Ideas */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Innovating the Future</h3>
            <p className="text-gray-700">
              We encourage creativity by fostering innovative ideas and guiding members to turn their 
              concepts into reality through coding.
            </p>
          </div>

          {/* Competitions & Hackathons */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaTrophy className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Competing to Win</h3>
            <p className="text-gray-700">
              Our members actively participate in coding contests and hackathons, 
              gaining recognition and sharpening their problem-solving skills.
            </p>
          </div>

          {/* Career Growth */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FaRocket className="text-4xl text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Launching Careers</h3>
            <p className="text-gray-700">
              We help students prepare for tech careers by offering interview preparation, resume reviews, and career guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
