import React from "react";
import { Sinifdoshlar } from "../Data/Data";
import { motion } from "framer-motion";

const Classmeates = () => {
  return (
    <div id="classmeates" className="mt-[40px] mb-[50px] px-[20px]">
      <h1 className="font-nunito text-center text-[30px]">Classmates</h1>
      <div className="flex flex-col gap-[60px] mt-[50px] ">
        {Sinifdoshlar.map((product, index) => (
          <motion.div
            key={product.id} // Har bir element uchun unique key qo‘shildi
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Juftlar chapdan, toqlar o‘ngdan
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.6,
              delay: 0.2, // Har bir element 0.1s farq bilan chiqadi
            }}
            className=" border-b-[3px] rounded-[25px]  flex justify-center items-center flex-col "
          >
            <img
              src={product.manImage}
              className=" h-[270px] rounded-t-[30px] object-top w-[100%] object-cover "
              alt={product.manName}
            />
            <h1 className=" font-kanit text-[30px] m-[15px] ">
              {product.manName}
            </h1>
          </motion.div>
        ))}

        {/* {Sinifdoshlar.map((product, index) => (
          <motion.div
            key={product.id} // Unique key
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Juft index chapdan, toq index o‘ngdan
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              ease: "easeOut",
              duration: 1,
              delay: 0.2, // Har biri 0.2s farq bilan chiqadi
            }}
            viewport={{ once: true }}
            className="p-4 my-2 border "
          >
            <div
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <motion.img
                src={product.manImage}
                className="h-[400px]"
                alt={product.manName}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Chap/o‘ngdan chiqishi uchun
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))} */}
      </div>
    </div>
  );
};

export default Classmeates;
