import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  LayoutTemplateIcon,
  LogIn,
  LogOut,
  UserRoundKey,
  UserShield,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext.jsx";
import logo from "../assets/logo.png";

const Header = () => {

  const navigate = useNavigate();
  const {userData, setUserData} = useContext(userDataContext)
  const serverURL = import.meta.env.DEV ? "http://localhost:3000" : "https://picturehub-server.vercel.app"
  const logout = async () => {
    console.log("user is trying to logout");
    try {
      let res = await axios.get(`${serverURL}/api/auth/logout`, {withCredentials: true})
      if (res.status === 200) {
        setUserData(null);
        toast(res.data.message);
        navigate("/login");
      } else {
        console.log("logout error!")
      }
    } catch(err) {
      console.log(err)
    }
  }

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">

      <div className="w-full max-w-7xl mx-auto">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-3"
          >
            <div className="w-37.5">
              <span className="">
                <img src={logo} alt="Web Logo" />
              </span>
            </div>
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-1">

            {/* Dashboard */}
            <NavLink
              to="/"
              className={navLinkClass}
              hidden={!userData}
            >
              <LayoutDashboard size={17} />

              <span className="hidden md:inline">
                Feed
              </span>
            </NavLink>

            {/* Profile */}
            <NavLink
              to="/profile"
              className={navLinkClass}
              hidden={!userData}
            >
              <UserShield size={17} />

              <span className="hidden md:inline">
                My Profile
              </span>
            </NavLink>

            {/* Login */}
            <NavLink
              to="/login"
              className={navLinkClass}
              hidden={userData}
            >
              <LogIn size={17} />

              <span className="hidden md:inline">
                Login
              </span>
            </NavLink>

            {/* Register */}
            <NavLink
              to="/register"
              className={navLinkClass}
              hidden={userData}
            >
              <UserRoundKey size={17} />

              <span className="hidden md:inline">
                Register
              </span>
            </NavLink>

            {/* Logout */}
            <button
              type="button"
              onClick={logout}
              hidden={!userData}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-500 transition cursor-pointer"
            >
              <LogOut size={17} />

              <span className="hidden md:inline">
                Logout
              </span>
            </button>

          </nav>

        </div>

      </div>
    </header>
  );
};

export default Header;