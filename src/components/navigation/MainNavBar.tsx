import { useEffect, useState } from "react";
import { SegmentedControl, IconButton } from "@radix-ui/themes"
import { DoubleArrowUpIcon } from "@radix-ui/react-icons"

const MainNavBar = () => {
  const [activeSection, setActiveSection] = useState<string>()

  const navigateTo = (dest: string) => {
    const element = document.getElementById(dest)
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth"
      })
      setActiveSection(dest)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id")
        if (id) {
          if (entry.isIntersecting) {
            // Element is entering the screen, either from top or bottom.
            // Or it is leaving the screen but still >= 50% visibility.
            if (entry.intersectionRatio == 1) {
              setActiveSection(id)
            }
          } else {
            if (entry.intersectionRatio == 0 && id == "certificate") {
              setActiveSection("radar")
            }
          }
        }
      })
    }, {
      threshold: [0.0, 1.0]
    })

    const elements = document.querySelectorAll("[data-main-nav-item]")
    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`${activeSection != "welcome" ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out delay-50 duration-200`} >
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
        className="animate-bounce"
        ml="1"
        radius="full"
        variant="surface"
        onClick={() => navigateTo("welcome")}
      >
        <DoubleArrowUpIcon width="18" height="18" />
      </IconButton>
    </div >
  )
}

export default MainNavBar
