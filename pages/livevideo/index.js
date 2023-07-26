import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { liveVideoPath, videosPath } from "../../videos";
import EmojiList from "../../components/EmojiAnimation";

const videos = {
  id: 0,
  path: liveVideoPath
}


export default function LiveVideo({ }) {

  const videoRef = useRef(null)

  const [isMute, setIsMute] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const [videoDuration, setVideoDuration] = useState(0)
  const [videoElapsed, setVideoElapsed] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [emojis, setEmojis] = useState();
  const [emojisPopUp, setEmojisPopUp] = useState(false);

  // const [showCommentBox, setShowCommentBox] = useState(false)
  // const [currentComment, setCurrentComment] = useState(objComment);
  // const [allComments, setAllComments] = useState([{
  //   userName: 'MorganM',
  //   time: '5 days ago',
  //   comment: 'OMG - Love Mary!'
  // },
  // {
  //   userName: 'peachypeachyGirl',
  //   time: '5 days ago',
  //   comment: 'The house looks amazing! So amazing to see her getting such big listing! You go Mary!'
  // },
  // {
  //   userName: 'Stacy Park',
  //   time: '7 days ago',
  //   comment: "She's my favorite! Mary is the only reasonable person here this season! Can't wait to see how she manages the office this season!"
  // },
  // {
  //   userName: 'CharlieG',
  //   time: '7 days ago',
  //   comment: "You go Mary! <3 <3 <3",
  // }]);

  // const [showCommunityImage, setShowCommunityImage] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      let video = videoRef.current
      if (video) {
        let time = video.duration
        setVideoDuration(time)
        setIsPlaying(true)
      }
    }, 500)
  }, [])

  useEffect(() => {
    if (Math.round(videoDuration - videoElapsed) == 0) {
      setIsPlaying(false)
    }
  }, [videoDuration, videoElapsed])

  // useEffect(() => {
  //   // Scroll to the last comment when the allComments array updates
  //   if (showCommentBox) {
  //     const commentContainer = document.getElementById('comment-container');
  //     commentContainer.scrollTop = commentContainer.scrollHeight;
  //   }
  // }, [allComments, showCommentBox]);

  const onPlayPauseVideoPress = () => {
    let video = videoRef.current
    if (video) {
      setIsPlaying(!isPlaying)
      if (video.paused)
        video.play();
      else {
        video.pause();
      }
    }
  }

  const onMuteUnmutePress = () => {
    setIsMute(!isMute)
  }

  const onChange = (e) => {
    const video = videoRef.current
    let time = (video.duration / 100) * e.target.value
    video.currentTime = time;
    setVideoElapsed(time)
    setPercentage(e.target.value)
    setIsPlaying(isPlaying)
  }

  const getTimeFromSeconds = (time) => {
    let minutes = (Math.floor(time / 60));
    let seconds = Math.round(time - (minutes * 60))
    let timeString = minutes.toString().padStart(2, '0') + ':' +
      seconds.toString().padStart(2, '0');
    return timeString;
  }

  const SmileImg = "./emojiIcon.png";
  const AngryImg = "./angry.png";
  const emojiLoveImg = "./emoji_love.png";
  const FireImg = "./fire.png";
  const ThumbuImg = "./thumbu.png";
  const cryImg = "./cry.png";

  const addEmoji = (emoji) => {
    setEmojis(emoji);
    setEmojisPopUp(!emojisPopUp)
    setTimeout(() => {
      setEmojis(prevEmojis => prevEmojis === emoji ? null : prevEmojis);
    }, 2000);
  };

  // const onCommentPress = () => {
  //   setShowCommentBox(!showCommentBox)
  // }

  // const onCommentChange = (e) => {
  //   setCurrentComment((prevState) => ({
  //     ...prevState,
  //     comment: e.target.value,
  //   }));
  // };

  // const onCommentSubmit = () => {
  //   if (currentComment.comment.trim() !== '') {
  //     setAllComments((prevState) => [...prevState, currentComment]);
  //     setCurrentComment(objComment);
  //   }
  // };

  // const onNextTrackPress = () => {
  //   if (currentVideoIndex != videos.length - 1) {
  //     const video = videoRef.current
  //     let currentPlayingIndex = currentVideoIndex
  //     currentPlayingIndex = currentPlayingIndex + 1
  //     setCurrentVideoIndex(currentPlayingIndex)
  //     video.currentTime = 0
  //   }
  // }

  // const onPreviousTrackPress = () => {
  //   if (currentVideoIndex != 0) {
  //     const video = videoRef.current
  //     let currentPlayingIndex = currentVideoIndex
  //     currentPlayingIndex = currentPlayingIndex - 1
  //     setCurrentVideoIndex(currentPlayingIndex)
  //     video.currentTime = 0
  //   }
  // }

  // const onCommunityIconPress = () => {
  //   setShowCommunityImage(!showCommunityImage)
  // }

  console.log('Is Playing is',isPlaying)

  return (
    <>
      <Head>
        <title>Live Video</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full relative">
        <video ref={videoRef} onTimeUpdate={(e) => {
          setVideoElapsed(e.target.currentTime)
          setPercentage(Math.floor((e.target.currentTime / videoDuration) * 100))
        }} className='w-full h-screen object-cover' muted={isMute} autoPlay onLoadStart={() => { console.log('Loading start') }} onLoad={() => {
        }} onPlay={() => { setIsPlaying(true) }}>
          <source src={liveVideoPath} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-transparent overflow-hidden">
          <div className="absolute left-1/3 bottom-[-80px] flex flex-col w-1/5">
            {emojis && <EmojiList emoji={emojis} />}
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            {emojisPopUp &&
              <div className="flex justify-center items-center">
                <div className="bg-gray-900 bg-opacity-60 p-4 rounded-md">
                  <div className="flex justify-center items-center gap-4">
                    <ImgBlock imgSrc={SmileImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                    <ImgBlock imgSrc={AngryImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                    <ImgBlock imgSrc={emojiLoveImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                    <ImgBlock imgSrc={FireImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                    <ImgBlock imgSrc={ThumbuImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                    <ImgBlock imgSrc={cryImg} addEmoji={(srcImg) => addEmoji(srcImg)} />
                  </div>
                </div>
              </div>
            }
            <div className="w-full flex flex-row items-center px-2">
              <span className="text-xs font-sans tracking-wide font-medium text-slate-200">{getTimeFromSeconds(videoElapsed)}</span>
              <div className="w-full flex flex-col mx-3 z-50">
                <input onChange={onChange} type="range"
                  className={`w-full h-1 rounded-lg cursor-pointer range-sm outline-none slider-thumb accent=[#E50914]`} style={{
                    background: `linear-gradient(to right, #E50914 0%, #E50914 ${percentage}%, #FFF ${percentage}%, #FFF 100%)`
                  }}
                  step=".1"
                  value={percentage}
                />
              </div>
              <span className="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-slate-200">{getTimeFromSeconds(videoDuration)}</span>
            </div>
            <div className="flex flex-row justify-between items-center w-screen p-4	">
              <div className="flex flex-row items-center">
                <div className="ml-4" onClick={onPlayPauseVideoPress}>
                  <Image
                    src={isPlaying ? "./pauseIcon.png" : "./playIcon.png"}
                    width={25}
                    height={25}
                    alt={isPlaying ? "pause" : "play"}
                  />
                </div>
                <div className="ml-4">
                  <Image
                    src={"./backIcon.png"}
                    width={30}
                    height={30}
                    alt={'back'}
                  />
                </div>
                <div className="ml-4">
                  <Image
                    src={"./forwardIcon.png"}
                    width={30}
                    height={30}
                    alt={'forward'}
                  />
                </div>
                <div onClick={onMuteUnmutePress} className='ml-4'>
                  <Image
                    src={isMute ? "./mute.png" : "./unmute.png"}
                    width={25}
                    height={25}
                    style={{ color: '#ffffff' }}
                    alt={isMute ? "mute" : "unmute"}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div onClick={() => setEmojisPopUp(!emojisPopUp)} className='mr-4'>
                  <Image
                    src={SmileImg}
                    width={25}
                    height={25}
                    className="cursor-pointer"
                    alt={'emoji'}
                  />
                </div>
                {/* <div onClick={onCommentPress} className='mr-4'>
                  <Image
                    src={"/commentIcon.png"}
                    width={25}
                    height={25}
                    alt="comment"
                  />
                </div>
                <div onClick={onCommunityIconPress} className='mr-4'>
                  <Image
                    src={"/communityIcon.png"}
                    width={25}
                    height={25}
                    alt="community"
                  />
                </div> */}
              </div>
              <div className="flex flex-row items-center">
                {/* <div className='mr-4' onClick={onNextTrackPress}>
                  <Image
                    src={"/nextIcon.png"}
                    width={30}
                    height={30}
                    alt="next icon"
                  />
                </div> */}
                <div className='mr-4'>
                  <Image
                    src={"./copyIcon.png"}
                    width={25}
                    height={25}
                    alt="copy icon"
                  />
                </div>

                <div>
                  <Image
                    src={"./fullScreenIcon.png"}
                    width={25}
                    height={25}
                    alt="fullscreen icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ImgBlock = ({ imgSrc, addEmoji }) => {
  const handleClickEmoji = () => {
    addEmoji(imgSrc)
  }
  return <div className="cursor-pointer" onClick={handleClickEmoji}>
    <Image
      src={imgSrc}
      width={25}
      height={25}
      className="cursor-pointer"
    />
  </div>
}
