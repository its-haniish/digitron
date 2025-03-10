import Routing from './utils/Routing';
import Navbar from './components/Navbar';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect, useState } from 'react';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Disable right-click
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["I", "J"].includes(event.key)) ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Hide cursor for screens smaller than 768px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='text-black'>
      <Navbar />
      {!isMobile && <AnimatedCursor />}
      <Routing />
    </div>
  );
};

export default App;
