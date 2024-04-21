/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="po-arch">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Product Offerings
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Perfumes</span>
              <span data-filter=".web">Deodrants</span>
              {/* <span data-filter=".graphic">Residential</span> */}
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items brand lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                {/* <Link href={`/project-details2/project-details2-dark`}> */}
                  <a className="imago wow">
                    <img src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FIvanhoe.png?alt=media&token=b18fd02b-62d7-4125-80f6-5e3c18f2cfe9" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                {/* </Link> */}
              </div>
              <div className="cont">
                <h5>IvanHoe</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FIncidence.png?alt=media&token=4ff459dc-84b5-4cc9-9e5d-a9b0b7937138" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Incidence</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FChairman.png?alt=media&token=a67001d3-cae7-4842-bf46-7ad348622274" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Chairman</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>,
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Floating House Messinia</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>IN THE PINE FOREST</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img src="/img/arch/work/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS IN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Arch</Link>,
                  <Link href="/works/works-dark">Interior</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
