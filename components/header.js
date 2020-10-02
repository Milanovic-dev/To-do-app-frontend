import React from "react";
import Link from "next/link";

const Header = ({ enabled }) => {
    if (!enabled) return null;

    return (
        <nav style={styles.navbar}>
            <Link href="/">
                <div style={styles.navbarBrand}>todoapp</div>
            </Link>
            <div style={styles.navbarOptions}>
                <Link href="/login">
                    <a style={styles.navbarOption}>Login</a>
                </Link>
                <Link href="/register">
                    <a style={styles.navbarOption}>Register</a>
                </Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        height: 55,
        justifyContent: "center",
        width: "100%",
        backgroundColor: "rgb(253, 253, 253)",
        borderBottom: "1px solid rgb(220, 220, 220)",
        paddingLeft: 200,
        paddingRight: 200,
    },
    navbarBrand: {
        flex: 1,
        alignItems: "flex-start",
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "#E44232",
        cursor: "pointer",
    },
    navbarOptions: {
        justifyContent: "flex-end",
        alignSelf: "center",
        alignContent: "flex-end",
    },
    navbarOption: {
        alignSelf: "center",
        color: "#575757",
        marginLeft: 10,
        marginRight: 10,
    },
};

export default Header;
