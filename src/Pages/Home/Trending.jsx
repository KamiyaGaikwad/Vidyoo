import { useVideos } from "../../Context/videoContext";
import Nav from "../../components/Nav";
import Sidenav from "../../components/SideNav";
import VideoCard from "../../components/VideoCard";
export default function Trending(){
    const {state,dispatch} = useVideos();
    const {trending} = state;
    return(
        <>
        <Nav />
        <h1>Trending</h1>
        <div className="matrix">
        {trending.map((tren)=>(<VideoCard video={tren} />))}</div>
        <Sidenav />
        </>
    )
}