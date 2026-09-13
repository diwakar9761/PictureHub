import { Routes, Route, Navigate } from "react-router-dom";

import Feed from "./pages/Feed.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import AllUsers from "./pages/AllUsers.jsx";

import { useContext } from "react";
import { userDataContext } from "./context/UserContext.jsx";

const App = () => {
  let {userData} = useContext(userDataContext)
  return (
    <Routes>
        <Route path="/login" element={userData ? <Navigate to="/"> </Navigate> : <Login />} />
        <Route path="/register" element={userData ? <Navigate to="/"> </Navigate> : <Register />} />
        <Route path="/" element={userData ? <Feed /> : <Navigate to="/login" />} />
        <Route path="*" element={userData ? <Feed /> : <Navigate to="/login" />} />
        <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/users" element={userData ? <AllUsers /> : <Navigate to="/login" />} />
      </Routes>
  )
}

export default App
