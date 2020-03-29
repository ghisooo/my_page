import React from "react";
import programmer from "../img/software_Developer_main.png";
import skill from "../img/developer_color.png"
import describe from "../img/describes_me_color.png";

function Body(props) {
  return (
    <div id="body-set" class="masthead-wrap">
      <div class="container">
        <div id="head-slider" class="transistion">
          <p class="head-desc">a Software Developer</p>
          <p class="head-cont">
            I'm developing 5G network transport functions in Ericsson,
            Stockholm. I like programming to implement or improve something
            generally. And, recently, I've started having an interest in Web
            development(specifically, backend) and enjoy exploring Web
            development world. ;)
          </p>
        </div>
      </div>

      <div id="programmer-img-holder">
        <img src={programmer} />
      </div>

      <div class="container">
        <div id="head-slider" class="transistion">
          <img class="skill-img" src={skill} />
          <p class="head-desc">What I Can Do.</p>
          <p class="head-cont">
            I've started Web development with MERN stack (MongoDB, Express,
            React and Node.js). I will learn other evironments and frameworks
            too. In language-wise, I can use JavaScript and Python; at work, I
            have used C/C++, JAVA for a function development and testing.
            <i>(If interested, please check my CV.)</i>
          </p>
        </div>
      </div>
      <div class="container">
        <div id="head-slider" class="transistion">
          <img class="describe-img" src={describe} />
          <p class="head-desc">Words Describing Me.</p>
          <p class="head-cont">
            Goal-oriented, Collaborative, Action-oriented and Dependable
          </p>
        </div>
      </div>
    </div>
  );

}

export default Body;