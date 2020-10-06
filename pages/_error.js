import Link from "next/link";

const Error = ({ statusCode }) => (
    <div style={styles.container}>
        <p style={styles.errorText}>
            {statusCode
                ? `${statusCode} | An error occurred on server`
                : "An error occurred on client"}
        </p>
        <Link href="/">
            <p style={styles.backToHomeText}>Back to home</p>
        </Link>
    </div>
);

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

Error.hideHeader = true;

const styles = {
    container: {
        margin: 0,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    errorText: {
        fontSize: 28,
    },
    backToHomeText: {
        fontSize: 16,
        color: "#2667ff",
        cursor: "pointer",
    },
};

export default Error;
