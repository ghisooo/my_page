import React from "react";
import linkedinIcon from "../img/linkedin_blue.png";
import cvIcon from "../img/cv_color.png";
import emailIcon from "../img/email.png";

function Header(props) {
  return (
      <header class="nav-top nav-fixed nav-root border-bottom border-white">
        <div class="row">
          <div class="col-md-4 col-xs-4" />
          <div
            id="header-myname"
            class="col-md-4 col-xs-4 text-center my-auto transistion"
          >
            George Gyuhong Kyung
          </div>
          <div id="header-icons-set" class="col-md-4 col-xs-4">
            <nav>
              <ul class="nav-list transistion text-center">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/george-gyuhong-kyung-235a28162/"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      height="42"
                      width="42"
                    />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1Xm9sGK_qY-PBJa8h76x4EZh0t-uAYvmk?usp=sharing"
                  >
                    <img src={cvIcon} alt="CV" height="42" width="42" />
                  </a>
                </li>
                <li>
                  <a href="mailto:gyuhong.kyung@gmail.com">
                    <img src={emailIcon} alt="email" height="42" width="42" />
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
