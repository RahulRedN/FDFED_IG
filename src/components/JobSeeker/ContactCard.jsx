import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaGlobe } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactCard = ({ src }) => {
  let icon;
  let content;

  if (src === "Phone") {
    icon = <MdOutlinePhoneInTalk size={50} className="text-sky-500" />;
    content = "+91 1234567890";
  } else if (src === "Email") {
    icon = <HiOutlineMailOpen size={50} className="text-sky-500" />;
    content = "abc@gmail.com";
  } else if (src === "Address") {
    icon = <FaGlobe size={50} className="text-sky-500" />;
    content = "abc.com";
  } else {
    icon = <FaMapMarkedAlt size={50} className="text-sky-500" />;
    content = "India";
  }

  return (
    <div className="flex bg-sky-500 h-[15vh] rounded-lg items-center shadow-lg">
      <div className="h-full flex items-center justify-center p-5">
        <div className="bg-white p-3 rounded-[100px]">{icon}</div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-2xl font-semibold">{src}</h1>
        <p className="text-white text-md font-medium">
            {content}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
