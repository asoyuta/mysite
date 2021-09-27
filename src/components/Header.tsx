import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <nav>
        <Link to="/article">Article</Link>
        <Link to="">Menu B</Link>
        <Link to="">Menu C</Link>
      </nav>
    </header>
  )
}

export default Header
