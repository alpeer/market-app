import { useEffect, useState } from "react"
import useConnection from "use-connection"
import { notify } from "../utils"
import "../../node_modules/react-toastify/dist/ReactToastify.min.css"

export const Connection = () => {
  const [lost, setLost] = useState()
  const net = useConnection()

  useEffect(() => {
    if (net && !net.online) {
      setLost(true)
      notify.error("Internet connection lost")
    } else if(lost && net && net.online) {
      setLost(false)
      notify.success("Connection established")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [net && net.online])
}