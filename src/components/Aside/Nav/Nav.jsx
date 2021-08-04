import React from 'react'
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";


export default function Nav() {
    return (
        <nav className={s.nav}>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/profile" exact>Profile</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/dialogs" exact>Messages</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/feed" exact>News</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/users" exact>Users</NavLink>
            <NavLink className={s.nav__link} activeClassName={s.active} to="/settings" exact>Settings</NavLink>
        </nav>
    )
}

