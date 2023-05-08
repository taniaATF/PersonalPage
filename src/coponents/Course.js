export default function Course() {
  return (
    <section className='course about-color_primary'>
      <div className="course__wrapper">
        <h2 className="course__me">Курсы повышения Квалификации</h2>
        <ul className="course__lists">
          <li className="course__lists-item">
            <img src="/checked.svg" alt="Повышение квалификации"/>
            <p>
                "Преподавание «Информационных Технологий» согласно ФГОС СПО по ТОП 50" - 108 часов
            </p>
          </li>
          <li className="course__lists-item">
            <img src="/checked.svg" alt="Повышение квалификации"/>
            <p>
                Оказание первой помощи - 18 ч
            </p>
          </li><li className="course__lists-item">
            <img src="/checked.svg" alt="Повышение квалификации"/>
            <p>
              "Практико-ориентированные  подходы в преподавании профильных ИТ дисциплин" - 144 часов
            </p>
          </li>
        </ul>
        <img src="/photo_tech.jpg" alt="ЧТТИТ" className="course__img"/>
      </div>
    </section>
  )
}
