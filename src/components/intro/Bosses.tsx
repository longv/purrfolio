import { useState, useEffect } from "react"
import BongImg from "@assets/images/bong.png";
import SamImg from "@assets/images/sam.png";
import NoImg from "@assets/images/no.png";
import BuImg from "@assets/images/bu.png";

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
      <div className={`${activeBoss == 0 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row items-end p-10`}>
        <img className="h-[56%] w-[45%]" src={BongImg.src} alt="Bong" />
      </div>
      <div
        className={`${activeBoss == 1 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row items-end py-10 pl-24 pr-10`}
      >
        <img className="h-[58%] w-[30%]" src={SamImg.src} alt="Bong" />
      </div>
      <div
        className={`${activeBoss == 2 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row items-end py-10 pl-20 pr-10`}
      >
        <img className="h-[60%] w-[35%]" src={NoImg.src} alt="Bong" />
      </div>
      <div
        className={`${activeBoss == 3 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row items-end py-10 pl-24 pr-10`}
      >
        <img className="h-[70%] w-[35%]" src={BuImg.src} alt="Bong" />
      </div>
    </div>
  )
}

export default Bosses
