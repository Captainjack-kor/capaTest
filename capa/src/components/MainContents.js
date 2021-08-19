import "../style/MainContents.css";
import MainContentsList from "../components/MainContentsList";
import React, { useState } from 'react';

const MainContents = () => {
  const [toggle, setToggle] = useState(false);
  const onChange = (e) => {
    setToggle(!toggle);
  }
  // console.log("check: "+ toggle);

  return (
    <div id="mainContents">
      <div className="leftSpace"> </div>

      <div className="middleSpace">
        <div className="boldFont"> 들어온 요청 </div>
        <div> 파트너님에게 딱 맞는 요청서를 찾아보세요. </div>
        <div className="toggleComponentsPosition">
          <div className="filteringDiv">
            <div className="dropDown">
              <div className="dropButton"> 
                <div> 가공방식 </div>
                <span> ▼ </span>
              </div>
              <div className="dropdownContents1">
                <p>
                  <input type="checkbox" name="" value="" /> 밀링 
                </p>
                <p>
                  <input type="checkbox" name="" value=""/> 선반
                </p>
              </div>
              
            </div>
            <div className="dropDown" >
              <div className="dropButton2"> 
                <div> 재료 </div>
                <span> ▼ </span>
              </div>
              <div className="dropdownContents2">
                <p>
                  <input type="checkbox" name="" value="" /> 알루미늄
                </p>
                <p>
                  <input type="checkbox" name="" value=""/> 탄소강
                </p>
                <p>
                  <input type="checkbox" name="" value=""/> 구리
                </p>
                <p>
                  <input type="checkbox" name="" value=""/> 합금강
                </p>
                <p>
                  <input type="checkbox" name="" value=""/> 강철
                </p>
              </div>
            </div>
          </div>
          <div>
            <div> 
              <label className="switch">
                <input type="checkbox" onChange={onChange}/>
                <span className="slider round"></span>
              </label>
            </div>

            <div className="toggleDisc"> 상담 중인 요청만 보기</div>
          </div>
        </div>
        <div className="listPosition">
          <MainContentsList inMeetingHandleValue={toggle}/>
        </div>
      </div>

      <div className="rightSpace"> </div>

    </div>
  );
}

export default MainContents;