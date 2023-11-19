import { useVideos } from "../Context/videoContext";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Playlist_Menu from "./Playlist_Menu";

export default function VideoCard({video}){
    const {state,dispatch} = useVideos();
    const {liked} = state;
    const [col,setCol] = useState("hide");
    return(
        <div className="video-card">
            <div className={liked.includes(video)?"video-like-btn redy":"video-like-btn"} onClick={() => dispatch({ type: "ADD_TO_LIKED", payload: video })}><i className="fas fa-heart"></i></div>
            <div className="video-time">{video.timeStamp}</div>
            <img className="video-card-img" src={video.imageURL} alt={video.videoURL}/>
            <div className="flex gap verti-center text-left texty">
            <img className="channel-logo" src={video.channelImg} alt={video.creator}/>
            <div class="content"><div className="video-title">{video.title}</div>
            <div className="video-subtitle">{video.creator} | {video.views} Views | {video.uploadDate}</div></div></div>
            <div className="video-btn-container"><Link to="/videopage" onClick={()=>dispatch({ type: "TO_EMBED", payload: video.videoURL })}>
          <button className="video-btn" onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}>Watch Now</button></Link><button className="video-btn-clock"  onClick={() => dispatch({ type: "ADD_TO_WATCH", payload: video })}><i class="far fa-clock"></i></button><button className="video-btn-clock"  onClick={() => dispatch({ type: "OPEN_PLAYLIST_VIDEO", payload: video })}><i className="fas fa-plus" onClick={()=>setCol("")}></i></button></div>
        <div className={col} onClick={()=>setCol("hide")}><Playlist_Menu /></div>
        </div>
    )}

    