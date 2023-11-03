import React, { useState } from 'react';

const Login2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ตรวจสอบ email และ password และทำการเข้าสู่ระบบ
    if (email === 'example@email.com' && password === 'password123') {
      // เข้าสู่ระบบสำเร็จ
      alert('เข้าสู่ระบบสำเร็จ');
    } else {
      // เข้าสู่ระบบไม่สำเร็จ
      alert('เข้าสู่ระบบไม่สำเร็จ');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>เข้าสู่ระบบ</h2>
        <input
          type="text"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>เข้าสู่ระบบ</button>
      </div>
    </div>
  );
};

export default Login2;
