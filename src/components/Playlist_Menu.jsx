import { useVideos } from "../Context/videoContext";
import "../App.css";

export default function Playlist_Menu(){
    const {state,dispatch} = useVideos();
    const {playlist} = state;
    return(
        <div class="p-menu">
            Select playlist
            {playlist.length === 0?<p>No Playlist Found</p>:
            <ul className="p-list">
                {playlist.map((s)=><li onClick={() => dispatch({ type: "ADD_TO_PLAY", payload: s })}>{s.name}</li>)}
            </ul>}
        </div>
    )
}