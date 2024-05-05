import { useEffect, useState } from "react";
import cn from "classnames"
import { SegmentedControl, IconButton } from "@radix-ui/themes"
import { DoubleArrowUpIcon, DoubleArrowDownIcon, PersonIcon, BackpackIcon, MixIcon, RocketIcon, TargetIcon } from "@radix-ui/react-icons"

const MainNavBar = () => {
  const [activeSection, setActiveSection] = useState<string>()

  const navigateTo = (dest: string) => {
    const element = document.getElementById(dest)
    if (element) {
      element?.scrollIntoView({
        block: "start",
        behavior: "smooth"
      })
      setActiveSection(dest)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id")

        if (id && entry.isIntersecting) {
          if (entry.intersectionRatio == 1 ||
            entry.intersectionRatio >= 0.75 && id == "radar") {
            setActiveSection(id)
          }
        }
      })
    }, {
      threshold: [0.75, 1.0]
    })

    const elements = document.querySelectorAll("[data-main-nav-item]")
    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={cn(
          `${activeSection == "welcome" ? "visible" : "hidden"}`,
          "transition-all ease-in-out delay-150 duration-300"
        )}
      >
        <IconButton
          className="animate-bounce"
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("about")}
        >
          <DoubleArrowDownIcon width="18" height="18" />
        </IconButton>
      </div>
      <div
        className={cn(
          `${activeSection != "welcome" ? "max-sm:hidden" : "hidden"}`,
          "transition-all ease-in-out delay-150 duration-500"
        )}
      >
        <SegmentedControl.Root
          radius="full"
          value={activeSection}
          onValueChange={navigateTo}
        >
          <SegmentedControl.Item value="about">About me</SegmentedControl.Item>
          <SegmentedControl.Item value="expertise">Expertises</SegmentedControl.Item>
          <SegmentedControl.Item value="project">Projects</SegmentedControl.Item>
          <SegmentedControl.Item value="certificate">Certificates</SegmentedControl.Item>
          <SegmentedControl.Item value="radar">Tech radar</SegmentedControl.Item>
        </SegmentedControl.Root>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("welcome")}
        >
          <DoubleArrowUpIcon width="18" height="18" />
        </IconButton>
      </div >
      <div
        className={cn(
          `${activeSection != "welcome" ? "sm:hidden" : "hidden"} absolute bottom-0 flex flex-row`,
          "transition-all ease-in-out delay-150 duration-500"
        )}
      >
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("about")}
        >
          <PersonIcon width="18" height="18" />
        </IconButton>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("expertise")}
        >
          <BackpackIcon width="18" height="18" />
        </IconButton>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("project")}
        >
          <MixIcon width="18" height="18" />
        </IconButton>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("certificate")}
        >
          <RocketIcon width="18" height="18" />
        </IconButton>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("radar")}
        >
          <TargetIcon width="18" height="18" />
        </IconButton>
        <IconButton
          ml="1"
          radius="full"
          variant="surface"
          onClick={() => navigateTo("welcome")}
        >
          <DoubleArrowUpIcon width="18" height="18" />
        </IconButton>
      </div >
    </div>
  )
}

export default MainNavBar
