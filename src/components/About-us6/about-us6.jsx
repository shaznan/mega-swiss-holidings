import Image from "next/image";
import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const AboutUs6 = () => {
  return (
    <Element name="about" className="element">
      <section className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign  flex justify-center">
              <Image
                src="/img/about_us_image.png"
                width={459}
                height={696}
                alt="Mega swiss holding"
              />
              {/* <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                    >
                      03
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h6 className="sub-title main-color ls10 text-u">About Us</h6>
                <h3>Our story</h3>
                <p>
                  Welcome to Mega Swiss Holdings, where our passion for luxury
                  fragrance meets heartfelt craftsmanship. Our story began with
                  a simple yet profound vision—to introduce a slice of global
                  elegance into our local communities, making luxury accessible
                  and enjoyable.
                  <br />
                  <br />
                  Founded on the beautiful traditions of perfumery, our
                  partnership with SPPC, France’s revered perfume house, is not
                  just about business. It’s a union of values, art, and the
                  shared goal of creating unforgettable scents. Each bottle from
                  our collection tells a story, drawing inspiration from the
                  chic streets of Paris to the vibrant heart of our local
                  marketplaces.
                  <br />
                  <br />
                  We invite you into our world, not just as customers, but as
                  part of our community. Our scents are more than fragrances;
                  they are personal expressions designed to resonate with your
                  spirit and enhance your everyday elegance. Join us in
                  experiencing the essence of true craftsmanship, where every
                  spritz is a journey.
                </p>

                {/* Need to enable  */}
                {/* <Link href={`/about/about-dark`}>
                <a className="butn bord mt-30">
                  <span>About Us</span>
                </a>
              </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs6;
