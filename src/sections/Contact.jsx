import './Contact.css'

function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <p className="contact__label">04 — CONTACT</p>

      <h2>
        Есть интересный
        <br />
        <span>проект?</span> Давайте обсудим.
      </h2>

      <p className="contact__description">
        Открыт к предложениям о работе, стажировкам
        и интересным проектам.
      </p>

      <div className="contact__links">
        <a
          href="https://t.me/maloyyyt"
          target="_blank"
          rel="noreferrer"
          className="contact__button"
        >
          Написать в Telegram ↗
        </a>

        <a
          href="https://github.com/maloyyyt"
          target="_blank"
          rel="noreferrer"
          className="contact__secondary"
        >
          GitHub ↗
        </a>
      </div>

      <footer className="contact__footer">
        <span>© 2026 Artem Petrov</span>
        <span>FRONTEND DEVELOPER</span>
      </footer>
    </section>
  )
}

export default Contact