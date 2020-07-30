import React, { Component } from "react";
import Link from "next/link";

export default class CallToActionTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section
        className="cta-two wow fadeInUp"
        data-wow-animation-duration="1500ms"
        style={{
          backgroundImage: `url(assets/images/background/cta-bg-1-1.jpg)`,
        }}
      >
        <div className="container">
          <h3>
            Imagine the Possibilities.
            <br />
            Empowering the Internet generation.
          </h3>
          <Link href="/">
            <a className="thm-btn cta-two__btn">Contact With Us</a>
          </Link>
        </div>
      </section>
    );
  }
}
