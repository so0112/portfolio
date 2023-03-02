import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font  bg-gray-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Tailblocks —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank">
            @knyttneve
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* TODO: github, blog 이미지 및 링크 추가*/}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
