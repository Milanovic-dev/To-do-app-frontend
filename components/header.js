import React from "react";
import LinkHref from "./LinkHref";
import styles from "../styles/Header.module.css";
import { i18n, Link, withTranslation } from "../i18n";
import { languages } from "../languages";

const Header = ({ t, hidden }) => {
    if (hidden) return null;

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbarBrand}>todoapp</div>
            </Link>
            <div className={styles.navbarOptions}>
                <LinkHref href="/login" value={t("login")} />
                <LinkHref href="/register" value={t("register")} />
                <select
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    className={styles.navbarOption}
                >
                    <LanguageList languages={languages} />
                </select>
            </div>
        </nav>
    );
};

const LanguageList = ({ languages }) =>
    languages.map((item, i) => (
        <option key={i} value={item.toLowerCase()}>
            {item}
        </option>
    ));

Header.getInitialProps = async () => ({
    namespacesRequired: ["common", "header"],
});

export default withTranslation("header")(Header);
