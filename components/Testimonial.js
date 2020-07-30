import React, { Component } from "react";

export default class Testimonial extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2.find(".owl-item.active").first().index();
      var end = sync2.find(".owl-item.active").last().index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    function callThumbOnNav(e) {
      var idx = e.item.index;
      var currentThumb = sync1
        .find(".item")
        .eq(idx)
        .find(".testimonials-one__single")
        .data("thumb-img");
      var nxtThumb = sync1
        .find(".item")
        .eq(idx + 1)
        .find(".testimonials-one__single")
        .data("thumb-img");
      var prvThumb = sync1
        .find(".item")
        .eq(idx - 1)
        .find(".testimonials-one__single")
        .data("thumb-img");

      prevThumbBtn.css("background-image", "url(" + prvThumb + ")");
      nextThumbBtn.css("background-image", "url(" + nxtThumb + ")");
      currentThumbBtn.css("background-image", "url(" + currentThumb + ")");
    }

    if ($(".testimonials-one").length) {
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");

      var currentThumbBtn = $(".testimonials-one__button__current-btn");
      var prevThumbBtn = $(".testimonials-one__button__prev-btn");
      var nextThumbBtn = $(".testimonials-one__button__next-btn");

      var slidesPerPage = 1; //globaly define number of elements per page
      var syncedSecondary = true;

      sync1
        .owlCarousel({
          items: 1,
          smartSpeed: 700,
          autoplayHoverPause: true,
          nav: false,
          autoplay: true,
          dots: false,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          freeDrag: false,
          loop: true,
          autoplayTimeout: 5000,
          responsiveRefreshRate: 5000,
          onInitialize: callThumbOnNav,
          onTranslate: callThumbOnNav,
          navText: [
            '<i class="catch fa fa-angle-right"></i>',
            '<i class="catch fa fa-angle-left"></i>',
          ],
        })
        .on("changed.owl.carousel", syncPosition);

      sync2
        .on("initialized.owl.carousel", function (e) {
          sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
          items: slidesPerPage,
          dots: false,
          nav: false,
          // loop: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          freeDrag: false,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          smartSpeed: 700,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 5000,
        })
        .on("changed.owl.carousel", syncPosition2);

      sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
      });

      nextThumbBtn.on("click", function (e) {
        sync1.trigger("next.owl.carousel");
        e.preventDefault();
      });
      prevThumbBtn.on("click", function (e) {
        sync1.trigger("prev.owl.carousel");
        e.preventDefault();
      });
    }
  }

  render() {
    return (
      <section className="testimonials-one" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonials-one__image-block">
                <div className="owl-carousel owl-theme" id="sync2">
                  <div className="item clearfix">
                    <div className="testimonials-one__image">
                      <img
                        src="/assets/images/testimonials/testimonials-1-1.jpg"
                        className="testimonials-one__thumb"
                        alt="Awesome Image"
                      />
                      <div className="testimonials-one__qoute">
                        <img
                          src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item clearfix">
                    <div className="testimonials-one__image">
                      <img
                        src="/assets/images/testimonials/testimonials-1-2.jpg"
                        className="testimonials-one__thumb"
                        alt="Awesome Image"
                      />
                      <div className="testimonials-one__qoute">
                        <img
                          src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="item clearfix">
                    <div className="testimonials-one__image">
                      <img
                        src="/assets/images/testimonials/testimonials-1-3.jpg"
                        className="testimonials-one__thumb"
                        alt="Awesome Image"
                      />
                      <div className="testimonials-one__qoute">
                        <img
                          src="/assets/images/testimonials/testimonials-qoute-1-1.png"
                          alt="Awesome Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonials-one__button-block">
                  <button className="testimonials-one__button__prev-btn"></button>
                  <button className="testimonials-one__button__current-btn"></button>
                  <button className="testimonials-one__button__next-btn"></button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonials-one__content">
                <div className="block-title text-left">
                  <p>The Ultimate Guide for Parents in 2020</p>
                  <h3>Coding For Kids</h3>
                </div>

                <div className="owl-carousel owl-theme" id="sync1">
                  <div className="item">
                    <div
                      className="testimonials-one__single"
                      data-thumb-img="/assets/images/testimonials/testimonials-1-1.jpg"
                    >
                      <p className="testimonials-one__text">
                        Learning how to code at a young age can truly set up
                        your child for a lifetime of success. Even if they don’t
                        go into a specifically computer science related field,
                        it gives them an edge in virtually every modern
                        industry.
                      </p>
                      <div className="testimonials-one__bottom">
                        <h3 className="testimonials-one__title vimns-icon-worldwide"></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="testimonials-one__single"
                      data-thumb-img="/assets/images/testimonials/testimonials-1-2.jpg"
                    >
                      <p className="testimonials-one__text">
                        Even for students who are lucky enough receive computer
                        science instruction in the classroom, the level of rigor
                        has been traditionally low (typically only Scratch,
                        Code.org, or Tynker). To combat this, many parents have
                        chosen to look for outside resources to provide coding
                        instruction.
                      </p>
                      <div className="testimonials-one__bottom">
                        <h3 className="testimonials-one__title vimns-icon-worldwide"></h3>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div
                      className="testimonials-one__single "
                      data-thumb-img="/assets/images/testimonials/testimonials-1-3.jpg"
                    >
                      <p className="testimonials-one__text">
                        Kids computer programming courses using games, apps, and
                        other kid-centric projects is a research-based approach
                        that has been proven to teach real world skills in a way
                        that keeps students engaged.
                      </p>
                      <div className="testimonials-one__bottom">
                        <h3 className="testimonials-one__title vimns-icon-worldwide"></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
