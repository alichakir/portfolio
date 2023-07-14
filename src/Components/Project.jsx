import React from "react";
import { Link } from "react-router-dom";

function Project({id,title, image, description, techstack }) {
  const truncatedDescription =
    description.length > 300 ? `${description.substring(0, 300)}...` : description;

  return (
    <Link to={`/Projet/${id}`} className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
        <p className="text-content pt-4 font-light">{truncatedDescription}</p>
        <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
          Technologies : <span className="font-light">{techstack}</span>
        </h3>
      </div>
    </Link>
  );
}

export default Project;
