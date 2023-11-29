import NavCardProfile from "./NavCardProfile";
import { ShoppingBag, Bookmark, Settings } from "lucide-react";
import { IoMdPerson } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

const data = [
  { icon: ShoppingBag, text: "My Job Feed" },
  { icon: IoMdPerson, text: "Profile" },
  { icon: Bookmark, text: "Saved Jobs" },
  { icon: Settings, text: "Settings" },
  { icon: IoExitOutline, text: "Back to Home" },
];

const Sidebar = () => {
  return (
    <div className="flex-[1] min-h-[80vh] max-h-full bg-blue-500">
      <h1 className="mt-4 text-[2rem] text-center font-[600] text-white tracking-wider">
        Inspiring Go
      </h1>
      <div className="mt-8 flex flex-col h-full">
        {data.map((item, index) => (
          <NavCardProfile key={index} Icons={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
