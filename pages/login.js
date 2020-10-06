import { Formik, Field, Form } from "formik";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { loginSchema } from "../components/forms/validation/auth";
import LinkHref from "../components/LinkHref";
import { useDispatch, useSelector } from "react-redux";
import { login, setAuthError } from "../store/actions/authActions";
import { setLoading } from "../store/actions/loaderActions";
import { useCallback, useEffect } from "react";
import { authErrorSelector } from "../store/selectors/authSelector";
import { loadingSelector } from "../store/selectors/loaderSelector";
import { withAuthGuard } from "../utils/RouteGuard";

const Login = () => {
    const dispatch = useDispatch();
    const handleLogin = useCallback((values) => dispatch(login(values)), []);

    const error = useSelector(authErrorSelector);
    const loading = useSelector(loadingSelector);

    useEffect(() => {
        return () => {
            dispatch(setAuthError(""));
            dispatch(setLoading(false));
        };
    }, []);

    return (
        <div className="loginForm">
            <div style={{ fontSize: 20, marginBottom: 30, fontWeight: "bold" }}>
                Please login
            </div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleLogin}
                validationSchema={loginSchema}
            >
                {() => (
                    <Form>
                        <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            type="email"
                        ></Field>
                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            type="password"
                        ></Field>
                        <Button type="submit" loading={loading}>
                            Log in
                        </Button>
                        <p className="error">{error}</p>
                    </Form>
                )}
            </Formik>
            <div className="separator"></div>
            <p>
                Don't have an account?{" "}
                <LinkHref value="Register" href="/register" />
            </p>
        </div>
    );
};

export default withAuthGuard(Login);
