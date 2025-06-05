import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* 1 depth + 2 depth 정의 ------------------------------------ */
const menuItems = [
  {
    key: 'shop',
    title: '지니펫 쇼핑몰',
    sub: [
      '[사료] 홀리스틱',
      '[사료] 유기농',
      '[사료] 오리지널',
      '[영양제] 더케어',
      '[간식] 더스낵',
      '[영양제] 더캣 더케어',
      '[간식] 더캣 더스낵',
      '[사료] 더캣 오리지널',
    ],
  },
  {
    key: 'brand',
    title: '브랜드 소개',
    sub: ['브랜드 소개', '제품 소개'],
  },
  {
    key: 'info',
    title: '반려견 정보',
    sub: ['건강', '문화'],
  },
  {
    key: 'event',
    title: '이벤트',
    sub: ['진행중인 이벤트', '지난 이벤트'],
  },
  {
    key: 'support',
    title: '고객지원',
    sub: ['공지사항', 'Q&A'],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);          // 오버레이 표시
  const [active, setActive] = useState('');         // 펼쳐진 1 depth

  /* 햄버거 아이콘 ----------------------------------------- */
  const Burger = () => (
    <button className="nav-toggle" onClick={() => setOpen(true)}>
      <img
        src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`}
        alt="메뉴 열기"
        width="24"
        height="24"
      />
    </button>
  );

  /* X(닫기) 아이콘 ----------------------------------------- */
  const CloseBtn = () => (
    <button
      className="close-btn"
      onClick={() => {
        setOpen(false);
        setActive('');
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/btn_close.png`}
        alt="닫기"
        width="29"
        height="29"
      />
    </button>
  );

  return (
    <>
      {/* 헤더에서 사용할 햄버거 버튼 */}
      <Burger />

      {/* 오버레이 메뉴 */}
      {open && (
        <div className="mobile-nav-overlay">
          {/* 내부 컨테이너 : 항상 좌·우 40px 여백 유지 */}
          <div className="nav-inner">
            <CloseBtn />

            {/* 1 depth + 2 depth -------------------------- */}
            <div className="mainMenu-wrap">
              <ul className="menu-list">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      className={`menu-item ${
                        active === item.key ? 'open' : ''
                      }`}
                      onClick={() =>
                        setActive(active === item.key ? '' : item.key)
                      }
                    >
                      {item.title}
                    </button>

                    {/* 2 depth */}
                    {active === item.key && (
                      <ul className="submenu">
                        {item.sub.map((txt, idx) => (
                          <li key={idx} className="submenu-item">
                            {/* 라우터 경로는 필요에 맞게 변경하세요 */}
                            <Link to="/">{txt}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* 하단 2×2 버튼 ---------------------------- */}
            <div className="topMenu-wrap">
              <Link to="/login">로그인</Link>
              <Link to="/join">회원가입</Link>
              <Link to="/order">주문조회</Link>
              <Link to="/cart">장바구니</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
