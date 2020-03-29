import React from "react";
import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"
// import Axios from "axios"; // TODO: it will be removed later.

function App() {

  //TODO: These will be removed later.
  // Axios.get("http://localhost:5000/").then((res) => {
  //   console.log(res.data.message);
  // });
  // const test = {
  //   test:"good"
  // }
  // Axios.post("http://localhost:5000/", d).then((res)=>{console.log(res.data);
  // });  
  
  const hour = new Date().getHours();
  const isDayTime = hour>=6 && hour <18 ;
  const themes = {
    dayTheme: {
      backgroundColor: "#e1f4f3",
      color: "#333333"
    },
    nightTheme: {
      backgroundColor: "#333333",
      color: "#ffffff"
    },
  };
  const mainDivTheme = {
    dayTheme: {
      backgroundColor: "#e1f4f3",
      height: "100vh",
    },
    nightTheme: { 
      backgroundColor: "#333333", 
      height: "100vh" },
  };
  const currentTheme = isDayTime? themes.dayTheme : themes.nightTheme;
  return (
    <div style={isDayTime ? mainDivTheme.dayTheme : mainDivTheme.nightTheme}>
      <Header isDayTime={isDayTime} theme={currentTheme} />
      <Body isDayTime={isDayTime} theme={currentTheme} />
      <Footer isDayTime={isDayTime} theme={currentTheme} />
    </div>
  );
}
export default App;
