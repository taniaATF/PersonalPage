import Link from "next/link";
import Image from "next/image";
export default function Preview() {
  return(
    <section className="preview">
      <div className="preview__wrapper">
        <div className="preview__content">
          <span className="preview__content-about">Cайт преподавателя информатики</span>
          <h1 className="preview__content-title">Абдуллазаде Татьяна</h1>
          <p className="preview__content-text">
                Здесь вы найдете информацию обо мне, материалы для учеников и новости для родителей
          </p>
          <Link href={'/feedback'} className='preview__content-btn'>Обратная связь</Link>
        </div>
        <div className="preview__img">
          <Image width={300} height={405} priority={true} src="/photo.jpg" alt="Фото" />
        </div>
      </div>
    </section>
  )
}
