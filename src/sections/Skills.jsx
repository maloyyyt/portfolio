import './Skills.css'

function Skills() {
  const skills = [
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'React', category: 'Library' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'Redux', category: 'State management' },
    { name: 'Figma', category: 'Design' },
    { name: 'Tilda', category: 'Website builder' },
  ]

  return (
    <section className="skills reveal" id="skills">
      <div className="skills__heading">
        <p className="skills__label">02 — MY SKILLS</p>
        <h2>Мой <span>стек</span></h2>
        <p className="skills__description">
          Инструменты и технологии, которые я использую
          в разработке.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((skill) => (
          <div className="skills__card" key={skill.name}>
            <span className="skills__category">
              {skill.category}
            </span>

            <h3>{skill.name}</h3>

            <span className="skills__arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills