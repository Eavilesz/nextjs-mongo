import { connectDB } from '@/libs/mongodb';
import User from '@/models/user';

async function loadUsers() {
  await connectDB();
  const users = await User.find();
  return users;
}

async function HomePage() {
  const users = await loadUsers();

  return <div>{users[3].name}</div>;
}
export default HomePage;
