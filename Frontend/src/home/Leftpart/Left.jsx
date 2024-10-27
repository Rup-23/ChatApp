import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-full text-gray-300 bg-[#101820ff]'>
     <Search/>
     <div className='overflow-y-scroll flex-1' 
     style={{ minHeight: "calc(82vh - 10vh)" }}>
     <Users/>
     </div>
     <Logout/>
    </div>
  )
}

export default Left
