"use client";


import { projects } from "@/data";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2 mt-10">
        {projects.map((item) => (
          <div
            className=""
            key={item.id}
          >
            <CardContainer className="inter-var shadow-3xl">
              <CardBody className="bg-gray-50 relative group/card border-black/[0.1] rounded-xl p-3 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-800"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <img
                    src={item.img}
                    className="w-full h-[200px] object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-3">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="flex items-center justify-between mt-3 mb-3 w-full"
                  >
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-[rgba(0,0,0,.1)] rounded-full bg-[#fdfdfd] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-centerflex md:text-xs text-sm text-gray-700 bg-black rounded-full p-2 text-[#fff] cursor-pointer">
                      Visitar
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
