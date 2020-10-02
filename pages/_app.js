import "../styles/globals.css";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import configureStore from "../store/store";
import Header from "../components/header";

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { hideHeader: Component.hideHeader, pageProps };
    }

    render() {
        const { Component, pageProps, store, hideHeader } = this.props;

        return (
            <Provider store={store}>
                <Container>
                    <Header hidden={hideHeader} />
                    <Component {...pageProps} />
                </Container>
            </Provider>
        );
    }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
