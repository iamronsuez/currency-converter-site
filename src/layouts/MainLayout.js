import React from "react"
import {Header, Footer} from '../components'
const MainLayout = ({children}) => {
  return (
    <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
    <Header />
    {children}
    <Footer />
  </div>
  )
}


export default MainLayout
