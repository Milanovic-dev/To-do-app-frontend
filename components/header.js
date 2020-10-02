import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = ({ hidden }) => {
    if (hidden) return null;

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbarBrand}>todoapp</div>
            </Link>
            <div className={styles.navbarOptions}>
                <Link href="/login">
                    <a className={styles.navbarOption}>Login</a>
                </Link>
                <Link href="/register">
                    <a className={styles.navbarOption}>Register</a>
                </Link>
                <select className={styles.navbarOption}>
                    <LanguageList languages={["EN", "DE", "FR"]} />
                </select>
            </div>
        </nav>
    );
};

const LanguageList = ({ languages }) => {
    return languages.map((item, i) => {
        return <option selected={item === "EN"}>{item}</option>;
    });
};

export default Header;
