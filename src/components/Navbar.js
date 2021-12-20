import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function MenuItem(props) {
    return (
        <li className='nav-menu-item'> 
            <img src={props.src} alt=""/> 
            <span>{props.text}</span>
        </li>
    )
}

const menuItems = ["home"]

// "search", "watchlist", "originals", "movies", "series"]

const MenuDomEls = menuItems.map(item => {
    return (
        <Link to="/">
            <MenuItem 
            key={item}
            href="#" 
            text={item.toUpperCase()} 
            src={"/images/" + item + "-icon.svg"}
            />
        </Link>
        
    )
    
    
})


function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/">
                <img src="/images/logo.svg" className='logo' alt=""/>
            </Link>
           
            <ul className='nav-menu'>
                {MenuDomEls}
            </ul>
            <img className="navbar-profile-photo"src="https://avatars.githubusercontent.com/u/46041082?v=4" alt=""/>
        </nav>
    )
}

export default Navbar

