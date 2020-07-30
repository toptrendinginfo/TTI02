import React, { Component } from "react";

export default class CallToAction extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__left">
            <h3>Creating value through true convergence.</h3>
          </div>
          <div className="cta-one__right">
            <a href="#" className="thm-btn cta-one__btn">
              Discover More
            </a>
          </div>
        </div>
      </section>
    );
  }
}
