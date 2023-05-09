'use client'
import Link from "next/link";
import Image from "next/image";

export default function HeaderComponents() {
  function  showMobileMenu (e){
    toggleContent()
    e.target.parentElement.classList.add('header__btn-burger_disable')
    document.querySelector('.header__btn-close').classList.add('header__btn-close_active')
  }
  function closeMobileMenu(e){
    toggleContent()
    e.target.parentElement.classList.remove('header__btn-close_active')
    document.querySelector('.header__btn-burger').classList.remove('header__btn-burger_disable')
  }
  function toggleContent(){
    const wrapper = document.querySelector('.header__wrapper')
    const lists = document.querySelector('.header__lists')
    wrapper.classList.toggle('header__wrapper_mobile')
    lists.classList.toggle('header__lists_mobile')
  }
  return (
    <header className='header'>
      <hav className="header__wrapper">
        <Link className="header__logo" href={'/'}>
                    Home
        </Link>
        <button className="header__btn header__btn-burger" onClick={showMobileMenu}>
          <Image src={'/burger.svg'} alt={'Открыть мобильное меню'} width={20} height={12}/>
        </button>
        <button className="header__btn header__btn-close" onClick={closeMobileMenu}>
          <Image src={'/close.svg'} alt={'Закрыть мобильное меню'} width={20} height={12}/>
        </button>
        <ul className="header__lists">
          <li className="header__lists-element">
            <Link href={'/about-me'}>
                            Обо мне
            </Link>
          </li>
          <li className="header__lists-element">
            <Link href={'/students'}>
                            Обучающимся
            </Link>
          </li>
          <li className="header__lists-element">
            <Link href={'/achievements-students'}>
                            Достижения учеников
            </Link>
          </li>
          <li className="header__lists-element">
            <Link href={'/documents'}>
                            Документация
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
