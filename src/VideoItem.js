import React from "react";
import './VideoItem.css'

export default function VideoItem(props) {
  console.log(props.video, "video Item");
  const video = props.video;

  return (
    <div className="video-item item" onClick={e =>{

        console.log(video.id.videoId, "selected video");
        props.onVideoSelected(video)
    }}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.title}
      ></img>
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
}
