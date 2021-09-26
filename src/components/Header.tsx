import logo from '../img/logo.png'

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header-list">
        <a href="">Menu A</a>
        <a href="">Menu B</a>
        <a href="">Menu C</a>
      </div>
    </header>
  )
}

export default Header
