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
    <div className="relative h-screen w-screen">
      <div
        className={cn(
          `${activeBoss == 0 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row p-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[56%] w-[45%] self-end" src={BongImg.src} alt="Bong" />
        <Blockquote name="Bong" description="The Tsundere" quote="The brain technically named itself." />
      </div>

      <div
        className={cn(
          `${activeBoss == 1 ? "opacity-100" : "opacity-0"}  absolute flex h-full w-full flex-row py-10 pl-24 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[63%] w-[32%] self-end" src={SamImg.src} alt="Bong" />
        <Blockquote name="Sam" description="The Carton Destroyer" quote="If you're an idiot and you know you're an idiot , you're already way less of an idiot than an idiot that doesn't release he's an idiot." />
      </div>

      <div
        className={cn(
          `${activeBoss == 2 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row py-10 pl-20 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[65%] w-[35%] self-end" src={NoImg.src} alt="Bong" />
        <Blockquote name="No" description="The Sleeper" quote="What should I eat tonight?" />
      </div>

      <div
        className={cn(
          `${activeBoss == 3 ? "opacity-100" : "opacity-0"} absolute flex h-full w-full flex-row py-10 pl-24 pr-10`,
          "transition-opacity ease-in-out delay-150 duration-1000"
        )}
      >
        <img className="h-[70%] w-[35%] self-end" src={BuImg.src} alt="Bong" />
        <Blockquote name="Bu" description="The XYZ" quote="A bus 10 minutes early is way worse than a bus 10 minuts late." />
      </div>
    </div>
  )
}

export default Bosses
