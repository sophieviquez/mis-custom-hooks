import { useState } from "react";

export const useForm = (InicialState = {}) => {
  const [values, setValues] = useState(InicialState);

  const reset = () => {
    setValues(InicialState);
  };
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
