import React from "react";
import gradcap from "../assets/images/gradcap.png";
import Navigator from "./Navigator";

const styles = {
  logoStyle: {
    height: "70px",
  },
  titleStyle: {
    marginLeft: "12px",
  },
};

const AppHeader = () => {
  console.log('header rendered again')
  return (
    <header>
      <div className="left">
        <img src={gradcap} alt="logo" style={styles.logoStyle} />
      </div>
      <div className="left" style={styles.titleStyle}>
        <h1>E-ducation</h1>
      </div>
      <div className="right">
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;
