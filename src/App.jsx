// IMPORTS

// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import homeIllustrationImage from './assets/svg/hero_illustration_static.svg';

// Components
import NavBar from './components/navigation/NavBar';
import EducationItem from './components/EducationItem';

// CSS/SCSS
import './App.css';
import './main.scss';

function App() {
  return (
    <div className="App">

      {/* NAVIGATION */}
      <NavBar />


      
      {/* HOME SECTION */}
      <section id='section-home'>

        <div className="home global_side_margins">

          <div className="home__headerBox">

            <div className="home__headerBox_textsContainer">
              <p className="home__headerBox_intro">I am</p>
              <h1 className="home__headerBox_name">Rishab</h1>
              <h2 className="home__headerBox_title">Software Developer</h2>
            </div>

            {/* Group of Links */}
            <div className="home__headerBox_linksBox">
              <a href="mailto:rishab.sachdeva@outlook.com" className="home__headerBox_linksBox-link" title='Email'>
                <FontAwesomeIcon icon={faEnvelope} className="home__headerBox_linksBox-link--icon"></FontAwesomeIcon>
              </a>
              <a href="https://www.linkedin.com/in/rishabsachdeva/" target='_blank' rel="noreferrer" className="home__headerBox_linksBox-link" title='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedinIn} className="home__headerBox_linksBox-link--icon"></FontAwesomeIcon>
              </a>
              <a href="https://github.com/riishhabb" target='_blank' rel="noreferrer" className="home__headerBox_linksBox-link" title='Github'>
                <FontAwesomeIcon icon={faGithub} className="home__headerBox_linksBox-link--icon"></FontAwesomeIcon>
              </a>
              <a href="/" target='_blank' rel="noreferrer" className="home__headerBox_linksBox-link" title='Resume'>
                <FontAwesomeIcon icon={faFile} className="home__headerBox_linksBox-link--icon"></FontAwesomeIcon>
              </a>
            </div>

          </div>


          <div className="home__illustration">
            <div className="home__illustration_box">
              <img src={homeIllustrationImage} className="home__illustration_box-image" alt="Home Illustration" />
            </div>
          </div>

        </div>
      </section>


      {/* ABOUT SECTION */}
      <section id="section-about">
        <div className="about">
          <div className="about__content global_side_margins global_vertical_padding">
            <div className="about__content_title">About</div>
            <div className="about__content_text">Greetings! I am a dedicated software engineering student in my third year at Ontario Tech University, driven by a profound enthusiasm for software design and development. Over the past four years, I have immersed myself in both front-end and back-end development, honing my skills in multiple high-level programming languages. My goal is to augment my proficiency by acquiring relevant industrial knowledge, refining my capabilities to align with the ever-evolving tech landscape. I have had the privilege of engaging in a range of personal and collaborative projects, strengthening my problem-solving prowess and fostering a keen eye for detail. Eager to contribute meaningfully to the software development realm, I am continuously seeking opportunities to engage with the industry, whether through internships, networking, or active involvement in coding communities. Let's innovate and advance technology together!</div>
            <a href="/" className="about__content_resumeButton">Resume</a>
          </div>
        </div>
      </section>


      {/* EDUCATION SECTION */}
      <section id="section-education">
        <div className="education">
          <div className="education__content global_side_margins global_vertical_padding">
            <div className="education__content_title">Education</div>
            <div className="education__content_list">
              <EducationItem title="Data Structures & Algorithms" date="2022" />
              <EducationItem title="Design & Analysis of Algorithms" date="2022" />
              <EducationItem title="System Programming" date="2023" />
              <EducationItem title="Object Oriented Programming" date="2023" />
              <EducationItem title="Web Programming" date="2023" />
            </div>
          </div>
        </div>
      </section>


      {/* PROJECTS SECTION */}

    </div>
  );
}

export default App;
