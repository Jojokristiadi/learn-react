import React from "react";

// untuk membongkar props jadi langsung key key nya
// gunakan {}
// namanya destructuring
const ButtonFunction = ({ text, warna, onClickHandler }) => {

  // styling biasa style="color:red;"
  return <button style={{ color: warna }} onClick={onClickHandler}>{text}</button>;
};

export default ButtonFunction;
