import React, { Component } from "react";

export default class AboutFour extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about-four">
        <img
          src="/assets/images/shapes/virus-shape-1-2.png"
          className="about-four__shape"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-four__image">
                <img src="/assets/images/resources/about-3-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four__content">
                <div className="block-title text-left">
                  <p>About</p>
                  <h3>Top Trending Info</h3>
                </div>
                <p className="text-justify">
                  We do Reviews of Latest Technology Products, Gadgets, Gizmos,
                  mobile phones, tablets, laptops, cameras, apps etc. all latest
                  gadgets and tech products to help you make a good decision.
                  know which mobiles or any electronics appliances fits in your
                  pocket and works
                </p>

                <p>
                  Read the most comprehensive Car Reviews of the Indian
                  automobile industry We help you in car buying decision? Read
                  real car user reviews on almost every car in India. Connect
                  with other car owners and learn from there..
                </p>
                <a href="#" className="thm-btn about-four__btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
