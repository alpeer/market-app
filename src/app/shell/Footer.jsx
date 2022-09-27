import { useMemo } from "react"

export const Footer = () => {
  const year = useMemo(() => (new Date()).getFullYear(), [])
  return <footer>
    <div className="bottom">
      <div className="left">
        &copy; {year} Market
      </div>
      <div className="dot-seperator"/>
      <div className="right">
        Privacy Policy
      </div>
    </div>
  </footer>
}