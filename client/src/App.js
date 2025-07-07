import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';



function App() {
  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  useEffect(() => {
  AOS.init({ duration: 1000 });
  if (window.feather) window.feather.replace();
}, []);


  return (
    <div className="container">
      <header data-aos="fade-down">
        <h1>
  <span style={{ color: '#fff' }}>
    <Typewriter
      words={['Ishita Arya']}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>
</h1>

        <p className="subtitle">Software Developer</p>
        <div className="socials">
          <a href="https://github.com/ishitahub" target="_blank" rel="noreferrer"><i data-feather="github"></i></a>
          <a href="https://www.linkedin.com/in/ishita-arya-852467229/" target="_blank" rel="noreferrer"><i data-feather="linkedin"></i></a>
          <a href="mailto:ishita13arya@gmail.com" target="_blank" rel="noreferrer"><i data-feather="mail"></i></a>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <a href="/resume.pdf" download className="btn">Download Resume</a>
        </div>
      </header>

      <section data-aos="fade-up">
        <h2>About Me</h2>
        <p className="about">
          Hi! I'm Ishita Arya, a passionate Software Developer who loves turning complex problems into simple, beautiful, and intuitive solutions. I specialize in front-end technologies like React, JavaScript, and HTML/CSS, but I'm always learning and exploring new languages and frameworks to stay up-to-date in the tech world.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <h3>Profile Website</h3>
            <p>A simple website that gives a brief of me and my interests. An introduction to me in a fun way.</p>
            <a href="https://ishitahub.github.io/I-m-Ishita-Website/" className="btn" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          <div className="card">
            <h3>WeatherNow</h3>
            <p>Displays live weather data using the OpenWeatherMap API. Users can search any city for current weather information.</p>
            <a href="https://ishitahub.github.io/weather-app/" className="btn" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          <div className="card">
            <h3>To Do App</h3>
            <p>A simple and elegant ToDo list application built with React. This app allows you to add, delete, and manage your daily tasks with ease. Tasks are stored in your browser using localStorage.</p>
            <a href="https://ishitahub.github.io/to-do-app/" className="btn" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
          <div className="card">
            <h3>CodeCrackr</h3>
            <p>A Web-based Online Coding Platform.</p>
            <a href="https://ishitahub.github.io/CodeCrackr/" className="btn" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </section>

      <section data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills">
          {["JavaScript", "React", "Node.js", "HTML", "CSS", "Java", "Data Structures", "Algorithms"].map((skill, i) => (
            <div key={i}>{skill}</div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2025 Ishita Arya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


