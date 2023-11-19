import { useVideos } from "../Context/videoContext";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Play_card({video}){
    const {state,dispatch} = useVideos();
    const {playlist} = state;
    return(
        <div class="playcard">
            <div class="play-cont"><div className="playlist-name">{video.name}</div>
            <div className="playlist-length">{Number(video.content.length)} videos</div></div>
          <div class="play-btn-cont"><Link to="/playlistpage"  onClick={() => dispatch({ type: "OPEN_PLAYLIST", payload: video })}><button className="video-btn">Watch Now</button></Link><button className="video-btn-clock" onClick={() => dispatch({ type: "REMOVE_PLAYLIST", payload: video })}><i className="fas fa-trash-alt"></i></button></div></div>
    )}

    