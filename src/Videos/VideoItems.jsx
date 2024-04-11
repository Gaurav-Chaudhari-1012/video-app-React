
import React from 'react'

const VideoItems = (props) => {
  console.log(props.data);

  let {video, setVid, SetTitle, setViews, setSubscriber, setDescription} = props.data;
  console.log(video);

  let {title, thumbnailUrl, videoUrl, views, subscriber, description} = video;

  let changeVideo = ()=> {
    setVid(videoUrl)
    SetTitle(title)
    setViews(views)
    setSubscriber(subscriber)
    setDescription(setDescription)
  }
  
  return (
    <div className='videoItem'>
      <img src={thumbnailUrl} alt={title} className='rightImg' onClick={changeVideo} />
    </div>
  )
}

export default VideoItems