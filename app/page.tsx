import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly md:pt-8 md:p-16">

      <div className="relative flex place-items-center">
        <Image
          className="relative"
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src= "/image001_w1083_h300.jpg"
          alt="Next.js Logo"
          width={541}
          height={150}
          priority
        />
      </div>
      
      <div className="relative place-items-center text-xl text-center">
        <p>
          Email: <a href='mailto:info@3dintersekt.com'>info@3dintersekt.com</a>
        </p>
      </div>
      
    </main>
  )
}
