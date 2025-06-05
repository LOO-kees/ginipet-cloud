import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';           // ★ useNavigate 추가
import axios from 'axios';

function Login(props) {
  //1. 상태변수 선언
  const [form, setForm] = useState({
    username:'', //아이디를 저장하기 위한 것
    password:''  //패스워드를 저장하기 위한 것
  });

  const [error, setError] = useState('');

  const navigate = useNavigate(); // 링크 이동용 훅

  //2. 입력시 실행되는 함수
  //사용자가 입력폼에 데이터를 입력시 변수에 데이터를 담는다.
  const handleChange=(e)=>{
    setForm({...form, [e.target.name]:e.target.value});
    setError(''); //에러 초기화
  }

  //3. 로그인 버튼 클릭시 실행되는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { //입력이 성공하면 db server로 전송
      const res = await axios.post('http://localhost:9070/login2', form);  // 경로 /login2

      //사용자가 인증이 끝나면 '토큰'을 생성
      localStorage.setItem('token', res.data.token); // 토큰 저장
      localStorage.setItem('username', form.username); //사용자 아이디 저장 

      alert('로그인 성공');
      navigate('/ginipet'); // 메인화면으로 이동

    } catch (err) {
        setError('로그인 실패 : 아이디와 패스워드를 다시 확인하세요.');
    }
  }

  return (
    <section className='Login-wrap'>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor='username'>아이디</label>
          <input type='text' onChange={handleChange} value={form.username}
          id='username' name='username'
          required
          placeholder='아이디'
          />
        </p>
        <p>
          <label htmlFor='password'>패스워드</label>
          <input type='password' onChange={handleChange} value={form.password}
          id='password' name='password'
          required
          placeholder='패스워드'
          />
        </p>
        <p>
          <input type='submit' value='로그인'/>
        </p>

        <p className='btn-group'>
          <Link to='/id_search'>아이디 찾기</Link>&#10072;
          <Link to='/id_search'>비번 찾기</Link>&#10072;
          <Link to='/register'>회원가입</Link>
        </p>

        {error&&<p style={{color:'red'}}>{error}</p>}
      </form>
    </section>
  );
}

export default Login;
