// src/component/Join.js

import React, { useState } from 'react';
import axios from 'axios';
// ★ useNavigate 추가
import { useNavigate } from 'react-router-dom';
import Login from './Login'; // (필요에 따라 import)

function Join(props) {
  // 1. 상태 변수 선언
  const [form, setForm] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    tel: ''
  });
  const [error, setError]     = useState('');
  // 성공 메시지는 alert()로 처리할 예정이므로 따로 상태 관리하지 않아도 됩니다.
  // const [success, setSuccess] = useState('');

  // ★ useNavigate 훅 호출
  const navigate = useNavigate();

  // 2. 입력 핸들러
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
    // setSuccess('');
  };

  // 3. 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 1,2 일치 여부 확인
    if (form.password !== form.password2) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // ★ 회원가입 요청 주소를 /ginipet/register 로 변경
      await axios.post(
        'https://port-0-backend-mbioc25168a38ca1.sel4.cloudtype.app/ginipet/register',
        {
          username: form.username,
          password: form.password,
          tel:      form.tel,
          email:    form.email
        }
      );

      // 회원가입 성공 시 alert 창 띄우기
      alert('회원가입 완료! 로그인 페이지로 이동합니다.');
      // 로그인 페이지(/login)로 이동
      navigate('/login');

      // (선택) 가입 후 폼 초기화
      setForm({
        username: '',
        password: '',
        password2: '',
        tel: '',
        email: ''
      });
    } catch (error) {
      setError('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류입니다.');
    }
  };

  return (
    <section className="Join-wrap">
      <h2>회원가입</h2>

      <form onSubmit={handleSubmit} className="Join-form">
        <p>
          <label htmlFor="username" className="sr-only">아이디</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디 입력"
            onChange={handleChange}
            value={form.username}
            required
          />
        </p>

        <p>
          <label htmlFor="password" className="sr-only">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 입력"
            onChange={handleChange}
            value={form.password}
            required
          />
        </p>

        <p>
          <label htmlFor="password2" className="sr-only">비밀번호 확인</label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="비밀번호 확인"
            onChange={handleChange}
            value={form.password2}
            required
          />
        </p>

        <p>
          <label htmlFor="email" className="sr-only">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="id@domain.com"
            onChange={handleChange}
            value={form.email}
            required
          />
        </p>

        <p>
          <label htmlFor="tel" className="sr-only">전화번호</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="000-0000-0000"
            onChange={handleChange}
            value={form.tel}
            required
          />
        </p>

        <p className="terms">
          <input type="checkbox" id="agree" required />
          <label htmlFor="agree">
            이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.
          </label>
        </p>

        <p>
          <button type="submit" className="join-btn">회원가입 완료</button>
        </p>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
}

export default Join;
