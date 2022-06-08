import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Transition } from "react-spring";
import {TransitionGroup, CSSTransition} from "react-transition-group";



const FindJob = () => {

  //redirect to signup page
  let navigate = useNavigate();
  function handleClick() {
    navigate("/signupproviderone");
  }

  //counting between numbers
  const [Index, setIndex] = useState(0);
  useEffect(()=>{
    const interval = setInterval(() => {
      if (Index < 1){
        setIndex(Index => Index + 1);
      } else {
        setIndex(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [Index])


  const image1 =  require("../images/barber.jpg")
  const image2 =  require("../images/makeup.jpg")
  const images = [
    image1,image2 
  ]

  const childFactory = (direction)=> (child) => React.cloneElement(child,{classNames:direction})


  /*images are from: ttps://www.pexels.com/*/
  return (
    <div className="findjob">
      <div className="findjobleft">
        <h1 style={{width:'50%', marginLeft:"40pt"}}>Earn Money Easily {'\&'} Flexibly!</h1>
        <button className={"Button"} type="submit" onClick={handleClick}>Join Us!</button>
      </div>
      <div className="findjobright">
        {/*<img src={require('../images/makeup.jpg')} className="images"/>*/}
        {/* <img src={images[Index]}/>*/}
        {
        <TransitionGroup childFactory={childFactory("slide-right")}>
          <CSSTransition
            key={images[Index]}
            timeout={3000}
            classNames="slide-right"
          >
            <img src={images[Index]} style={{width:'100%'}}/>
          </CSSTransition>
        </TransitionGroup>

        }
      </div>
    </div>
    
  );
}
export default FindJob;