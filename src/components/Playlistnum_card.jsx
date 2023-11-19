import { useVideos } from "../Context/videoContext";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Playlistnum_card({video,ny}){
    const {state,dispatch} = useVideos();
    const {liked} = state;
    // const [col,setCol] = useState({pl:{},vi:{}});
    // setCol({pl:ny,vi:video})
    console.log({pl:ny,vi:video})
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
          <button className="video-btn" onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: video })}>Watch Now</button></Link><button className="video-btn-clock"  onClick={() => dispatch({ type: "ADD_TO_WATCH", payload: video })}><i class="far fa-clock"></i></button></div>
        </div>
    )}

    // <button className="video-btn-clock"  onClick={() => dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: {pl:ny,vi:video} })}><i className="fas fa-trash-alt"></i></button>

    