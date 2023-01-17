const Nav = ({ className, ...props }) => {
  return (
    <nav className={`flex justify-evenly bg-purple pt2 pb2 md-font mt3 ${className || ''}`} {...props}>
      <a href="/">about</a>
      <a href="/projects">projects</a>
    </nav>
  );
};

export default Nav;
