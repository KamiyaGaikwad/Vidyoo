import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import VideoCard from "../../components/VideoCard";
import no_video from "../../Images/no_video.svg";
import Playlistnum_card from "../../components/Playlistnum_card";
import { useState } from "react";
export default function See_Playlist(){
    const {state,dispatch} = useVideos();
    const {openplaylist,playlist} = state;
    console.log(openplaylist)
    return(
        <>
        <Nav />
        <h1>{openplaylist.name}</h1>
        {Number(openplaylist.content.length) === 0?<div className="no_video_image"><img src={no_video} /><h2>No video found</h2></div>:<div className="matrix">{openplaylist.content.map((ply)=>(<Playlistnum_card video={ply} ny={openplaylist} />))}</div>}
        <Sidenav />
        </>
    )
}