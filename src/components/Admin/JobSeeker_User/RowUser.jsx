import img from "../../../../public/images/mentors.jpg";
import { Trash } from "lucide-react";

const RowUser = () => {
  return (
    <tr className="border-b border-gray-200 h-20">
      <td className="pl-2 py-2">
        <div className="flex items-center gap-x-2">
          <img src={img} className="h-9 w-9 rounded-full object-cover" />
          <div className="flex items-center justify-center gap-x-1">
            <h1 className="text-sm font-light">Pavan Kumar</h1>
            <h1 className="text-[8px] border py-[1px] px-[2px] border-green-500 text-green-500 rounded">
              NEW
            </h1>
          </div>
        </div>
      </td>

      <td className="">
        <h1 className="font-light text-xs text-white border bg-orange-400 rounded w-fit px-[5px] py-[2px]">
          Software Developer
        </h1>
      </td>

      <td className="pl-3">
        <h1 className="text-sm">15</h1>
      </td>

      <td className="pl-2">
        <h1 className="text-sm">+91 73373 26976</h1>
      </td>

      <td className="pl-2">
        <h1 className="text-sm">jppavan2003@gmail.com</h1>
      </td>

      <td className="pl-2">
        <h1 className="text-sm">25th March,2018</h1>
      </td>

      <td>
        <div className="hover:bg-red-50 w-fit py-2 rounded-md px-1 ml-2 text-gray-600 hover:text-red-500 hover:cursor-pointer -mt-2">
          <Trash size={20} />
        </div>
      </td>
    </tr>
  );
};

export default RowUser;
