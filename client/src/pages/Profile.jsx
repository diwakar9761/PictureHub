import {
  Camera,
  Edit,
  MapPin,
  Link as LinkIcon,
  CalendarDays,
  Grid3X3,
  Heart,
  MessageCircle,
  Settings,
} from "lucide-react";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext.jsx";

const Profile = () => {

    const {userData} = useContext(userDataContext);
    

  const posts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800",
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      likes: 98,
      comments: 12,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
      likes: 210,
      comments: 24,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800",
      likes: 156,
      comments: 15,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      likes: 189,
      comments: 21,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
      likes: 267,
      comments: 31,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">

          {/* Cover */}
          <div className="h-48 bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300 relative">
            <button className="absolute top-5 right-5 bg-white/90 hover:bg-white text-gray-700 p-2 rounded-full shadow-lg transition">
              <Settings size={20} />
            </button>
          </div>

          {/* Profile Information */}
          <div className="px-6 md:px-10 pb-8">

            {/* Avatar */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">

              <div className="-mt-16 relative">
                <div className="w-32 h-32 rounded-full p-1 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500">
                  <img
                    src="https://i.pravatar.cc/300?img=12"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>

                {/* Camera button */}
                <button className="absolute bottom-2 right-1 bg-linear-to-br from-indigo-600 to-purple-600 text-white p-2 rounded-full border-4 border-white shadow-md hover:scale-105 transition">
                  <Camera size={16} />
                </button>
              </div>

              {/* Edit Profile */}
              <button className="mt-4 md:mt-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm transition">
                <Edit size={17} />
                Edit Profile
              </button>
            </div>

            {/* Name */}
            <div className="mt-5">
              <h1 className="text-2xl font-bold text-gray-900">
                {userData.firstName} {userData.lastName}
              </h1>

              <p className="text-gray-500 mt-1">
                @{userData.userName}
              </p>
            </div>

            {/* Bio */}
            <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
              Frontend Developer passionate about building beautiful,
              scalable and high-performance web applications. 🚀
            </p>

            {/* Profile Details */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                {userData.location}
              </div>

              <div className="flex items-center gap-1.5">
                <LinkIcon size={16} />
                pictureHub.com
              </div>

              <div className="flex items-center gap-1.5">
                <CalendarDays size={16} />
                Joined January 2026
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-7 pt-6 border-t border-gray-100">

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">24</p>
                <p className="text-sm text-gray-500">Posts</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">1.2K</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900">356</p>
                <p className="text-sm text-gray-500">Following</p>
              </div>

            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="mt-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-100">

            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-indigo-600 font-semibold border-b-2 border-indigo-600">
              <Grid3X3 size={19} />
              Posts
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 py-4 text-gray-400 hover:text-gray-700 transition">
              <Heart size={19} />
              Liked
            </button>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-1">

            {posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square group overflow-hidden cursor-pointer"
              >
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6 text-white">

                  <div className="flex items-center gap-1.5 font-semibold">
                    <Heart size={20} fill="white" />
                    {post.likes}
                  </div>

                  <div className="flex items-center gap-1.5 font-semibold">
                    <MessageCircle size={20} fill="white" />
                    {post.comments}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-white/70 text-sm py-6">
          © 2026 PictureHub. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Profile;