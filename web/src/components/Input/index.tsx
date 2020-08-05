import React, { InputHTMLAttributes } from 'react';

import './styles.css';

// todos atributos que o imput pode receber
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

// rest operator => todas as propiedades que sobraram
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;