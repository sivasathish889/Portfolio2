import html from "./icons/skills/html (1).png";
import css from "./icons/skills/css.png";
import js from "./icons/skills/javascript.png";
import react from "./icons/skills/react (1).png";
import tailwind from "./icons/skills/tailwind.png";
import bootstrap from "./icons/skills/bootstrap-framework-logo.png";
import nextjs from "./icons/skills/nextjs_light.png";
import expo from "./icons/skills/expo.png";
import ts from "./icons/skills/typescript.png";


import nodejs from "./icons/skills/nodejs.png";
// import expressjs from "./icons/skills/expressjs.png";
import python from "./icons/skills/python.png";
import django from "./icons/skills/django.png"
import java from "./icons/skills/java.png";
import springboot from "./icons/skills/spring-boot.png"
import mongoDb from "./icons/skills/mongo-db.png";
import mysql from "./icons/skills/mysql.png";

import git from "./icons/skills/git.png";
import github from "./icons/skills/github.png";
import vscode from "./icons/skills/visual-studio-code.png";
import docker from "./icons/skills/docker.png";
import pycharm from "./icons/skills/pycharm.png";
import intellij from "./icons/skills/intellij.png";
import webstorm from "./icons/skills/webstorm.png";
import figma from "./icons/skills/figma.png";
import postman from "./icons/skills/postman.png";

import chat_app_thumb from "./images/chat_app_thumb.png"
import outpass from "./images/outpass.jpg"
import thirukural from "./images/Thirukural Book.png"
import ecommerce from "./images/e-commerce.png"
import glassNav from "./images/glass navbar.png"
type projectImage ={
  title : string,
  image : string,
  description : string,
  technologies : string[],
  liveLink : string,
  githubLink : string
}
export const skillIcons = {
  frontend: {
    html: {
      name: "HTML",
      image: html,
    },
    css: {
      name: "CSS",
      image: css,
    },
    js: {
      name: "Javascript",
      image: js,
    },
    ts: {
      name: "Typescript",
      image: ts,
    },
    react: {
      name: "React",
      image: react,
    },
    tailwind: {
      name: "Tailwind",
      image: tailwind,
    },
    // bootstrap :{
    //   name : "Bootstrap",
    //   image : bootstrap
    // },
    nextjs: {
      name: "Next.js",
      image: nextjs,
    },
    expo: {
      name: "React Native & Expo",
      image: expo,
    },
  },
  backend: {
    nodejs: {
      name: "Node.js",
      image: nodejs,
    },
    // expressjs :{
    //   name : "Express.js",
    //   image : expressjs
    // }
    python: {
      name: "Python",
      image: python,
    },
    django: {
      name: "Django",
      image: django,
    },
    java: {
      name: "Java",
      image: java,
    },
    springboot: {
      name: "Spring Boot",
      image: springboot,
    },
    mongoDb: {
      name: "MongoDB",
      image: mongoDb,
    },
    mysql: {
      name: "MySQL",
      image: mysql,
    },
  },
  tools: {
    git: {
      name: "Git",
      image: git,
    },
    github: {
      name: "Github",
      image: github,
    },
    vscode: {
      name: "Visual Studio Code",
      image: vscode,
    },
    webstorm: {
      name: "Webstorm",
      image: webstorm,
    },
    intellij: {
      name: "Intellij",
      image: intellij,
    },
    pycharm: {
      name: "Pycharm",
      image: pycharm,
    },
    docker: {
      name: "Docker",
      image: docker,
    },
    figma :{
      name : "Figma",
      image : figma
    },
    postman :{
      name : "Postman",
      image : postman
    }
  },
};

export const projectImage : projectImage[] = [
  {
    title : "Outpass",
    image : outpass,
    description : "A digital system for managing hostel outpass requests, allowing students to apply and administrators to review and approve them efficiently.",
    technologies : ["Expo", "Express.js", "Tailwind", "MongoDB",],
    liveLink : "https://outpass.vercel.app/",
    githubLink : "https://github.com/sumit-kr/outpass"
  },
  {
    title : "Chat App",
    image : chat_app_thumb,
    description : "A real-time chat application that enables users to send and receive messages instantly, supporting seamless one-on-one and group conversations.",
    technologies : ["Next.js", "Express.js", "Socket.IO", "MongoDB", "TypeScript"],
    liveLink : "https://chat-app-ten.vercel.app/",
    githubLink : "https://github.com/sumit-kr/chat-app"
  },
  {
    title : "E-Commerce",
    image : ecommerce,
    description : "An e-commerce website that provides a platform for buying and selling products online, offering a user-friendly interface and secure payment options.",
    technologies : ["React.js", "Tailwind", "API", ],
    liveLink : "https://e-commerce-ten.vercel.app/",
    githubLink : "https://github.com/sumit-kr/e-commerce"
  },
  {
    title : "Thirukural Book",
    image : thirukural,
    description : "A digital book of Thirukkural, a sacred Sanskrit text known for its profound meaning and spiritual significance.",
    technologies : ["React.js", "Tailwind", "API", ],
    liveLink : "https://thirukural-book.vercel.app/",
    githubLink : "https://github.com/sumit-kr/thirukural-book"
  },
  {
    title : "Glassmorphism nav Bar",
    image : glassNav,
    description : "A simple and user-friendly calculator that performs basic arithmetic operations, making it a convenient tool for quick calculations.",
    technologies : ["React.js", "Tailwind", "API", ],
    liveLink : "https://calculator-ten.vercel.app/",
    githubLink : "https://github.com/sumit-kr/calculator"
  }
]