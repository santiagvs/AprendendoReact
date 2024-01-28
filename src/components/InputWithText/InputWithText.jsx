import './InputWithText.css';
import { useState } from 'react'

// Estado é uma variável que se mudada de maneira especial, o componente se atualiza.

function InputWithText() {
  // usar hooks para re-renderizar o componente

  const [inputValue, setInputValue] = useState('') // top-level declaration

  function onChangeHandler(event) {
    setInputValue(event.target.value) // Agora o componente está atento às mudanças porque essa função altera o estado dela, re-renderizando o componente com a nova informação.
  }

  return (
    <div className='container'>
      <input type="text" placeholder='Digite aqui...' onChange={onChangeHandler} />
      <h1>{inputValue}</h1>
    </div>
  );
}

export default InputWithText;
