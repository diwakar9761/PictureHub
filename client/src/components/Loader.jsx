import { LoaderPinwheel } from "lucide-react";
import { useContext } from "react";
import { LoaderDataContext } from "../context/LoaderContext";

const Loader = () => {
    const {loader} = useContext(LoaderDataContext)
  return (
    <div className={`fixed h-full w-full bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 opacity-[0.7] items-center justify-center text-white z-100 scrollbar-none ${loader ? "flex" : "hidden"}`}>
      <span className="animate-spin">
        <LoaderPinwheel size={45} />
      </span>
    </div>
  );
};

export default Loader;
