import React, { useState } from 'react';
import "../style/MainContentsList.css";

const MainContentsList = ({ inMeetingHandleValue }) => {
  const [list, setList] = useState({ lists:[
    {
      id: 1,
      title: "자동차 시제품 제작",
      client: "A 고객사",
      due: "2020.12.14",
      count: 2,
      amount: 100,
      method: ["밀링", "선반"],
      material: ["알루미늄"],
      status: "대기중"
    },
    {
      id: 2,
      title: "비행기 시제품 제작",
      client: "B 고객사",
      due: "2020.12.13",
      count: 2,
      amount: 100,
      method: ["선반"],
      material: ["탄소강", "강철"],
      status: "상담중"
    },
  ]});

  //const [meeting, setMeeting] = useState(0);
  //const [check, setCheck] = useState(false);
  // const inMeetingCounter = () => {
  //   for(let i = 0; i < list.lists.length; i++) {
  //     if(list.lists[i].inMeeting === true) {
  //       setMeeting(meeting + 1);
  //     }
  //   }
  // }

  // const inMeetingChecker = () =>{
  //   inMeetingCounter();
  //   if(meeting > 0) {
  //     setCheck(!check)
  //     setMeeting(0);
  //   } 
  // }

  // inMeetingChecker();

  const inMeetingChecker = list.lists.filter(value => value.status === "상담중");

  //console.log(inMeetingChecker.length);

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
                          <span>{t.method[t.method.length - 1] === i ? i : i + ", " }</span>
                          )}
                        </div>
                        <div> {t.material.map((i) =>
                          <span>{t.material[t.material.length-1] === i ? i : i + ", " }</span>
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
      : <ul className="componentsList">
          {list.lists.map((t) => (
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
                        <span>{t.method[t.method.length - 1] === i ? i : i + ", " }</span>
                        )}
                      </div>
                      <div> {t.material.map((i) =>
                        <span>{t.material[t.material.length-1] === i ? i : i + ", " }</span>
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
      </ul>}
    </>
  );
}

export default MainContentsList;
