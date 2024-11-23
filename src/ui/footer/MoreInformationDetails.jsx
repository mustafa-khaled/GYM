import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const iconsStyle = "text-2xl transition-all ";

export default function MoreInformationDetails() {
  return (
    <div className="w-full space-y-6 sm:basis-[40%]">
      <div className="flex items-center justify-center gap-[10px] sm:justify-end">
        <Link to={"https://www.facebook.com"} target="_blank">
          <FaFacebook className={`${iconsStyle} hover:text-[#4267B2]`} />
        </Link>
        <Link to={"https://www.instgram.com"} target="_blank">
          <FaInstagram className={`${iconsStyle} hover:text-[#8a3ab9]`} />
        </Link>
        <Link to={"https://www.youtube.com"} target="_blank">
          <FaYoutube className={`${iconsStyle} hover:text-[#FF0000]`} />
        </Link>
        <Link to={"https://www.twitter.com"} target="_blank">
          <FaXTwitter className={`${iconsStyle} hover:text-[#14171A]`} />
        </Link>
      </div>
    </div>
  );
}
