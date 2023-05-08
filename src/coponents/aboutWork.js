import Image from "next/image";
export default function AboutWork() {
  return (
    <section className='work'>
      <div className="work__wrapper">
        <h2>Подробнее о техникуме</h2>
        <Image width={400} height={400} src="/qr.jpg" alt="QR code"/>
      </div>
    </section>
  )
}
