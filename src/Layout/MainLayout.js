import React from 'react'
import Nav from '../component/nav'

function MainLayout({children}) {
  return (
    <div>
        <Nav></Nav>
        <div>{children}</div>
    </div>
  )
}

export default MainLayout