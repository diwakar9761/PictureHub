import axios from "axios";
import { Mail, Lock, EyeOff } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { userDataContext } from "../context/UserContext";
import logo from "../assets/logo.png";
import { LoaderDataContext } from "../context/LoaderContext";

const Login = () => {

  const serverURL = import.meta.env.DEV ? "http://localhost:3000" : "https://picturehub-server.vercel.app"

  const navigate = useNavigate();
  const {setLoader} = useContext(LoaderDataContext)
  const {setUserData, allUsersData} = useContext(userDataContext)

  const loginUser = async (e) => {
    e.preventDefault()
    setLoader(true);
    const formData = new FormData(e.target)

    formData.get("email")
    formData.get("password")

    const loginFormValues = Object.fromEntries(formData.entries())

    console.log(loginFormValues);

    try {
      let res = await axios.post(`${serverURL}/api/auth/login`, loginFormValues, {withCredentials: true})
      if (res.status === 200) {
          console.log(res);
          setUserData(res.data.user)
          toast(res.data.message);
          navigate("/");
          setLoader(false);
          console.log("1", res.data.message);
      } else {
        setLoader(false);
        console.log("2", res.message);
      }
    } catch (error) {
        setLoader(false);
        console.log("3", error.message);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">

      {/* Login Card */}
      <div className="w-full max-w-md">

        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-37.5">
              <img src={logo} alt="web logo" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-500 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={loginUser} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  
                <EyeOff size={19} />
                  
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-indigo-600"
              />

              <label
                htmlFor="remember"
                className="text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          {/* <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px bg-gray-200 flex-1" />
          </div> */}

          {/* Social Login */}
          {/* <div className="grid grid-cols-2 gap-3">

            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              <span className="font-bold text-red-500">G</span>
              <span className="text-sm font-medium text-gray-700">
                Google
              </span>
            </button>

            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
              <span className="font-bold text-gray-800">A</span>
              <span className="text-sm font-medium text-gray-700">
                Apple
              </span>
            </button>

          </div> */}

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create account
            </a>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;