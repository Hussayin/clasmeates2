import { useEffect, useState } from "react";
import MenuAll from "../App/MenuAll";
import Classmeates from "./Classmeates";
import FullscreenCarousel from "./Corusel2";
import { Example } from "./HoverAnime";
import ImageGallery from "./ImagesBar";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="fixed top-0 gap-[20px] left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 text-white text-xl font-bold">
      <p className=" font-nunito mt-[10px] text-[25px] ">11-A Family</p>
      <img
        src="https://classmeats-uz.netlify.app/stey-mans/piknik-all.webp"
        alt="Loading..."
        className=" w-[80%] rounded-xl "
      />
      <p className=" font-nunito text-[25px] "> Iltimos, kuting...</p>
    </div>
  );
};

const Enter = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); // 3 soniya kutish
  }, []);

  return (
    <div className=" overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <div className=" overflow-hidden">
          <Navbar />
          <FullscreenCarousel />
          <Example />
          <Classmeates />
          <ImageGallery />
          <MenuAll />
        </div>
      )}
    </div>
  );
};

export default Enter;
