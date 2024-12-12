import React, { useEffect ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEditData, setUserData } from '../slices/editSlice';

const Form = () => {
  const { editData } = useSelector((state) => state.edit);
  const { userData } = useSelector((state) => state.edit);
  const { token } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const { handleSubmit, setValue, register } = useForm();
  const [loading, setLoading] = useState(false);
//   console.log(editData);
  useEffect(() => {
    if (editData) {
      setValue('firstname', userData.firstname);
      setValue('lastname', userData.lastname);
      setValue('age', userData.age);
      setValue('role', userData.role);
      setValue('salary', userData.salary);
      setValue('email', userData.email);
      setValue('phoneNo', userData.phoneNo);
    }
  }, [editData, userData]);

  const submitHandler = async (data) => {
    if (editData) {
      // Update user
      try {
        setLoading(true);
        const editDetails = {
          ...data,
          token,
          userId: userData._id,
        };
        const response = await axios.post('http://localhost:4001/api/v1/user/edit', editDetails);
        // const response = await axios.post('https://authify-h5y8.onrender.com/api/v1/user/edit', editDetails);
        if (response.data.success) {
          dispatch(setEditData(false));
          dispatch(setUserData(null));
          localStorage.removeItem('userData');  
          navigate(`/users/user/${userData._id}`);
        }
      } catch (error) {
        console.error('Error editing user:', error);
      }
      setLoading(false);
    } else {
      // Add new user
      try {
        setLoading(true);
        const newDetails = {
          ...data,
          token,
        };
        console.log(newDetails);
        const response = await axios.post('http://localhost:4001/api/v1/user/add', newDetails);
        // const response = await axios.post('https://authify-h5y8.onrender.com/api/v1/user/add', newDetails);
        if (response.data.success) {
          navigate(`/allusers`);
        }
      } catch (error) {
        console.error('Error adding user:', error);
      }
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-10 md:w-[60%] sm:w-[90%] bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg text-white">
      <h1 className="font-bold text-3xl text-center mb-6">
        { editData ? 'EDIT USER' : 'ADD USER'}
      </h1>
      <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-5">
        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-semibold mb-1">
            First Name
          </label>
          <input
            id="firstname"
            {...register('firstname')}
            type="text"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lastname" className="font-semibold mb-1">
            Last Name
          </label>
          <input
            id="lastname"
            {...register('lastname')}
            type="text"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label htmlFor="age" className="font-semibold mb-1">
            Age
          </label>
          <input
            id="age"
            {...register('age')}
            type="number"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter age"
            required
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-1">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            type="email"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter email"
            required
          />
        </div>
        {/* Contact No*/}
        <div className="flex flex-col">
          <label htmlFor="phoneNo" className="font-semibold mb-1">
            Mobile No.
          </label>
          <input
            id="phoneNo"
            {...register('phoneNo')}
            type="text"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter phone No"
            required
          />
        </div>

        {/* Role */}
        <div className="flex flex-col">
          <label htmlFor="role" className="font-semibold mb-1">
            Role
          </label>
          <input
            id="role"
            {...register('role')}
            type="text"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role"
            required
          />
        </div>

        {/* Salary */}
        <div className="flex flex-col">
          <label htmlFor="salary" className="font-semibold mb-1">
            Salary
          </label>
          <input
            id="salary"
            {...register('salary')}
            type="number"
            className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter salary"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {editData && loading? "Updating User..." : ""}
          {editData && !loading? "Update User" : ""}
          {!editData && loading ? "Adding User..." : ""}
          {!editData && !loading ? "Add User" : ""}
        </button>
      </form>
    </div>
  );
};

export default Form;
