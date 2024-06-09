import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
        <div className='position-fixed'>
          <Header/>
        </div>
        <div>
          <Outlet/>
        </div>
        <div>
          <Footer/> 
        </div>
    </div>
  )
}
