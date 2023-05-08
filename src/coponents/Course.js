import Image from "next/image";

export default function Course() {
  return (
    <section className='course about-color_primary'>
      <div className="course__wrapper">
        <h2 className="course__me">Курсы повышения Квалификации</h2>
        <ul className="course__lists">
          <li className="course__lists-item">
            <Image width={30} height={30} src="/checked.svg" alt="Повышение квалификации"/>
            <p>
              &quot;Преподавание «Информационных Технологий» согласно ФГОС СПО по ТОП 50&quot; - 108 часов
            </p>
          </li>
          <li className="course__lists-item">
            <Image src="/checked.svg"  width={30} height={30}  alt="Повышение квалификации"/>
            <p>
                Оказание первой помощи - 18 ч
            </p>
          </li><li className="course__lists-item">
            <Image src="/checked.svg"  width={30} height={30}  alt="Повышение квалификации"/>
            <p>
              &quot;Практико-ориентированные  подходы в преподавании профильных ИТ дисциплин&quot; - 144 часов
            </p>
          </li>
        </ul>
        <Image src="/photo_tech.jpg" width={1024} height={576} alt="ЧТТИТ" className="course__img"/>
      </div>
    </section>
  )
}
