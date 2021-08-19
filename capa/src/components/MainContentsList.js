import React, { useState } from 'react';
import "../style/MainContentsList.css";

const MainContentsList = ({ inMeetingHandleValue }) => {
  const [list, setList] = useState({ lists:[
    {
      uuid: 1,
      title: "자동차 시제품 제작",
      subTitle: "A 고객사",
      date: "2020.12.14까지 납기",
      products: "2개",
      total: "100개",
      howwemade: "밀링, 선반",
      material: "알루미늄",
      inMeeting: false,
    },
    {
      uuid: 2,
      title: "비행기 시제품 제작",
      subTitle: "B 고객사",
      date: "2020.12.13까지 납기",
      products: "2개",
      total: "100개",
      howwemade: "선반",
      material: "탄소강, 강철",
      inMeeting: true,
    },
    {
      uuid: 3,
      title: "기차 시제품 제작",
      subTitle: "C 고객사",
      date: "2020.12.12까지 납기",
      products: "1개",
      total: "20개",
      howwemade: "선반",
      material: "구리",
      inMeeting: false,
    },
    {
      uuid: 4,
      title: "기차 시제품 제작",
      subTitle: "C 고객사",
      date: "2020.12.12까지 납기",
      products: "1개",
      total: "20개",
      howwemade: "선반",
      material: "구리",
      inMeeting: false,
    },
    {
      uuid: 5,
      title: "기차 시제품 제작",
      subTitle: "C 고객사",
      date: "2020.12.12까지 납기",
      products: "1개",
      total: "20개",
      howwemade: "선반",
      material: "구리",
      inMeeting: false,
    },
    {
      uuid: 6,
      title: "기차 시제품 제작",
      subTitle: "C 고객사",
      date: "2020.12.12까지 납기",
      products: "1개",
      total: "20개",
      howwemade: "선반",
      material: "구리",
      inMeeting: true,
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

  const inMeetingChecker = list.lists.filter(value => value.inMeeting === true);

  console.log(inMeetingChecker.length);

  return (
    <>
      {inMeetingHandleValue ? 
        <>
          {inMeetingChecker.length > 0 ? 
            <ul className="componentsList">
              {inMeetingChecker.map((t) => (
                <li className="listsEffect" key={t.uuid}>
                  <div>
                    <div className="checkMeeting"> 
                      <div className="listTitle">
                        {t.title} 
                      </div>
                      <div>
                        { t.inMeeting ? <div className="checkMeetingDisplay">상담중</div> : "" }
                      </div>
                    </div>
                    <div className="subTitle"> {t.subTitle}</div>
    
                    <div className="date"> {t.date}</div>
                    <div className="newLine"> </div>
    
                    <div className="belowComponentsPart">
                      <div className="producsInfo">
                        <div> 도면개수 </div>
                        <div> 총 수량 </div> 
                        <div> 가공방식 </div>
                        <div> 재료 </div>
                      </div>
                      <div className="producsValue">
                        <div> {t.products} </div>
                        <div> {t.total} </div>
                        <div> {t.howwemade} </div>
                        <div> {t.material} </div>
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
            <li className="listsEffect" key={t.uuid}>
              <div>
                <div className="checkMeeting"> 
                  <div className="listTitle">
                    {t.title} 
                  </div>
                  <div>
                    { t.inMeeting ? <div className="checkMeetingDisplay">상담중</div> : "" }
                  </div>
                </div>
                <div className="subTitle"> {t.subTitle}</div>

                <div className="date"> {t.date}</div>
                <div className="newLine"> </div>

                <div className="belowComponentsPart">
                  <div className="producsInfo">
                    <div> 도면개수 </div>
                    <div> 총 수량 </div> 
                    <div> 가공방식 </div>
                    <div> 재료 </div>
                  </div>
                  <div className="producsValue">
                    <div> {t.products} </div>
                    <div> {t.total} </div>
                    <div> {t.howwemade} </div>
                    <div> {t.material} </div>
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
