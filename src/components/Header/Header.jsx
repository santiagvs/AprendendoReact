import './Header.css';
import PropTypes from 'prop-types'

function Header(props) { // props são um objeto passado como primeiro parâmetro da função do componente
  const { hideMenu } = props // destructuring, const hideMenu = props.hideMenu é a mesma coisa

  return (
    <header className='header'>
      {hideMenu ? null : (
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
        </ul>
      )}
      {props.name}
    </header>
  );
}

// Semelhante à uma interface, define o tipo de cada propriedade do componente
Header.propTypes = {
  hideMenu: PropTypes.bool,
  name: PropTypes.string,
}

export default Header;
