import { GiPostStamp } from "react-icons/gi";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { EngagementBarChart } from "../../components/charts/chart";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth ,db} from "../../services/config";
import { doc, getDoc } from "firebase/firestore";

export const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data() as { username: string });
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="text-white">

      <h1 className="text-2xl font-bold mb-1"> Welcome Back, @{userData?.username ?? "Loading..."} 👋</h1>
      <p className="text-sm text-[var(--Louge-color)]  mb-6">Here's what's happening today on UniLounge.</p>

      {/* Stats Cards */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4">
        {[
          { title: "Post Created", icon: <GiPostStamp size={28} />, value: 32 },
          { title: "Total Likes", icon: <FaHeart size={28} />, value: 540 },
          { title: "Comments", icon: <FaMessage size={28} />, value: 92 },
          { title: "Followers", icon: <IoPerson size={28} />, value: "1.2k" },
        ].map((item, i) => (
          <div key={i} className="bg-gradient-to-t from-[#3a0436] to-[#000000] p-6 rounded-lg flex flex-col items-center justify-center gap-3 shadow-md">
            <button className="bg-white text-[var(--Louge-color)] p-3 rounded-full">{item.icon}</button>
            <p className="text-lg font-medium text-center">{item.title}</p>
            <p className="text-3xl font-bold text-center">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mt-8 px-4">

        {/* Chart Section */}
        <div className="bg-black rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Engagement Overview</h2>
          <EngagementBarChart />
        </div>

        {/* Notifications */}
        <div className="bg-[#1c1b1b] rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Recent Notifications</h2>
          <ul className="space-y-2">
            <li className="bg-white text-black p-3 rounded-md">👤 123 users liked your profile</li>
            <li className="bg-white text-black p-3 rounded-md">➕ New follower: @jaydeep</li>
            <li className="bg-white text-black p-3 rounded-md">💬 You got 12 new messages</li>
          </ul>
        </div>
      </div>

      {/* Active Users + Trending Topics + Post Preview */}
      <div className="grid lg:grid-cols-3 gap-4 mt-8 px-4">

        {/* Active Users */}
        <div className="bg-[#1c1b1b] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Active Users</h2>
          <div className="grid grid-cols-5 gap-3">
            {[...Array(11)].map((_, i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?img=${i}`}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-green-500"
              />
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-[#1c1b1b] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">🔥 Trending Topics</h2>
          <ul className="text-sm space-y-2">
            <li>#AIin2025</li>
            <li>#WomenInTech</li>
            <li>#OpenSourceLove</li>
            <li>#ReactRocks</li>
            <li>#NightModeLife</li>
          </ul>
        </div>

        {/* Recent Posts Preview */}
        <div className="bg-[#1c1b1b] p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">📢 Recent Posts</h2>
          <ul className="text-sm space-y-3">
            <li className="bg-[#2c2c2c] p-3 rounded-md">"Finally launched my AI portfolio!" – @nency</li>
            <li className="bg-[#2c2c2c] p-3 rounded-md">"React hooks just made life easier!" – @dev_jay</li>
            <li className="bg-[#2c2c2c] p-3 rounded-md">"Need team for open-source collab!" – @alpha</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
