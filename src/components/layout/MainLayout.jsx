import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { NavLink, Outlet } from 'react-router-dom'
import { PATH } from '../../constant/config'

export const MainLayout = () => {
  return (
    <div>
        <div className='position-fixed'>
          <button className='btn'>
            <NavLink to={PATH.admin}>Admin</NavLink>
          </button>
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
