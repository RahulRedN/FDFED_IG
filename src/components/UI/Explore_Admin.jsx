import { FolderInput } from "lucide-react";

const Explore_Admin = ({ text }) => {
  return (
    <div className="mt-3 flex items-center gap-x-2">
      <FolderInput size={14} />
      <p className="text-sm">/</p>
      <p className="text-sm text-zinc-900">Admin</p>
      <span className="text-sm">/</span>
      <p className="text-sm underline">JobSeekers</p>
    </div>
  );
};

export default Explore_Admin;