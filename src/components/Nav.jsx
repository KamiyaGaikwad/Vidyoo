import logo from "../logo.png";
import "../App.css";

export default function Nav(){
        
    return(
        <nav className="nav-dark">
        <img src={logo} alt="Logo" className="brand-img"/>
        <i className="fas fa-search search-icon"></i>
        <div className="stream-type"></div>
        <div className="profile"><img src="https://avatars.dicebear.com/api/avataaars/:s.svg?mood[]=happy" alt="profile"  className="profile-img" /></div>
        </nav>
    )
}