import Pet from '../Pet.json'
import { useState } from 'react'
import '../styles/Adopt.scss'

export default function Adopt(){
  let [petView,setPetView] = useState(0);
  let petCount = Pet.pets.length;
  return(
    <>
    <div className="intro">
          <p>가족을 기다리는 아이들</p>
          <div className="btnContainer">
            <div className="btnAll">전체보기</div>
            <div className="directionBtn" onClick={()=>{
              petView-4 < 0 ? setPetView(petView) : setPetView(petView-4)}}>
              <span className="material-symbols-outlined">
                chevron_left
              </span>
              </div>
              <div className="directionBtn" onClick={()=>{
                petView+4 >= petCount ? setPetView(petView) : setPetView(petView+4)}}>
              <span className="material-symbols-outlined">
                chevron_right
              </span>
            </div>
          </div>
        </div>
        <div className="petBox">
          {
          Pet.pets.map((pet,index)=>{
            if(petView<=index && index<petView+4){
            return(
              <div className="petEl" style={{ 
                animationDelay : (0.2*(index%4)) +`s`}}>
                <div className="imgViewer"><img src={pet.src} alt="pet" /></div>
                <div className="pickBtn">{index===4?"주인 있어요":"자세히 보기"}</div>
              </div>
            )}
            else{return ""}
          })
          }
        </div>
    </>
  )
}