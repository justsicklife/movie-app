import React, { useState } from 'react';
import './Sections/Navbar.css';

function NavBar() {
  
  return (
    <nav>
      <div><a href="/">로고</a></div>
      <div><a href="/favorite/show">찜목록 보기</a></div>
      <div>사용자 아이콘</div>
    </nav>
  )
}

export default NavBar