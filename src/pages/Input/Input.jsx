import { PropTypes } from 'prop-types';
import './Input.css';

export default function Input(props) {

  // Prop drilling é quando se passa o estado de um componente pai ou uma função de um componente pai para um componente filho.

  return (
    <div className="input-container">
      <label htmlFor="">{props.label}: {props.inputValue}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}
