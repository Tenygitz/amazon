import {createContext,useContext,useReducer} from "react";


// to create a Context
export const StateContext=createContext();

export const StateProvider=({reducer,initialState,children})=>(
 <StateContext.Provider value={useReducer(reducer,initialState)}>
      {children}
 </StateContext.Provider>
)
export const useStateValue=()=>useContext(StateContext)