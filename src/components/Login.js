import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(props) {
  // 1. 상태 변수 선언
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [memberType, setMemberType] = useState('member');
  const [remember, setRemember]   = useState(false);
  const [error, setError]         = useState('');

  const navigate = useNavigate();

  // 2. 입력 핸들러
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRemember = (e) => {
    setRemember(e.target.checked);
  };

  // 3. 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ★ 로컬 대신 CloudType URL을 사용
      const res = await axios.post(
        'https://port-0-backend-mbioc25168a38ca1.sel4.cloudtype.app/ginipet/login',
        form
      );

      // 로그인 성공 시 토큰/아이디 저장
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);
      if (remember) {
        localStorage.setItem('rememberId', form.username);
      }

      alert('로그인 성공');
      navigate('/');
    } catch (err) {
      setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.');
    }
  };

  return (
    <section className="Login-wrap">
      <h2>로그인</h2>

      <form onSubmit={handleSubmit} className="login-form">
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

        <p>
          <label htmlFor="username" className="sr-only">아이디</label>
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

        <p>
          <label htmlFor="password" className="sr-only">비밀번호</label>
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

        <div className="remember">
          <input
            type="checkbox"
            id="rememberId"
            checked={remember}
            onChange={handleRemember}
          />
          <label htmlFor="rememberId">아이디 저장</label>
        </div>

        <p>
          <input type="submit" value="로그인" className="login-btn" />
        </p>

        <p className="login-links">
          <Link to="/id_search">아이디찾기</Link>
          <span className="divider">|</span>
          <Link to="/pw_search">비밀번호찾기</Link>
          <span className="divider">|</span>
          <Link to="/dormant">휴면계정찾기</Link>
        </p>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>

      <div className="login-divider"></div>

      <div className="signup-box">
        <h3>아직! 회원이 아니세요??</h3>
        <p>지금 지니펫 회원으로 가입하시고 풍성한 혜택을 받아가세요.</p>
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
