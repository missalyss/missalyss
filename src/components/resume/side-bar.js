import "../styles.css";

const Sidebar = () => {
  return (
    <aside className="bg-purple-light p6 text-right max-width">
      <h2 className="bg-purple mb5 p4">Education</h2>

      <article className="mb5 p4">
        <span>July 2017</span>
        <p>Certificate in full stack web development</p>
        <span className="bold block">Galvanize, Inc. </span>
        <span> Seattle, WA</span>
      </article>

      <article className="mb5 p4">
        <span>March 2014</span>
        <p>B.A. in Comparative History of Ideas (3.8 GPA)</p>
        <span className="bold block">University of Washington</span>
        <span>Seattle, WA</span>
      </article>
    </aside>
  );
};

export default Sidebar;
