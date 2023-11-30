import ProfileNavbar from "./ProfileNavbar";

import classes from "./JobFeed.module.css";

const JobFeed = () => {
  return (
    <div className="max-h-full" id="jobFeed">
      <ProfileNavbar />
      <div className={classes.container}>
        <h2>My Applications</h2>
        <div className="rounded-md border-[1px] border-gray-300">
          <table className={classes.table}>
            <thead className="bg-blue-200">
              <tr>
                <td className="rounded-tl-md w-[25%]">COMPANY</td>
                <td className="w-[25%]">PROFILE</td>
                <td className="w-[15%]">APPLIED ON</td>
                <td className="w-[15%]">NUMBER OF APPLICANTS</td>
                <td className="rounded-tr-md w-[20%]">APPLICATION STATUS</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-100">
                <td>Google</td>
                <td>Position</td>
                <td>14 Oct'23</td>
                <td>3124</td>
                <td>
                  <span>Accepted</span>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-100">
                <td>Google</td>
                <td>Position</td>
                <td>14 Oct'23</td>
                <td>3124</td>
                <td>
                  <span>Accepted</span>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-100">
                <td>Google</td>
                <td>Position</td>
                <td>14 Oct'23</td>
                <td>3124</td>
                <td>
                  <span>Accepted</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobFeed;
