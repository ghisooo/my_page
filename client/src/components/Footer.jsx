import React from "react";
import Clock from "./Clock";
import day from "../img/day_theme.png";
import night from "../img/night_theme.png";

function Footer(props){
  const basicClass =
    "fixed-bottom row align-items-center text-center";
  let currentTheme;
  currentTheme = Object.assign({}, props.theme);
  currentTheme["borderTop"] = "thin solid #ffffff";
  
return (
  <div id="footer-set" className={basicClass} style={currentTheme}>
    <div className="col-md-4 col-xs-4" />
    <div className="col-md-4 col-xs-4">
      <>&copy; {new Date().getFullYear()} Gyuhong Kyung All Rights Reserved</>
    </div>
    <div id="footer-theme-set" className="col-md-4 col-xs-4 text-right">
      <Clock />
      {props.isDayTime ? (
        <div>
          <img src={day} height="22" width="22" alt="Day theme" />
          <p> &nbsp;Day theme</p>
        </div>
      ) : (
        <div>
          <img src={night} height="20" width="20" alt="Night theme" />
          <p> &nbsp;Night theme</p>
        </div>
      )}
    </div>
  </div>
);
}

export default Footer;