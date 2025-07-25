import { Route, Routes } from "react-router";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { MainLayout } from "./layouts/mainlayout";
import { Home } from "./pages/Home";
import { Dashboardlayout } from "./layouts/dashboardlayout";
import { Dashboard } from "./pages/dashboard/Dashboardhome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<Dashboardlayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
