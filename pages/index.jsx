import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="dark-skin lui-section dark-skin lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="dark-skin container dark-skin">
          {/* Hero Started */}
          <div className="dark-skin lui-started dark-skin v-line v-line-left">
            <div className="dark-skin section hero-started dark-skin">
              <div
                className="dark-skin content dark-skin scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="dark-skin titles dark-skin">
                  <div className="dark-skin lui-subtitle dark-skin">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="dark-skin title dark-skin splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>SEAN</b> WORKED{" "}
                    </span>
                  </h1>
                  <div className="dark-skin label dark-skin lui-subtitle">
                    {" "}
                    I am <strong>Full Stack Developer</strong>
                  </div>
                </div>
                <div className="dark-skin description dark-skin">
                  <div>
                    <p>
                      Building a web3 learning platform called worked.dev
                    </p>
                  </div>
                  <div className="dark-skin social-links dark-skin">
                    <a target="_blank" rel="nofollow" href="https://twitter.com/seanworkingdead">
                      <i aria-hidden="true" className="dark-skin fab fa-twitter" />
                    </a>
                  </div>
                </div>
                <div className="dark-skin bts">
                  <a
                    target="_blank"
                    href="https://worked.dev"
                    className="dark-skin btn"
                  >
                    <span>Visit worked.dev</span>
                  </a>
                  <a href="#skills-section" className="dark-skin btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="dark-skin slide dark-skin scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/profile1.png"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="dark-skin circle dark-skin circle-1" />
                <span
                  className="dark-skin circle dark-skin img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="dark-skin circle dark-skin img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="dark-skin circle dark-skin img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="dark-skin info-list dark-skin">
                  <ul>
                    <li>
                      <span className="dark-skin num dark-skin">
                        10 <strong>+</strong>
                      </span>
                      <span className="dark-skin value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dark-skin lui-bgtitle dark-skin">
              <span> Full Stack Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="dark-skin lui-section lui-gradient-bottom dark-skin"
        id="services-section"
      >
        {/* Heading */}
        <div className="dark-skin lui-heading dark-skin">
          <div className="dark-skin container dark-skin">
            <div className="dark-skin m-titles align-center dark-skin">
              <h2
                className="dark-skin m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="dark-skin m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="dark-skin v-line v-line-right">
          <div className="dark-skin container">
            <Swiper
              {...servicesSliderProps}
              className="dark-skin swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="dark-skin swiper-slide">
                <div className="dark-skin services-item">
                  <div className="dark-skin lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="dark-skin icon" />
                  <h5 className="dark-skin lui-title">
                    <span> Web Design &amp; Logo </span>
                  </h5>
                  <div className="dark-skin lui-text">
                  I can build nice shiny websites like this one! I've worked with HTML, CSS and jQuery all the way back to the old school days writing on Notepad without a CSS framework!
                  </div>

                  <div
                    className="dark-skin image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="dark-skin swiper-slide">
                <div className="dark-skin services-item">
                  <div className="dark-skin lui-subtitle">
                    <span> Apps Development </span>
                  </div>
                  <div className="dark-skin icon" />
                  <h5 className="dark-skin lui-title">
                    <span> iOS &amp; Android </span>
                  </h5>
                  <div className="dark-skin lui-text">
                    <div>
                    I have lead the development of multiple cross-platform mobile apps which support iOS, Android, Tizen and many others built with .NET MAUI. I manage the process all the way to submitting the builds to the app stores.
                      
                    </div>
                  </div>
  
                  <div
                    className="dark-skin image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="dark-skin swiper-slide">
                <div className="dark-skin services-item">
                  <div className="dark-skin lui-subtitle">
                    <span> Web Design </span>
                  </div>
                  <div className="dark-skin icon" />
                  <h5 className="dark-skin lui-title">
                    <span> Top Notch Designs </span>
                  </h5>
                  <div className="dark-skin lui-text">
                    <div>
                    Work with me to help build your project as a brand with a unique style. Everything we do is at the best quality. 
                    </div>
                  </div>
              
                  <div
                    className="dark-skin image"
                    style={{
                      backgroundImage: "url(assets/images/pat-2.png)",
                    }}
                  />
                </div>
              </SwiperSlide>
          
            </Swiper>
            <div className="dark-skin lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="dark-skin lui-section lui-gradient-center" id="skills-section">
        {/* Heading */}
        <div className="dark-skin lui-heading">
          <div className="dark-skin container">
            <div className="dark-skin m-titles align-center">
              <h2
                className="dark-skin m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="dark-skin m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="dark-skin v-line v-line-left">
          <div className="dark-skin container">
            <div className="dark-skin row">
              <div className="dark-skin col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="dark-skin skills-items">
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> C# .NET </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                        
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        100 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> Mobile Development </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                       
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "100%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        100 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dark-skin col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="dark-skin skills-items">
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                       
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> React </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                        
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dark-skin col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="dark-skin skills-items">
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> HTML/CSS/JQUERY </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                        
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "90%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        90 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="dark-skin skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="dark-skin name">
                      <span> Adobe Photoshop </span>
                    </h6>
                    <div className="dark-skin text">
                      <div>
                       
                      </div>
                    </div>
                    <div className="dark-skin dots">
                      <div className="dark-skin dot" style={{ width: "50%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="dark-skin value">
                      <span className="dark-skin num">
                        50 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dark-skin lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="dark-skin lui-section lui-gradient-top" id="works-section">
        {/* Heading */}
        <div className="dark-skin lui-heading">
          <div className="dark-skin container">
            <div className="dark-skin m-titles align-center">
              <h2
                className="dark-skin m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="dark-skin m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Courses</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="dark-skin v-line v-line-right">
          <div className="dark-skin container">
            <PortfolioIsotope />
            <div className="dark-skin lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>

      
     
      
        
     
    </Layout>
  );
};
export default Index;
