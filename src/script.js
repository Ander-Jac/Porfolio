import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    return (
        <div className = 'main'>

            <div className = 'nav-bar'>
                <NavBar/>
            </div>
            <div className = 'body'>
                <HomeHeader/>
                <HomeProjectSection/>
                <HomeContactForm/>
            </div>

        </div>
    )
}

const NavBar = () => {
    return (
        <div className = 'nav-bar-wrapper'>
            <div className = 'nav-bar-header'>Jacob Anderson</div>
            <div className = 'nav-list-wrapper'>
                <div className = 'nav-projects-button nav-button'>Projects</div>
                <div className = 'nav-about-button nav-button'>About Me</div>
                <div className = 'nav-contact-button nav-button'>Contact</div>
            </div>
        </div>
    )
}
const HomeHeader = () => {
    return (
      <div className = 'home-header-wrapper'>
        <h1 className = 'home-header-title'>Hi,<br></br> I'm Jacob,<br></br>Web Developer.</h1>
      </div>
    )
};
const HomeProjectSection = () => {
    return (
      <div className = 'home-project-wrapper'>
        <div className = 'home-project home-project1'></div>
        <div className = 'home-project home-project2'></div>
        <div className = 'home-project home-project3'></div>
        <div className = 'home-project home-project4'></div>
      </div>
    )
  }
const HomeContactForm = () => {
    return (
      <div className = 'home-contact-form-wrapper'>
        <form className = 'home-contact-form'>

          <div className = 'form-element-wrapper'>
            <label htmlFor = 'name'>Name</label>
            <input className = 'form-input' type = 'text' name = 'name'></input>
          </div>

          <div className = 'form-element-wrapper'>
            <label htmlFor = 'email'>Email</label>
            <input className = 'form-input' type = 'text' name = 'email'></input>
          </div>

          <div className = 'form-element-wrapper span-two-rows'>
            <label className = 'form-label' htmlFor = 'message'>Message</label>
            <textarea className = 'form-input message-form-input' type = 'text' name = 'message'></textarea>
          </div>

          <div className = 'form-element-wrapper span-two-rows'>
            <input className = 'form-input button-form-input' type = 'submit' name = 'message'></input>
          </div>

        </form>
      </div>
    )
}
root.render(<App/>);