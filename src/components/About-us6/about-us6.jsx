import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="img">
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
            </div>
          </div>

          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="sub-title main-color ls10 text-u">About Us</h6>
              <h3>Global Elegance, Local Luxury: Our Founding Vision</h3>
              <p>
                Founded with the vision of infusing local markets with global
                luxury, Mega Swiss Holdings has established itself as a premier
                purveyor of fine fragrances. Our partnership with SPPC, one of
                France’s most revered perfume houses, enables us to offer an
                exclusive range of scents that capture the essence of Parisian
                elegance.
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
  );
};

export default AboutUs6;
