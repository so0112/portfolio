import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="m-10">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
