import NavCardProfile from "./NavCardProfile";
import { ShoppingBag, Bookmark, Settings } from "lucide-react";
import { IoMdPerson } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

const data = [
  { icon: ShoppingBag, text: "My Job Feed", link: "#jobFeed" },
  { icon: IoMdPerson, text: "Profile", link: "#profile" },
  { icon: Bookmark, text: "Saved Jobs", link: "#saved" },
  { icon: Settings, text: "Edit Profile", link: "#update" },
  { icon: IoExitOutline, text: "Back to Home", link: "/jobseeker" },
];

const Sidebar = () => {
  return (
    <div className="flex-[1] min-h-[80vh] max-h-full bg-blue-500">
      <h1 className="mt-4 text-[2rem] text-center font-[600] text-white tracking-wider">
        Inspiring Go
      </h1>
      <div className="mt-8 flex flex-col h-full">
        {data.map((item, index) => (
          <NavCardProfile key={index} Icons={item.icon} text={item.text} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
