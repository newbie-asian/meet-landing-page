import React from 'react';
import fImage1 from '../assets/desktop/image-woman-in-videocall.jpg';
import fImage2 from '../assets/desktop/image-women-videochatting.jpg';
import fImage3 from '../assets/desktop/image-men-in-meeting.jpg';
import fImage4 from '../assets/desktop/image-man-texting.jpg';

const Features = () => {
  return (
    <main className="main-content">
      <section className="features">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 px-6 features__gallery md:grid-cols-4 md:grid-rows-none md:gap-3 md:px-10 xl:gap-6 xl:px-40">
          <img src={fImage1} alt="" className="rounded-lg features__img" />
          <img src={fImage2} alt="" className="rounded-lg features__img" />
          <img src={fImage3} alt="" className="rounded-lg features__img" />
          <img src={fImage4} alt="" className="rounded-lg features__img" />
        </div>

        <div className="block md:max-w-[590px] xl:max-w-[570px]">
          <h3 className="block__tagline ">Built for modern use</h3>
          <h2 className="block__heading text-m md:text-l sm:px-20">Smarter meetings, all in one place</h2>

          <p className="block__description">
            Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team
            access, data encryption, and data export.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Features;
