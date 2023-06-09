import Image from "next/image";
export default function Awards() {

  return (
    <section className="awards">
      <div className="awards__wrapper">
        <span className="awards__preview">Сертификаты и награды</span>
        <h2 className="awards__title">Достижения</h2>
        <ul className="awards__lists">
          <li>
            <Image width={426} height={300} src="/sert/diploma.jpg" alt=""/>
          </li>
          <li>
            <Image width={426} height={300} src="/sert/certificate_1.jpg" alt=""/>
          </li>
          <li>
            <Image width={426} height={300}  src="/sert/certificate_2.jpg" alt=""/>
          </li>
          <li>
            <Image width={426} height={611} src="/sert/certificate_3.jpg" alt=""/>
          </li>
          <li>
            <Image width={426} height={300} src="/sert/certificate_5.jpg" alt=""/>
          </li>
          <li>
            <Image width={426} height={611} src="/sert/certificate_4.jpg" alt=""/>
          </li>
        </ul>
      </div>
    </section>
  )
}
