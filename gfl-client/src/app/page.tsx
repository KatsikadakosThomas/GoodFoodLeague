import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

    <section id="first-section" className='w-full h-[100vh] flex flex-col items-center'>
    <h1 className=' absolute top-[20vh] sm:top-[30vh] mt-[60px]  z-[40] text-xl md:text-4xl lg:text-6xl titleShadow'>
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

      <h1 className=' absolute top-[30vh] sm:top-[45vh] mt-[60px]  z-[40] text-xl md:text-3xl lg:text-5xl titleShadow'>
        <span className='text-white font-extrabold mr-2 sm:mr-5  '>
        ATHENS EDITION
        </span>
 
      </h1>

      <div id="img-wraper" className='w-full z-[200] h-[70vh] absolute top-[8vh] z-[30]'>
        <Image className='object-cover' src="/hero.png" fill={true} alt="hero image"></Image>
      </div>
    </section>

    <section id="second-section" className='w-full minh-[100vh] bg-gfl-blue text-center flex flex-col place-items-center p-5 sm:p-10'>
    <h1 className='text-white font-black text-lg sm:text-3xl'>WTF is this gfl?</h1>
    <p className='text-white font-bold text-sm sm:text-xl sm:w-1/2'>GFL stands for Good Food League and we like good food. We also like sharing our findings to the world</p>

    <div className='flex flex-row place-items-center w-full md:w-1/2 mt-10'>
    <Image className='mr-5' src="/mobile.png" width={80} height={80} alt="mobile pic"></Image>
    <p className='text-white font-normal font-bold text-sm sm:text-lg w-full md:w-2/3 lg:w-1/2' >We are a group of locals recommending good places to eat and drink.</p>
    </div>

    <div className='flex flex-row justify-end items-center w-full md:w-1/2  mt-10'>

    <p className='text-white font-normal font-bold text-sm sm:text-lg w-full md:w-2/3 lg:w-1/2' >We battle ignorance out of the goodness of our hearts bringing good food to good people.</p>
    <Image className='mr-5' src="/search.png" width={80} height={80} alt="search pic"></Image>
    </div>


    <div className='flex flex-row place-items-center w-full md:w-1/2 mt-10'>
    <Image className='mr-5' src="/nomoney.png" width={80} height={80} alt="nomoney pic"></Image>
    <p className='text-white font-normal font-bold text-sm sm:text-lg w-full md:w-2/3 lg:w-1/2' >We dont get paid by the businesses and we never will, we do it to help people find good places to eat.</p>
    </div>


    </section>
   
    </main>
  )
}
