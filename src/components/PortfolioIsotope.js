import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="dark-skin works-box">
        <div
          className="dark-skin filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          </div>
        <div className="dark-skin works-items works-masonry-items row">
          <div className="dark-skin works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="dark-skin works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="dark-skin image">
                <div className="dark-skin img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/smartcontracts.webp"
                        alt="Zorro"
                      />
                      <span className="dark-skin overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="dark-skin desc">
                <span className="dark-skin category"> Smart Contracts, Ethereum, Remix </span>
                <h5 className="dark-skin name">
                  <Link legacyBehavior href="https://worked.dev/courses/smart-contracts-made-easy-with-remix">
                    <a>Smart Contacts made easy with Remix</a>
                  </Link>
                </h5>
                <div className="dark-skin text">
                  <p>
                  Learn about Smart Contracts without knowing any Solidity. This course will take you through deploying your first smart contract to the testnet and setting up your first collection.
                  </p>
                </div>
                <Link legacyBehavior href="https://worked.dev/courses/smart-contracts-made-easy-with-remix">
                  <a className="dark-skin lnk">See Course</a>
                </Link>
              </div>
              <div
                className="dark-skin bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="dark-skin works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="dark-skin works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="dark-skin image">
                <div className="dark-skin img">
                  <Link legacyBehavior href="/work-single">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/swapwork.webp"
                        alt="Gooir"
                      />
                      <span className="dark-skin overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="dark-skin desc">
                <span className="dark-skin category"> Minswap, Cardano </span>
                <h5 className="dark-skin name">
                <Link legacyBehavior href="https://worked.dev/courses/how-to-swap-work">
                    <a>How to swap $WORK</a>
                  </Link>
                </h5>
                <div className="dark-skin text">
                  <p>
                  Learn how to use Worked to swap ADA for WORK and deposit into the platform.
                  </p>
                </div>
                <Link legacyBehavior href="https://worked.dev/courses/how-to-swap-work">
                  <a className="dark-skin lnk">See Course</a>
                </Link>
              </div>
              <div
                className="dark-skin bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="dark-skin works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="dark-skin works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="dark-skin image">
                <div className="dark-skin img">
                  <Link legacyBehavior href="https://worked.dev/courses/creating-a-simple-terminal-script-in-c">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/terminal.webp"
                        alt="Explore"
                      />
                      <span className="dark-skin overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="dark-skin desc">
                <span className="dark-skin category"> C#, Development, Visual Studio </span>
                <h5 className="dark-skin name">
                  <Link legacyBehavior href="https://worked.dev/courses/creating-a-simple-terminal-script-in-c">
                    <a>Creating a simple terminal script in C#</a>
                  </Link>
                </h5>
                <div className="dark-skin text">
                  <p>
                  Learn how to use C# to change or add to metadata files. This course will take you through how we randomly assigned ranks to The Working Dead Bot Wars 10,000 collection.
                  </p>
                </div>
                <Link legacyBehavior href="https://worked.dev/courses/creating-a-simple-terminal-script-in-c">
                  <a className="dark-skin lnk">See Course</a>
                </Link>
              </div>
              <div
                className="dark-skin bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          
 
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
