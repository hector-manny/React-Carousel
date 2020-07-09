import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#FF2400",
      fontFamily: "sans-serif",
      fontSize: "50px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>😀</div>
          <div style={MyCarousel.CARD_STYLE}>🙈</div>
          <div style={MyCarousel.CARD_STYLE}>🍒</div>
          <div style={MyCarousel.CARD_STYLE}>👾</div>
          <div style={MyCarousel.CARD_STYLE}>👨‍💻</div>
        </ReactCardCarousel>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);

