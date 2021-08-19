import "../style/MainContents.css";
import MainContentsList from "../components/MainContentsList";

const MainContents = () => {
  return (
    <div id="mainContents">
      <div className="leftSpace"> </div>

      <div className="middleSpace">
        <div className="boldFont"> 들어온 요청 </div>
        <div> 파트너님에게 딱 맞는 요청서를 찾아보세요. </div>
        <div className="toggleComponentsPosition">
          <div>
            <div> 가공방식 </div>
            <div> 재료 </div>
          </div>
          <div>
            <div> toggleBtn </div>
            <div> 상담 중인 요청만 보기</div>
          </div>
        </div>
        <div className="listPosition">
          <MainContentsList />
        </div>
      </div>

      <div className="rightSpace"> </div>

    </div>
  );
}

export default MainContents;