import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heart } from "../../assets";

const images = [
  "https://classmeats-uz.netlify.app/stey-mans/abdulaziz.webp",
  "https://classmeats-uz.netlify.app/stey-mans/abduloh.webp",
  "https://classmeats-uz.netlify.app/stey-mans/anvar.webp",
  "https://classmeats-uz.netlify.app/stey-mans/asal.webp",
  "https://classmeats-uz.netlify.app/stey-mans/bobamurod.webp",
  "https://classmeats-uz.netlify.app/stey-mans/bobur.webp",
  "https://classmeats-uz.netlify.app/stey-mans/diyano.webp",
  "https://classmeats-uz.netlify.app/stey-mans/humoyun.webp",
  "https://classmeats-uz.netlify.app/stey-mans/husan.webp",
  "https://classmeats-uz.netlify.app/stey-mans/malika.webp",
  "https://classmeats-uz.netlify.app/stey-mans/islom.webp",
  "https://classmeats-uz.netlify.app/stey-mans/izzatbek.webp",
  "https://classmeats-uz.netlify.app/stey-mans/laylo.webp",
  "https://classmeats-uz.netlify.app/stey-mans/madina.webp",
  "https://classmeats-uz.netlify.app/stey-mans/sarvar.webp",
  "https://classmeats-uz.netlify.app/stey-mans/sarvinoz.webp",
];

const FullscreenCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500); // Har 3 sekundda almashadi
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[95vh] overflow-hidden mt-[60px] relative">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="carousel"
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <a
        href="#classmeates"
        className=" absolute bottom-[110px] z-[100000] flex justify-center items-center w-[100%] "
      >
        <h1 className=" bg-[#000000ca] text-[20px] px-[25px] py-[10px] rounded-2xl  ">
          Scroll down
        </h1>
      </a>
    </div>
  );
};

export default FullscreenCarousel;
