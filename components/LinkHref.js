import { Link } from "../i18n";
import styles from "../styles/Header.module.css";

const LinkHref = ({ value, href }) => (
    <Link href={href}>
        <a className="link">{value}</a>
    </Link>
);

export default LinkHref;
