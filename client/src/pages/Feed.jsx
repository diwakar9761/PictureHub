import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext.jsx";
import axios from "axios";
import { useEffect } from "react";
import placeholder from "../assets/placeholder.png";

const Feed = () => {
  const navigate = useNavigate();

  const serverURL = import.meta.env.DEV
    ? "http://localhost:3000"
    : "https://picturehub-server.vercel.app";

  const [posts, setPosts] = useState([]);

  const { userData, allUsersData } = useContext(userDataContext);

  const getAllPosts = async () => {
    const allPosts = await axios.get(`${serverURL}/api/post/posts`, {
      withCredentials: true,
    });

    if (allPosts.status === 200) {
      console.log("allpost data ", allPosts.data);
      setPosts(allPosts.data.posts);
    } else {
      console.log("allpost data error");
    }
  };

  const navigateToProfile = (id) => {
    if (id) {
      navigate(`/profile/${id}`);
    } else {
      navigate("/profile")
    }
  };

  const navigateToAllUsers = () => {
    navigate("/users");
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Feed */}
          <main className="max-w-3xl w-full mx-auto lg:mx-0">
            {/* Stories */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-5 mb-6">
              <div className="flex gap-5 overflow-x-auto pb-1 scrollbar-hide scrollbar-none">
                {/* Current User */}
                <div
                  key={userData._id}
                  className="flex flex-col items-center min-w-17.5 cursor-pointer"
                >
                  <div className="relative">
                    {/* Story Ring */}
                    <div
                      className="w-16.5 h-16.5 rounded-full p-0.75 bg-gray-200"
                    >
                      <div className="w-full h-full rounded-full bg-white p-0.5">
                        <img
                          src={userData.profileImage || placeholder}
                          alt={userData.firstName}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Add Story */}
                      <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center">
                        <Plus size={13} className="text-white" />
                      </div>
                  </div>

                  <p className="text-xs text-gray-600 mt-2 truncate max-w-17.5 capitalize">
                    {userData.firstName}
                  </p>
                </div>

                {/* All other users minus current user */}
                {allUsersData &&
                  allUsersData
                    ?.filter((user) => user._id !== userData._id)
                    .map((user) => (
                      <div
                        key={user._id}
                        className="flex flex-col items-center min-w-17.5 cursor-pointer"
                      >
                        <div className="relative">
                          {/* Story Ring */}
                          <div
                            className={`w-16.5 h-16.5 rounded-full p-0.75 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600`}
                          >
                            <div className="w-full h-full rounded-full bg-white p-0.5">
                              <a onClick={() => navigateToProfile(user._id)}>
                                <img
                                  src={user.profileImage || placeholder}
                                  alt={user.firstName}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mt-2 truncate max-w-17.5 capitalize">
                          {user.firstName}
                        </p>
                      </div>
                    ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts &&
                posts.map((post) => (
                  <article
                    key={post._id}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                  >
                    {/* Post Header */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full p-0.5 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600">
                          <div className="w-full h-full rounded-full bg-white p-0.5">
                            <img
                              src={post?.createdBy?.profileImage || placeholder}
                              alt={post.postCaption}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {post?.createdBy?.firstName}{" "}
                            {post?.createdBy?.lastName}
                          </h3>

                          <p className="text-xs text-gray-400">
                            @{post.createdBy?.userName}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                      >
                        <MoreHorizontal size={20} className="text-gray-500" />
                      </button>
                    </div>

                    {/* Post Image */}
                    <div className="w-full aspect-square bg-gray-100">
                      <img
                        src={post.postImage}
                        alt={post.postCaption}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Post Actions */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            className="hover:scale-110 transition"
                          >
                            <Heart
                              size={24}
                              className="text-gray-700 hover:text-red-500 transition"
                            />
                          </button>

                          <button
                            type="button"
                            className="hover:scale-110 transition"
                          >
                            <MessageCircle
                              size={24}
                              className="text-gray-700"
                            />
                          </button>

                          <button
                            type="button"
                            className="hover:scale-110 transition"
                          >
                            <Send size={24} className="text-gray-700" />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="hover:scale-110 transition"
                        >
                          <Bookmark size={24} className="text-gray-700" />
                        </button>
                      </div>

                      {/* Likes */}
                      <p className="text-sm font-semibold text-gray-900 mt-4">
                        {post.likes || 10} likes
                      </p>

                      {/* Caption */}
                      <p className="text-sm text-gray-700 mt-2 leading-6">
                        <span className="font-semibold text-gray-900 mr-2">
                          {post.createdBy?.userName}
                        </span>
                        {post.postCaption}
                      </p>

                      {/* Comments */}
                      <button
                        type="button"
                        className="text-sm text-gray-400 mt-2 hover:text-gray-600"
                      >
                        View all {post.comments || 5} comments
                      </button>

                      {/* Time */}
                      <p className="text-[11px] uppercase tracking-wide text-gray-300 mt-3">
                        {post.createdAt}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              {/* Profile Card */}
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={userData.profileImage || placeholder}
                    alt="Your profile"
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-indigo-50"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {userData?.firstName} {userData?.lastName}
                    </h3>

                    <p className="text-sm text-gray-400">
                      @{userData?.userName}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigateToProfile()}
                  className="w-full mt-5 py-2.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg transition cursor-pointer hover:from-purple-600 hover:to-indigo-600"
                >
                  View Profile
                </button>
              </div>

              {/* Search */}
              {/* <div className="bg-white/95 rounded-2xl p-3 shadow-lg">

                <div className="relative">

                  <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-50 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-100"
                  />

                </div>

              </div> */}

              {/* Suggestions */}
              <div className="bg-white/95 rounded-3xl shadow-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">
                    Suggestions for you
                  </h3>

                  <button
                    className="text-xs font-semibold text-indigo-600 cursor-pointer hover:font-bold"
                    onClick={navigateToAllUsers}
                  >
                    See all
                  </button>
                </div>

                {[...(allUsersData || [])]
                  ?.filter((user) => user._id !== userData?._id)
                  .slice(0, 4)
                  .map((user) => (
                    <div
                      key={user._id}
                      className="flex items-center justify-between py-3"
                    >
                      <div className="flex items-center gap-3">
                        <a onClick={() => navigateToProfile(user._id)}>
                          <img
                            src={user.profileImage || placeholder}
                            alt={user.userName}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </a>

                        <div>
                          <p className="text-sm font-semibold text-gray-800 capitalize">
                            {user.firstName} {user.lastName}
                          </p>

                          <p className="text-xs text-gray-400 capitalize">
                            @{user.userName}
                          </p>
                        </div>
                      </div>

                      <button className="text-xs font-semibold text-indigo-600">
                        Follow
                      </button>
                    </div>
                  ))}
              </div>

              {/* Footer */}
              <p className="text-center text-white/70 text-xs px-5">
                © 2026 PictureHub · Privacy · Terms
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Feed;
