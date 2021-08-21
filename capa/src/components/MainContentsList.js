import React, { useState, useEffect } from 'react';
import "../style/MainContentsList.css";
import axios from "axios";
import ComponentsList from "../components/ComponentsList";

const MainContentsList = ({ inMeetingHandleValue, isMilling, isLathe }) => {
  const [list, setList] = useState({ lists:[]});

  useEffect(() => {
    axios.get('http://localhost:3001/requests')
    .then(value => { 
      setList({ lists: [...list.lists, ...value.data]})
    })
    .catch(Error => { 
      console.log(Error)
    })
  }, [])

  const inMeetingChecker = list.lists.filter(value => value.status === "상담중");
  const filterMethod = list.lists.filter(value => value.method.indexOf("밀링") !== -1);
  const filterMaterial = list.lists.filter(value => value.method.indexOf("선반") !== -1);
  
  return (
    <>
      {inMeetingHandleValue ? 
        <>
          {inMeetingChecker.length > 0 ? 
            <ul className="componentsList">
              {inMeetingChecker.map((t) => (
                <li className="listsEffect" key={t.id}>
                  <div>
                    <div className="checkMeeting"> 
                      <div className="listTitle">
                        {t.title} 
                      </div>
                      <div>
                        { t.status === "상담중" ? <div className="checkMeetingDisplay">상담중</div> : "" }
                      </div>
                    </div>
                    <div className="subTitle"> {t.client}</div>
    
                    <div className="date"> {t.due}</div>
                    <div className="newLine"> </div>
    
                    <div className="belowComponentsPart">
                      <div className="producsInfo">
                        <div> 도면개수 </div>
                        <div> 총 수량 </div> 
                        <div> 가공방식 </div>
                        <div> 재료 </div>
                      </div>
                      <div className="producsValue">
                        <div> {t.count} </div>
                        <div> {t.amount} </div>
                        <div> {t.method.map((i) =>
                           t.method[t.method.length - 1] === i ? i : i + ", "
                          )}
                        </div>
                        <div> {t.material.map((i) =>
                           t.material[t.material.length-1] === i ? i : i + ", " 
                          )}
                        </div>
                      </div>
                    </div>
                  
                    <div id="buttonPosition">
                      <div className="listButton"> 요청 내역 보기 </div>
                      <div className="chatButton"> 채팅하기 </div>
                    </div>
    
                  </div> 
                </li>
              ))}
          </ul>
          : <div className="nothingInhere"> <div>조건에 맞는 견적 요청이 없습니다.</div> </div>  }
          
        </>
      : <>
        {isMilling ? 
        <ul className="componentsList">
          {filterMethod.map((t)=> (
          <li className="listsEffect" key={t.id}>
          <div>
            <div className="checkMeeting"> 
              <div className="listTitle">
                {t.title} 
              </div>
              <div>
                { t.status === "상담중" ? <div className="checkMeetingDisplay">상담중</div> : "" }
              </div>
            </div>
            <div className="subTitle"> {t.client}</div>

            <div className="date"> {t.due}</div>
            <div className="newLine"> </div>

            <div className="belowComponentsPart">
              <div className="producsInfo">
                <div> 도면개수 </div>
                <div> 총 수량 </div> 
                <div> 가공방식 </div>
                <div> 재료 </div>
              </div>
              <div className="producsValue">
                <div> {t.count} </div>
                <div> {t.amount} </div>
                <div> {t.method.map((i) =>
                   t.method[t.method.length - 1] === i ? i : i + ", "
                  )}
                </div>
                <div> {t.material.map((i) =>
                   t.material[t.material.length-1] === i ? i : i + ", " 
                  )}
                </div>
              </div>
            </div>
          
            <div id="buttonPosition">
              <div className="listButton"> 요청 내역 보기 </div>
              <div className="chatButton"> 채팅하기 </div>
            </div>

          </div> 
        </li>)
        )}</ul>
         : <ComponentsList /> }
      </>}
    </>
  );
}

export default MainContentsList;
