import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => setLiked(true)}
            fontSize="large"
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
