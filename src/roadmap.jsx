

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';




import { Navigation } from 'swiper/modules';

export default function Roadmap() {
  return (
    <>
    <div className="title" id="roadmap">
        RoadMap
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="text">
              <p>
                In phase 1, we are focusing to develop the model to become user
                friendly ,accurate and encrypt user data on blockchain,so only
                user can create,read,update his own data.
              </p>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className="text" >
              <p>
                During phase 2, our primary goal will be to develop the core
                feature: the AI wallet.
              </p>
            </div>
          </SwiperSlide>
        <SwiperSlide><div className="text" >
              <p>
                In phase 3, we will be finished our audition and initiate beta
                user testing.
              </p>
            </div></SwiperSlide>
        <SwiperSlide><div className="text lastText" >
              <p>
                After phase 3, we will publish our AI Agent and start incentive
                program.Stay tuned for more updates.
              </p>
            </div></SwiperSlide>
      </Swiper>
    </>
  );
}
