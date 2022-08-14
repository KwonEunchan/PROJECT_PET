import '../styles/Slide.scss'

export default function Slide(){
  let positionValue = 0;

  return(
    <div className="slideViewer">
      <div className="slideContainer" style={{left:0}}>
        <div className="slideEl">
          <div className="slideImg"></div>
          <h1>행복하개</h1>
        </div>
        <div className="slideEl">
          <div className="slideImg"></div>
          <h1>포근하개</h1>
        </div>
        <div className="slideEl">
          <div className="slideImg"></div>
          <h1>보람있개</h1>
        </div>
      </div>
      <div className="btnContainer">
        <div className="directionBtn" onClick={()=>{
          const slideContainer = document.querySelector('.slideContainer');
          positionValue = parseInt(slideContainer.style.left) + 600;
          positionValue > 0 ? positionValue -= 600 : positionValue -= 0;
          slideContainer.style.left = positionValue + `px`;
        }}>
          <span className="material-symbols-outlined">
            chevron_left
          </span>
          </div>
        <div className="directionBtn" onClick={()=>{
          const slideContainer = document.querySelector('.slideContainer');
          positionValue = parseInt(slideContainer.style.left) - 600;
          positionValue < -1200 ? positionValue += 600 : positionValue -= 0;
          slideContainer.style.left = positionValue + `px`
        }}>
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </div>
      </div>
    </div>
    
  )
}