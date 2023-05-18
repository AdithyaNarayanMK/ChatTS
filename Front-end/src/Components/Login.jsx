import { useState } from 'react';
import "../login.css";
// import MainApp from './MainApp';
// import { BrowserRouter as Link } from 'react-router-dom';


export default function Login() {
  const [animate, setAnimate] = useState(false);

  const toggleAnimation = () => {
    setAnimate(!animate);
  };
  return (
    <body>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./chatbot.avif" alt="CHATTS" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <section className="user">
        
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Hello!</h2>
              <p className="user_unregistered-text">
                To keep connected with us please login <br />
                with your personal info
              </p>
              <button onClick={toggleAnimation}
                className="user_unregistered-signup"
                id="signup-button"
                style={{ color: 'white' }}
              >
                <span className="text">Sign up</span>
              </button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Welcome Back!</h2>
              <p className="user_registered-text">
                Enter your Personal details and start<br /> your journey
              </p>
              <button onClick={toggleAnimation}
                className="user_registered-login"
                id="login-button"
                style={{ color: 'white' }}
              >
                <span className="text">Sign in</span>
              </button>
            </div>
          </div>
          <div  className={`user_options-forms ${animate ? 'bounceLeft' : 'bounceRight'}`}
  id="user_options-forms" >
            <div className={'user_forms-login'}>
              <h2 className="forms_title">Sign in</h2>
              <p className="acc">Use your Account</p>
              <form className="forms_form">
                <div className="inputs">
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="input"
                  />
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>

                  <input
                    type="password"
                    name=""
                    id="password"
                    className="input-p"
                  />
                  <label htmlFor="password" className="input-label-p">
                    Password
                  </label>
                </div>

                <div className="forms_buttons">
                  <button
                    type="button"
                    className="forms_buttons-forgot"
                  >
                    Forgot password?
                  </button>
                  <input
                    type="submit"
                    value="Sign In"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Create Account</h2>
              <form className="forms_form">
                <div className="inputs">
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="input"
                  />
                  <label htmlFor="email" className="input-label">
                    Enter your Email
                  </label>
                  <input
                    type="password"
                    name=""
                    id="password"
                    className="input-p"
                  />
                  <label htmlFor="password" className="input-label-p">
                    Enter Password
                  </label>
                </div>

                <div className="forms_buttons">
                  <input
                    type="submit"
                    value="Sign up"
                    className="forms_buttons-action"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

