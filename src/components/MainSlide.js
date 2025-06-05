import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/main.css';

/* ─ 슬라이드(배경 + 추가 오버레이 + 텍스트) 정의 ─ */
const slides = [
  /* 1번 세트 ─────────────────────────────── */
  {
    bg: '/images/mo_bg_01.jpg',        // 기본 배경
    extra: [],                         // 추가 오버레이 없음
    txt: '/images/mo_txt_01.png',      // 텍스트 오버레이
  },
  /* 2번 세트 ─────────────────────────────── */
  {
    bg: '/images/mo_bg_full_23.png',   // 기본 배경
    extra: ['/images/mo_bg_23.png'],   // ← 추가 오버레이(가운데 배경)
    txt: '/images/mo_txt_23.png',      // 텍스트 오버레이
  },
];

export default function MainSlide() {
  return (
    <section className="main-slide">
      {/* ─ Swiper ─────────────────────────────── */}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{ prevEl: '.mainPrev', nextEl: '.mainNext' }}
        className="mainSwiper"
      >
        {slides.map(({ bg, extra, txt }, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-set">
              {/* 기본 배경 */}
              <img
                src={process.env.PUBLIC_URL + bg}
                alt={`slide-${idx + 1}-bg`}
                className="slide-bg"
                loading="eager"
              />

              {/* 추가 오버레이(있을 때만) */}
              {extra.map((src, i) => (
                <img
                  key={i}
                  src={process.env.PUBLIC_URL + src}
                  alt=""
                  className="slide-overlay"
                  aria-hidden="true"
                />
              ))}

              {/* 텍스트 오버레이 */}
              <img
                src={process.env.PUBLIC_URL + txt}
                alt=""
                className="slide-txt"
                aria-hidden="true"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ─ 화살표 ─────────────────────────────── */}
      <button className="mainPrev" aria-label="Previous slide" type="button">
        <img src={process.env.PUBLIC_URL + '/images/arrow_leftBig.png'} alt="" />
      </button>
      <button className="mainNext" aria-label="Next slide" type="button">
        <img src={process.env.PUBLIC_URL + '/images/arrow_rightBig.png'} alt="" />
      </button>
    </section>
  );
}
