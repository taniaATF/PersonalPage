import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="news">
        <div className="news__wrapper">
          <a href="https://infourok.ru/user/novozhilova-tatyana-fyodorovna" target={"_blank"} rel={'nofollow'}>Я на Инфоуроке</a>
          <a href="https://vk.com/id220220236" target={"_blank"} rel={'nofollow'}>Я Вконтакте</a>
          <a href=" https://vk.com/4ttut" target={"_blank"} rel={'nofollow'}>ГБПОУ &quot;ЧТТИТ&quot; в Вконтакте</a>
          <a href="http://протехникум.рф/blog/index.php?category=0" target={"_blank"} rel={'nofollow'}> ГБПОУ &quot;ЧТТИТ&quot;</a>
        </div>
      </section>
    </>
  )
}
