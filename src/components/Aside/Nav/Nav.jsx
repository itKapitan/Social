import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";


export default function Nav() {
    return (
        <nav className={s.nav}>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/profile">Profile</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/dialogs">Messages</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/feed">News</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/users">Users</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/settings">Settings</NavLink>
        </nav>
    )
}

