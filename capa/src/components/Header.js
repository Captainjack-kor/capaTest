import { BankOutlined, MenuOutlined } from '@ant-design/icons';
import "../style/Header.css";
import React, { useState, useEffect } from "react";
import $ from "jquery";
  

const Header = () => {
  const [slider, setSlider] = useState(false);
  $('#mainContents').click((e) => {
    if(slider) {
      setSlider(!slider);
    }
  })
  
  const handleSlider = () => {
    if(slider === false){
      setSlider(!slider);
    } 
  }
  
  return (
    <>
      <div id="header">
        <div className="leftHeaderContents">
          <MenuOutlined className="mobileMenuBtn" onClick={handleSlider}/>
          {slider ? <div className="mobileSliderBtn">
            <div className="logoPositioning">
              <div className="mobileLOGOIMG"> CAPA </div>
              <div className="mobileLOGO"> 파트너스 </div>
            </div>
            <div className="belowInfo">
              <div><BankOutlined />파트너정밀가공</div>
              <div>로그아웃</div>
            </div>
          </div> : <></>}
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