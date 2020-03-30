import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ ListOfVideos ,onVideoSelected}) => {
  const REndervideosList = ListOfVideos.map(video => {
    return <VideoItem  key={video.id.videoId} video ={video} onVideoSelected={onVideoSelected} />;
  });
  return (
    <div className="ui relaxed divided list">
      You have {ListOfVideos.length} Results
      {REndervideosList}
    </div>
  );
};


export default VideoList;
