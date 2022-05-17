import React from "react";
import BannerTech from "../static/tech-banner.jpg";
import { ParallaxBanner } from "react-scroll-parallax";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ParallaxHomeBanner = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: BannerTech,
          speed: -20
        },
        {
          children: (
            <>
              <div
                style={{ height: "90vh" }}
                className="d-flex align-items-center justify-content-center mt-5"
              >
                <div className="d-flex flex-column">
                  <h1 className="text-light text-center display-1 fw-bold">
                    OnHard
                  </h1>
                  <h2 className="h5 text-center" style={{ color: "#CCC" }}>
                    Your favourite hardware store
                  </h2>
                </div>
              </div>
              <div className="text-light w-100 d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="2x"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </>
          ),
          speed: -10
        }
      ]}
      style={{ height: "90vh", width: "100%" }}
    />
  );
};

export default ParallaxHomeBanner;
