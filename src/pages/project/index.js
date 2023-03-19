import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

// images from the asset folder in the image file
import {
  Home_page_blog_website,
  todolist,
  secrete_home,
  drum_kit,
  simon_page,
  portfolio
} from "../../assets/images";

// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    desc: "A website where you can share your blogs",
    stack: "Html Css JavaScript MongoDB NodeJs",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/SakshiGoyat/Blog-Website",
    },
    website: {
      icon: <TbWorld />,
      url: "https://worlde-cloned.netlify.app/",
    },

    imgUrl: portfolio,
  },
  {
    id: 2,
    name: "Bloging Website",
    desc: "A website where you can share your blogs",
    stack: "Html Css JavaScript MongoDB NodeJs",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/SakshiGoyat/Blog-Website",
    },
    website: {
      icon: <TbWorld />,
      url: "https://worlde-cloned.netlify.app/",
    },

    imgUrl: Home_page_blog_website,
  },
  {
    id: 3,
    name: "To-Do list",
    desc: "A easy way to plan your day",
    stack: "Html Css Javascript EJS NodeJs MongoDB",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/SakshiGoyat/ToDo-list",
    },
    website: {
      icon: <TbWorld />,
      url: "https://gericht-restaurant-website.netlify.app/",
    },
    imgUrl: todolist,
  },
  {
    id: 4,
    name: "Reveal Your Secrets",
    desc: "This is a website where anyone can share their secrets anonoymosly",
    stack: "EJS NodeJs",
    imgUrl: secrete_home,

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/SakshiGoyat/Reveal-your-secrets",
    },
    website: {
      icon: <TbWorld />,
      url: "https://gpt3-openai-project.netlify.app/",
    },
  },
  {
    id: 5,
    name: "Drum Kit",
    desc: "A project that displays all information about a country",
    stack: "React JS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Almarex-Web-Dev/rest-countries-api-project",
    },
    website: {
      icon: <TbWorld />,
      url: "https://rest-countries-web-app-project.netlify.app/",
    },
    imgUrl: drum_kit,
  },
  {
    id: 6,
    name: "Simon Game",
    desc: "A simple landing page website",
    stack: "React js, SCSS",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Almarex-Web-Dev/Huddle-landing-page",
    },
    website: {
      icon: <TbWorld />,
      url: "https://huddle-website-project.netlify.app/",
    },
    imgUrl: simon_page,
  },
];
