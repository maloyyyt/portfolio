import './Header.css'

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        AP<span>.</span>
      </a>

      <nav className="header__nav">
        <a href="#about">Обо мне</a>
        <a href="#skills">Навыки</a>
        <a href="#projects">Проекты</a>
        <a href="#contact">Контакты</a>
      </nav>

      <a href="https://t.me/maloyyyt" className="header__button">
        Связаться <span>↗</span>
      </a>
    </header>
  )
}

export default Header