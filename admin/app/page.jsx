"use client";

import { useState, useEffect } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/getUsers');
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='p-20'>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user._id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email} </p>
            <p>Phone: {user.phone}</p>
            <p>Message: {user.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
