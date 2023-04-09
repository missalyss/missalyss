import Sidebar from "./side-bar";
import Content from "./content";
import "../styles.css";
import "./resume.css";

//
const Resume = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Resume;
