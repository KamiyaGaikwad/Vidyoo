import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import VideoCard from "../../components/VideoCard";
import no_video from "../../Images/no_video.svg";
import "../../App.css";
import VideoEmbed from "../../components/VideoEmbed";
export default function VideoPage(){
    const {state,dispatch} = useVideos();
    const {embed} = state;
    let embedId = embed.split("=")[1];
    return(
        <>
        <Nav />
        <VideoEmbed embedId={embedId} />
        <Sidenav />
        </>
    )
}