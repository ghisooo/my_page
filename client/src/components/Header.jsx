import React from "react";
import linkedinIcon from "../img/linkedin_blue.png";
import cvIcon from "../img/cv_color.png";
import emailIcon from "../img/email.png";

function Header(props) {
  
  let currentTheme;
  currentTheme = Object.assign({}, props.theme);
  currentTheme["borderBottom"] ="thin solid #ffffff";

  return (
    <header className="nav-top nav-fixed nav-root" style={currentTheme}>
      <div className="row">
        <div className="col-md-4 col-xs-4" />
        <div
          id="header-myname"
          className="col-md-4 col-xs-4 text-center my-auto transistion"
        >
          George Gyuhong Kyung
        </div>
        <div id="header-icons-set" className="col-md-4 col-xs-4">
          <nav>
            <ul className="nav-list transistion text-center">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/gyuhong-kyung/"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    height="40"
                    width="40"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1Xm9sGK_qY-PBJa8h76x4EZh0t-uAYvmk?usp=sharing"
                >
                  <img src={cvIcon} alt="CV" height="40" width="40" />
                </a>
              </li>
              <li>
                <a href="mailto:gyuhong.kyung@gmail.com">
                  <img src={emailIcon} alt="email" height="40" width="40" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
