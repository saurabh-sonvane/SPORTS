
import SportsHero from '@/components/HeroComponent'
import Navbar from '@/components/Navbar'
import F1JapanCard from '@/components/F1JapanCard'
import TopPackages from '@/components/TopPackages'
import "../app/globals.css"

export default function Home() {
  return(
    <div className='w-full h-full'>
       <Navbar />
      <div className="relative">
      <SportsHero />
      <F1JapanCard />
      </div>
      <TopPackages />
     
    </div>  
  )
}
