import React, { useState } from 'react';
import "../style/MainContentsList.css";
const MainContentsList = () => {
  const [list, setList] = useState({ lists:[
    {
      uuid: 1,
      title: "자동차 시제품 제작",
      subTitle: "A 고객사",
      date: "2020-10-10까지 납기",
      products: "2개",
      total: "100개",
    },
    {
      uuid: 2,
      writer: "박해커",
      date: "2020-10-12",
    },
    {
      uuid: 3,
      writer: "박해커",
      date: "2020-10-12",
    },
  ]});

  return (
    <>
      <ul className="componentsList">
          {list.lists.map((t) => (
            <li className="listsEffect" key={t.uuid}>
              {t.date} &nbsp; {t.content}
            </li>
          ))}
      </ul>
    </>
  );
}

export default MainContentsList;
