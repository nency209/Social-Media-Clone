import { Route, Routes } from "react-router";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { MainLayout } from "./layouts/mainlayout";
import { Home } from "./pages/Home";
import { Dashboardlayout } from "./layouts/dashboardlayout";
import { Dashboard } from "./pages/dashboard/Dashboardhome";
import { HomeFeed } from "./pages/dashboard/HomeFedd";
import { CreatePost } from "./pages/dashboard/CreatePostForm";
import { Notifications } from "./pages/dashboard/Notification";
import { ProfilePage } from "./pages/dashboard/profilepage";
import { EditProfile } from "./pages/dashboard/editprofile";
import { MessagesPage } from "./pages/dashboard/message";
import { SettingsPage } from "./pages/dashboard/settingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<Dashboardlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="homefeed" element={<HomeFeed />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile/:uid" element={<ProfilePage />} />
          <Route
            path="/dashboard/profile/:uid/edit"
            element={<EditProfile />}
          />
          <Route path="/dashboard/messages" element={<MessagesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
