import { useState } from "react";
// import { useForm } from 'react-hook-form';
// import { loginWithEmail } from './LoginManager';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import SocialMedia from './SocialMedia';
// import toast from 'react-hot-toast';

import styles from "../../pages/css/Login_SignUp.module.css";
import GoogleButton from "../UI/GoogleButton/GoogleButton";
import { useAuth } from "../../Firebase/AuthContexts";

const SignInForm = () => {
  // const onSubmit = ({email, password}) => {
  //     const loading = toast.loading('Please wait...');
  //     loginWithEmail(email, password)
  //     .then(res => {
  //         if(res.error){
  //             toast.dismiss(loading);
  //             toast.error(res.error)
  //         }
  //         handleResponse(res)
  //         toast.dismiss(loading);
  //     })
  // }

  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle } = useAuth();
  const googleSignInHandler = async () => {
    setIsLoading(true);
    try {
      const res = await signInWithGoogle();
      if (res.user.uid) {
        setIsLoading(false);
        alert("Logged In!");
      }
    } catch (err) {
      console.error(err);
      alert("Something happened!!!");
      setIsLoading(false);
    }
  };
  return (
    <form className={styles["sign-in-form"]}>
      <h2 className={styles.title}>Sign in</h2>
      <div className={styles["input-field"]}>
        <span className={styles.fIcon}>x</span>
        <input defaultValue="admin@mail.com" placeholder="Email" />
      </div>
      {/* {errors.email && <span className="text-warning">This field is required</span>} */}
      <div className={styles["input-field"]}>
        <span className={styles.fIcon}>L</span>
        <input defaultValue="admin123" type="password" placeholder="Password" />
      </div>
      {/* {errors.password && <span className="text-warning">This field is required</span>} */}
      <button
      className="bg-gray-400 hover:bg-gray-500 shadow-lg mt-5 w-[20vw] h-12 rounded-lg text-white font-semibold"
      >
        SIGN IN
      </button>
      <p className={styles["social-text"]}>Or </p>
      <GoogleButton
        isLoading={isLoading}
        onClickHandler={googleSignInHandler}
      />
      {/* <SocialMedia handleResponse={handleResponse}/> */}
    </form>
  );
};

export default SignInForm;
