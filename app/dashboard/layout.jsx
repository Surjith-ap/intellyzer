import React from 'react'
import {Header} from './_components/Header'
import { UserButton } from '@clerk/nextjs'
function Dashboardlayout({children}) {
  return (
    <div>
      <Header/>
      <UserButton/>
        {children}
    </div>
  )
}

export default Dashboardlayout