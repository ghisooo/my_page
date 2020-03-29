import React from "react";
import Header from "./Header"
import Body from "./Body";
import Footer from "./Footer"

function App() {
  const hour = new Date().getHours();
  const isDayTime = hour>=6 && hour <18 ;
  const dayTheme = "theme-daytime";
  const nightTheme = "bg-dark text-white";
  return (
    <div class={isDayTime ? dayTheme : nightTheme} style={{ height: "100%" }}>
      <Header isDayTime={isDayTime} />
      <Body isDayTime={isDayTime} />
      <Footer isDayTime={isDayTime} />
    </div>
  );
}
export default App;
