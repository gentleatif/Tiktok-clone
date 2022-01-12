import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/v2/posts");
      setVideos(req.data);
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, song, description, likes, messages, shares }) => (
            <Video
              key={url}
              url={url}
              description={description}
              channel={channel}
              likes={likes}
              shares={shares}
              messages={messages}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
