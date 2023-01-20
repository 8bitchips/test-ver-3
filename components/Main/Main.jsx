/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";
import Logo from "../../public/images/logo2.png";
import DevfolioWhite from "../../public/images/devfolio-white.svg";
import MainImage from "../../public/images/main-img.png";
import { motion } from "framer-motion";
import { JoinDiscordBtn } from "../JoinDiscordBtn/JoinDiscordBtn";

export const Main = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
    
  };
  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="text-white mt-22 pt-10 z-20 text-center"
        id="main-page"
      >
        
                <motion.div
                    className=""
                    animate={{
                        opacity: [1, 0],
                        // visibility: ['block', 'hidden'],
                    }}
                    transition={{ duration: 2, delay: 0 }}
                />
                <motion.div
                    className=""
                    animate={{
                        opacity: [0, 1, 1],
                        scale: [150, 1, 1],
                        
                    }}
                    transition={{ duration: 1, delay: 0 }}
                >
                    <Image
                        src={Logo}
                        
            height={Logo.height}
            width={Logo.width}
                        className=""
                        alt={'Green Saber'}
                        style={{ alignSelf: 'center' }}

                    />
                </motion.div>
       
        <h1 className="text-center text-glow text-lg mb-4 md:text-2xl font-semibold">
          Think. Build. Innovate.
        </h1>
        <h1 className="text-center text-glow text-lg mb-4 md:text-3xl font-semibold">
          Feb 10th - 11th, 2023 &#x2022; GLBITM
        </h1>
        <div className="flex flex-wrap justify-center my-6 gap-2">
         <a href="https://www.glbitm.org/"> <ApplyWithDevfolioBtn /></a>
          
          
        </div>
        
        
      <div className="hidden-lg">
      <Image
          height={900}
          width={2500}
          className="md lg:-mt-20"
          media="{min-width: 1000px)"
          src={MainImage}
          alt="main-img"
          loading="eager"
          priority
        />
      </div>
      </motion.main>   
       </>
  );
};
