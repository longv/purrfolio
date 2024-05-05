import { useEffect } from "react"
import configData from "./config.json"
import { radar_visualization } from "./radar.js"

const radarData = {
  svg_id: "radar",
  width: 1450,
  height: 1000,
  scale: 1.0,
  colors: {
    background: "#fff",
    grid: "#dddde0",
    inactive: "#ddd",
  },
  title: "My Tech Radar",
  quadrants: [
    { name: "Blazingly Fast?" }, // 0
    { name: "Platform & Tools" }, // 1
    { name: "Domain" }, // 2
    { name: "Languages" }, // 3
  ],
  rings: [
    { name: "EXPERT", color: "#5ba300" }, // 0
    { name: "EXPERIENCED", color: "#009eb0" }, // 1
    { name: "SKILLFUL", color: "#c7ba00" }, // 2
    { name: "BEGINNER", color: "#e09b96" }, // 3
  ],
  print_layout: true,
  links_in_new_tabs: true,
  entries: configData.entries,
};

const ZalandoTechRadar = () => {
  useEffect(() => {
    radar_visualization(radarData)
  }, [])

  return (
    <div className="content w-screen overflow-scroll">
      <svg id="radar" className="max-w-max"></svg>
    </div>
  )
}

export default ZalandoTechRadar
