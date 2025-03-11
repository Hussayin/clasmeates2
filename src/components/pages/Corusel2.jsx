import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heart } from "../../assets";

const images = [
  "https://classmeats-uz.netlify.app/stey-mans/abdullaziz.webp",
  "https://classmeats-uz.netlify.app/stey-mans/abdulloh.webp",
  "https://classmeats-uz.netlify.app/stey-mans/anvar.webp",
  "https://classmeats-uz.netlify.app/stey-mans/asaloy.webp",
  "https://classmeats-uz.netlify.app/stey-mans/bobamurod.webp",
  "https://classmeats-uz.netlify.app/stey-mans/bobur.webp",
  "https://classmeats-uz.netlify.app/stey-mans/diyono.webp",
  "https://classmeats-uz.netlify.app/stey-mans/humoyun.webp",
  "https://classmeats-uz.netlify.app/stey-mans/husan.webp",
  "https://classmeats-uz.netlify.app/stey-mans/malika.webp",
  "https://classmeats-uz.netlify.app/stey-mans/laylo.webp",
  "https://classmeats-uz.netlify.app/stey-mans/isloom.webp",
  "https://classmeats-uz.netlify.app/stey-mans/izzatbek.webp",
  "https://classmeats-uz.netlify.app/stey-mans/madina.webp",
  "https://classmeats-uz.netlify.app/stey-mans/nozima.webp",
  "https://classmeats-uz.netlify.app/stey-mans/ogajon.webp",
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
    <div className="w-screen h-[90vh] overflow-hidden mt-[67px] relative">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="carousel"
          className="absolute top-0 left-0 w-full h-[90vh] object-top object-cover"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <a
        href="#classmeates"
        className=" absolute bottom-[85px] z-[100000] flex justify-center items-center w-[100%] "
      >
        <h1 className=" bg-[#000000ca] text-[20px] px-[25px] py-[10px] rounded-2xl  ">
          Scroll down
        </h1>
      </a>
    </div>
  );
};

export default FullscreenCarousel;
