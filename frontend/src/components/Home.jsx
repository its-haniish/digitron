


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loadedComplete, setLoadedComplete] = useState(false);
  const imagesLoaded = useRef(0);
  const imageObject = useRef([]);
  const canvasRef = useRef(null);
  const parentDivRef = useRef(null);

  const initialIndex = 1;
  const maxIndex = 2394;

  const [vals, setVals] = useState({
    currentIndex: initialIndex,
  });

  // Preload images
  const preloadImages = () => {
    for (let i = initialIndex; i <= maxIndex; i++) {
      const imageUrl = `./frame4/frame_${i.toString().padStart(4, "0")}.png`;
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        imagesLoaded.current++;
        if (imagesLoaded.current === maxIndex - initialIndex + 1) {
          setLoadedComplete(true);
          loadImage(initialIndex);
        }
      };
      imageObject.current.push(img);
    }
  };

  // Tween object for GSAP
  const tweenObj = useRef({ index: initialIndex });

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
      index: maxIndex,
      ease: "none",
      onUpdate: () => {
        const newIndex = Math.floor(tweenObj.current.index);
        loadImage(newIndex);
        setVals((prev) => ({ ...prev, currentIndex: newIndex }));
      },
    });
  });

  useEffect(() => {
    preloadImages();
  }, []);

  const loadImage = (index) => {
    if (index >= initialIndex && index <= maxIndex) {
      const img = imageObject.current[index - initialIndex];
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

  // Loader overlay refs and animations



  // Disable scrolling when loader is visible
  useEffect(() => {
    if (!loadedComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loadedComplete]);


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
        duration: 1.5,
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
      scale: 0.01,
      duration: 2,
      opacity: 0,
      ease: "power1.out",
    });
  
    // Scroll animation
    tl.to(tweenObj.current, {
      index: maxIndex,
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
        setVals((prev) => ({ ...prev, currentIndex: newIndex }));
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
  
    // New ScrollTrigger to reveal element at 30% of page scroll
 
  }, []);


  
  
  


  return (
    <div ref={parentDivRef} className="w-full h-[550vh] relative select-none">
      {/* Loader Overlay */}
      <div
        ref={containerRef}
        className="loader w-full h-screen absolute top-0 z-30 flex justify-center items-center"
      >
        {/* Circuit Animation */}
        <div
          ref={circuitRef}
          className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1739785890803-7a2191a37ef5?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-0"
        ></div>

        {/* Boot-Up Text */}
        <h1
          ref={textRef}
          className="text-white text-5xl font-extrabold tracking-wider"
        >
          Digitron - Where Code Meets Innovation
        </h1>
      </div>

    

    <div className="absolute z-10 w-full ">
        <div className="flex w-full h-screen flex-col items-center gap-5 justify-center min-h-screen text-zinc-800">
      
      <h1 ref={introRef} className="text-3xl md:text-6xl font-bold ">
        Digitron: Igniting the Future of Code
      </h1>
      <h2 ref={titleRef} className="text-lg md:text-2xl mt-4 text-gray-600">
        Presented by CRSSIET Jhajjar
      </h2>
      <Link className="" to={`/event/67b77be5d548fa3ac5b86551`}>
      
<div class="relative inline-flex items-center justify-center gap-4 group">
  <div
    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
  ></div>
  <a
    role="button"
    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
    title="payment"
    href="#"
    >Tech Fest 2025<svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      height="10"
      width="10"
      fill="none"
      class="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
    >
      <path
        d="M0 5h7"
        class="transition opacity-0 group-hover:opacity-100"
      ></path>
      <path
        d="M1 1l4 4-4 4"
        class="transition group-hover:translate-x-[3px]"
      ></path>
    </svg>
  </a>
</div>

      </Link>


    </div>
    <div className="flex items-center justify-center h-screen  px-4">
        <p  className="text-lg md:text-xl text-center max-w-3xl">
          It all started with a simple question: <br />
          <em>"What if coding wasn’t just a subject, but an adventure?"</em>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center h-screen  text-zinc-900 space-y-6 px-6">
        <h1 className="text-center text-xl font-bold">What We Do </h1>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🔥</span>
          <p className="text-xl">Workshops & Bootcamps – Master cutting-edge technologies.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">💡</span>
          <p className="text-xl">Hackathons & Competitions – Solve real-world problems with code.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🚀</span>
          <p className="text-xl">Projects & Open Source – Build impactful software and contribute to the community.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🤝</span>
          <p className="text-xl">Networking & Mentorship – Connect with industry experts and like-minded peers.</p>
        </div>
      </div>

      <div  className="flex flex-col items-center justify-center h-screen space-y-6 px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center">Our Vision & Goals</h2>
        <p className="text-xl max-w-3xl text-center">
          At Digitron, we aim to inspire, educate, and nurture the next generation of tech innovators. Our vision is to create a platform
          where students can transform their ideas into reality, explore new technologies, and work together on impactful projects.
        </p>
        <div className="flex flex-wrap justify-center space-x-6 mt-6">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🎯</span>
            <p className="text-xl">Empower students through hands-on coding experiences.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🚀</span>
            <p className="text-xl">Launch coding bootcamps and hackathons to foster creativity.</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🤖</span>
            <p className="text-xl">Encourage the development of cutting-edge technologies and innovations.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen ">
        <button
  type="submit"
  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
🚀 Be a part of Digitron today!
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    ></path>
  </svg>
</button>
      </div>

      <footer className="  bg-opacity-40 backdrop-blur-md text-center  py-4 mt-80 rounded-lg shadow-xl border border-white border-opacity-30">
        <p className="text-2xl font-semibold text-zinc-800
        ">
          Developed by <span className="font-bold">Digitron </span>
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
