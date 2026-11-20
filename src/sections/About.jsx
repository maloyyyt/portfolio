import './About.css'

function About() {
  return (
    <section className="about reveal" id="about">
      <div className="about__heading">
        <p className="about__label">01 — ABOUT ME</p>
        <h2>Немного <span>обо мне</span></h2>
      </div>

      <div className="about__content">
        <div className="about__text">
          <p>
            Я Артём, начинающий Frontend-разработчик.
            Сейчас учусь на третьем курсе и активно
            развиваюсь в веб-разработке.
          </p>

          <p>
            Работаю с HTML, CSS, JavaScript и React.
            Создаю учебные проекты и пробую себя
            в реальных задачах.
          </p>

          <p>
            Хочу развиваться в команде, получать
            практический опыт и создавать качественные
            веб-продукты.
          </p>
        </div>

        <div className="about__details">
          <div className="about__detail">
            <span>ОБРАЗОВАНИЕ</span>
            <p>Singularity College</p>
            <small>3 курс · Frontend-разработка</small>
          </div>

          <div className="about__detail">
            <span>ЛОКАЦИЯ</span>
            <p>Чебоксары, Россия</p>
          </div>

          <div className="about__detail">
            <span>ЦЕЛЬ</span>
            <p>Junior Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About