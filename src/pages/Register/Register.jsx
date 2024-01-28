import Input from "../Input/Input";
import { useState } from 'react';
import './Register.css';

// state lift
// prop drilling, precisando passar o estado para um componente filho
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function onEmailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function onPasswordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function onConfirmPasswordChangeHandler(e) {
    setConfirmPassword(e.target.value)
  }

  function onSubmitHandler(e) {
    e.preventDefault()
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={onSubmitHandler}>
        <Input
          label="Email"
          inputValue={email}
          onChange={onEmailChangeHandler}
        />
        <Input
          label="Senha"
          inputValue={password}
          onChange={onPasswordChangeHandler}
        />
        <Input
          label="Confirmar senha"
          inputValue={confirmPassword}
          onChange={onConfirmPasswordChangeHandler}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
