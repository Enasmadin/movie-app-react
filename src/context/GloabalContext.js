import {  createContext , useContext, useEffect, useReducer} from "react";
import {reducer} from"./Reducer";

const initalState = 
{
 watchList:localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[],
 watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]
}

export  const GloabalContext = createContext(initalState);
 

const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initalState);
    useEffect(()=>{
        localStorage.setItem("watchList",JSON.stringify(state.watchList));
        localStorage.setItem("watched",JSON.stringify(state.watchList));
    },[state])

    return <GloabalContext.Provider
            value={{ 
             watchList:state.watchList ,
             watched:state.watched ,
             MoviesDispatch:dispatch 
            }}
             >
         { children} 
    </GloabalContext.Provider>
}
export default  ContextProvider ;



export const  useMovieContext = () =>{
 return useContext(GloabalContext);
};