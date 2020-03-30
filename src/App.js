import "./App.css";
import SearchBar from "./SearchBar";
import axios from "axios";
import React, { Component } from "react";
import VideoList from "./VideoList";
import VideoDetaile from "./VideoDetaile";

export default class App extends Component {
  state = { ListOfVideos: [], Selectedvideo: null };

  onVideoSelected = VideoSelcted => {
    console.log(VideoSelcted, "Selected video from app component");
    this.setState({ Selectedvideo: VideoSelcted });
  };

  componentDidMount(){
    this.HendelSearchVideo("cats")
  }
  HendelSearchVideo = searchVideo => {
    console.log(searchVideo);
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          // type: 'video',
          q: searchVideo,
          maxResults: 25,
          key: "AIzaSyCIfph2a6-F2MUWkmWE9i4YRkPc9bgdlas"
        }
      })
      .then(res => {
        console.log(res, "this is the videos");

        this.setState({ ListOfVideos: res.data.items ,Selectedvideo:res.data.items[0]});
      })
      .catch(err => {
        console.log(err, "erorr");
      });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar searchVideo={this.HendelSearchVideo} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column"><VideoDetaile Selectedvideo={this.state.Selectedvideo} /></div>
            <div className="five wide column  "> <VideoList
              onVideoSelected={this.onVideoSelected}
              ListOfVideos={this.state.ListOfVideos}
            /></div>
            

           
          </div>
        </div>
      </div>
    );
  }
}
