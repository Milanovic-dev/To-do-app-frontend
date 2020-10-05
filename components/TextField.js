import React from "react";
import styles from "../styles/Field.module.css";

const TextField = (props) => (
    <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
            {props.label}
        </label>
        <br></br>
        <input className={styles.input} {...props} />
        <p className="error">{props.error}</p>
    </div>
);

export default TextField;
