import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from '../slices/profileSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.profile);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(setToken(null));
    dispatch(setUser(null));
    navigate('/');
  };
  return (
    <div className='bg-gradient-to-r from-purple-300 via-pink-200 to-orange-300 md:h-14 md:py-10 mx-auto md:flex md:flex-row md:gap-32 md:items-center md:justify-evenly border-b-2 border-blue-950 flex flex-col items-center mt-2 gap-2 h-40 shadow-md shadow-gray-400'>
      <Link to='/'>
        <p className='text-white bg-black shadow-md shadow-black p-2 duration-200 transition-all hover:scale-90 font-mono font-bold text-2xl py-1'>
          AUTHIFY
        </p>
      </Link>

      <ul className='flex flex-row gap-4'>
          <Link to='/allusers'>
            <li className='text-white bg-black shadow-md shadow-black px-5 py-2 duration-200 transition-all hover:scale-90 text-lg font-bold font-mono'>
              users
            </li>
          </Link>
      </ul>

      {token === null && (
        <div className='flex flex-row gap-2'>
          <Link to='/signin'>
            <button className='rounded-full py-1 px-4 bg-blue-800 text-lime-50 shadow-sm shadow-black h-max font-semibold transition-all duration-200 hover:bg-blue-900 hover:scale-95'>
              Sign In
            </button>
          </Link>

          <Link to='/signup'>
            <button className='rounded-full px-4 py-1 bg-blue-800 text-lime-50 shadow-sm shadow-black h-max font-semibold transition-all duration-200 hover:bg-blue-900 hover:scale-95'>
              Sign Up
            </button>
          </Link>
        </div>
      )}

      {token !== null && (
        <>
            {/* Logout Button */}
            <div className='group z-10'>
              <button className ='rounded-full py-1 px-4 bg-blue-800 text-lime-50 shadow-sm shadow-black h-max font-semibold transition-all duration-200 hover:bg-blue-900 hover:scale-95 z-10 md:mt-28 p-1'>
                { user.firstname[0]} {user.lastname[0]}
              </button>
              <div className='invisible w-36 bg-white text-black border-2 border-black text-xl p-4 flex flex-col gap-3 duration-200 transition-all group-hover:visible z-20'>
                <Link to={'/dashboard'}>
                  <div className='border-b-4 cursor-pointer'>Dashboard</div>
                </Link>
                <div
                  onClick={logoutHandler}
                  className='border-b-4 cursor-pointer text-black'
                >
                  Logout
                </div>
              </div>
            </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

