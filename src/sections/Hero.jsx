import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__label">
          FRONTEND DEVELOPER
        </p>

        <h1>
          Привет, я <span>Артём</span>.
          <br />
          Создаю сайты и
          <br />
          веб-приложения.
        </h1>

        <p className="hero__description">
          Начинающий Frontend-разработчик.
          Изучаю React, JavaScript и современные
          технологии веб-разработки. Люблю создавать
          удобные и красивые интерфейсы.
        </p>

        <div className="hero__buttons">
          <a href="#projects" className="hero__button">
            Мои проекты <span>↗</span>
          </a>

          <a
            href="https://t.me/maloyyyt"
            className="hero__link"
          >
            Связаться со мной
          </a>
        </div>
      </div>

      <div className="hero__info">
        <span>01 / 04</span>
        <span>CHEBOKSARY, RUSSIA</span>
      </div>
    </section>
  )
}

export default Hero