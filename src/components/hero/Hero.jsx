import React from "react";
import "./hero.css";
import headerBook1 from "../assets/headerBook1.png";
import headerBook2 from "../assets/headerBook2.png";
import headerBook3 from "../assets/headerBook3.png";
import headerBook4 from "../assets/headerbook4.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
const Hero = () => {
  return (
    <div className="hero ">
      <div className="background_img">
        <div class="container">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-3 col-lg-9 col-xl-9">
              <h1 className=" heading">For All Your Reading Needs</h1>
              <p className="mt-4 para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                pariatur necessitatibus ullam rerum dignissimos veritatis labore
                laborum, rem beatae reiciendis.
              </p>
              <button className="mt-4 bg-white py-2 px-3">LEARN MORE</button>
            </div>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper "
                style={{ height: "auto", width: "260px", marginTop: "125px"  }}
              >
                <SwiperSlide>
                  <img src={headerBook1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook3} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={headerBook4} />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
