import Button from "../components/Button";
import LinkHref from "../components/LinkHref";
import { userSelector } from "../store/selectors/authSelector";
import { useSelector } from "react-redux";

export default function Home() {
    const user = useSelector(userSelector);

    return (
        <div className="index">
            {user ? <HomeWithAuth user={user} /> : <HomeNotAuth />}
        </div>
    );
}

const HomeNotAuth = () => (
    <>
        <h2>
            Organize everything with <br></br> Todo App
        </h2>
        <div style={{ width: "60%", margin: "auto" }}>
            <LinkHref href="/login">
                <Button type="button">Get Started</Button>
            </LinkHref>
        </div>
    </>
);

const HomeWithAuth = ({ user }) => (
    <>
        <h2>
            Welcome back <br></br> {user.name}!
        </h2>
        <div style={{ width: "60%", margin: "auto" }}>
            <LinkHref href={`/user/${user.id}/todos`}>
                <Button type="button">Check my Todos</Button>
            </LinkHref>
        </div>
    </>
);
