import React from "react";
import LinkHref from "./LinkHref";
import styles from "../styles/Header.module.css";
import { i18n, Link, withTranslation } from "../i18n";
import { languages } from "../languages";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors/authSelector";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

const Header = ({ t, hidden }) => {
    if (hidden) return null;

    const user = useSelector(userSelector);

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <div className={styles.navbarBrand}>todoapp</div>
            </Link>
            <div className={styles.navbarOptions}>
                <Options t={t} user={user} />
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

const Options = ({ t, user }) => {
    const dispatch = useDispatch();

    return (
        <>
            {!user ? (
                <>
                    <LinkHref href="/login" value={t("login")} />
                    <LinkHref href="/register" value={t("register")} />{" "}
                </>
            ) : (
                <>
                    <LinkHref
                        href={`/user/${user.id}/todos`}
                        value={t("todos")}
                    />
                    <a
                        href="#"
                        onClick={() => dispatch(logout())}
                        className={styles.navbarOption}
                    >
                        {t("logout")}
                    </a>
                </>
            )}
        </>
    );
};

Header.getInitialProps = async () => ({
    namespacesRequired: ["common", "header"],
});

export default withTranslation("header")(Header);
