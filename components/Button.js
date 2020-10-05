import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ loading, children, disabled, ...props }) => (
    <button {...props} className={styles.button} disabled={disabled || loading}>
        {loading ? "Submitting..." : children}
    </button>
);

export default Button;
