import React from "react";
import Projects from "./projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      <h1 className="pl4 pt3 pb3 mt3 bg-pink-light" >missalyss</h1>
      <Nav />
    <main className="text-center height-100 p6">
      <RouterProvider router={router} />
    </main>
    <Footer />
    </div>
  );
};

export default HomePage;
