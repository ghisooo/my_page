import React from "react";
import programmer from "../img/software_Developer_main.png";
import skill from "../img/developer_color.png"
import describe from "../img/describes_me_color.png";

function Body(props) {
  return (
    <div id="body-set" className="masthead-wrap" style={props.theme}>
      <div className="container">
        <div id="head-slider" className="transistion">
          <p className="head-desc">Software Developer</p>
          <p className="head-cont">
            I'm developing 5G network transport functions at Ericsson,
            Stockholm. I like programming to implement or improve things
            generally. Recently, I have started having an interest in Web
            development(specifically, backend) and enjoy exploring Web
            development world.
          </p>
        </div>
      </div>

      <div id="programmer-img-holder">
        <img src={programmer} alt="programmer" />
      </div>

      <div className="container">
        <div id="head-slider" className="transistion">
          <img className="skill-img" src={skill} alt="skill" />
          <p className="head-desc">What I Can Do</p>
          <p className="head-cont">
            I've started Web development with MERN stack (MongoDB, Express,
            React and Node.js). I will learn other environments and frameworks
            too. Language-wise, I can use JavaScript and Python; at work, I
            have used C/C++, JAVA for function development and testing. 
            <i>(If interested, please check my CV.)</i>
          </p>
        </div>
      </div>
      <div className="container">
        <div id="head-slider" className="transistion">
          <img className="describe-img" src={describe} alt="describe" />
          <p className="head-desc">Words Describing Me</p>
          <p className="head-cont">
            Goal-oriented, Collaborative, Action-oriented and Dependable
          </p>
        </div>
      </div>
    </div>
  );

}

export default Body;