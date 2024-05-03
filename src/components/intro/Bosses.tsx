import { useState, useEffect } from "react"
import cn from "classnames"
import Blockquote from "@components/intro/Blockquote.tsx"
import BongImg from "@assets/images/bong.png"
import SamImg from "@assets/images/sam.png"
import NoImg from "@assets/images/no.png"
import BuImg from "@assets/images/bu.png"

const Bosses = () => {
  const [activeBoss, setActiveBoss] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeBoss >= 3) {
        setActiveBoss(0)
      } else {
        setActiveBoss(activeBoss + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [activeBoss])

  return (
    <div className="relative h-full w-full">
      <div
        className={cn(
          `${activeBoss == 0 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row p-16`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[60%] w-[45%] self-end" src={BongImg.src} alt="Bong" />
        <Blockquote name="Bong" description="The Tsundere" quote="The brain technically named itself." />
      </div>

      <div
        className={cn(
          `${activeBoss == 1 ? "opacity-100" : "opacity-0"}  absolute flex h-full w-full flex-row py-20 pl-24 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[63%] w-[32%] self-end" src={SamImg.src} alt="Bong" />
        <Blockquote name="Sam" description="The Carton Destroyer" quote="Gotta bite them all!" />
      </div>

      <div
        className={cn(
          `${activeBoss == 2 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row py-20 pl-20 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[65%] w-[35%] self-end" src={NoImg.src} alt="Bong" />
        <Blockquote name="No" description="The Sleeper" quote="What should I eat tonight?" />
      </div>

      <div
        className={cn(
          `${activeBoss == 3 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row py-20 pl-24 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[70%] w-[35%] self-end" src={BuImg.src} alt="Bong" />
        <Blockquote name="Bu" description="The Player" quote="A bus 10 minutes early is way worse than a bus 10 minuts late." />
      </div>

      <a
        href="https://www.instagram.com/tonobuu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        className={cn(
          "z-100 inline-flex absolute right-2 bottom-2 items-center justify-center py-2 px-4 text-base font-medium text-gray-500 rounded-full bg-gray-50",
          "hover:text-gray-900 hover:bg-gray-100",
          "dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
        )}
      >
        <span className="w-full">Art by tonobuu</span>
        <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  )
}

export default Bosses
