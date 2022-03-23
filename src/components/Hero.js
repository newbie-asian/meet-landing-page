import React from 'react';
import mobileHero from '../assets/tablet/image-hero.png';
import desktopLHero from '../assets/desktop/image-hero-left.png';
import desktopRHero from '../assets/desktop/image-hero-right.png';

const Hero = () => {
  return (
    <section className="hero overflow-hidden xl:flex justify-between items-center mb-16">
      <img src={mobileHero} alt="" className="hero__mobile relative -left-[2%] max-w-none w-[105%] xl:hidden " />
      <img src={desktopLHero} alt="" className="hero__desktopL hidden xl:block xl:m-0 relative -left-4 self-start" />

      <div className="hero__content block">
        <h1 className="block__heading text-l md:text-xl xl:text-xl2 px-4 md:px-14">Group Chat for Everyone</h1>

        <p className="block__description">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>

        <div className="btn-container">
          <button className="btn btn--primary">
            Download <span className="btn__p-version">v1.3</span>
          </button>
          <button className="btn btn--secondary">What is it?</button>
        </div>
      </div>

      <img src={desktopRHero} alt="" className="hero__desktopR hidden xl:block xl:m-0 relative -right-4 self-end" />
    </section>
  );
};

export default Hero;
