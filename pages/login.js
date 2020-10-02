import { Formik } from "formik";

const Login = () => (
    <div className="loginForm">
        <Formik initialValues={{ email: "", password: "" }}>
            {({ values, errors, touched, isSubmitting }) => (
                <form>
                    <div>
                        <label className="inputLabel" htmlFor="email">
                            Email
                        </label>
                        <br></br>
                        <input type="email" name="email" value={values.mail} />
                    </div>
                </form>
            )}
        </Formik>
    </div>
);

export default Login;
