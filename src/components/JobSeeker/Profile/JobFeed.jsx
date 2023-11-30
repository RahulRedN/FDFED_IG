import React from "react";

import classes from "./JobFeed.module.css";

const JobFeed = () => {
  return (
    <div className={classes.container}>
      <h2>My Applications</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>COMPANY</td>
            <td>PROFILE</td>
            <td>APPLIED ON</td>
            <td>NUMBER OF APPLICANTS</td>
            <td>APPLICATION STATUS</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default JobFeed;
