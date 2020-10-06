import cookies from "next-cookies";
import { Router } from "../i18n";

const redirectTo = (ctx, url) => {
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: url });
        ctx.res.end();
    } else {
        Router.push(url);
    }
};

export const withNotAuthGuard = (Component) => {
    const AuthGuard = (props) => <Component {...props} />;

    AuthGuard.getInitialProps = async (ctx) => {
        const token = cookies(ctx).token;
        if (!token) {
            redirectTo(ctx, "/login");
        }

        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    return AuthGuard;
};

export const withAuthGuard = (Component) => {
    const AuthGuard = (props) => <Component {...props} />;

    AuthGuard.getInitialProps = async (ctx) => {
        const token = cookies(ctx).token;
        if (token) {
            redirectTo(ctx, "/");
        }

        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    };

    return AuthGuard;
};
