import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header flex justify-center ">
      <a href="/" className="brand my-8 sm:my-12 lg:my-16">
        <img src={logo} className="logo" alt="Meet landing page official logo" />
      </a>
    </header>
  );
};

export default Header;
