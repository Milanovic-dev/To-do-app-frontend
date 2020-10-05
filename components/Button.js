import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ children, onClick, type, disabled, loading }) => (
    <button
        className={styles.button}
        onClick={onClick}
        disabled={disabled || loading}
        type={type}
    >
        {loading ? "Submitting..." : children}
    </button>
);

export default Button;
