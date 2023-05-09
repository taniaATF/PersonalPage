import Link from "next/link";

export default function HeaderComponents() {
  return (
    <header className='header'>
      <hav className="header__wrapper">
        <Link className="header__logo" href={'/'}>
                    Home
        </Link>
        <ul className="header__lists">
          <li className="header__lists-element">
            <Link href={'/about-me'}>
                            Обо мне
            </Link>
          </li>

          <li className="header__lists-element">
            <Link href={'/achievements-students'}>
                            Достижения учеников
            </Link>
          </li>
          <li className="header__lists-element">
            <Link href={'/feedback'}>
                            Обратная связь
            </Link>
          </li>
          <li className="header__lists-element">
            <Link href={'/news'}>
                            Новости
            </Link>
          </li>
        </ul>
      </hav>
    </header>
  )
}
