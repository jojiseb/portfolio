import React, { useContext } from 'react';
import { NavContext } from '../App';
import Social from '../components/Social';
import photo from '../img/Jojiseb.jpg';

function Home() {
  const { setPage } = useContext(NavContext);
  return (
    <section id="home" className="home-layout">
      <div className="home-text">
        <p className="home-greeting">Hey there, welcome — glad you stopped by.</p>
        <p className="home-eyebrow">Backend Engineer</p>
        <h1 className="home-title">Joji Sebastian.</h1>
        <p className="home-subtitle">
          Product-minded backend engineer with an eye for UX. I build reliable,
          scalable systems and care deeply about the experience on the other side.
        </p>
        <div className="home-cta">
          <button className="btn-primary" onClick={() => setPage('projects')}>
            View Projects
          </button>
          <a className="btn-ghost" href="mailto:joji.s1997@gmail.com">Get in touch</a>
        </div>
        <Social className="home-socials" />
      </div>
      <div className="home-photo-wrap">
        <img src={photo} alt="Joji Sebastian" className="home-photo" />
      </div>
    </section>
  );
}

export default Home;
