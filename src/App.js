import { Routes, Route} from "react-router-dom";
import "./App.css";
import { VideosProvider } from "./Context/videoContext";
import Home from "./Pages/Home/Home";
import Trending from "./Pages/Home/Trending";
import History from "./Pages/Home/History";
import Playlist from "./Pages/Home/Playlist";
import WatchLater from "./Pages/Home/WatchLater";
import VideoPage from "./Pages/Home/VideoPage";
import See_Playlist from "./Pages/Home/See_Playlist";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Logout } from "./Pages/Logout";
import { AuthProvider } from "./Context/authContext";

function App() {
  return (
    <AuthProvider>
    <VideosProvider>
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/videopage" element={<VideoPage />} />
        <Route path="/playlistpage" element={<See_Playlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
    </VideosProvider>
    </AuthProvider>
  );
}

export default App;
