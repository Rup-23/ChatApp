import React from 'react'
import User from './User'
import useGetAllUsers from "../../context/useGetAllUsers"

const Users = () => {
  const [allUsers, loading] = useGetAllUsers()
  console.log(allUsers);

  return (
    <div>
      <h1 className='px-7 py-2 text-white font-semibold bg-slate-800 rounded-md'>Messages</h1>

      <div
        className="overflow-y-scroll flex-1 py-2"
        style={{ maxHeight: "calc(82vh - 10vh)" }}>

        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>

    </div>
  )
}

export default Users;