import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { Link } from 'react-router-dom';

// 슬라이드에 들어갈 데이터
const products = [
  {
    img: `${process.env.PUBLIC_URL}/images/172162761334300.jpg`,
    label: '(간식 디캣 더스낵)',
    title: '냥블리타임 닭고기 14g*10ea',
    price: '5,000원',
  },
  {
    img: `${process.env.PUBLIC_URL}/images/172120275896400.jpg`,
    label: '(사료) 홀리스틱',
    title: '홍삼&국내산 오리(5.2kg)',
    price: '78,000원',
  },
  {
    img: `${process.env.PUBLIC_URL}/images/172126104716100.jpg`,
    label: '(사료) 홀리스틱',
    title: '홍삼&호주산 양고기(1.2kg)',
    price: '24,000원',
  },
  {
    img: `${process.env.PUBLIC_URL}/images/172120289835400.jpg`,
    label: '(사료) 유기농',
    title: '유기농&균형파 조화(1kg)',
    price: '22,000원',
  },
];

export default function MainSlide2() {
  return (
    <section className="product-slide">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {products.map((p, idx) => (
          <SwiperSlide key={idx}>
            <Link to="/" className="product-card">
              <img src={p.img} alt={p.title} className="product-img" />
              <div className="product-info">
                <span className="product-label">{p.label}</span>
                <h3 className="product-title">{p.title}</h3>
                <p className="product-price">{p.price}</p>
                <div className="product-icons">
                  <img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="장바구니"/>
                  <img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt="위시"/>
                  <img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt="미리보기"/>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}