import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem('username'); //로컬스토리지 값을 변수에 담는다.
  const navigate = useNavigate();

  //로그아웃 클릭시 호출되는 함수
  const handleLogout= () =>{
    localStorage.removeItem('token'); //기존 데이터 비우기
    localStorage.removeItem('username'); //기존 데이터 비우기
    navigate('/login'); //로그인 페이지로 이동
    window.location.reload(); //상태 갱신을 위해 새로고침(선택)

  };


  return (
    <header className="header-wrap">
      <div className="inner-wrap">
        {/* 햄버거 아이콘 + 오버레이 네비게이션 */}
        <button className="toggle_btn" onClick={() => setMenuOpen(true)}>
          <img
            src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`}
            alt="메뉴보기"
          />
        </button>

        {/* 로고 */}
        <h1 className="logo">
          <a href="/ginipet">
            <img
              src={process.env.PUBLIC_URL + '/images/logo_clr.png'}
              alt="지니펫 로고"
              width="56"
              height="56"
            />
          </a>
        </h1>

        {/* 장바구니 아이콘 */}
        <Link to ="/" className="topicon cart">
          <img
            src={process.env.PUBLIC_URL + '/images/topIcon_cart.png'}
            alt="장바구니"
            width="24"
            height="24"
          />
        </Link>
      </div>

      <nav className='navi' style={{
        left:menuOpen? '0%':'-100%'
        //삼항조건연산자 = 조건식?참인값:거짓인값
      }}>
      <button className='close_btn' onClick={()=>setMenuOpen(false)}>
        <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt='닫기' />
      </button>

      <ul className='gnb'>
        <li><Link to='/' title='지니펫 쇼핑몰' onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
        <li><Link to='/brand' title='브랜드 소개' onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
        <li><Link to='/info' title='반려견 정보' onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
        <li><Link to='/event' title='이벤트' onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
        <li><Link to='/customer' title='고객지원' onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
      </ul>

      <ul className='form_navi'>
        <li><Link to='/login' title='로그인' onClick={()=>setMenuOpen(false)}>로그인</Link></li>
        <li><Link to='/join' title='회원가입' onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
        <li><Link to='/order' title='주문조회' onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
        <li><Link to='/cart' title='장바구니' onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
      </ul>

      {/* 사용자가 로그인시 이름, 로그아웃 버튼이 나옴 */}
      {/* 삼항조건연산자 => 조건식?참인값:거진인값; */}
      {/* 조건부렌더링 => 조건식&&참인값:거짓인값 */}
      {username ? (
        <span style={{marginLeft:'30px', color:'#ffffff'}}>
          <b>{username}</b>님 환영합니다!
          <button onClick={handleLogout} style={{marginLeft:'10PX'}}>로그아웃</button>
        </span>
      ) : (
        <Link to="/login" style={{display:'none'}}>로그인</Link>
      )}
    </nav>
    </header>
  );
}

export default Header;
