import React from 'react'
import Nav from './Nav/Nav'
import s from './Aside.module.css'

export default function Aside() {
  return (
    <aside className={s.aside}>
      <Nav/>
    </aside>
  )
}

