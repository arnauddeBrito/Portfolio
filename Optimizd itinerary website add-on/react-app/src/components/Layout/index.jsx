import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto md:px-20 ">
        <Header />
        <main className="min-h-screen py-8">{children}</main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
