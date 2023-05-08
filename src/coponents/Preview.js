import Link from "next/link";

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
          <Link href={'/about-me'} className='preview__content-btn'>Обратная связь</Link>
        </div>
        <div className="preview__img">
          <img src="/photo.jpg" alt="Фото" />
        </div>
      </div>
    </section>
  )
}
