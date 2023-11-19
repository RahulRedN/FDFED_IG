import { Link } from 'react-router-dom';
import styles from './css/Login_SignUp.module.css';
import { useState } from 'react';

import SignInForm from '../components/Login/SignInForm';
import SignUpForm from '../components/Login/SignUpForm';


const Login_SignUp = () => {
  const [isSignUp, setSignUp] = useState(false);


  // const handleResponse = (res) => {
  //   setUser(res);
  //   if(!res.error){
  //     toast.success('Successfully Logged In!');
  //     history(from);
  //   }
  //   if (res.email === "admin@mail.com") {
  //     swal({
  //       title: "Warning!",
  //       text: "You have entered the admin panel for testing. Please don't abuse this facility!",
  //       icon: "warning",
  //       buttons: true,
  //       dangerMode: true,
  //     }).then(ok => {
  //         if (!ok) {
  //             handleSignOut()
  //               .then(res => {
  //                   setUser(res)
  //                   toast.error('Logged Out!');
  //               })
  //         }
  //       });
  //   }
  // }
  
  return (
    <div className={`${styles.fContainer} ${ isSignUp ? styles['sign-up-mode'] : ' '}`}>
        <Link to="/">
          <span className={styles.pageCloseBtn}>x</span>
        </Link>
       <div className={styles['forms-container']}>
         <div className={styles['signIn-singUp']}>
            <SignInForm />
            <SignUpForm/>
         </div>
       </div>

       <div className={styles['panels-container']}>
          <div className={`${styles.panel} ${styles['left-panel']}`}>
            <div className={styles.content}>
              <h3>New here ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className={`${styles.iBtn} ${styles.transparent}}`} onClick={() => setSignUp(true)}>Sign Up</button>
            </div>
            {/* <img src={} alt="" className={styles.pImg}/> */}
          </div>

          <div className={`${styles.panel} ${styles['right-panel']}`}>
            <div className={styles.content}>
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
              <button className={`${styles.iBtn} ${styles.transparent}}`} onClick={() => setSignUp(false)}>Sign In</button>
            </div>
            {/*   <img src={`${desk}`} alt="" className={styles.pImg}/> */}
          </div>
       </div>
    </div>
  );
};

export default Login_SignUp;