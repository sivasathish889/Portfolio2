import html from "./icons/skills/html (1).webp";
import css from "./icons/skills/css.webp";
import js from "./icons/skills/javascript.webp";
import react from "./icons/skills/react (1).webp";
import tailwind from "./icons/skills/tailwind.webp";
import nextjs from "./icons/skills/nextjs_light.webp";
import expo from "./icons/skills/expo.webp";
import ts from "./icons/skills/typescript.webp";
import redux from "./icons/skills/redux.webp";

import nodejs from "./icons/skills/nodejs.webp";
import expressjs from "./icons/skills/express.webp";
import python from "./icons/skills/python.webp";
import django from "./icons/skills/django.webp";
import java from "./icons/skills/java.webp";
import springboot from "./icons/skills/spring-boot.webp";
import mongoDb from "./icons/skills/mongo-db.webp";
import mysql from "./icons/skills/mysql.webp";
import prisma from "./icons/skills/prisma.webp";

import git from "./icons/skills/git.webp";
import github from "./icons/skills/github.webp";
import vscode from "./icons/skills/visual-studio-code.webp";
import docker from "./icons/skills/docker.webp";
import pycharm from "./icons/skills/pycharm.webp";
import intellij from "./icons/skills/intellij.webp";
import webstorm from "./icons/skills/webstorm.webp";
import figma from "./icons/skills/figma.webp";
import postman from "./icons/skills/postman.webp";

import chat_app_thumb from "./images/chat_app_thumb.webp";
import outpass from "./images/outpass.jpg";
import thirukural from "./images/Thirukural Book.webp";
import ecommerce from "./images/e-commerce.webp";
import glassNav from "./images/glass navbar.webp";

import instagramIcon from "../assets/AnimatedIcon/instagram.gif";
import linkedIcon from "../assets/AnimatedIcon/linkedin.gif";
import githubIcon from "../assets/AnimatedIcon/github.gif";
import type { projectImageType, social_iconsType } from "./assets.type.ts";

export const social_icons: social_iconsType = {
  instagram: instagramIcon,
  linkedin: linkedIcon,
  github: githubIcon,
};
export const skillIcons = {
  frontend: {
    html: {
      name: "HTML",
      image: html,
      color: "#e34f26",
      knowledge: "90%",
    },
    css: {
      name: "CSS",
      image: css,
      color: "#264de4",
      knowledge: "90%",
    },
    js: {
      name: "Javascript",
      image: js,
      color: "#f7df1e",
      knowledge: "95%",
    },
    ts: {
      name: "Typescript",
      image: ts,
      color: "#007acc",
      knowledge: "95%",
    },
    react: {
      name: "React",
      image: react,
      color: "#61DAFB",
      knowledge: "95%",
    },
    redux: {
      name: "Redux",
      image: redux,
      color: "#764abc",
      knowledge: "90%",
    },
    tailwind: {
      name: "Tailwind",
      image: tailwind,
      color: "#38B2AC",
      knowledge: "95%",
    },
    nextjs: {
      name: "Next.js",
      image: nextjs,
      color: "#8389FF",
      knowledge: "80%",
    },
    expo: {
      name: "React Native & Expo",
      image: expo,
      color: "#2088FF",
      knowledge: "85%",
    },
  },
  backend: {
    nodejs: {
      name: "Node.js",
      image: nodejs,
      color: "#3C873A",
      knowledge: "90%",
    },
    expressjs: {
      name: "Express.js",
      image: expressjs,
      color: "#000000",
      knowledge: "90%",
    },
    python: {
      name: "Python",
      image: python,
      color: "#3776AB",
      knowledge: "80%",
    },
    django: {
      name: "Django",
      image: django,
      color: "#092E20",
      knowledge: "80%",
    },
    java: {
      name: "Java",
      image: java,
      color: "#ED8B00",
      knowledge: "70%",
    },
    springboot: {
      name: "Spring Boot",
      image: springboot,
      color: "#6DB33F",
      knowledge: "70%",
    },
    mongoDb: {
      name: "MongoDB",
      image: mongoDb,
      color: "#47A248",
      knowledge: "85%",
    },
    mysql: {
      name: "MySQL",
      image: mysql,
      color: "#4479A1",
      knowledge: "90%",
    },
    prisma: {
      name: "Prisma",
      image: prisma,
      color: "#2D3748",
      knowledge: "80%",
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
    figma: {
      name: "Figma",
      image: figma,
    },
    postman: {
      name: "Postman",
      image: postman,
    },
  },
};

export const projectImage: projectImageType[] = [
  {
    title: "Outpass",
    image: outpass,
    description:
      "A digital system for managing hostel outpass requests, allowing students to apply and administrators to review and approve them efficiently.",
    technologies: ["Expo", "Express.js", "Tailwind", "MongoDB"],
    liveLink:
      "https://github.com/sivasathish889/Portfolio2/blob/main/Files/Hostal%20Outpass.apk",
    githubLink: "https://github.com/sivasathish889/hostal_outpass_frontend",
  },
  {
    title: "Chat App",
    image: chat_app_thumb,
    description:
      "A real-time chat application that enables users to send and receive messages instantly, supporting seamless one-on-one and group conversations.",
    technologies: [
      "Next.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "TypeScript",
      "Tailwind",
      "Redux",
    ],
    liveLink: null,
    githubLink: "https://github.com/sivasathish889/Chat-Application",
  },
  {
    title: "E-Commerce",
    image: ecommerce,
    description:
      "An e-commerce website that provides a platform for buying and selling products online, offering a user-friendly interface and secure payment options.",
    technologies: ["Django", "Bootstrap", "Mysql", "SSR"],
    liveLink: null,
    githubLink: "https://github.com/sivasathish889/E-commerse-website",
  },
  {
    title: "Thirukural Book",
    image: thirukural,
    description:
      "A digital book of Thirukkural, a sacred Sanskrit text known for its profound meaning and spiritual significance.",
    technologies: ["React.js", "Tailwind", "API"],
    liveLink: "https://thirukural-book-15td.onrender.com",
    githubLink: "https://github.com/sivasathish889/Thirukural_book",
  },
  {
    title: "Glassmorphism nav Bar",
    image: glassNav,
    description:
      "A simple and user-friendly calculator that performs basic arithmetic operations, making it a convenient tool for quick calculations.",
    technologies: ["React.js", "Tailwind"],
    liveLink: null,
    githubLink: "https://github.com/sivasathish889/glass-nav-bar",
  },
];
