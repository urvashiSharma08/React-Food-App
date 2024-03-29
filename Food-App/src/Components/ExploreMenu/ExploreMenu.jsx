import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category ,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore Our Menu</h1>
       <p className='explore-menu-text'> Explore our diverse selection of dishes, crafted with the finest ingredients and culinary expertise. Whether you crave 
        comforting classics or crave innovative creations, we have something to satisfy every craving. Elevate your dining 
        experience with our exceptional menu and savor the essence of culinary excellence.</p>
        <div className="explore-menu-list">
            {menu_list.map((item , index) => {
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
