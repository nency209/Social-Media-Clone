// AllUsersList.tsx
import { useEffect, useState } from "react";
import { db } from "../../services/config";
import { collection, getDocs } from "firebase/firestore";

type User = {
  uid: string;
  username: string;
  avatar: string;
};

export const AllUsersList = ({ onSelect }: { onSelect: (user: User) => void }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      const userList: User[] = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  return (
    <div className="w-64 border-r border-gray-700 overflow-y-auto">
      <h2 className="text-white text-xl p-4">Users</h2>
      {users.map((user) => (
        <div
          key={user.uid}
          className="p-3 hover:bg-[var(--Louge-color)] text-white cursor-pointer"
          onClick={() => onSelect(user)}
        >
          @{user.username}
        </div>
      ))}
    </div>
  );
};
