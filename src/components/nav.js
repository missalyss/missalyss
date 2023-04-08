const Nav = ({ className, ...props }) => {
  return (
    <nav
      className={`flex justify-evenly bg-purple-light pt2 pb2 text-md mt3 ${
        className || ""
      }`}
      {...props}
    >
      <a href="/">about</a>
      <a href="/resume">resume</a>
      <a href="/projects">projects</a>
    </nav>
  );
};

export default Nav;
