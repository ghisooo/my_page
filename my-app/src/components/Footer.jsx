import React from "react";
import Clock from "./Clock";
import day from "../img/day_theme.png";
import night from "../img/night_theme.png";

function Footer(props){
  const basicClass =
    "fixed-bottom row align-items-center border-top border-white text-center";
  const dayTheme = basicClass + " theme-daytime";
  const nightTheme = basicClass + " bg-dark text-white";
return (
  <div id="footer-set" class={props.isDayTime ? dayTheme : nightTheme}>
    <div class="col-md-4 col-xs-4" />
    <div class="col-md-4 col-xs-4">
      <>&copy; {new Date().getFullYear()} Gyuhong Kyung All Rights Reserved</>
    </div>
    <div id="footer-theme-set" class="col-md-4 col-xs-4 text-right">
      <Clock />
      {props.isDayTime ? (
        <div>
          <img src={day} height="22" width="22" />
          <p> &nbsp;Day theme</p>
        </div>
      ) : (
        <div>
          <img src={night} height="20" width="20" />
          <p> &nbsp;Night theme</p>
        </div>
      )}
    </div>
  </div>
);
}

export default Footer;