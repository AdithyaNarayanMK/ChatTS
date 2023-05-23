import { useState,useEffect } from "react";
import "../StylesSheets/light.css"; 
import "../StylesSheets/dark.css";

function Chat() {
  const [theme, setTheme] = useState('light');

  // Set the theme class on the body element when the theme changes
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Toggle the theme between light and dark
  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function() {
        console.log('Text copied to clipboard');
      },
      function() {
        console.error('Could not copy text to clipboard');
      }
    );
  }

  return (
    <div className="chatbody">
        <div className={theme === "light" ? "light" : "dark"}>
       {theme === "light" ? (
          <link rel="stylesheet" href="light.css" />
        ) : (
          <link rel="stylesheet" href="dark.css" />
        )}
        <nav className="navbar">
          <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li><a href="home.html">ChatTS</a></li>
            </ul>
            <div className="button1"><li><a id="theme-toggle" href="#" onClick={toggleTheme}><i id="theme-icon" className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i></a></li></div>
            <i className="fas fa-user"></i>
            <li><a className="button" href="home.html">Logout</a></li>
          </div>
        </nav>

        <div className="chat-input">
          <textarea name="text" id="text" placeholder="Enter your text here.." className="input"></textarea>

          <button type="submit" className="chat-submit" id="chat-submit" style={{ fontFamily: "Inter" }}><i className="material-icons">Summarize</i></button>
        </div>

        <textarea id="text-box" placeholder="Summarized text will appear here" className="output"></textarea>

        <span className="clipboard-icon" onClick={() => copyToClipboard('Text to copy')}>🗎</span>
    </div>
    </div> 
  );
}

export default Chat;