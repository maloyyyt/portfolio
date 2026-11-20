import { useState } from 'react'
import skyproMusic1 from '../assets/skypro-music-1.png'
import skyproMusic2 from '../assets/skypro-music-2.png'
import skyproKanban1 from '../assets/skypro-kanban-1.png'
import skyproKanban2 from '../assets/skypro-kanban-2.png'
import skyproWallet1 from '../assets/skypro-wallet-1.png'
import skyproWallet2 from '../assets/skypro-wallet-2.png'
import './Projects.css'

function Projects() {
    const [selectedImage, setSelectedImage] = useState(null)
  const projects = [
    {
      number: '01',
      name: 'Skypro Music',
      description: 'Веб-приложение для прослушивания музыки.',
      stack: 'React · JavaScript · Redux',
      type: 'Frontend',
      link: 'https://github.com/maloyyyt/skypro-music',
      images: [skyproMusic1, skyproMusic2],
    },
    {
      number: '02',
      name: 'Skypro Kanban',
      description: 'Менеджер задач с авторизацией и управлением проектами.',
      stack: 'React · JavaScript',
      type: 'Frontend',
      link: 'https://github.com/maloyyyt/skypro-cw',
      images: [skyproKanban1, skyproKanban2],
    },
    {
      number: '03',
      name: 'Skypro Wallet',
      description: 'Учебный проект для работы с финансовыми операциями.',
      stack: 'JavaScript',
      type: 'Frontend',
      link: 'https://github.com/maloyyyt/skypro-wallet',
      images: [skyproWallet1, skyproWallet2],
    },
  ]

  return (
    <section className="projects reveal" id="projects">
      <div className="projects__heading">
        <p className="projects__label">03 — MY PROJECTS</p>
        <h2>Избранные <span>работы</span></h2>
        <p className="projects__description">
          Проекты, на которых я развиваю свои навыки
          и применяю знания на практике.
        </p>
      </div>

      <div className="projects__list">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="projects__card"
            key={project.number}
          >
            <span className="projects__number">
              {project.number}
            </span>

            <div className="projects__info">

 {project.images ? (
  <div className="projects__images">
    {project.images.map((image, index) => (
  <img
    key={index}
    className="projects__image"
    src={image}
    alt={`${project.name} — скриншот ${index + 1}`}
    onClick={(e) => {
  e.preventDefault()
  e.stopPropagation()
  setSelectedImage(image)
}}
  />
))}
  </div>
) : project.image ? (
  <img
    className="projects__image"
    src={project.image}
    alt={project.name}
  />
) : null}
  <span className="projects__type">
    {project.type}
  </span>

  <h3>{project.name}</h3>

  <p>{project.description}</p>

  <span className="projects__stack">
    {project.stack}
  </span>

</div>

            <span className="projects__arrow">↗</span>
          </a>
        ))}
            </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox__close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Увеличенный скриншот"
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </section>
  )
}

export default Projects