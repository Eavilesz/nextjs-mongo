// import { connectDB } from '@/libs/mongodb';
// import User from '@/models/user';

// async function loadUsers() {
//   await connectDB();
//   const users = await User.find();
//   return users;
// }

// async function HomePage() {
//   const users = await loadUsers();

//   return <div>{users[3].name}</div>;
// }
// export default HomePage;
'use client';
import { useEffect, useState } from 'react';

function HomePage() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUser(data[3]));
  }, []);
  return <div>{user.name}</div>;
}
export default HomePage;
