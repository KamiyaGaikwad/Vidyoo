import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import History_VideoCard from "../../components/History_VideoCard";
import VideoCard from "../../components/VideoCard";
import no_video from "../../Images/no_video.svg";
export default function History(){
    const {state,dispatch} = useVideos();
    const {history,liked} = state;
    return(
        <>
        <Nav />
        <h1>History</h1><button className="clear_his" onClick={()=>dispatch({ type: "CLEAR_ALL_HISTORY"})}>Clear full history</button>
        {history.length === 0?<div className="no_video_image"><img src={no_video} /><h2>No history found</h2></div>:<div className="matrix">{history.map((his)=>(<History_VideoCard video={his} />))}</div>}
        {liked.length === 0?null:<><h2>Liked Videos</h2><div className="matrix">{liked.map((lik)=>(<VideoCard video={lik} />))}</div></>}
        <Sidenav />
        </>
    )
}