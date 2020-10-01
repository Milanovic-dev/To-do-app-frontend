import "../styles/globals.css";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import configureStore from "../store/store";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        console.log(this.props);
        return (
            <Provider store={store}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Provider>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
