import Image from "next/image";
export default function About(){
  return(
    <section className='about'>
      <div className="about__wrapper">
        <h2 className="about__me">Обо мне</h2>
        <p className="about__prof">Я работаю в Государственном бюджетном профессиональном
            образовательном учреждение
            &quot;Чкаловский техникум транспорта и
            информационных технологий&quot;</p>
        <ul className="about__lists">
          <li className="about__lists-item">
            <Image width={30} height={30} src="/education.svg" alt="Образование"/>
            <h3>Образование</h3>
            <p>Высшее</p>
          </li>
          <li className="about__lists-item">
            <Image width={30} height={30} src="/work.svg" alt="Специальность"/>
            <h3>Специальность</h3>
            <p>Высшее</p>
          </li><li className="about__lists-item">
            <Image width={30} height={30} src="/check.svg" alt="Квалификация"/>
            <h3>Квалификация</h3>
            <p>ОУП.10 ИНФОРМАТИКА <br/>
                ЕН.02 ИНФОРМАТИКА</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
