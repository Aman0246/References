import {createContext, useContext, useEffect, useState} from "react"
const chatContext= createContext()

const ChatProvider=({childern})=>{
return(
<chatContext.Provider value={{user,setUser}}>
    {childern}
</chatContext.Provider>
)}



export const ChatState=()=>{
return useContext(chatContext)
}


export default ChatProvider 