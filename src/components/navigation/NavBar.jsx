import React, { useState } from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
//import { Link } from 'react-router-dom';


function NavBar() {
  const [isNavCollapsed, setNavCollapsed] = useState(true);

  const toggleNav = () => {
    setNavCollapsed(!isNavCollapsed);
  };

  const navButtonClasses = `navigation__navButton_icon ${isNavCollapsed ? '' : 'navButtonRotate'}`;
  const navBarClasses = `navigation__navBarPosition ${isNavCollapsed ? 'navCollapse' : 'navExpand'}`;

  return (
    <nav className='navigation'>
      {/* Fixed Navigation Button (Expand/Collapse) */}
      <div className="navigation__navButton" onClick={toggleNav}>
        <svg className={navButtonClasses} width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 29L1 15L15 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      {/* NavBar Position Controller */}
      <div className={navBarClasses}>
        <div className="navigation__bar">
          <div className="navigation__bar_list">
            <a href="#section-home" className="navigation__bar_list-itemLink" onClick={toggleNav}>Home</a>
            <a href="#section-about" className="navigation__bar_list-itemLink" onClick={toggleNav}>About</a>
            <a href="#section-education" className="navigation__bar_list-itemLink" onClick={toggleNav}>Education</a>
            <a href="#section-projects" className="navigation__bar_list-itemLink" onClick={toggleNav}>Projects</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
