import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../Details";
import "../styles/SingleProject.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectDetails.find(
    (project) => project.id === parseInt(projectId)
  );
  console.log(project.title);
  return (

      <section className="sectionn pb-32 -mt-8 cocktail-section">
        <h2 className="section-title">{project.title}</h2>
   
        <div className="drink">
         <img src={project.image} alt={project.title} />
          <div className="drink-info ">
          <p className="pb-2" >
              <span className="drink-data ">Technologies :</span>{" "}
              {project.techstack}
            </p>
            <p>
              <span className="drink-data">Description :</span>{" "}
              {project.description}
            </p>
       
          </div>
        </div>
      </section>
 
  );
};

export default ProjectPage;
