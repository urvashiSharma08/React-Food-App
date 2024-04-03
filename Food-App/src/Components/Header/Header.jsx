import React, { useState } from 'react'
import './Header.css'

const Header = () => {

  const [menu, setMenu] = useState('Menu')

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>Our vision is simple: to nourish and delight, bringing joy with every bite.Join us on this flavorful journey,
          where food becomes a celebration, untold.</p>
        <button>
          <a href='#explore-menu' onClick={() => setMenu("Menu")} >View Menu</a>
        </button>
      </div>
    </div>
  )
}

export default Header
