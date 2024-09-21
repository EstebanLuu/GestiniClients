import { FaLocationArrow } from "react-icons/fa6";
import React from 'react'

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { companies } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="gray"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="gray"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="gray" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-gray-400 max-w-80 font-bold">
            Gestini Clients
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Desarrollo de Aplicaciones que Transforman Empresas"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider text-gray-300 text-sm md:text-lg lg:text-xl">
            Convertimos tus ideas en soluciones de software.
          </p>

          <a href="#about" className="mb-16">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex gap-10">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-8 filter grayscale brightness-0 invert"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
