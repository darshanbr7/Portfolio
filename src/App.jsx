import React from 'react'
import Header from './component/headder/Header'
import Nav from "./component/nav/Nav"
import About from "./component/about/About"
import Experence from "./component/experence/Experence"
import Service from './component/service/Service'
import Testimonia from './component/testimonia/Testimonia'
import Footer from './component/footer/Footer'
import Contact from "./component/contact/Contact"
import Portfolio from './component/portfolio/Portfolio'

const App = () => {
  return (
    <div>
        <Header />
        <Nav />
        <About />
        <Experence />
        <Service />
        <Portfolio/>
        <Testimonia />
        <Contact />
        <Footer />
    </div>
  )
}

export default App