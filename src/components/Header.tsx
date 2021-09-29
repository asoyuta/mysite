import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/article">Article</Link>
        <Link to="">Menu B</Link>
        <Link to="">Menu C</Link>
      </nav>
    </header>
  )
}

export default Header
