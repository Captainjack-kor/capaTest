import { BankOutlined, MenuOutlined } from '@ant-design/icons';
import "../style/Header.css";
import React, { useState } from "react";

const Header = () => {
  const [slider, setSlider] = useState(false);
  const handleSlider = () => {
    //console.log("작동완료")
    if(slider){
      setSlider(!slider);
    } else {
      setSlider(!slider);
    }
  }

  return (
    <>
      <div id="header">
        <div className="leftHeaderContents">
          <MenuOutlined className="mobileMenuBtn" onClick={handleSlider}/>
          <div className="capaLogo"> CAPA </div>
          <div className="capaLogoName"> 파트너스 </div>
        </div>
        <div className="rightHeaderContents">
          <div className="companyToManuf">  <BankOutlined /> A 가공 업체 </div>
          <div> | </div>
          <div className="logoutLogo"> 로그아웃 </div>
        </div>
      </div>
    </>
  );
}

export default Header;