import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>학생 회원가입</h1>
      {/* TODO: 이메일, 비밀번호 폼 구현 */}
      
      <div style={{ marginTop: '20px' }}>
        <p>이미 계정이 있으신가요?</p>
        <Link to="/login">로그인 페이지로 이동하기</Link>
      </div>
    </div>
  );
}
