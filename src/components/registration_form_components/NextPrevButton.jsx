/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import classes from './Reg_Form.module.css'


const NextPrevButton = ({len,count,handleNext,handlePrev,isLast,handleSubmit}) => {

  console.log(count)
    return (
      <div className={classes.formFooter + " flex gap-3"}>
        <button
          type="button"
          id="prevBtn"
          className="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
          onClick={handlePrev}
          disabled={count == 0}
        >
          Previous
        </button>
        
        <button
          type={count === len - 1 ? "submit" : "button"}
          id="nextBtn"
          className="w-[15vw] flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-sky-600 hover:bg-sky-700 text-lg"
          onClick={count === len - 1 ? handleSubmit : handleNext}
        >
          {count === len - 1 ? "Submit" : "Next"}
        </button>
      </div>
    );
  };

  export default NextPrevButton;