import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div className="intro" id="intro">
        <nav>
          <img alt="ironhack logo" src={process.env.PUBLIC_URL + '/images/ironhack-logo.svg'} />
          <img alt="menu icon" src={process.env.PUBLIC_URL + '/images/menu-top.svg'} />
        </nav>
        <article className="hello-react">
          <h1>Say hello to ReactJS</h1>
          <p className="react-info">You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
          <p className="btn">Awesome!</p>
        </article>
      </div>
    );
  }
}

export default Intro;


