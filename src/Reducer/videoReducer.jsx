const intialState = {
        videos:[],
        category:[],
        liked:[],
        trending:[],
        history:[],
        watchLater:[],
        playlist:[],
        embed:"",
        openplaylist:{},
        openplaylistvideo:{},
        prefferedCategory:[],
}

const VideoReducer = (state,action)=>{
    
    switch(action.type){
        case "GET_VIDEOS":
            return{
                ...state,
                videos:action.payload,
                trending:action.payload.filter((video)=>video.views.includes("M"))
                
            }
        case "ADD_TO_WATCH":
            if(state.watchLater.includes(action.payload))
            {return{
                ...state
                    
            }}
            else{
                return{
                    ...state,
                    watchLater:[...state.watchLater,action.payload]
                        
                } 
            }

        case "ADD_TO_PLAY":
            state.playlist.map((j)=>{if(j === action.payload){
                if(!j.content.includes(state.openplaylistvideo)){
                j.content.push(state.openplaylistvideo)}
            }})
            return{
                ...state,
                playlist: [...state.playlist],
                openplaylistvideo:{}
            }

        case "ADD_TO_HISTORY":
            if(state.history.includes(action.payload))
            {return{
                ...state
                    
            }}
            else{
                return{
                    ...state,
                    history:[...state.history,action.payload]
                        
                } 
            }
            

        case "ADD_TO_LIKED":
            if(state.liked.includes(action.payload))
            {return{
                ...state,
                liked:state.liked.filter((l)=>l!==action.payload)
                    
            }}
            else{
                return{
                    ...state,
                    liked:[...state.liked,action.payload]
                        
                } 
            }

        case "TO_EMBED":
            return {
                ...state,
                embed:action.payload
            }

        case "REMOVE_FROM_HISTORY":
            
            return {
                ...state,
                history:[...state.history.filter((h)=>h!==action.payload)]
            }

        case "CLEAR_ALL_HISTORY":
            return{
                ...state,
                history:[]
            }
    

        case "REMOVE_FROM_WATCH":
            return{
                ...state,
                watchLater:[...state.watchLater.filter((w)=>w!==action.payload)]
            }
        case "CREATE_PLAYLIST":
            return{
                ...state,
                playlist:[...state.playlist,action.payload]
            }

        case "REMOVE_PLAYLIST":
            return{
                ...state,
                playlist:[...state.playlist.filter((p)=>p!==action.payload)]
            }

        case "OPEN_PLAYLIST":
            return{
                ...state,
                openplaylist:action.payload
            }
    
        case "OPEN_PLAYLIST_VIDEO":
            return{
                ...state,
                openplaylistvideo:action.payload
            }

        
    
        // case "REMOVE_FROM_PLAYLIST":
                        
        //     return{
        //         ...state,
        //         playlist: state.playlist.map((j)=>{if(j === action.payload.pl){
        //             j.content.filter(l=> l!== action.payload.vi)
        //             state.openplaylist = j
        //             console.log(state.openplaylist)
        //         }else{console.log(state.openplaylist)}})
                

        //     }
        }
}

export {intialState,VideoReducer}