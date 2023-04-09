import React from "react";
import ExternalLink from "../../pattern-lib/components/external-link";
import data from "./data.json";
import "../styles.css";

const Projects = () => {
  return (
    <div className="max-width mx-auto">
      <h1 className=" p2 bg-green">projects</h1>
      <p className="p2 bg-green-light">
        Most projects are available to save to your home screen on a mobile
        device.
      </p>
      <ul>
        {data.projects.map(({ description, url, title }, i) => {
          return (
            <li key={`projects-list-${i}`} className="">
              <ExternalLink
                className="bg-green text-white bold p3"
                href={url}
                text={title}
                iconColor="#FFFFFF"
              />
              <p className="bg-green-light p3 flex flex-wrap text-black">
                {description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
