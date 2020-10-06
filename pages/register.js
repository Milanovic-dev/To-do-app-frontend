import { Formik, Field, Form } from "formik";
import TextField from "../components/TextField";
import Button from "../components/Button";
import LinkHref from "../components/LinkHref";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerSchema } from "../components/forms/validation/auth";
import { setLoading } from "../store/actions/loaderActions";
import { register, setAuthError } from "../store/actions/authActions";
import { authErrorSelector } from "../store/selectors/authSelector";
import { loadingSelector } from "../store/selectors/loaderSelector";
import { withAuthGuard } from "../utils/RouteGuard";

const Register = () => {
    const dispatch = useDispatch();
    const handleRegister = useCallback(
        (values) => dispatch(register(values)),
        []
    );

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
                Please sign up
            </div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={handleRegister}
                validationSchema={registerSchema}
            >
                {() => (
                    <Form>
                        <Field
                            as={TextField}
                            label="Name"
                            name="name"
                            type="text"
                        ></Field>
                        <Field
                            as={TextField}
                            label="Email address"
                            name="email"
                            type="email"
                        ></Field>
                        <Field
                            as={TextField}
                            label="Password"
                            name="password"
                            type="password"
                        ></Field>
                        <Field
                            as={TextField}
                            label="Confirm Pasword"
                            name="confirmPassword"
                            type="password"
                        ></Field>
                        <Button loading={loading} type="submit">
                            Sign up
                        </Button>
                        <p className="error">{error}</p>
                    </Form>
                )}
            </Formik>
            <p style={{ fontSize: 11 }}>
                By continuing you agree to Todoapp's Terms of Service and
                Privacy Policy.
            </p>
            <div className="separator"></div>
            <p>
                Already registered? <LinkHref value="Login" href="/login" />
            </p>
        </div>
    );
};

export default withAuthGuard(Register);
