import React from "react";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function UseCase() {
  useGSAP(() => {
    gsap.from(".useCaseMain",{
      duration: 1,
      y:100,
      opacity:0,
      delay:3
    });
  });

  return (
    <>
      <div className="useCaseMain">
        <div className="useCase">UseCase of AI Agent</div>
        <div className="useCaseContainer">
          <div className="useCaseLeft">
            <span>What An AI AGENT Actually Do?</span>
          </div>
          <div className="useCaseRight">
            <Swiper
              Pagination={true}
              loop={true}
              grabCursor={true}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div id="slide">
                  AI agents can analyze your learning style and pace, tailoring
                  educational content to your specific needs.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="slide">
                  Buy or Sell your crypto by giving a command to your AI Agent
                  no need to go to any dex,it will find the best price for you.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="slide">
                  Bridge from one chain to another without any hassle just by
                  giving a command to your AI Agent.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="slide">
                  AI wallet can swap,bridge,transfer asset,mint nft from any nft
                  marketplace by getting your command.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="slide">
                  Empowering you with the knowledge you need to make informed
                  decisions and shape a brighter future.
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
