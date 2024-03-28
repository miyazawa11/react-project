import { UserInfo } from '@/interface';
import {createUser} from '@/api'
import {getAllUsers} from '@/api'
import React, { useState, useEffect } from 'react';
import { TEInput, TERipple } from "tw-elements-react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState<UserInfo[]>([]);
    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const userData = await getAllUsers();
            setUserInfo(userData);
          } catch (error) {
            console.error('Failed to fetch user data:', error);
          }
        };
        fetchUserInfo();
      }, []);
    

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo:UserInfo={
        username:email,
        password:password
    }
    createUser(userInfo)
  };

  return (
    <div>
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
    {userInfo.map((user, index) => (
        <ul key={index}>
          <li>{user.username}</li>
          <li>{user.password}</li>
        </ul>
      ))}
      </div>
  );
}

export default Login;
