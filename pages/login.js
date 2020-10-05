import { Formik, Field, Form } from "formik";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { loginSchema } from "../components/forms/validation/auth";
import LinkHref from "../components/LinkHref";
import { useDispatch, useSelector } from "react-redux";
import { login, setAuthError } from "../store/actions/authActions";
import { setLoading } from "../store/actions/loaderActions";
import { useEffect } from "react";
import { createSelector } from "reselect";

const Login = () => {
    const dispatch = useDispatch();

    const getAuthReducer = (state) => state.authReducer;
    const getLoadingReducer = (state) => state.loaderReducer;

    const errorSelector = createSelector(
        getAuthReducer,
        (authReducer) => authReducer.authError
    );

    const loadingSelector = createSelector(
        getLoadingReducer,
        (loaderReducer) => loaderReducer.loading
    );

    const error = useSelector(errorSelector);
    const loading = useSelector(loadingSelector);

    useEffect(() => {
        return function cleanup() {
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
                onSubmit={(values) => {
                    dispatch(login(values));
                }}
                validationSchema={loginSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            type="email"
                            error={
                                errors.email && touched.email && errors.email
                            }
                        ></Field>
                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            type="password"
                            error={
                                errors.password &&
                                touched.password &&
                                errors.password
                            }
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

export default Login;
