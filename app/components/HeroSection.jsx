"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left column */}
        < motion.div
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start">

          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-8xl lg-leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-blue-400 to-slate-200 bg-clip-text text-transparent">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Sumit',
                2000,
                'a Problem Solver',
                2000,
                'a Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={250}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
  Lines of logic spill like verses,<br/>
  Syntax tracing hidden signs.<br/>
  In the stack, a silent error,<br/>
  Something lost between the lines.
</p>


          <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-slate-200 text-black mb-3 sm:mb-0">
              Hire me
            </button>

            <a
            href="/files/resume.pdf"
            download
            className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent border border-white text-white hover:bg-slate-800 text-center inline-block">
            Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
        initial={{ opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] h-[250px] w-[250px] relative lg:w-[400px] lg:h-[400px] overflow-hidden">
            <Image
              src="/images/photo.png"
              alt="hero image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover rounded-full"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
