import React, { useEffect } from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../zustand/useConversation.js'
import { useAuth } from "../../context/Authprovider.jsx"
import { CiMenuFries } from "react-icons/ci";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  useEffect(() => {
    return setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='w-full text-gray-300 bg-[#1a202d]'>
      <div>
        {!selectedConversation ? (<NoChatSelected />) : (<>
          <Chatuser />
          <div className='overflow-y-scroll flex-1' style={{ maxHeight: "calc(92vh - 8vh)" }}>
            <Messages />
          </div>
          <Typesend />
        </>)}
      </div>
    </div>
  )
}

export default Right



const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className='relative'>
        <label 
        htmlFor="my-drawer-2" 
        className='btn btn-ghost drawer-butoon lg:hidden absolute left-5'>
        <CiMenuFries className='text-white text-xl'/>
        </label>
        <div className='flex h-screen items-center justify-center'>
          <h1 className='text-center'>
            Welcome 
            <span className='font-semibold text-xl'> {authUser.user.fullname}</span>
            <br />
            No chat selected, Please start conversation by selecting anyone to your contact
          </h1>
        </div>
      </div>
    </>
  )
}