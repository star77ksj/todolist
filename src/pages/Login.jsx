import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>교사 로그인</h1>
      {/* TODO: 이메일, 비밀번호 폼 구현 */}
      
      <div style={{ marginTop: '20px' }}>
        <p>학생이신가요?</p>
        <Link to="/signup">회원가입 페이지로 이동하기</Link>
      </div>
    </div>
  );
}
