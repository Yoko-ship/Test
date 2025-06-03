import React from 'react'
import classes from "@/app/page.module.css"
import Link from 'next/link'

function Header() {
  return (
    <header className={classes.header}>
        <ul>
            <li><Link href="/">Главное меню</Link></li>
            <li><Link href="/tests">Тесты</Link></li>
        </ul>
    </header>
  )
}

export default Header