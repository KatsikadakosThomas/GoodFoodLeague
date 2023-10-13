import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <h1 className=' absolute top-[20vh] sm:top-[30vh] mt-[60px]  z-[40] text-3xl sm:text-6xl titleShadow'>
        <span className='text-gfl-red font-extrabold mr-2 sm:mr-5  '>
          GOOD
        </span>
        <span className='text-gfl-blue font-extrabold mr-2 sm:mr-5 '>
          FOOD
        </span>
        <span className='text-gfl-orange font-extrabold  '>
          LEAGUE
        </span>
      </h1>

      <h1 className=' absolute top-[30vh] sm:top-[40vh] mt-[60px]  z-[40] text-3xl sm:text-6xl titleShadow'>
        <span className='text-white font-extrabold mr-2 sm:mr-5  '>
        ATHENS EDITION
        </span>
 
      </h1>

      <div id="img-wraper" className='w-full z-[200] h-[70vh] absolute top-[8vh] z-[30]'>
        <Image className='object-cover' src="/hero.png" fill={true} alt="hero image"></Image>
      </div>

    </main>
  )
}
