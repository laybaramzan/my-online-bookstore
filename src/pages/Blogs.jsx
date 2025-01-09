import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CSS/blogs.css";

// import required modules
import { Pagination } from "swiper/modules";

import ArticleImage1 from "../components/assets/ArticleImage1.png";
import ArticleImage2 from "../components/assets/ArticleImage2.png";
import ArticleImage3 from "../components/assets/ArticleImage3.png";

export default function App() {
  return (
    < div className="bg-white">
      <h1 className="text-center pt-4 pb-3 h1">Our Blogs</h1>
      <Swiper
       
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container "
        breakpoints={{
      320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
         
        }}
      >
        <SwiperSlide>
          <div class="card">
            <img
              class="card-img-top"
              src={ArticleImage1}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn ">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="card">
            <img
              class="card-img-top"
              src={ArticleImage2}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn ">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="card">
            <img
              class="card-img-top"
              src={ArticleImage3}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn ">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div class="card">
            <img
              class="card-img-top"
              src={ArticleImage1}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn ">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="card">
            <img
              class="card-img-top"
              src={ArticleImage2}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn ">
                Go somewhere
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
