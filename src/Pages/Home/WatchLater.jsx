import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import Wl_VideoCard from "../../components/Wl_VideoCard";
import no_video from "../../Images/no_video.svg";
export default function WatchLater(){
    const {state,dispatch} = useVideos();
    const {watchLater} = state;
    console.log(watchLater)
    return(
        <>
        <Nav />
        <h1>Watch Later</h1>
        {watchLater.length === 0?<div className="no_video_image"><img src={no_video} /><h2>Add video to watch</h2></div>:<div className="matrix">{watchLater.map((wl)=>(<Wl_VideoCard video={wl} />))}</div>}
        <Sidenav />
        </>
    )
}