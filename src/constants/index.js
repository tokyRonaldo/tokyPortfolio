import React from 'react';
import sitraProjectImage from '../../src/assets/images/vente-gest-facture.png';
import blogTokyImage from '../../src/assets/images/home_blog.png';
import gbModeImage from '../../src/assets/images/accueil_gb_mode.png';
import MLS from '../../src/assets/images/Lms.png';
import Wecoco from '../../src/assets/images/wecoco.png';
import TokySign from '../../src/assets/images/tokySign.png';
import TokyChat from '../../src/assets/images/toky-chat.png';

const urlVersRacine = process.env.PUBLIC_URL;
export const projects = [
  {
    title: "Gestion de cours",
    desc: "Site qeb qui permet de se connecter en tant que etudiant et suivre des cours ou en tant que professeur pour publier des cours",
    tags: [
      {
        name: "next js",
        color: "red-600",
      },
      {
        name: "tailwind",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-600",
      },
    ],
    img: MLS,
    link: "https://toky-mls.vercel.app",
    code: "https://github.com/tokyRonaldo/tokyMLS",
  },
  {
    title: "Toky chat",
    desc: "Un chat qui est basée par l'api de Gemini pour repondre au question",
    tags: [
      {
        name: "React Js",
        color: "red-600",
      },
      {
        name: "Node Js",
        color: "yellow-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mongodb",
        color: "blue-600",
      },
    ],
    img: TokyChat,
    link: "https://toky-chat.vercel.app",
    code: "https://github.com/tokyRonaldo/tokyChat",
  },
  {
    title: "Toky Sign",
    desc: "Un site de signature électronique en ligne",
    tags: [
      {
        name: "React Js",
        color: "red-600",
      },
      {
        name: "Node Js",
        color: "yellow-600",
      },

      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mongodb",
        color: "blue-600",
      },
    ],
    img: TokySign,
    link: "https://toky-sign.vercel.app",
    code: "https://github.com/tokyRonaldo/tokySign",
  },  
  {
    title: "Bailti",
    desc: "Réseau social de colocation & location de logements",
    tags: [
      {
        name: "Laravel",
        color: "red-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-600",
      },
    ],
    img: Wecoco,
    link: "https://www.wecoco.fr",
    code: null,
  },  
  {
    title: "Gestion des factures",
    desc: "Une application web de gestion de facture qui permet de gerer la vente des produits et la creation d'une facture",
    tags: [
      {
        name: "laravel",
        color: "red-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-800",
      }
    ],
    img: sitraProjectImage,
    link: "",
    code: "https://github.com/tokyRonaldo/sitrakaProject/tree/master",
  },
  {
    title: "Blog",
    desc: "Une blog sur laquelle l'admin peut ajouter ou modifier ou supprimer une article, et les utilisateurs peuvent les lires et commenter ",
    tags: [
      {
        name: "Laravel",
        color: "red-600",
      },
      {
        name: "Vuejs",
        color: "yellow-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-800",
      },
    ],
    img:  blogTokyImage,
    link: "",
    code: "https://github.com/tokyRonaldo/BlogToky/tree/master",
  },
  {
    title: "Site e-commerce",
    desc: "Un site e-commerce qui permet de publier des articles et de mettre des articles dans un panier et passer la commande",
    tags: [
      {
        name: "Symfony",
        color: "red-600",
      },
      {
        name: "Bootstrap",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-600",
      },
    ],
    img: gbModeImage,
    link: "",
    code: "https://github.com/tokyRonaldo/Gbmode/tree/master",
  }];
