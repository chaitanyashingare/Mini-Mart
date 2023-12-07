import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./crausel.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@chakra-ui/react";
export default function Autocrausel() {
  return (
    <Box mt={"10px"}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671214311_1671175829_1670868095_Bindaas-Biscuiting_1680x320.jpg"></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671197544_MUMBAI.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671128097_1671021458_Storage_Sets_1680x320.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671034200_Health-and-wellness-banner_1680x320.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
