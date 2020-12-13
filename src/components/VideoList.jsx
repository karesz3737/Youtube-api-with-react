import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect} />
      ))}
    </div>
  );
};

export default VideoList;
  