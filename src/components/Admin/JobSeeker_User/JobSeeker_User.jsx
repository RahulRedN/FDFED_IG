import Explore_Admin from "../../UI/Explore_Admin";
import RowUser from "./RowUser";


const JobSeeker_User = () => {
  return (
    <div className="pl-6 py-4 h-full">
      <h1 className="font-[500]">Jobseeker users</h1>
      <Explore_Admin />

      <table className="w-[95%] mt-4">
        <thead className="bg-zinc-100 h-20">
          <tr>
            <th className="text-left font-light text-sm py-3 px-2 w-[25%]">
              Name
            </th>
            <th className="text-left font-thin text-sm py-3 px-2 w-[15%]">
              Role
            </th>
            <th className="text-left font-thin text-sm py-3 px-2 w-[6%]">
              Age
            </th>
            <th className="text-left font-thin text-sm py-3 px-2 w-[13%]">
              Phone Number
            </th>
            <th className="text-left font-thin text-sm py-3 px-2 w-[23%]">
              Email
            </th>
            <th className="text-left font-thin text-sm py-3 px-2 w-[15%]">
              Joined Date
            </th>
            <th className="text-left font-thin text-sm py-3 pr-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <RowUser/>
          <RowUser/>
          <RowUser/>
         
        </tbody>
      </table>
    </div>
  );
};

export default JobSeeker_User;
