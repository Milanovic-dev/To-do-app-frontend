import { Link } from "../i18n";
import styles from "../styles/Header.module.css";

const LinkHref = ({ children, value, href }) => (
    <Link href={href}>
        {value ? <a className="link">{value}</a> : children}
    </Link>
);

export default LinkHref;
