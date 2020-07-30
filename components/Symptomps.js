import React, { Component } from "react";

export default class Symptomps extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="symptomps-one">
        <div className="container">
          <div className="symptomps-one__top">
            <div className="block-title text-left">
              <p>Top Trending </p>
              <h3>Gadgets & AutoMobiles</h3>
            </div>
            <div className="symptomps-one__btn-block">
              <a
                href="https://www.youtube.com/channel/UCFF_A7Zd0WrXOUt8RA4XIsA"
                className="thm-btn symptomps-one__btn"
              >
                YouTube
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="/assets/images/shapes/001.jpg" alt="" />
                </div>
                <h3>DSLR Camera</h3>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="/assets/images/shapes/002.jpg" alt="" />
                </div>
                <h3>Speakers</h3>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="/assets/images/shapes/003.jpg" alt="" />
                </div>
                <h3>Gaming PC/Laptop</h3>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="assets/images/shapes/004.jpg" alt="" />
                </div>
                <h3>Headphones</h3>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="/assets/images/shapes/005.jpg" alt="" />
                </div>
                <h3>Televisions</h3>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="symptomps-one__single">
                <div className="symptomps-one__image">
                  <img src="/assets/images/shapes/007.jpg" alt="" />
                </div>
                <h3>AutoMobiles</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
