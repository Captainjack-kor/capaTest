import "../style/MainContents.css";
import MainContentsList from "../components/MainContentsList";
import React, { useEffect, useState } from 'react';
import $ from "jquery";

const MainContents = () => {
  const [toggle, setToggle] = useState(false);
  const onChange = (e) => {
    setToggle(!toggle);
  }
  const [milling, setMilling] = useState(false);
  const [lathe, setLathe] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [count, setCount] = useState(0);

  const handleMillingValue = () => {
    if($("input:checkbox[name=is_milling]").is(":checked") == true) {
      setMilling(!milling);
    } else {
      setMilling(!milling);
    }
  }

  const handleLatheValue = () => {
    if($("input:checkbox[name=is_lathe]").is(":checked") == true) {
      setLathe(!lathe);
    } else {
      setLathe(!lathe);
    }
  }

  useEffect(()=> 
    setCount($("input:checkbox[name=droplists]:checked").length)
  )

  const handleCheckbox = () => {
    if($("input:checkbox[name=droplists]:checked").length > 0) {
      setCheckbox(true);
      setCount(count+1);
    } else {
      setCheckbox(false);
    }
  }

  const handleFilterInit = () => {
    $("input[name=droplists]:checkbox").prop("checked", false);
    setCheckbox(false);
  }
  
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
                  <input type="checkbox" name="is_milling" value="" onClick={handleMillingValue}/> 밀링 
                </p>
                <p>
                  <input type="checkbox" name="is_lathe" value="" onClick={handleLatheValue}/> 선반
                </p>
              </div>
              
            </div>
            <div className="dropDown" >
              {checkbox ? 
                <div className="setFilterInfo">
                  <div id="dropboxEffect"> 
                    <div> 재료({count})</div>
                    <span> ▼ </span>
                  </div> 
                  <div className="filterPosition" onClick={handleFilterInit}>
                    <img className="filterIcon" src="https://media.vlpt.us/images/iooi75/post/0dc32d5e-b354-4a94-8d01-22b86fb729c3/image.png" alt=""/> 
                    <span className="filterReset">필터링 리셋</span>
                  </div>
                </div>
              : 
              <div className="dropButton2"> 
                <div> 재료 </div>
                <span> ▼ </span>
              </div>
              }
              <div className="dropdownContents2">
                <p>
                  <input type="checkbox" name="droplists" value="" onClick={handleCheckbox}/> 알루미늄
                </p>
                <p>
                  <input type="checkbox" name="droplists" value="" onClick={handleCheckbox}/> 탄소강
                </p>
                <p>
                  <input type="checkbox" name="droplists" value="" onClick={handleCheckbox}/> 구리
                </p>
                <p>
                  <input type="checkbox" name="droplists" value="" onClick={handleCheckbox}/> 합금강
                </p>
                <p>
                  <input type="checkbox" name="droplists" value="" onClick={handleCheckbox}/> 강철
                </p>
              </div>
            </div>
          </div>
          <div className="toggleWithDiscPosition">
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
          <MainContentsList inMeetingHandleValue={toggle} 
            isMilling={milling} isLathe={lathe}/>
        </div>
      </div>

      <div className="rightSpace"> </div>

    </div>
  );
}

export default MainContents;