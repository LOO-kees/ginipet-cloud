import React from 'react';
import MainSlide from './MainSlide';
import MainSlide2 from './MainSlide2';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <main>
      {/* 헤더 바로 아래 슬라이드 */}
      <MainSlide />

      {/* ↓ 이후 콘텐츠를 추가하시면 됩니다 */}
    <div className='mainProduct-wrap'>
      <div className='bgclolor-i'>
    <div className="icon-wrap">
      <img
        src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`}
        alt="쇼핑 아이콘"
        className="title-icon"
      />
    
      <h2 className='main-2title'><span className='txt-bold'>지니펫 쇼핑</span>하러 가기</h2>
      <Link to="/"><button className="btn-go">바로가기</button></Link>
       {/* 상품 슬라이드 */}
      <MainSlide2 />
    </div>
    </div>
    </div>

{/* ─── 메인 3: 지니펫 스토리 그리드 ───────────────── */}
<div className="story-section">               {/* 배경, 고정폭 박스 */}
  {/* 맨 위 배너 이미지 */}
  <img
    src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`}
    alt="배너 이미지"
    className="story-banner-img"
  />

  {/* 타이틀 + 장식 아이콘(title_instar_icon.png) */}
  <h2 className="main-2title">
    <img                                          /* ← 왼쪽으로 이동 */
      src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`}
      alt="장식 아이콘"
      className="sns-inline-icon"
    />
    지니펫 <span className="txt-bold">in 스타</span>
  </h2>

  <div className="main-sub-txt">
    <p>지니펫의 다양한 소식과 정보를 만나보세요</p>
  </div>

  {/* ▶︎ “자세히보기” 버튼 ― 스타일은 메인Product와 동일 */}
  <Link to="/">
    <button className="btn-go">자세히보기</button>
  </Link>

  {/* 게시물 2행 그리드 */}
  <div className="main-story-wrap">
    <div className="story-row">
      <div className="story-imgbox"> {/* ← 오버레이용 래퍼 */}
        <img
          src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`}
          alt="최근게시물"
          className="story-title-img"
        />
      </div>
      <Link to="/">
        <div className="story-imgbox">
          <img
            src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`}
            alt="최근 게시물 미리보기"
            className="story-main-img"
          />
        </div>
      </Link>
    </div>

    <div className="story-row">
      <div className="story-imgbox">
        <img
          src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`}
          alt="베스트게시물"
          className="story-title-img"
        />
      </div>
      <Link to="/">
        <div className="story-imgbox">
          <img
            src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`}
            alt="베스트 게시물 미리보기"
            className="story-main-img"
          />
        </div>
      </Link>
    </div>
  </div>
</div>
{/* ─── 메인 3 끝 ─────────────────────────────────── */}

    </main>
  );
}

export default Main;
