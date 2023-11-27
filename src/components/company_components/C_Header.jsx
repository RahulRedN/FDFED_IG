// import React from 'react'
import classes from "./Company.module.css"


export const Company_Header = () => {
  return (
    <div className={classes.navbar + " shadow-md "}>
        <div className={classes.logo +" text-xl "}><a href="#">InspiringGO</a></div>
        <div className={classes.nav_elements}>
                <a href="#">HOME</a>
                <a href="#">RECRUIT</a>
                <a href="#">CANDIDATES LIST</a>
                
        </div>
        <div className={classes.end_elements}>
          <a href="#" className={classes.highlight + " ring-2 ring-blue-500 hover:shadow-lg"}>POST A JOB</a>
          <a href="#" className={classes.profile}>PROFILE</a>
        </div>
    </div>
  )
}

export default Company_Header

// 841600

// 9472