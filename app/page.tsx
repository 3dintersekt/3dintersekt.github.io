import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly md:pt-8 md:p-16">

      <div className="relative flex place-items-center">
        <Image
          className="relative"
          // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/banner_w800_h270.png"
          alt="Next.js Logo"
          width={800}
          height={270}
          priority
        />
      </div>
      
      <div className="relative place-items-center text-xl text-center">
        <p>
          <a href='mailto:info@3dintersekt.com'>info@3Dintersekt.com</a>
        </p>
      </div>
      
    </main>
  )
}
