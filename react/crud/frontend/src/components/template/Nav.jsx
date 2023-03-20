import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* <a href="/">
                <i className="fa fa-home"></i> ínicio
            </a>
            <a href="/users">
                <i className="fa fa-users"></i> usuários
            </a> */}
            <NavItem link="/" icon="home" label="Ínicio" /> 
            <NavItem link="/users" icon="users" label="Usuários" /> 

        </nav>
    </aside>