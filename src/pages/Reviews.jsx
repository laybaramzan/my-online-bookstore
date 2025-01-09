import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CSS/reviews.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
   {/* <h2 className="text-center pt-4 pb-3">Client's Reviews</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container mb-5"
      >
        <SwiperSlide>
          <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div>
        </SwiperSlide>
        <SwiperSlide> <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div></SwiperSlide>
        <SwiperSlide> <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div></SwiperSlide>
        <SwiperSlide> <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div></SwiperSlide>
        <SwiperSlide> <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div></SwiperSlide>
        <SwiperSlide> <div class="col-9">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 140x140"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#777" dy=".3em">
                140x140
              </text>
            </svg>

            <h2>Heading</h2>
            <p className="para">
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <>
              <fieldset className="rating ms-5">
                <input type="radio" id="star5" name="rating" defaultValue={5} />
                <label
                  className="full"
                  htmlFor="star5"
                  title="Awesome - 5 stars"
                />
                <input
                  type="radio"
                  id="star4half"
                  name="rating"
                  defaultValue="4 and a half"
                />
                <label
                  className="half"
                  htmlFor="star4half"
                  title="Pretty good - 4.5 stars"
                />
                <input type="radio" id="star4" name="rating" defaultValue={4} />
                <label
                  className="full"
                  htmlFor="star4"
                  title="Pretty good - 4 stars"
                />
                <input
                  type="radio"
                  id="star3half"
                  name="rating"
                  defaultValue="3 and a half"
                />
                <label
                  className="half"
                  htmlFor="star3half"
                  title="Meh - 3.5 stars"
                />
                <input type="radio" id="star3" name="rating" defaultValue={3} />
                <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                <input
                  type="radio"
                  id="star2half"
                  name="rating"
                  defaultValue="2 and a half"
                />
                <label
                  className="half"
                  htmlFor="star2half"
                  title="Kinda bad - 2.5 stars"
                />
                <input type="radio" id="star2" name="rating" defaultValue={2} />
                <label
                  className="full"
                  htmlFor="star2"
                  title="Kinda bad - 2 stars"
                />
                <input
                  type="radio"
                  id="star1half"
                  name="rating"
                  defaultValue="1 and a half"
                />
                <label
                  className="half"
                  htmlFor="star1half"
                  title="Meh - 1.5 stars"
                />
                <input type="radio" id="star1" name="rating" defaultValue={1} />
                <label
                  className="full"
                  htmlFor="star1"
                  title="Sucks big time - 1 star"
                />
                <input
                  type="radio"
                  id="starhalf"
                  name="rating"
                  defaultValue="half"
                />
                <label
                  className="half"
                  htmlFor="starhalf"
                  title="Sucks big time - 0.5 stars"
                />
              </fieldset>
            </>
          </div></SwiperSlide>
      </Swiper>*/}
    </>
  );
}
