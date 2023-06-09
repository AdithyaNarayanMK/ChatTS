import { useState } from 'react';
import "../StylesSheets/login.css";
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function Login() {
  const [animate, setAnimate] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/register', { email, password });
      const data = response.data; // JSON response from the server

      if (response.status === 200 && data.info === 'registered Successfully') {
        // Route to chat page
        // history.push('/chat');
        navigate('/chat');
      } else {
        // Display an alert for failed registration
        alert('Registration failed');
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/login', { email, password });
      const data = response.data; // JSON response from the server

      if (response.status === 200 && data.info === 'login Successful') {
        // Route to chat page
        // history.push('/chat');
        navigate('/chat');
      } else {
        // Display an alert for failed registration
        alert('Login failed');
      }
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  


  const toggleAnimation = () => {
    setAnimate(!animate);
  };
  return (
    <div className='mainbody'>
      <nav className="navbar">
        <div className="navbar-logo">
        <NavLink to="/home">
          <img src="./chatbot.avif" alt="CHATTS" />
        </NavLink>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink to="/home">
              <a>Home</a>
            </NavLink>
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
              <form className="forms_form" onSubmit={handleLogin} >
                <div className="inputs">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    autoComplete="off"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder=''
                  />
                  <label htmlFor="email"  className="input-label">
                    Email
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-p"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    
                  />
                  <label htmlFor="password" className="input-label-p" placeholder='password'>
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
                  {/* <Link to="/chat"> */}
                  <input
                    type="submit"
                    value="Sign In"
                    className="forms_buttons-action"
                  />
                  {/* </Link> */}
                </div>
              </form>
            </div>
            <div className="user_forms-signup">
              <h2 className="forms_title">Create Account</h2>
              <form className="forms_form" onSubmit={handleSignUp}>
                <div className="inputs">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="email" className="input-label" placeholder='Enter your Email'>
                    Enter your Email
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="input-p"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <label htmlFor="password" className="input-label-p" placeholder='Enter Password'>
                    Enter Password
                  </label>
                </div>
                
                <div className="forms_buttons">
                  {/* <Link to="/chat"> */}
                    <input
                      type="submit"
                      value="Sign up"
                      className="forms_buttons-action"
                    />
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}