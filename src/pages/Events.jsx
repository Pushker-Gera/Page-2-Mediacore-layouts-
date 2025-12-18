import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'

const Events = () => {
  const location = useLocation();
  return (
      <div>
          <header className='bg-img'>
              <div class="container padding-top">
                  <p class="Home">
                    <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link> &gt; {location.pathname.replace("/", "")}
                  </p>
                  <h3 class="Events">Events</h3>
              </div>
          </header>
          <EventsSection />
          <Footer/>
    </div>
  )
}

export default Events