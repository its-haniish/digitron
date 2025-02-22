


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FiChevronsDown } from "react-icons/fi";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [loadedComplete, setLoadedComplete] = useState(false);
  const imagesLoaded = useRef(0);
  const imageObject = useRef([]);
  const canvasRef = useRef(null);
  const parentDivRef = useRef(null);

  const initialIndex = 1;
  const maxIndex = 1216;

  const [vals, setVals] = useState({
    currentIndex: initialIndex,
  });

  // Preload images
  const preloadImages = () => {
    for (let i = initialIndex; i <= maxIndex; i++) {
      const imageUrl = `./frame2/frame_${i.toString().padStart(4, "0")}.webp`;
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
        className=" overflow-hidden w-full h-screen  absolute top-0 z-30 flex justify-center items-center"
      >
        {/* Circuit Animation */}
        <div
          ref={circuitRef}
          className="absolute w-full h-full bg-[url('/loaderimage.jpeg')] bg-cover opacity-0"
        ></div>

        {/* Boot-Up Text */}
        <h1
          ref={textRef}
          className="text-white mx-6 lg:mx-0 text-5xl font-extrabold tracking-wider"
        >
          Digitron - Where Code Meets Innovation
        </h1>
      </div>

    

    <div className="absolute z-10 w-full ">
        <div className="flex w-full h-screen flex-col items-center gap-5 justify-center min-h-screen text-zinc-800">
      
      <h1 ref={introRef} className="text-3xl text-center  md:text-6xl font-bold ">
        Digitron: Inspire The Next
      </h1>
      <h2 ref={titleRef} className="text-lg md:text-2xl mt-4 text-gray-600">
        Presented by CRSSIET Jhajjar
      </h2>
      <Link className="" to={`/event/67b77be5d548fa3ac5b86551`}>
      
<div class="relative inline-flex items-center justify-center gap-4 group">
  <div
    class="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
  ></div>
  <div
    role="button"
    class="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
    title="payment"
    
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
  </div>
</div>

      </Link>
      <div className="absolute z-10 top-[75vh] lg:top-[90vh] ">
      {
  loadedComplete ? (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold">Scroll Down </p>
      <FiChevronsDown className="text-3xl mt-2 animate-bounce" />
    </div>

  ) : (
    <div className="homeloader"></div>
  )
}
      </div>

    </div>
    <div className="flex items-center justify-center h-screen  px-4">
        <p  className="text-lg md:text-xl text-center max-w-3xl">
          It all started with a simple question: <br />
          <em>"What if coding wasn’t just a <span className="text-2xl text-yellow-500">subject</span>, but an <span className="text-2xl text-blue-500">adventure</span>?"</em>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center h-screen  text-zinc-900 space-y-6 px-6">
        <h1 className="text-4xl font-semibold mb-6 text-center uppercase">What We Do ? </h1>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🔥</span>
          <p className="text-xl"> <span className=" font-semibold">Workshops & Bootcamps</span> – Master cutting-edge technologies.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">💡</span>
          <p className="text-xl"> <span className=" font-semibold">Hackathons & Competitions</span> – Solve real-world problems with code.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🚀</span>
          <p className="text-xl"> <span className=" font-semibold">Projects & Open Source</span> – Build impactful software and contribute to the community.</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-3">🤝</span>
          <p className="text-xl"> <span className=" font-semibold">Networking & Mentorship</span> – Connect with industry experts and like-minded peers.</p>
        </div>
      </div>

      <div  className="flex flex-col items-center justify-center h-screen space-y-6 px-6">
        <h2 className="text-4xl font-semibold mb-6 text-center uppercase">Our Vision & Goals</h2>
        <p className="text-xl max-w-3xl text-center">
          At <span className="text-blue-800 font-semibold uppercase">Digitron</span>, we aim to inspire, educate, and nurture the next generation of tech innovators. Our vision is to create a platform
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

<div class="flex items-end justify-center h-[150vh]">
  <div class="relative group">
    <Link target="_blank" to="https://chat.whatsapp.com/J3HDlet8yi2IXn5b4yfUUq"
      class="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-amber-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-yellow-600"
    >
      <span
        class="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      ></span>
      <span class="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
        <div class="relative z-10 flex items-center space-x-3">
          <span
            class="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-amber-300"
            >Be a part of Digitron</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-amber-300"
          >
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            ></path>
          </svg>
        </div>
      </span>
    </Link>
  </div>
</div>



      </div>

      <footer className="  bg-opacity-40 backdrop-blur-md text-center  py-4 mt-80 rounded-lg shadow-xl border border-white border-opacity-30">
        <p className="text-2xl font-semibold text-zinc-800
        ">
          Developed by <Link to="https://github.com/rishiyadav11" className="font-bold hover:text-sky-600 hover:underline">Rishi Yadav </Link> & <Link to="https://github.com/its-haniish" className="font-bold hover:text-sky-600 hover:underline">Hanish Kumar </Link>
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