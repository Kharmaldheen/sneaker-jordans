import { motion } from "framer-motion";
("use client");
import { Carousel } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Slider() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[93vh] md:h-[91vh] bg-slate-500 flex lg:flex-row md:flex-col flex-col items-center md:px-14 lg:px-44 md:py-20 px-6 py-8 gap-10 lg:gap-14">
        <div className="lg:w-[50%] w-full flex flex-col gap-10 md:gap-14 ">
          <p className="text-white text-2xl md:text-6xl text-bold text-center lg:text-left font-montserrat leading-relaxed md:leading-[80px]">
            Step into Style: Explore{" "}
            <span className=" text-red-700 font-bold p-1">Sneaker Jordans</span>{" "}
            for Your Perfect Pair
          </p>
          <button
            className="bg-red-700 md:rounded-2xl text-white text-lg md:p-4.5 p-5 md:w-[50%] lg:w-[30%]  hidden md:block md:mx-auto lg:mx-0 hover:animate-pulse font-montserrat"
            onClick={() => navigate("/products")}
          >
            Shop now
          </button>
        </div>
        <Carousel className="lg:w-[50%] w-full">
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src="sneakerJordans2.png"
              className=" h-36 lg:h-[45%] rotate-[-25deg] mx-auto"
              alt=""
            />
          </div>
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src="/sneakerJordans3.png"
              className="h-[180px] md:h-3/5 rotate-[-25deg]"
              alt=""
            />
          </div>
          <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <img
              src="Jordanshoes1-removebg.png"
              className="md:h-3/5 h-[180px] rotate-[-25deg]"
              alt=""
            />
          </div>
        </Carousel>
      </div>
      <motion.div
        className="absolute block md:left-0 top-[40%] left-[37%] z-0 md:hidden"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150, type: "spring" }}
      >
        <NavLink
          className="bg-black md:rounded-none rounded-2xl text-white py-4 px-6 font-montserrat"
          to="/products"
        >
          Shop now
        </NavLink>
      </motion.div>
    </>
  );
}
