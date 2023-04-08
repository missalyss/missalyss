const Footer = () => {
  return (
    <>
      <footer className="bg-blue-light pl4 pt2 pb2 mb3 text-md flex justify-center align-center">
        <p className="inline pr3">Made with ❤️☕️📚 by missalyss</p>
        <span className="text-xs inline">{new Date().getFullYear()}</span>
      </footer>
    </>
  );
};

export default Footer;
