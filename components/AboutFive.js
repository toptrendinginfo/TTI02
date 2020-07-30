import React, { Component } from "react";

export default class AboutFive extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="about-five">
        <div className="container">
          <img
            src="/assets/images/resources/about-moc-1-1.png"
            className="about-five__moc"
            alt=""
          />
          <div className="row">
            <div className="col-lg-6">
              <div className="about-five__content">
                <div className="block-title text-left">
                  <p>Robotics | After School Activities</p>
                  <h3>Robot Kits for Kids</h3>
                </div>
                <p className="text-justify">
                  Robotics toys and do-it-yourself kits help children think
                  logically and improve problem-solving skills. Even
                  preschoolers can develop better cognitive skills by using
                  simple robotic toys.
                </p>

                <ul className="list-unstyled about-one__list">
                  <li>
                    <i className="vimns-icon-tick"></i> Robotics programs
                    develop problem-solving skills and creativity
                  </li>
                  <li>
                    <i className="vimns-icon-tick"></i> Robotics programs
                    improve computer programming skills
                  </li>
                  <li>
                    <i className="vimns-icon-tick"></i>Robotics programs improve
                    computer programming skills
                  </li>
                </ul>
                <a href="#" className="thm-btn about-five__btn">
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
