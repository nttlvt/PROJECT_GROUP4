import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { ListCourses } from '../../components/ListCourses/ListCourses'
import { Number } from '../../components/Number/Number'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <ListCourses/>
      <Number/>
    </div>
  )
}
