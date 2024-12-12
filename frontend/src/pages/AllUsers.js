import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllUsers = () => {
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        // const response = await axios.get('http://localhost:4001/api/v1/user/getallusers');
        const response = await axios.get('https://authify-2dkk.onrender.com/api/v1/user/getallusers');
        if (response.data.success) {
          setUsers(response.data.users);
          console.log(users);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="border-2 font-bold font-mono text-xl border-black md:w-[50%] mx-auto sm:w-[90%] mt-10">
        <thead className="bg-gray-200">
          <tr className="flex justify-between p-2">
            <th className="border-black p-2 text-left" scope="col">User-Name</th>
            <th className="border-black p-2 text-left" scope="col">PhoneNo</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user) => (
            <Link key={user._id} to={`/users/user/${user._id}`} className="block">
              <tr className="border-black border-2 p-2 cursor-pointer flex justify-between hover:bg-gray-100 transition duration-200 ease-in-out">
                <td className="truncate p-2">{user.firstname} {user.lastname}</td>
                <td className="p-2">{user.phoneNo}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
      {/* <table className="border-2 font-bold font-mono text-xl mt-5  border-black mx-auto w-[50%]">
        
        <div className='flex flex-col gap-10'> 
        <th>
          <tr className="flex justify-between p-2">
            <th className="border-black">User-Name</th>
            <th className="border-black">PhoneNo</th>
          </tr>
        </th>
          
          { users && (
            users.map((user) => (
              <Link key={user._id} to={`/users/user/${user._id}`}>
                <tr className="border-black border-2 p-2 cursor-pointer justify-between flex">
                  <td className="truncate">{user.firstname} {user.lastname}</td>
                  <td>{user.phoneNo}</td>
                </tr>
              </Link>
            )) ) }

         </div>
      </table> */}
    </div>
  );
};

export default AllUsers;