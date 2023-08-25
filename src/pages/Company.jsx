import Company_Header from "../components/company_components/Company_Header"
import classes from "../components/company_components/Company.module.css"

const Company = () => {
  return (
    <div className={classes.container}>
      <Company_Header />
    </div>
  )
}

export default Company
