import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const dataMusic = [
  { id: 1, image: `${process.env.PUBLIC_URL}/Logo musica 1.png` },
  { id: 2, image: `${process.env.PUBLIC_URL}/Musica logo 2.png` },
  { id: 3, image: `${process.env.PUBLIC_URL}/Logo musica 3.png` },
];

const Music = () => {
  return (
    <div className="embracing">
      <div className="containers">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
        >
          {dataMusic.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to="" className="link-product">
                <div className="img-item">
                  <img
                    className="slide-item"
                    src={item.image}
                    alt={`Imagem ${item.id}`}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Music;
