import { Route, Routes } from "react-router";
import { Home } from "./components/layouts/main";
import {Login} from "./pages/auth/Login"
import { Signup } from "./pages/auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
