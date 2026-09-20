import { CircleUserRound, ContactRound, Mail, UserCheck, UserPen, UserStar, X } from "lucide-react";
import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
import { LoaderDataContext } from "../context/LoaderContext";

const ProfileEdit = ({ onClosePopup }) => {
      const serverURL = import.meta.env.DEV ? "http://localhost:3000" : "https://picturehub-server.vercel.app"

      const {setLoader} = useContext(LoaderDataContext)
      const {userData, setUserData} = useContext(userDataContext);

      const [firstName, setFirstName] = useState(userData.firstName);
      const [lastName, setLastName] = useState(userData.lastName);
      const [userName, setUserName] = useState(userData.userName);
      const [email, setEmail] = useState(userData.email);
      const [profileImage, setProfileImage] = useState();
      const [profileBio, setProfileBio] = useState(userData.bio);

      const formData = new FormData();
      formData.append("profileImage", profileImage)
      formData.append("firstName", firstName)
      formData.append("lastName", lastName)
      formData.append("bio", profileBio)

      const profileSubmit = async(e) => {
        setLoader(true);
        e.preventDefault()
        const updatedUser = await axios.patch(`${serverURL}/api/user/update`, formData, {withCredentials: true})
        if (updatedUser.status === 200) {
          setLoader(false);
          setUserData(updatedUser.data.user);
          onClosePopup();
        } else {
          setLoader(false);
        }
      }
    
  return (
    <div className={`overflow-hidden scrollbar-none h-full w-full top-0 z-50 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-95 fixed`}>
      <div className="flex items-center justify-center p-4">
        {/* Login Card */}
        <div className="w-180">
          <div className="bg-white backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 h-screen mb-9 overflow-scroll">
            {/* Heading */}
            <div className="mb-8 relative">
              <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
              <span className="absolute right-0 top-2 cursor-pointer" onClick={() => onClosePopup()}> <X /> </span>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => profileSubmit(e)}>
              
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>

                <div className="relative">
                  <UserPen 
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>

                <div className="relative">
                  <UserStar
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* User Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Name
                </label>

                <div className="relative">
                  <UserCheck
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    disabled
                    placeholder="User Name"
                    className="w-full text-gray-600 cursor-not-allowed pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    placeholder="you@example.com"
                    className="w-full text-gray-600 cursor-not-allowed pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                  />
                </div>
              </div>

               {/* Image Profile */}
               <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image
                </label>

                <div className="relative">
                  <CircleUserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="file"
                    name="profileImage"
                    onChange={(e) => setProfileImage(e.target.files[0])}
                    placeholder="Last Name"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Bio
                </label>

                <div className="relative">
                  <ContactRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="profileBio"
                    value={profileBio}
                    onChange={(e) => setProfileBio(e.target.value)}
                    placeholder="Enter bio"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                  />
                </div>
              </div>
              

              
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition"
              >
                Update Profile
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
