import React from 'react'
import Navebar from './Navebar'

const LayoutWithNavbar = ({children}) => {
  return (
    <div>
        <Navebar/>
        <div>{children}</div>
    </div>
  )
}

export default LayoutWithNavbar