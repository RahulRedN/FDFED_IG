import classes from "./PendingList.module.css";
import Skillbox from "./Skillbox";

const PendingList = ({ status }) => {
  const color = (status) => {
    if (status === "Rejected") {
      return "bg-red-200 text-red-600 ";
    } else if (status === "Accepted") {
      return "bg-green-200 text-green-600";
    } else {
      return "bg-yellow-100 text-yellow-500";
    }
  };
  const skills = ["hello", "this", "are", "my", "skills"];
  return (
    <div className="max-h-full" id="PendingList">
      <div className={classes.container}>
        <h2>My Applications</h2>
        <div className="rounded-md border-[1px] border-gray-300 w-[75vw]">
          <table className={classes.table}>
            <thead className="bg-gray-400 h-16 text-center">
              <td className="rounded-tl-md w-[15%]">Username</td>
              <td className="w-[15%]">POSITION</td>
              <td className="w-[15%]">APPLIED ON</td>
              <td className="w-[30%]">SKILLS</td>
              <td className="rounded-tr-md w-[25%]">APPLICATION STATUS</td>
            </thead>
            <tbody>
              <tr className="border-gray-200 hover:bg-gray-100 text-center text-[2rem]">
                <td>Google</td>
                <td className="border-gray-200 hover:bg-gray-100">
                  <h1>Position</h1>
                </td>
                <td>Date</td>
                <td>
                  <div className="flex justify-center align-baseline">
                    {skills.map((skill, idx) => (
                      <Skillbox index={idx} skill={skill} />
                    ))}
                  </div>
                </td>

                <td>
                  <div className="flex gap-3 justify-center">
                    <button
                      className={
                        "p-2 rounded-2xl bg-emerald-300 hover:bg-emerald-400 hover:cursor-pointer hover:font-[600]"}>
                      Accept
                    </button>
                    <button
                      className={
                        "p-2 rounded-2xl bg-indigo-300 hover:bg-indigo-400 hover:cursor-pointer hover:font-[600]"}>
                      Reject
                    </button>
                  </div>
                </td>
              </tr>

              {/* duplicate */}
              <tr className="hover:bg-gray-100 text-center text-[2rem]">
                <td>Google</td>
                <td className="  hover:bg-gray-100">
                  <h1>Position</h1>
                </td>
                <td>Date</td>
                <td>
                  <div className="flex justify-center align-baseline">
                    {skills.map((skill, idx) => (
                      <Skillbox index={idx} skill={skill} />
                    ))}
                  </div>
                </td>

                <td>
                  <div className="flex gap-3 justify-center">
                    <button
                      className={
                        "p-2 rounded-2xl bg-emerald-300 hover:bg-emerald-400 hover:cursor-pointer hover:font-[600]"}>
                      Accept
                    </button>
                    <button
                      className={
                        "p-2 rounded-2xl bg-indigo-300 hover:bg-indigo-400 hover:cursor-pointer hover:font-[600]"}>
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingList;
