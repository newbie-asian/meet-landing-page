import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-no-repeat bg-cover bg-mobileFooter md:bg-tabletFooter xl:bg-desktopFooter bg-blue bg-blend-soft-light xl:px-20">
      <div className="xl:text-left px-12 mx-auto py-24 text-center md:max-w-[590px] md:px-0 xl:flex xl:justify-around xl:items-center  xl:max-w-none">
        <h2 className="px-4 text-white block__heading text-m md:text-l md:px-14 xl:max-w-[30%] xl:px-0">Experience more together</h2>

        <p className="text-white block__description xl:max-w-[25%]">
          Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
        </p>

        <button className="btn btn--secondary">
          Download <span className="btn__s-version">v1.3</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
