import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import {updateProfile,logout} from "../redux/features/authSlice" ;


export default function UserProfile(){
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">User Profile</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        disabled
        className="w-full p-2 mb-3 border rounded bg-gray-100"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full p-2 mb-3 border rounded"
      />
      <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded">
        Update Profile
      </button>
    </form>
    <button
      onClick={() => dispatch(logout())}
      className="w-full mt-4 bg-red-500 text-white py-2 rounded"
    >
      Logout
    </button>
  </div>
}