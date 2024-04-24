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
      <div className={`${activeBoss == 0 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row p-10`}>
        <img className="h-[56%] w-[45%] self-end" src={BongImg.src} alt="Bong" />
        <figure className="max-w-screen-md mx-auto text-center self-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"The brain technically named itself."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Bong</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <div
        className={`${activeBoss == 1 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row py-10 pl-24 pr-10`}
      >
        <img className="h-[63%] w-[33%] self-end" src={SamImg.src} alt="Bong" />
        <figure className="max-w-screen-md mx-auto text-center self-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"If you're an idiot and you know you're an idiot , you're already way less of an idiot than an idiot that doesn't release he's an idiot."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Sam</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <div
        className={`${activeBoss == 2 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row py-10 pl-20 pr-10`}
      >
        <img className="h-[65%] w-[35%] self-end" src={NoImg.src} alt="Bong" />
        <figure className="max-w-screen-md mx-auto text-center self-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"What should I eat tonight?"</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">No</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <div
        className={`${activeBoss == 3 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-150 duration-1000 absolute flex h-full w-full flex-row py-10 pl-24 pr-10`}
      >
        <img className="h-[70%] w-[35%] self-end" src={BuImg.src} alt="Bong" />
        <figure className="max-w-screen-md mx-auto text-center self-center">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"A bus 10 minutes early is way worse than a bus 10 minuts late."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Bu</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default Bosses
