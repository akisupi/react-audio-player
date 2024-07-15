import { SlPlaylist } from "react-icons/sl";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosRepeat } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full my-auto">
      <div className="flex justify-between *:first:ps-5 *:last:pe-5">
        <button>
          <BiHomeSmile className="text-2xl md:text-4xl" />
        </button>
        <button>
          <IoIosRepeat className="text-3xl md:text-5xl" />
        </button>
        <button>
          <SlPlaylist className="text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default Footer;
