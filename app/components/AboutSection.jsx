"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>B.Tech CSE in Data Science</li>
        <li>Pranveer Singh Institute of Technology (PSIT), Kanpur, India</li>
        <li>Sept 2023 – June 2027</li>
        <li><strong>SGPA: </strong>8.33 / 10.0</li>
        <li>
          <strong>Relevant Coursework: </strong>
          DSA | DBMS | OS | Computer Networks | Machine Learning
        </li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Flask</li>
      </ul>
    ),
  },
  {
    title: "Data Science",
    id: "datascience",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>Jupyter Notebook</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Data Cleaning & Preprocessing</li>
        <li>Feature Engineering</li>
      </ul>
    ),
  },
  {
    title: "AI / ML",
    id: "aiml",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>Scikit-Learn</li>
        <li>Supervised & Unsupervised Learning</li>
        <li>Regression & Classification Models</li>
        <li>Model Evaluation & Validation</li>
        <li>Machine Learning Pipelines</li>
      </ul>
    ),
  },
  {
    title: "Databases",
    id: "databases",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE] break-words">
        <li>SQLite</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>SQL</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <Image
          className="border border-slate-600"
          src="/images/coding.png"
          alt="Coding"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          <h2 className="text-4xl font-bold text-white mb-4">
            About Me
          </h2>

          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I’m a third-year Computer Science student specializing in Data Science,
            building strong foundations in algorithms, systems, and software engineering.
          </p>

          <p className="text-base lg:text-lg mt-2 text-[#ADB7BE]">
            My focus lies at the intersection of Software Engineering and AI/ML,
            developing scalable applications while exploring data-driven solutions.
          </p>

          <p className="text-base lg:text-lg mt-2 text-[#ADB7BE]">
            Through projects and continuous learning, I work on backend systems,
            data analysis, and machine learning to build practical, scalable solutions.
          </p>

          {/* Responsive tab buttons container */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-8 mb-0">

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>

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
              selectTab={() => handleTabChange("datascience")}
              active={tab === "datascience"}
            >
              {" "}
              Data Science{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("aiml")}
              active={tab === "aiml"}
            >
              {" "}
              AI / ML{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("databases")}
              active={tab === "databases"}
            >
              {" "}
              Databases{" "}
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