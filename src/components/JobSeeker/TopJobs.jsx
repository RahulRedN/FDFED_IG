import classes from "./TopJobs.module.css";

const TopJobs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <span>100+</span>
        <h1>Browse From Our Top Jobs</h1>
      </div>
      <div className={classes.topJobs}></div>
    </div>
  );
};

export default TopJobs;
