import "../App.css";
import { Link } from "react-router-dom";
export default function Sidenav(){
    return(
        <footer className="footery">
        <Link to="/"><div className="fc"><i className="fas fa-home"></i>Home</div></Link>
        <Link to="/Trending"><div className="fc"><i class="fas fa-video"></i>Trending</div></Link>
        <Link to="/Playlist"><div className="fc"><i class="fas fa-fast-forward"></i>Playlists</div></Link>
        <Link to="/WatchLater"><div className="fc"><i class="far fa-clock"></i>WatchLater</div></Link>
        <Link to="/History"><div className="fc "><i class="fas fa-history"></i>History</div></Link>
        </footer>
    )
}