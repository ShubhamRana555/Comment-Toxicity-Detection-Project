import React from 'react'
import Navigation from "../components/Navigation"
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
        <div>
          <Navigation />
        </div>
        <div>
          <MainBody />
        </div>
        <Footer />
    </>
  )
}

export default Home