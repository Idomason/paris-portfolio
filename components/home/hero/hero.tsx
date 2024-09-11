import HeroText from '@/components/home/hero/heroText'
import HeroImage from '@/components/home/hero/heroImage'

export default function Hero() {
  return (
    <div className='h-screen w-full pt-[4vh] md:pt-[12vh] bg-rose-950 overflow-hidden'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
            {/* TEXT CONTENT */}
            <HeroText />
            {/* IMAGE CONTENT */}
            <HeroImage />
        </div>
      </div>
    </div>
  )
}
