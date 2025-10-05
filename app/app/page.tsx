import AddUser from "./components/AddUser";
import UserData from "./components/UserData";
import { fetchData } from "./lib/api";

export default async function Home() {
  // Server-side data fetching
  const users = await fetchData();

  return (
    <div className="p-6">
      <AddUser />
      <UserData initialUsers={users} />
    </div>
  );
}
