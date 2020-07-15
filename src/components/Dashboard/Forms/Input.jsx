import React from "react";

const Input = ({ name, handleChange, values, disabled = false }) => {
   return (
      <input name={name} type='text'
             onChange={handleChange}
             value={values[name]}
             disabled={disabled}
             placeholder='...'>
      </input>
   );
};
export default Input;
