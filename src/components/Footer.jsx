import { SlPlaylist } from "react-icons/sl";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";

const Footer = () => {
  return (
    <div className="px-6 mt-12">
      <div className="flex justify-between">
        <button>
          <BiHomeSmile className="text-2xl" />
        </button>
        <button>
          <IoIosRepeat className="text-3xl" />
        </button>
        <button>
          <SlPlaylist className="text-2xl" />
        </button>
      </div>
    </div>
  );
};
export default Footer;
