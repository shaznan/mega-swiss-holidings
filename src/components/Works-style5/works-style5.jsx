/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle5 = () => {
  React.useEffect(() => {
    window.onload = () => {
      initIsotope(); // Initialize Isotope when the window has fully loaded
    };
  }, []);
  return (
    <section id="product_offerings" className="portfolio po-arch section-padding pb-70" >
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

          <div className="gallery full-width ">
            <div
              className="col-md-4 items brand lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                {/* <Link href={`/project-details2/project-details2-dark`}> */}
                <a className="imago wow">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FIvanhoe.png?alt=media&token=b18fd02b-62d7-4125-80f6-5e3c18f2cfe9"
                    alt="image"
                  />
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
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FIncidence.png?alt=media&token=4ff459dc-84b5-4cc9-9e5d-a9b0b7937138"
                      alt="image"
                    />
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
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FChairman.png?alt=media&token=a67001d3-cae7-4842-bf46-7ad348622274"
                      alt="image"
                    />
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
              className="col-md-4 items brand graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FThallium%20Black.png?alt=media&token=65fe3a01-40e4-4cfb-a6e0-1114a184e7c3"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Thallium Black</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FRED%20PEARL.png?alt=media&token=c3e6124c-1c2e-4291-8b17-e696a68d0f47"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Red Pearl</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FJoli%20reve%20(1).png?alt=media&token=59c1ab25-a85b-4300-b56f-75a6643f50f7"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Joli Reve</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FSanderling%20shine%20(1).png?alt=media&token=347daa5f-3e70-4a17-88c4-11347fe65449"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>VILLAS IN SOCHI</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FPerfume%2FAkoya%20blue%20(1).png?alt=media&token=5c54f8bc-9ad6-45cb-8d7c-544648ebae94"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Akoya Blue</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">EAU DE TOILETTE</Link>,
                </span>
              </div>
            </div>
            {/* Deodrants */}
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FAviator.png?alt=media&token=cc5fa494-6472-4045-83e8-370ada4090df"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Aviator</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For men</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FChancellor.png?alt=media&token=f3b13380-656c-4dc9-a467-a21cc406b099"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Chancellor</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For men</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FIvanhoe%20(1).png?alt=media&token=5a0e4d3b-ac89-4fd5-a8a6-384736e6db88"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Ivanhoe</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For men</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FMondaine.png?alt=media&token=6adc6521-26e7-4045-a0a4-ef84a515810a"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Mondaine</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For women</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FRichman.png?alt=media&token=37861dfb-8d59-4032-83fc-f3f05d853d70"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Rich man</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For men</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FVerona.png?alt=media&token=14b8645c-abdd-41bb-9c91-fc40db1e31a4"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Verona</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For women</Link>,
                </span>
              </div>
            </div>
            <div
              className="col-md-4 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="imago wow">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/megaswissholdings-4c26c.appspot.com/o/Product%20portfolio%2FDeodrants%2FWriter%20gold.png?alt=media&token=d7723a33-a3d5-4037-8111-e758bfc139fa"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>Writer Gold</h5>
                <span className="tags main-color custom-font">
                  <Link href="/works/works-dark">Deodrant spray</Link>,
                  <Link href="/works/works-dark">For men</Link>,
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
