import '../styles/Campaign.scss'

export default function Campaign(){
  return(
    <div className ="campaignBox">
      <div className="tipBox">
        <h1>같이 찾아주세요!</h1>
        <div className="infoBox">
          <p className="infoText">
            <p className="infoName">인절미</p>
            <p className="infoAge">10살 / 수컷</p>
            <p className="infoType">리트리버</p>
            <p className="infoLoc">충청북도 청주시 사창동</p>
          </p>
          <div className="infoPicture"></div>
        </div>
    </div>

    <div className="btnBox">
      <a href="https://www.animal.go.kr/front/awtis/loss/lossList.do?menuNo=1000000060"><div className="btnMore">동물보호관리시스템</div></a>
      <a href="https://www.animal.go.kr/front/awtis/loss/lossList.do?menuNo=1000000057"><div className="btnReport">반려견 실종 신고</div></a>
    </div>
   </div>
  )
}