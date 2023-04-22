
import React, { useContext, useEffect, useReducer } from "react"
import reducer from "../reducer"
import axios from "axios"

const initialState = {
    isLoading : true,
    keyword : "",
    data : [],
}
  //let API = 'http://localhost:5000/all'

 let API1 = 'https://real-ruby-turkey-coat.cyclic.app/api/ads/search?'
   //
   //http://localhost:5000/api/ads/search?

  const AppContext = React.createContext()

  //creating a provider
  const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)
     
    //fetching the data
    const fetchApi= async(url)=>{
         dispatch({type : 'SET_LOADING'});
           try{
            const res = await axios.get(url)
            console.log(res)
            dispatch({
                type : "GET_DATA",
                payload : {
                     data : res.data,
                }
             })
           } catch (err) {
               console.log(err)
           }
    }
    //search
    const searchData=(searchQuery)=>{
        dispatch({
            type : 'SEARCH_DATA',
            payload : searchQuery,
        })
    }
   
 // call the api function ALL data
    // useEffect(() =>{
    // fetchApi(API)
    // }, [] )

    // calling the api function for searching
    useEffect(() =>{
         fetchApi(`${API1}keyword=${state.keyword}`)
        }, [state.keyword] )

     return (
        <AppContext.Provider value={{...state, searchData }}>
            {children}
        </AppContext.Provider>
     )
  }
   //createing own custom hook
  const useGlobalContext = () =>{
    return useContext(AppContext)
  }

  export  {AppContext, AppProvider, useGlobalContext};