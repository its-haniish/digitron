import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="w-full py-20 bg-white text-gray-800"
      id="about"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us 🏛️</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="mt-2">
              Digitron is the official coding club of{" "}
              <span className="font-semibold">
                Ch. Ranbir Singh State Institute of Engineering & Technology, Jhajjar
              </span>
              , dedicated to fostering a culture of problem-solving, development, and innovation.
              Whether you're just starting or already a pro, Digitron is the perfect place to grow, build, and collaborate!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-2">
              We aim to bridge the gap between academia and industry by equipping students with the latest tech skills through hands-on projects, workshops, and competitive coding events.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="mt-2">
              To create the best student-led tech community that inspires young developers to explore, learn, and innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
