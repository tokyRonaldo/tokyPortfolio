import React from 'react';
import sitraProjectImage from '../../src/assets/images/vente-gest-facture.png';
import blogTokyImage from '../../src/assets/images/home_blog.png';
import gbModeImage from '../../src/assets/images/accueil_gb_mode.png';

const urlVersRacine = process.env.PUBLIC_URL;
export const projects = [
  
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
