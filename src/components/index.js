import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./projects";
import About from "./about";
import Nav from "./nav";
import Footer from "./footer";

const HomePage = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <About />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);

  return (
    <div className="bg-black-soft">
      <a className="pl4 pt3 pb3 mt3 bg-pink-light bold block text-xl">
        missalyss
      </a>
      <Nav />
      <main className="height-100 p6">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
