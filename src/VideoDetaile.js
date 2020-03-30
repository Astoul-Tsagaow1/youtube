/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function VideoDetaile(props) {
  const video = props.Selectedvideo;
  console.log(video, "selected Video");

  if (!video) {
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="ui embed">
        {" "}
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
