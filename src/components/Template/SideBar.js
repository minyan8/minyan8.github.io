import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Yan Min</h2>
        <p>
          <a href="mailto:ryanm.sde@gmail.com">ryanm.sde@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p style={{ textAlign: 'justify' }}>
        Hi, I&apos;m Yan Min. I am currently pursuing a master&apos;s degree in <a href="https://www.eng.mcmaster.ca/ece/">ECE at McMaster</a>.
        Alongside my studies, I am doing a research internship at <a href="https://noahlab.com.hk/#/home">Huawei Noah&apos;s Ark Lab</a>.
        My research interests lie in machine learning and computer vision,
        with a recent focus on 3D gaussian splatting (3DGS).
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Yan Min <Link to="/">minyan.life</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
