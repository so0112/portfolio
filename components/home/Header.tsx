import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">FE 개발자 신상오</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"project"} className="mr-5 hover:text-gray-900">
            Project
          </Link>
          <a className="mr-5 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
