import React from "react";
import ExternalLink from "../../pattern-lib/components/external-link";
import data from "./data.json";

const Projects = () => {
  return (
    <>
      <p>
        Most all projects are available to save to your home screen on a mobile
        device.
      </p>
      <ul>
        {data.projects.map(({ description, url, title }, i) => {
          return (
            <li key={`projects-list-${i}`} className="">
              <ExternalLink className="bg-blue text-white p3 m1" href={url} text={title} iconColor="#FFFFFF" />
              <p className="bg-blue-light p3 flex flex-wrap text-black m1">{description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
