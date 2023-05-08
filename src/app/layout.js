import './normalize.css'
import './globals.scss'
import { Inter } from 'next/font/google'
import HeaderComponents from "@/coponents/header";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Персональный сайт преподавателя информатики Абдуллазаде Т.Ф.',
  description: 'Персональный сайт преподавателя информатики Абдуллазаде Т.Ф.',
}

export default function RootLayout({ children }) {
  const Year = new Date().getFullYear()
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponents/>
        <main>
          {children}
        </main>
        <footer>
          <span>© {Year} Абдуллазаде Т.Ф. Все права сохранены за владельцем, свободно к распространению/копированию</span>
        </footer>
      </body>
    </html>
  )
}
