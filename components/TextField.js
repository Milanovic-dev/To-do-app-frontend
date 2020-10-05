import React from "react";
import styles from "../styles/Field.module.css";
import { ErrorMessage, Field } from "formik";

const TextField = (props) => (
    <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
            {props.label}
        </label>
        <br></br>
        <Field className={styles.input} {...props} />
        <p className="error">
            <ErrorMessage name={props.name} />
        </p>
    </div>
);

export default TextField;
