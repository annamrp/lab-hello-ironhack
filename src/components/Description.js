import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div className="description" id="description">
        <article>
          <img alt="icon1" src={process.env.PUBLIC_URL + '/images/icon1.png'} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </article>

        <article>
          <img alt="icon2" src={process.env.PUBLIC_URL + '/images/icon2.png'} />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </article>

        <article>
          <img alt="icon3" src={process.env.PUBLIC_URL + '/images/icon3.png'} />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </article>

        <article>
          <img alt="icon4" src={process.env.PUBLIC_URL + '/images/icon4.png'} />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </article>
   
      </div>
    )
  }
}

export default Description;
