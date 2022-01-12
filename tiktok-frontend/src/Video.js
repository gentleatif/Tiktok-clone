import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  function handdleVideoPress() {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
        onClick={handdleVideoPress}
        ref={videoRef}
        loop
        className="video__player"
        src={url}
      ></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar messages={messages} shares={shares} likes={likes} />
    </div>
  );
}

export default Video;
