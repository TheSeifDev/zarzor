import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Previous from './Previous/Previous'
import Work from './Work/Work'
import Flow from './Flow/Flow'
import Expreience from './Experience/Expreience'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Previous />
      <Work />
      <Flow />
      <Expreience />
      <Footer />
    </main>
  )
}

export default Home