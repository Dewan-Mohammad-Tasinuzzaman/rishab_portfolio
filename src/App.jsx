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

        <div className="home">

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



      {/* EDUCATION SECTION */}



      {/* PROJECTS SECTION */}

    </div>
  );
}

export default App;
