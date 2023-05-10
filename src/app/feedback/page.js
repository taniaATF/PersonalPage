import Image from "next/image";

export default function Page() {
  return (
    <section className="feedback">
      <div className="feedback__wrapper">
        <h1>Сайт техникума <a  target="_blank" href="http://протехникум.рф" rel="nofollow noreferrer">протехникум.рф</a></h1>
        <h2>Техникум в контакте</h2>
        <Image src="/qr_vk.png" alt="Техникум в вк" width={320} height={320}/>
        <p>Для связи:</p>
        <span> email <a href="mailto:Taniantf@yandex.ru">Taniantf@yandex.ru</a></span>
        <span> tel <a href="tel:+7930-816-8838">+7930-816-8838</a></span>

      </div>
    </section>
  )
}
