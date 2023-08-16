import React from 'react'
import logo from '../../assets/invest.png'
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header