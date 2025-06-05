import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [open, setOpen] = useState(false);           // 사업자 정보 패널

  /* 패밀리-사이트 이동 */
  const handleFamily = (e) => {
    const url = e.target.value;
    if (url) window.open(url, '_blank');
  };

  return (
    <footer className="footerNew">
      {/* ─── 상단 회색 띠 ─────────────────────── */}
      <div className="bottomContents-left">
        <div className="bottom-notice">
          <h3>공지사항</h3>
        </div>
      </div>

      {/* 개인정보처리방침·쇼핑몰약관 + 인스타 */}
      <div className="bottomContents-right">
        <div className="bottom-menu">
          <Link to="/" className="policy red">개인정보처리방침</Link>
          <Link to="/">쇼핑몰약관</Link>
          <Link
            to="https://www.instagram.com/ginipet/"
            target="_blank"
            rel="noreferrer"
            className="insta"
          >
            <img
              src={process.env.PUBLIC_URL + '/images/title_instar_icon.png'}
              width="32"
              height="32"
              alt="Instagram"
            />
          </Link>
        </div>
      </div>

      {/* ─── 고객센터 + 인스타 + 패밀리사이트 ───────── */}
      <div className="bottomInner1">
        <div className="time-wrap">
          <h3>고객센터</h3>
          <h4>02-2166-7770</h4>
          <p>
            <span className="mHidden">평일 10:00 ~17:00 <br />(</span>
            점심: 12:00~13:00<span className="mHidden">)</span>
          </p>
        </div>

        <div className="icon-wrap">
          <ul>
            <li>
              <Link
                to="https://www.instagram.com/ginipet/"
                target="_blank"
                rel="noreferrer"
                className="instar"
              >
                <span>insta</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="family-wrap">
          <select name="familySite" id="familySite" onChange={handleFamily}>
            <option value="">FAMILY SITE</option>
            <option value="http://www.kgclifengin.com/">KGC라이프앤진</option>
            <option value="http://www.ktng.com/">KT&amp;G</option>
            <option value="http://www.kgc.co.kr/front/main/main.do">
              KGC인삼공사
            </option>
          </select>
        </div>
      </div>

      <hr className="grey" />

      {/* ─── 펼침/닫힘 버튼 ───────────────────── */}
      <p className="btnMoreInfo">
        <button type="button" onClick={() => setOpen(!open)}>
          지니펫 사업자 정보 확인
          <img
            src={process.env.PUBLIC_URL + '/images/iconArrow_bottom.png'}
            className={open ? 'rot' : ''}
            alt=""
          />
        </button>
      </p>

      {/* ─── 사업자 정보 (슬라이드) ───────────────── */}
      <div className={`bottomInner2 ${open ? 'open' : ''}`}>
        <div className="business-wrap">
          <img
            src={process.env.PUBLIC_URL + '/images/logo_grey.png'}
            width="88"
            height="88"
            alt="KGC LIFENGIN"
          />
          <p>
            경기도 과천시 과천대로 7길&nbsp;65, 과천상상자이타워 A-105~108호(1층)
            <br />
            상호 및 대표자&nbsp;: (주)케이지씨라이프앤진, 정철
            <br />
            사업자등록번호&nbsp;: 211-87-38806
            <br />
            통신판매신고번호&nbsp;: 제 2024-경기과천-0227 호
            <br />
            <Link
              to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118738806"
              target="_blank"
              rel="noreferrer"
            >
              사업자 정보 확인
            </Link>
            <span> | </span>호스팅서비스제공자&nbsp;: (주)케이지씨라이프앤진
            <br />
            Email&nbsp;: ginipet@kgclifengin.com
          </p>
          <p>ⓒ kgclifengin Corp.</p>
        </div>

        <div className="escro-wrap">
          <p className="confirmLine">
            구매안전(에스크로)서비스 가입사실 확인
          </p>
          <p>
            고객님은 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에 가입한
            KCP의 구매안전서비스를 이용하실 수 있습니다.
          </p>
        </div>

        <div className="bottomLogo-wrap">
          <h1>
            <Link to="/ginipet">
              <img
                src={process.env.PUBLIC_URL + '/images/logo_grey.png'}
                width="88"
                height="88"
                alt="GINIPET"
              />
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
}
