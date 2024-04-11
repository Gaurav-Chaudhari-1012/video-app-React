import React, { useState } from 'react'
import { useRef } from 'react';

const Player = (props) => {
  console.log(props);
  console.log(props.data);

  let {state, vid, title, views, subscriber, description} = props.data;

  let [play, setPlay] = useState()

     let videoRef = useRef()

     let PlayorPause = () => {
      videoRef.current.autoplay=true;
      setPlay(!play);
      if(play==true){
          videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
     }

  return (
    <>
    <h1>Video Player</h1>

    <video src={vid} className='leftVideo' ref={videoRef} onClick={PlayorPause}></video>

    <div className="info">
        <h2><p>{title}</p></h2> 
        <h4><p>👁️👁️ {views}</p></h4>
    </div>
    
    <div className="sub">
      <p>Current Subscriber : {subscriber} 
      <button>Subscriber ✅</button></p>
    </div>

    <div className="disp">
      <p>{description}</p>
    </div>

    </>
  )
}

export default Player