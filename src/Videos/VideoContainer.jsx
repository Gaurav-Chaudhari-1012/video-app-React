import  { useState } from 'react'
import Player from './Player'
import VideoItems from './VideoItems'
import VideoData from '../video.json'

const VideoContainer = () => {
  let [state, setState] = useState(VideoData)
  console.log(state);

  let [vid, setVid] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
  let [title, setTitle] = useState('Big Buck Bunny')
  let [views, setviews] = useState('24,969,123')
  let [subscriber, setSubscriber] = useState('25254545')
  let [description, setDescription] = useState('Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org')

  return (
    <section className='videoBlock'>

      <aside className="left">
         <Player data={{state,vid,title,views,subscriber,description}}/>
      </aside>

      <aside className="right">
        {state.map((video)=>{
           return <VideoItems key={video.id} data={{video, setVid, setTitle, setviews, setSubscriber, setDescription}}/>
        })}
      </aside>

    </section>
  )
}

export default VideoContainer