import React from "react";

const Skillbox = ({index,skill}) => {
  return (
    <p key={index} className="m-1 bg-gray-200 pr-2 pl-2 rounded-sm h-[22px]">{skill}</p>
  );
};

export default Skillbox;
