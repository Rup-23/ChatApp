import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";
import useSendMessage from '../../context/useSendMessage.js';


const Typesend = () => {
    const [message, setMessage] = useState("")
    const { loading, sendMessages } = useSendMessage();

    const handleSubmit = async (e) => {
      e.preventDefault();
        await sendMessages(message)
        setMessage("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex space-x-1 h-[8vh] bg-gray-800'>
                <div className='w-[80%] mx-9 mt-1 '>
                    <input type="text"
                        placeholder="Type here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input input-bordered w-full" />
                </div>
                <button>
                    <VscSend className='text-4xl' />
                </button>
            </div>
        </form>
    )
}

export default Typesend;



