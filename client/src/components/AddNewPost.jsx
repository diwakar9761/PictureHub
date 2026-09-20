import axios from "axios";
import { CircleUserRound, ContactRound, X } from "lucide-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderDataContext } from "../context/LoaderContext";

const AddNewPost = ({ onClosePopup }) => {
  const serverURL = import.meta.env.DEV ? "http://localhost:3000" : "https://picturehub-server.vercel.app"
  const {setLoader} = useContext(LoaderDataContext)
  
  const [postImage, setPostImage] = useState();
  const [postCaption, setPostCaption] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("postImage", postImage)
  formData.append("postCaption", postCaption)

  const createPost = async (e) => {
    setLoader(true);
    e.preventDefault();
    const createdPost = await axios.post(`${serverURL}/api/post/create`, formData, { withCredentials: true });
    if (createdPost.status === 201) {
      setLoader(false);
      onClosePopup();
      navigate("/");
    }  else {
      setLoader(false);
    }
  };
  return (
    <div
      className={`overflow-hidden scrollbar-auto h-full w-full top-0 z-50 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-95 fixed flex justify-center items-center`}
    >
      <div className="flex items-center justify-center p-4">
        {/* Login Card */}
        <div className="w-180">
          <div className="bg-white backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 h-auto mb-9">
            {/* Heading */}
            <div className="mb-8 relative">
              <h1 className="text-3xl font-bold text-gray-900"> Create New Post </h1>
              <span
                className="absolute right-0 top-2 cursor-pointer"
                onClick={() => onClosePopup()}
              >
                {" "}
                <X />{" "}
              </span>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => createPost(e)}>
              {/* Post Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image
                </label>

                <div className="relative">
                  <CircleUserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="file"
                    name="postImage"
                    onChange={(e) => setPostImage(e.target.files[0])}
                    placeholder="Image"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Post Caption */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post Caption
                </label>

                <div className="relative">
                  <ContactRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="postCaption"
                    value={postCaption}
                    onChange={(e) => setPostCaption(e.target.value)}
                    placeholder="Enter Caption"
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition"
              >
                Upload Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
