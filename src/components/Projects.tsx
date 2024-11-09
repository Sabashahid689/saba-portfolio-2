import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Atm Machine",
    desc: "A simple HTML and Typescript powered tool for atm machine with real-time rates.",
    img: "/Project_01.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "Calculator Project",
    desc: "A basic HTML, CSS, and Typescript calculator for performing essential arithmetic operations.",
    img: "/Project_02.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 2,
    title: "Countdown Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img: "/Project_03.jpg",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },
  {
    id: 3,
    title: "Currency Converter Project",
    desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
    img: "/Project_04.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
  {
    id: 4,
    title: "International Web App",
    desc: "A create HTML, CSS-based one-page website for an international travel agency.",
    img: "/Project_05.jpg",
    tags: ["HTML", "CSS"],
  },
  {
    id: 5,
    title: "Todo List App",
    desc: "A HTML, CSS, and Typescript-based app for managing and organizing your tasks efficiently.",
    img: "/Project_06.jpg",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' desc={''} img={''} tags={''} />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}  // Pass img as string
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
