import AdvertisementCard from "../../components/AdvertisementCard";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import VideoCard from "../../components/VideoCard";
import { useState } from "react";
import { useEffect } from "react";
import { useVideos } from "../../Context/videoContext";
import FilterChips from "../../components/FilterChips";
export default function Home(){
    const {state,dispatch} = useVideos();
    const {videos} = state;
    return(
        <>
        <Nav />
        <FilterChips />
        <div className="matrix">
        <AdvertisementCard />
        {videos.map((video)=>(<VideoCard video={video} />))}</div>
        <Sidenav />
        </>
    )
}