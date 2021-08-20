import { BankOutlined, MenuOutlined } from '@ant-design/icons';
import "../style/Header.css";

const Header = () => {
  return (
    <>
      <div id="header">
        <div className="leftHeaderContents">
          <MenuOutlined className="mobileMenuBtn"/>
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