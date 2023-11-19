import { createContext,useContext,useReducer } from "react";
import { useEffect} from "react";
import { intialState,VideoReducer } from "../Reducer/videoReducer";
import axios from "axios";

const VideosContext = createContext(intialState);


const VideosProvider = ({children})=>{
    const [state,dispatch] = useReducer(VideoReducer,intialState);
    useEffect(()=>{
        (async ()=>{
            try{
                const{
                    data:{videos},
                } = await axios.get('/api/videos');
                dispatch({
                    type:"GET_VIDEOS",
                    payload:videos,
                });
            }
            catch(error){
                console.log(error);
            }
        })();

    },[]);
    return(
        <VideosContext.Provider value={{state,dispatch}}>
            {children}
        </VideosContext.Provider>
    )
}

const useVideos =()=> useContext(VideosContext);

export {VideosProvider,useVideos};