import classNames from "classnames"
import { useState } from "react"
import "./Section.css"

export const Section = ({ title, children }) => {
  const [active, setActive] = useState(false)
  const toggleActive = () => setActive(state => !state)
  
  return <div className={classNames("Section", { active })}>
    <h2 className="title" onClick={toggleActive}> {title} </h2>
    <div className="content">
      {children}
    </div>
  </div>
}