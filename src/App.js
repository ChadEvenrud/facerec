import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesApp from "./components/Particles/Particles";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log("click");
  };

  render() {
    return (
      <div className="App">
        <ParticlesApp className="particles" />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />

        {/*
      <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
