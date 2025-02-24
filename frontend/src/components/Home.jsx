import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FiChevronsDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import imageLinks from "./ImageLinks";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loadedComplete, setLoadedComplete] = useState(false);
  const imagesLoaded = useRef(0);
  const imageObject = useRef([]);
  const canvasRef = useRef(null);
  const parentDivRef = useRef(null);

  // Preload images from CDN
  const preloadImages = () => {
    // Replace these with the full list of URLs from your image_links.txt file
    
    imageLinks.forEach((imageUrl, index) => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        imagesLoaded.current++;
        if (imagesLoaded.current === imageLinks.length) {
          setLoadedComplete(true);
          loadImage(0); // start with the first image
        }
      };
      imageObject.current.push(img);
    });
  };

  // Tween object for GSAP
  const tweenObj = useRef({ index: 0 });
  
  // GSAP scroll based animation
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: parentDivRef.current,
        start: "top top",
        scrub: 2,
        end: "bottom bottom",
      },
    });
    t1.to(tweenObj.current, {
      index: imageObject.current.length - 1,
      ease: "none",
      onUpdate: () => {
        const newIndex = Math.floor(tweenObj.current.index);
        loadImage(newIndex);
      },
    });
  });

  useEffect(() => {
    preloadImages();
  }, []);

  const loadImage = (index) => {
    if (index >= 0 && index < imageObject.current.length) {
      const img = imageObject.current[index];
      const canvas = canvasRef.current;
      if (canvas && img) {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      }
    }
  };

  // Disable scrolling when loader is visible
  useEffect(() => {
    if (!loadedComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loadedComplete]);

  // Loader overlay refs and animations
  const textRef = useRef(null);
  const circuitRef = useRef(null);
  const containerRef = useRef(null);
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
  
    // Loader animations
    gsap.set(containerRef.current, { backgroundColor: "black" });
  
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        color:"grey",
        duration: 1,
        ease: "power2.out",
        onStart: () => {
          const letters = textRef.current.innerText.split("");
          textRef.current.innerHTML = "";
          letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.innerText = letter;
            span.style.opacity = "0";
            textRef.current.appendChild(span);
            gsap.to(span, { opacity: 1, duration: 0.1, delay: index * 0.1 });
          });
        },
      }
    );
  
    tl.to(circuitRef.current, {
      opacity: 1,
      duration: 2,
      ease: "power2.inOut",
    });

    tl.to(containerRef.current, {
      duration: 2.1,
      opacity: 0,
      ease: "power1.out",
      onComplete: () => {
        containerRef.current.style.display = "none";
      },
    });
    
  
    // Scroll animation for intro elements
    tl.to(tweenObj.current, {
      index: imageObject.current.length - 1,
      ease: "none",
      scrollTrigger: {
        trigger: parentDivRef.current,
        start: "top 50%",
        scrub: 2,
        end: "bottom bottom",
      },
      onUpdate: () => {
        const newIndex = Math.floor(tweenObj.current.index);
        loadImage(newIndex);
      },
    });
  
    // Intro title animation
    if (titleRef.current) {
      const words = titleRef.current.textContent.split(" ");
      titleRef.current.innerHTML = words
        .map((word) => `<span style="opacity: 0; display: inline-block;">${word}</span>`)
        .join(" ");
  
      const spans = titleRef.current.querySelectorAll("span");
      tl.to(spans, { opacity: 1, stagger: 0.2 }, "4.5");
    }
  }, []);

  return (
    <div ref={parentDivRef} className="w-full h-[550vh] relative select-none">
      {/* Loader Overlay */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full h-screen absolute top-0 z-30 flex justify-center items-center"
      >
        {/* Circuit Animation */}
        <div
          ref={circuitRef}
          className="absolute w-full h-full bg-gray-100  bg-cover opacity-0"
        ></div>
        {/* Boot-Up Text */}
        <h1
          ref={textRef}
          className="text-white mx-6 lg:mx-0 text-5xl font-extrabold tracking-wider"
        >
          Digitron - Where Code Meets Innovation
        </h1>
      </div>

      <div className="absolute z-10 w-full">
        <div className="flex w-full h-screen flex-col items-center gap-5 justify-center min-h-screen text-zinc-800">
          <h1 ref={introRef} className="uppercase text-3xl text-center md:text-6xl font-bold flex flex-col items-center justify-center">
            <span>DIGITRON</span>
            <span className="text-sm">Inspire The Next</span>
          </h1>
          <h2 ref={titleRef} className="text-lg md:text-2xl mt-4 text-gray-600">
            Presented by CRSSIET Jhajjar
          </h2>
          <Link to={`/event/67b77be5d548fa3ac5b86551`}>
            <div className="relative inline-flex items-center justify-center gap-4 group">
              <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
              <div
                role="button"
                className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                title="payment"
              >
                Tech Fest 2025
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                >
                  <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100"></path>
                  <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]"></path>
                </svg>
              </div>
            </div>
          </Link>
          <div className="absolute z-10 top-[75vh] lg:top-[90vh]">
            {loadedComplete ? (
              <div className="flex flex-col items-center mt-[-10vh] gap-2">
                <p className="text-lg font-bold text-black">Scroll Down</p>
                <div className="hanishkumar">
                  <div className="hanishkumar_1">
                    <div className="hanishkumar_2"></div>
                    <div className="hanishkumar_2"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-[-15vh]">
                <div className="crazyloader">
                  <div className="crazycard">
                    <div className="crazycrazyloader">
                      <p>loading</p>
                      <div className="crazywords">
                        <span className="crazyword">future</span>
                        <span className="crazyword">events</span>
                        <span className="crazyword">roadmaps</span>
                        <span className="crazyword">skills</span>
                        <span className="crazyword">innovations</span>
                      </div>
                    </div>
                  </div>
                  <div className="crazyloading"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-screen flex items-center justify-center px-4">
          <div className="h-fit bg-opacity-40 backdrop-blur-md rounded-lg shadow-xl border border-white border-opacity-30 p-5">
            <p className="text-lg md:text-xl text-center max-w-3xl">
              It all started with a simple question: <br />
              <em>
                "What if coding wasn’t just a <span className="text-2xl text-yellow-500">subject</span>,
                but an <span className="text-2xl text-blue-500">adventure</span>?"
              </em>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10 text-zinc-900">
      <div className="bg-white/40 backdrop-blur-md w-full  max-w-lg lg:max-w-4xl rounded-xl shadow-xl border border-white/30 p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center uppercase  py-2 rounded-md">
          What We Do?
        </h1>

        <div className="space-y-4">
          {[
            {
              icon: "🔥",
              title: "Workshops & Bootcamps",
              description: "Master cutting-edge technologies.",
            },
            {
              icon: "💡",
              title: "Hackathons & Competitions",
              description: "Solve real-world problems with code.",
            },
            {
              icon: "🚀",
              title: "Projects & Open Source",
              description: "Build impactful software and contribute to the community.",
            },
            {
              icon: "🤝",
              title: "Networking & Mentorship",
              description: "Connect with industry experts and like-minded peers.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg sm:text-xl">
                <span className="font-semibold">{item.title}</span> – {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
  <div className="w-full max-w-4xl bg-opacity-40 backdrop-blur-md rounded-lg shadow-xl border border-white border-opacity-30 p-6 sm:p-10">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center uppercase">
      Our Vision & Goals
    </h2>
    <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto">
      At <span className="text-blue-800 font-semibold uppercase">Digitron</span>, we aim to inspire, educate, and nurture the next generation of tech innovators. 
      Our vision is to create a platform where students can transform their ideas into reality, explore new technologies, and work together on impactful projects.
    </p>

    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">🎯</span>
        <p className="text-lg sm:text-xl">Empower students through hands-on coding experiences.</p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-2xl">🚀</span>
        <p className="text-lg sm:text-xl">Launch coding bootcamps and hackathons to foster creativity.</p>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-2xl">🤖</span>
        <p className="text-lg sm:text-xl">Encourage the development of cutting-edge technologies and innovations.</p>
      </div>
    </div>
  </div>
</div>

        <div className="flex items-center justify-center h-screen">
          <div className="flex items-end justify-center h-[150vh]">
            <div className="relative group">
              <Link target="_blank" to="https://chat.whatsapp.com/J3HDlet8yi2IXn5b4yfUUq"
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-amber-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-yellow-600"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-amber-300">
                      Be a part of Digitron
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-amber-300">
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                    </svg>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <footer className="bg-opacity-40 backdrop-blur-md text-center  bg-gray-300 lg:py-4  mt-60 lg:mt-80 rounded-lg shadow-xl border  border-white border-opacity-30">
          <p className="text-2xl font-semibold text-zinc-800">
            Developed by <Link to="https://github.com/rishiyadav11" className="font-bold hover:text-sky-600 hover:underline">Rishi Yadav</Link> &amp; <Link to="https://github.com/its-haniish" className="font-bold hover:text-sky-600 hover:underline">Hanish Kumar</Link>
          </p>
        </footer>
      </div>

      {/* Canvas Animation Background */}
      <div className="w-full h-screen sticky left-0 top-0">
        <canvas ref={canvasRef} className="w-full h-screen"></canvas>
      </div>
    </div>
  );
};

export default Home;
