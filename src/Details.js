
import profile from "./assets/person.jpg";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";





// Personal Details 
export const personalDetails = {
  name: "Ali",
  tagline: "Etudiant en Programation informatique",
  img: profile,
};

// Social Media URLs 
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/ali-chakir-551562273/",
  github: "https://github.com/alichakir",
};



// Project Details
export const projectDetails = [
  {
    id: 1,
    title: "Projet application android",
    image: projectImage1,
    description: `application est conçue pour permettre aux utilisateurs de gérer leur collection personnelle de livres et de films de manière pratique et organisée. Elle offre une interface conviviale où les utilisateurs peuvent ajouter, modifier et supprimer des livres et des films de leur bibliothèque.Les fonctionnalités clés de application incluent la possibilité ajouter de nouveaux livres et films en fournissant des détails tels que le titre, auteur/réalisateur, la date de publication/sortie, le genre, etc. Les utilisateurs peuvent également télécharger des images de couverture ou des affiches pour chaque élément de leur bibliothèque.application permet aux utilisateurs de rechercher des livres et des films spécifiques dans leur collection en utilisant des filtres tels que le titre, auteur/réalisateur ou le genre. De plus, ils peuvent marquer des éléments comme étant “lus” ou “visionnés” pour garder une trace de leur progression.Pour une organisation pratique, application propose des fonctionnalités de tri et de catégorisation, ce qui permet aux utilisateurs de regrouper leurs livres et films par genre, par exemple, ou de créer des listes personnalisées comme “Favoris” ou “À lire/à regarder”.En outre, application peut intégrer des fonctionnalités supplémentaires, telles que des recommandations personnalisées basées sur les préférences de utilisateur, la possibilité de noter et de laisser des commentaires sur les livres et les films, ainsi que la sauvegarde et la synchronisation des données sur le cloud pour une accessibilité multi-appareils.Le projet application Android développé avec Android Studio utilisera les langages de programmation Java ou Kotlin, en fonction des préférences du développeur, et exploitera les fonctionnalités Android Studio telles que la gestion de bases de données, utilisation APIs pour obtenir des informations sur les livres et les films, ainsi que la création une interface utilisateur attrayante et réactive.`,
    techstack: "Android Studio, Java",
  },
  {
    id:2,
    title: "Projet de site web de location de voiture",
    image: projectImage2,
    description: `
    "Le projet est un site web de location de voitures développé en utilisant Vue.js pour le frontend et Node.js pour le backend. Voici un aperçu des fonctionnalités principales :
   
   Le frontend du site web est développé en utilisant Vue.js, un framework JavaScript populaire pour la construction d'interfaces utilisateur réactives.
   Le backend est développé en utilisant Node.js, une plateforme JavaScript côté serveur.
   Les utilisateurs peuvent consulter la liste des voitures disponibles à la location.
   Les utilisateurs peuvent effectuer une recherche en fonction de différents critères tels que la marque, le modèle, la catégorie, etc.
   Les utilisateurs peuvent réserver une voiture en sélectionnant la date et l'heure de début et de fin de la location.
   Le backend gère les demandes de réservation, vérifie la disponibilité des voitures et enregistre les détails de la réservation dans une base de données.
   Les utilisateurs peuvent visualiser leurs réservations passées et les détails associés.
   Le site web peut également inclure des fonctionnalités supplémentaires telles que la gestion des profils utilisateur, le paiement en ligne, la génération de factures, etc.`  ,
    techstack: " Vue.js, Node.js",
  },
  {
    id:3,
    title: "Projet de gestion de commande restaurant",
    image: projectImage3,
    description: `
    Le projet consiste en un système de gestion des commandes pour un restaurant. Voici un aperçu des fonctionnalités principales :
    
    Le programme permet de créer un menu en ajoutant différents plats avec leur nom et leur prix.
    Les clients peuvent passer une commande en sélectionnant des plats à partir du menu.
    Chaque commande est enregistrée et stockée dans une liste.
    Le total de chaque commande est calculé en additionnant les prix des plats sélectionnés.
    Une fois la commande terminée, une facture est affichée avec le détail des plats commandés et le total à payer.`,
    techstack: " React.js, Node.js,mongoDb",
  },
];

