import { createContext, useState } from "react"

export const LoaderDataContext = createContext()

const LoaderContext = ({children}) => {
    const [loader, setLoader] = useState(false)
  return (
    <LoaderDataContext.Provider value={{loader, setLoader}}>
        {children}
    </LoaderDataContext.Provider>
  )
}

export default LoaderContext
