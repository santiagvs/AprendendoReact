import './LoginForm.css';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function onEmailChangeHandler(e) {
    setEmail(e.target.value)
  }

  function onPasswordChangeHandler(e) {
    setPassword(e.target.value)
  }

  function isValidInput() {
    if (!email || !password) return false
    if (!emailRegex.test(email)) return false
    return true
  }

  function onSubmitHandler(e) {
    e.preventDefault(); // previne ação padrão do form, que é enviar os dados para uma página por POST
    if (isValidInput()) {
      console.log(`Seu email é ${email} e sua senha é ${password}`);
    } else {
      console.log("Email ou senha inválidos");
    }
  }


  return (
    <form className='container' onSubmit={onSubmitHandler}>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="text" id='email' placeholder='Email' onChange={onEmailChangeHandler} />
      </div>

      <div className="input-container">
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder='Senha' onChange={onPasswordChangeHandler} />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;
