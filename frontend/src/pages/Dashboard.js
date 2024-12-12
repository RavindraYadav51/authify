import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.profile); // Access user state from Redux

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10 px-6">
      {
        user && (
          <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-xl bg-transparent">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-white mb-4">Dashboard</h1>

              {/* User Details with Labels */}
              <div className="text-left mb-4">
                <p className="text-xl text-white mb-2"><span className="font-bold">First Name:</span> <span className="font-semibold">{user.firstname}</span></p>
                <p className="text-xl text-white mb-2"><span className="font-bold">Last Name:</span> <span className="font-semibold">{user.lastname}</span></p>
                <p className="text-xl text-white mb-2"><span className="font-bold">Email:</span> <span className="font-semibold">{user.email}</span></p>
                <p className="text-xl text-white mb-2"><span className="font-bold">Account Type:</span> <span className="font-semibold">{user.accountType}</span></p>
              </div>
            </div>

            {/* Conditional Button for Admin */}
            {user.accountType === 'Admin' && (
              <div className="flex justify-center mt-8">
                <Link to="/add-user">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-200">
                    Add User
                  </button>
                </Link>
              </div>
            )}
          </div>
        )
      }
    </div>
  );
};

export default Dashboard;
