import React from 'react';
//import sitraProjectImage from '../../src/assets/images/vente-gest-facture.png';
//import blogTokyImage from '../../src/assets/images/home_blog.png';
//import gbModeImage from '../../src/assets/images/accueil_gb_mode.png';
import MLS from '../../src/assets/images/Lms.png';
import Wecoco from '../../src/assets/images/wecoco.png';
import TokySign from '../../src/assets/images/tokySign.png';
import TokyChat from '../../src/assets/images/toky-chat.png';
import Beyaft from '../../src/assets/images/beyaft.png';
import Caterly from '../../src/assets/images/caterly.png';
import DevPulse from '../../src/assets/images/devpulse.png';
import Factura from '../../src/assets/images/factura.png';

//const urlVersRacine = process.env.PUBLIC_URL;
export const projects = [
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
    title: "Beyaft",
    desc: "C'est une application de transformation sur laquelle on peut afficher une transformation avant et après d'une processus",
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
    img: Beyaft,
    link: "https://www.beyaft.fr/",
    code: "",
  },
  {
    title: "Projet Traiteur",
    desc: "C'est une application qui permet à un traiteur de se connecter et de partager ces services,et un client de se connecter et de voir tous les traiteurs et ses services disponibles",
    tags: [
      {
        name: "Laravel",
        color: "red-600",
      },
      {
        name: "Next js",
        color: "green-600",
      },
      {
        name: "Mysql",
        color: "blue-600",
      },
    ],
    img: Caterly,
    link: "",
    code: "https://github.com/tokyRonaldo/projet-traiteur",
  },
  {
    title: "Gestion de cours",
    desc: "Site qeb qui permet de se connecter en tant que etudiant et suivre des cours ou en tant que professeur pour publier des cours",
    tags: [
      {
        name: "Next js",
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
    title: "Gestion des factures",
    desc: "Une application web de gestion de facture qui permet de gerer la vente des produits et la creation d'une facture",
    tags: [
      {
        name: "laravel",
        color: "red-600",
      },
      {
        name: "Vuejs",
        color: "yellow-600",
      },
      {
        name: "Mysql",
        color: "blue-800",
      }
    ],
    img: Factura,
    link: "",
    code: "https://github.com/tokyRonaldo/saas_gest_facture",
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
        name: "Mysql",
        color: "blue-800",
      },
    ],
    img:  DevPulse,
    link: "",
    code: "https://github.com/tokyRonaldo/BlogDev",
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
  
  
];
