import React, { useRef, useState } from "react";

function VideoComponent() {
  const videoRef = useRef(null)

  const [currentVideo, setCurrentVideo] = useState(videos[0])


  const onSingleTopTabPress = (title) => {
    setSelectedTopTabBar(title);
  };

  useEffect(() => {
    console.log("Called use effect");
    let video = videoRef.current
    console.log("Called use effect 2");
    if (video) {
      console.log('Duration is', video.duration)
    }
  }, [])


  return (
    <video ref={videoRef} className='h-full w-full' muted={true} onProgress={(e) => { console.log('On progress', e) }} autoPlay onLoadStart={() => { console.log('Loading start') }} onLoad={() => { console.log('Loaded') }}>
      <source src={currentVideo.path} type="video/mp4" />
    </video>
  )
}


export default VideoComponent