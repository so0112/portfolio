import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="mb-40 m-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
