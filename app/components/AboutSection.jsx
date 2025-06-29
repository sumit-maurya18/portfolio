"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Flask</li>
      </ul>
    ),
  },
  {
    title: "Databases",
    id: "databases",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>SQlite</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>B.Tech CSE in Data Science</li>
        <li>Pranveer Singh Institute of Technology (PSIT), Kanpur, India</li>
        <li>Sept 2023 – June 2027</li>
        <li><strong>SGPA: </strong>8.33 / 10.0</li>
        <li><strong>Relevant Coursework: </strong>DSA | DBMS | OS | Computer Networks</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="border border-slate-600" src="/images/coding.png" alt="Coding" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I’m a third-year computer science student focused on strengthening
            my understanding of core CS fundamentals like data structures,
            algorithms, and system design.
          </p>

          <p className="text-base lg:text-lg mt-2 text-[#ADB7BE]">
            Alongside my coursework, I’m working on a real-world project that
            connects theory with practical implementation.
          </p>

          <p className="text-base lg:text-lg mt-2 text-[#ADB7BE]">
            I’m interested in building solutions that are technically sound and
            valuable for end users, and I’m exploring opportunities to
            collaborate, learn, and grow as a developer.
          </p>

          <div className="flex flex-row justify-start mt-8 mb-0">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("databases")}
              active={tab === "databases"}
            >
              {" "}
              Databases{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
