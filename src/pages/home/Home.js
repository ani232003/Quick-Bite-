import React from 'react'
import Layout from '../../Components/layouts/Layout'
import Section from './section1'
import About from './About'
import Menu from './Menu'
import Promotion from './promotion'
import Shop from './Shop'
import Blog from './blog'
import Contact from './contact'

const Home = () => {
  return (
   <Layout>
      <Section />
      <About />
      <Menu />
      <Promotion />
      <Shop />
      <Blog />
      <Contact />
   </Layout>
  )
}

export default Home