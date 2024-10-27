import React from 'react'
import useCoversation from "../../zustand/useConversation.js"
import { useSocketContext } from '../../context/SocketContext.jsx';
import { CiMenuFries } from "react-icons/ci";

const Chatuser = () => {
    const {selectedConversation} = useCoversation();
    const {onlineUsers} = useSocketContext()
    // console.log(selectedConversation);
    
const getOnlineUsersStatus = (userId)=>{
    return onlineUsers.includes(userId)?"Online":"Offline"
} 


    return (
        <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
      
        <div className='flex items-center h-[8vh] bg-gray-800 hover:bg-gray-700 space-x-2'>
            <div className="avatar mx-2">
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-xl'>{selectedConversation.fullname}</h1>
                <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
            </div>
        </div>
        </div>
    )
}

export default Chatuser
