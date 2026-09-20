import { useContext, useState } from "react";
import {
  Search,
  UserPlus,
  UserCheck,
  MapPin,
  MoreHorizontal,
} from "lucide-react";
import { userDataContext } from "../context/UserContext.jsx";
import placeholder from "../assets/placeholder.png"
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const goToProfile = (id) => {
    if (id) {
      navigate(`/profile/${id}`);
    } else {
      navigate("/profile")
    }
  } 

  // Replace this with your API data
  const { allUsersData } = useContext(userDataContext);

  const filteredUsers = allUsersData.filter((user) => {
    const text = search.toLowerCase();

    return (
      user.firstName.toLowerCase().includes(text) ||
      user.lastName.toLowerCase().includes(text) ||
      user.userName.toLowerCase().includes(text) ||
      user.bio.toLowerCase().includes(text)
    );
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Main Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="px-6 md:px-8 py-6 border-b border-gray-100">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Discover People
                </h1>

                <p className="text-gray-500 mt-1">
                  Find and connect with people on pictureHub
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search people..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>

            </div>

            {/* Count */}
            <div className="mt-5">
              <span className="text-sm text-gray-500">
                {filteredUsers.length} people found
              </span>
            </div>

          </div>

          {/* Users Grid */}
          <div className="p-6 md:p-8">

            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                {filteredUsers.map((user) => (
                  <div
                    key={user._id}
                    className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* Top */}
                    <div className="flex items-start justify-between">

                      {/* Avatar */}
                      <div className="p-0.5 rounded-full bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500">
                        <img
                          src={user.profileImage || placeholder}
                          alt={user.firstName}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white"
                        />
                      </div>

                      <button className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 rounded-full transition">
                        <MoreHorizontal size={20} />
                      </button>

                    </div>

                    {/* User Info */}
                    <div className="mt-4">

                      <h2 className="text-lg font-bold text-gray-900 truncate">
                        {user.firstName} {user.lastName}
                      </h2>

                      <p className="text-sm text-indigo-600 font-medium">
                        @{user.userName}
                      </p>

                      <p className="text-sm text-gray-500 mt-3 line-clamp-2 min-h-10">
                        {user.bio}
                      </p>

                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 mt-4 text-xs text-gray-400">
                      <MapPin size={14} />
                      {user.location}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-5 mt-5 pt-4 border-t border-gray-100">

                      <div>
                        <p className="font-bold text-gray-900">
                          {user?.followers >= 1000
                            ? `${(user?.followers / 1000).toFixed(1)}K`
                            : user?.followers}
                        </p>

                        <p className="text-xs text-gray-400">
                          Followers
                        </p>
                      </div>

                      <div>
                        <p className="font-bold text-gray-900">
                          {user?.following}
                        </p>

                        <p className="text-xs text-gray-400">
                          Following
                        </p>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-5">

                      <button
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition ${
                          user?.isFollowing
                            ? "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                            : "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
                        }`}
                      >
                        {user?.isFollowing ? (
                          <>
                            <UserCheck size={16} />
                            Following
                          </>
                        ) : (
                          <>
                            <UserPlus size={16} />
                            Follow
                          </>
                        )}
                      </button>

                      <button className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition cursor-pointer" onClick={() => goToProfile(user._id)}>
                        View
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            ) : (

              /* Empty State */
              <div className="py-20 text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-50 flex items-center justify-center">
                  <Search className="text-indigo-500" size={28} />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mt-4">
                  No users found
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Try searching with a different name or username.
                </p>

              </div>
            )}

          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-sm py-6">
          © 2026 pictureHub. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default AllUsers;