import React, { Component } from "react";
import Link from "next/link";

export default class NavTwo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="topbar-one">
          <div className="container">
            <div className="topbar-one__left">
              <a href="/">
                <img width="257" src="/assets/images/logo-1-1.png" alt="" />
              </a>
            </div>
            <div className="topbar-one__right">
              <div className="topbar-one__info">
                <div className="topbar-one__info-icon">
                  <i className="vimns-icon-mail"></i>
                </div>
                <div className="topbar-one__content">
                  <h3>
                    <a href="mailto:info@vimns.com">
                      eximius.gadgets@gmail.com
                    </a>
                  </h3>
                  <p>Send Email</p>
                </div>
              </div>
              
              <div className="topbar-one__social">
                <a href="#" className="fab fa-facebook-square"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a
                  href="https://www.youtube.com/channel/UCFF_A7Zd0WrXOUt8RA4XIsA"
                  className="fab fa-youtube"
                ></a>
              </div>
            </div>
          </div>
        </div>

        <header className="site-header-two">
          <nav className="main-nav__two stricky">
            <div className="container">
              <div className="inner-container">
                <div className="main-nav__logo-box">
                  <a href="#" className="side-menu__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
                <div className="main-nav__main-navigation">
                  <ul className=" main-nav__navigation-box">
                    <li className="dropdown">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <a href="#">Products</a>
                      <ul>
                        <li>
                          <a href="/index-dark">Mobile</a>
                        </li>
                        <li>
                          <a href="/index-dark-2">Smart Watch</a>
                        </li>
                        <li>
                          <a href="/index-dark-2">Laptop</a>
                        </li>
                        <li>
                          <a href="/index-dark-2">Home Appliances</a>
                        </li>
                        <li>
                          <a href="/index-dark-2">Desktop Computer</a>
                        </li>
                        <li>
                          <a href="/index-dark-2">Computer Peripherals</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link href="/faq">
                        <a>AutoMobiles</a>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link href="/news">
                        <a>News</a>
                      </Link>
                      <ul>
                        <li>
                          <Link href="/news">
                            <a>News Page</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/news-details">
                            <a>News Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="main-nav__right">
                  <a
                    href="https://www.youtube.com/channel/UCFF_A7Zd0WrXOUt8RA4XIsA"
                    className="thm-btn main-nav__btn"
                  >
                    Youtube
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
