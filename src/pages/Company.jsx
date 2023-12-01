import Company_Header from "../components/company_components/C_Header"
// import Company_Registration from "../components/company_components/C_Stepper"
// import { Form1 ,Form2} from "../components/company_components/C_Form"
import classes from "../components/company_components/Company.module.css"

// import C_Form from "../components/company_components/C_Form"
import Reg_Form from "../components/registration_form_components/Reg_Form"

const Company = () => {
  return (
    <div className={classes.container}>
      <Company_Header />
      <Reg_Form />      
    </div>
  )
}

export default Company
