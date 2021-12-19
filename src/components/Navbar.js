import React from 'react'
import './Navbar.css'

function MenuItem(props) {
    return (
        <li className='nav-menu-item'> 
            <img src={props.src} alt=""/> 
            <span>{props.text}</span>
        </li>
    )
}

const menuItems = ["home", "search", "watchlist", "originals", "movies", "series"]

const MenuDomEls = menuItems.map(item => {
    return <MenuItem 
            key={item}
            href="#" 
            text={item.toUpperCase()} 
            src={"/images/" + item + "-icon.svg"}
            />
})


function Navbar() {
    return (
        <nav className='navbar'>
            <img src="/images/logo.svg" className='logo' alt=""/>
            <ul className='nav-menu'>
                {MenuDomEls}
            </ul>
            <img className="navbar-profile-photo"src="https://avatars.githubusercontent.com/u/46041082?v=4" alt=""/>
        </nav>
    )
}

export default Navbar

