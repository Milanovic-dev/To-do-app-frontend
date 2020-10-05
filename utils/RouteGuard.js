import cookies from "next-cookies";
import { Router } from "../i18n";

export const withRouteGuard = (Component) => {
    const AuthGuard = (props) => <Component {...props} />;

    const redirectToLogin = (ctx) => {
        if (ctx.req) {
            ctx.res.writeHead(302, { Location: "/login" });
            ctx.res.end();
        } else {
            Router.push("/login");
        }
    };

    AuthGuard.getInitialProps = async (ctx) => {
        const token = cookies(ctx).token;
        if (!token) {
            redirectToLogin(ctx);
        }

        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    return AuthGuard;
};
