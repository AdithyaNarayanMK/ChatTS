import { useState,useEffect } from "react";
import "../StylesSheets/light.css"; 
import "../StylesSheets/dark.css";
import axios from "axios";
import {Link} from 'react-router-dom'

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
  function copyToClipboard() {
    const outputText = document.getElementsByName('output-text')[0].value;
    navigator.clipboard.writeText(outputText).then(
      function() {
        console.log('Text copied to clipboard');
      },
      function() {
        console.error('Could not copy text to clipboard');
      }
    );
  }

  function summerize() {
    const inputText = document.getElementsByName('input-text')[0].value;
  
    axios.post('http://127.0.0.1:5000/model', {
      // params: {
        text: inputText
      // }
    })
      .then(response => {
        const summaryText = response.data;
        document.getElementsByName('output-text')[0].value = summaryText;
        console.log(summaryText)
        console.log('Text summarized successfully');
      })
      .catch(error => {
        console.error('Error occurred while summarizing text:', error);
      });
  }
  
  function logout(){
    alert("You have logout successfully")
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
            {/* <input type="checkbox" name="" id="" /> */}
            <div className="hamburger-lines">
            <img src="./chatbot.avif" alt="CHATTS" />
            </div>
            <ul className="menu-items">
              <li><a href="home.html">ChatTS</a></li>
            </ul>
            <div className="button1"><li><a id="theme-toggle" href="#" onClick={toggleTheme}><i id="theme-icon" className={theme === "light" ? "fas fa-moon" : "fas fa-sun"}></i></a></li></div>
            <i className="fas fa-user"></i>
            <Link to='/signin'>
              <li><a className="button" onClick={logout}>Logout</a></li>
            </Link>
          </div>
        </nav>

        <div className="chat-input">
          <textarea name="input-text" id="text" placeholder="Enter your text here.." className="input"></textarea>

          <button type="submit" className="chat-submit" id="chat-submit" style={{ fontFamily: "Inter" }} onClick={summerize} ><i className="material-icons">Summarize</i></button>
        </div>

        <textarea id="text-box" name="output-text" placeholder="Summarized text will appear here" className="output"></textarea>

        <span className="clipboard-icon" onClick={copyToClipboard}>🗎</span>
    </div>
    </div> 
  );
}

export default Chat;