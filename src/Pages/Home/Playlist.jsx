import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import VideoCard from "../../components/VideoCard";
import no_video from "../../Images/no_video.svg";
import { useState } from "react";
import "../../App.css"
import Play_card from "../../components/Play_card";
export default function Playlist(){
    const {state,dispatch} = useVideos();
    const {playlist} = state;
    const[name,setName] = useState({name:"",content:[]});
    const [show,setShow] = useState("name-cont hide")

    function handleClick(g){
        setName({name:g,content:[]})
    }
    return(
        <>
        <Nav />
        <h1>Playlist</h1>
        <button className="clear_his" onClick={()=>setShow("name-cont")}>Create playlist</button>
        <div className={show}><p>Enter playlist name</p><input onChange={event => handleClick(event.target.value)}/><button className="video-btn" onClick={()=>{dispatch({type:"CREATE_PLAYLIST", payload:name});setShow("name-cont hide")}}>Submit</button></div>
        {playlist.length === 0?<div className="no_video_image"><img src={no_video} /><h2>Add video to play</h2></div>:<div className="matrix">{playlist.map((play)=>(<Play_card video={play} />))}</div>}
        <Sidenav />
        </>
    )
}