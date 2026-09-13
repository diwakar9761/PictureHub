import { User, Mail, Lock, EyeOff } from "lucide-react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { toast } from 'sonner';
import logo from "../assets/logo.png";

const Register = () => {

  const navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

    formData.get("firstName");
    formData.get("lastName");
    formData.get("userName");
    formData.get("email");
    formData.get("password");

    const formResults = Object.fromEntries(formData.entries());

    console.log(formResults);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formResults)
      if (response.status === 201) {
        console.log(response);
        toast(response.data.message);
        navigate("/login");
      } else {
        console.log("Something went wrong! Try again");
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      {/* Register Card */}
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="w-37.5">
              <img src={logo} alt="web logo" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

            <p className="text-gray-500 mt-2">Join us and get started today</p>
          </div>

          {/* Form */}
          <form onSubmit={registerUser} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your user name"
                  className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />
              </div>
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="password"
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>

              <div className="relative">
                <CheckCircle2
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Confirm your password"
                  className="w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                />

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeOff size={19} />
                </button>
              </div>
            </div> */}

            {/* Terms */}
            {/* <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-0.5 accent-indigo-600"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-500 leading-5"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Privacy Policy
                </a>
              </label>
            </div> */}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          {/* <div className="flex items-center gap-4 my-6">
            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="h-px bg-gray-200 flex-1" />
          </div> */}

          {/* Social Signup */}
          {/* <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
            >
              <span className="font-bold text-red-500">
                G
              </span>

              <span className="text-sm font-medium text-gray-700">
                Google
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition"
            >
              <span className="font-bold text-gray-800">
                <Apple size={18} color="indigo"/>
              </span>

              <span className="text-sm font-medium text-gray-700">
                Apple
              </span>
            </button>

          </div> */}

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-7">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
