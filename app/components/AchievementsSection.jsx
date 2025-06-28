"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "1",
    postfix: "",
  },
  {
    //prefix: "~",
    metric: "Leetcode Problems",
    value: "250",
    postfix: "+",
  },
  {
    metric: "Github Contributions",
    value: "50",
    postfix: "+",
  },
  // {
  //   metric: "Years",
  //   value: "11",
  //   postfix: "+",
  // },
  // {
  //   metric:"Problems",
  //   value: "250",
  //   postfix: "+",
  // },
  // {
  //   metric:"Open Source Contri",
  //   value: "250",
  //   postfix: "+",
  // }
];


const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 sm:py-16 sm:px-8'>
      <div className="
        border border-[#33353F] 
        rounded-md 
        bg-[#121212]
        py-4 px-2
        sm:py-6 sm:px-4 
        lg:py-8 lg:px-8 
        max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl 
        mx-auto 
        transition-colors duration-300 hover:border-blue-400
      ">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center justify-center mx-4 min-w-[100px]'
              >
                <h2 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row'>
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(
                      achievement.value.replace(/,/g, "")
                    )}
                    locale='en-US'
                    className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className='text-[#ADB7BE] text-sm sm:text-base'>
                  {achievement.metric}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
