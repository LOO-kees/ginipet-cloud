import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ★ useNavigate 추가
import axios from 'axios';

function Login(props) {
  //1. 상태변수 선언
  const [form, setForm] = useState({
    username: '', //아이디를 저장하기 위한 것
    password: ''  //패스워드를 저장하기 위한 것
  });

  /* 추가 ▼ */
  const [memberType, setMemberType] = useState('member'); //회원/비회원
  const [remember, setRemember]   = useState(false);      //아이디 저장
  /* ▲ */

  const [error, setError] = useState('');

  const navigate = useNavigate(); // 링크 이동용 훅

  //2. 입력시 실행되는 함수
  //사용자가 입력폼에 데이터를 입력시 변수에 데이터를 담는다.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); //에러 초기화
  };

  /* 추가 ▼ */
  //아이디 저장 체크박스
  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };
  /* ▲ */

  //3. 로그인 버튼 클릭시 실행되는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { //입력이 성공하면 db server로 전송
      const res = await axios.post('http://localhost:9070/login2', form); // 경로 /login2

      //사용자가 인증이 끝나면 '토큰'을 생성
      localStorage.setItem('token', res.data.token); // 토큰 저장
      localStorage.setItem('username', form.username); //사용자 아이디 저장
      if (remember) localStorage.setItem('rememberId', form.username); //아이디 저장

      alert('로그인 성공');
      navigate('/ginipet'); // 메인화면으로 이동
    } catch (err) {
      setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.');
    }
  };

  return (
    <section className="Login-wrap">
      <h2>로그인</h2>

      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit} className="login-form">
        {/* 회원 / 비회원 라디오 */}
        <div className="member-type">
          <label>
            <input
              type="radio"
              name="memberType"
              value="member"
              checked={memberType === 'member'}
              onChange={(e) => setMemberType(e.target.value)}
            />{' '}
            회원
          </label>
          <label>
            <input
              type="radio"
              name="memberType"
              value="nonmember"
              checked={memberType === 'nonmember'}
              onChange={(e) => setMemberType(e.target.value)}
            />{' '}
            비회원
          </label>
        </div>

        {/* 아이디 */}
        <p>
          <label htmlFor="username" className="sr-only">
            아이디
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디"
            value={form.username}
            onChange={handleChange}
            required
          />
        </p>

        {/* 패스워드 */}
        <p>
          <label htmlFor="password" className="sr-only">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            onChange={handleChange}
            required
          />
        </p>

        {/* 아이디 저장 체크 */}
        <div className="remember">
          <input
            type="checkbox"
            id="rememberId"
            checked={remember}
            onChange={handleRemember}
          />
          <label htmlFor="rememberId">아이디 저장</label>
        </div>

        {/* 로그인 버튼 */}
        <p>
          <input type="submit" value="로그인" className="login-btn" />
        </p>

        {/* 하단 링크 */}
        <p className="login-links">
          <Link to="/id_search">아이디찾기</Link>
          <span className="divider">|</span>
          <Link to="/pw_search">비밀번호찾기</Link>
          <span className="divider">|</span>
          <Link to="/dormant">휴면계정찾기</Link>
        </p>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      {/* 구분선 */}
      <div className="login-divider"></div>

      {/* 아직 회원이 아니세요? */}
      <div className="signup-box">
        <h3>아직! 회원이 아니세요??</h3>
        <p>지금 지니펫 회원으로 가입하시고 풍성한 혜택 받아가세요.</p>
        <Link to="/join">
          <button type="button" className="signup-btn">
            회원가입
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Login;
