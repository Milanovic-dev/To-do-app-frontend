import Button from "../components/Button";
import LinkHref from "../components/LinkHref";
import { Router } from "../i18n";

export default function Home() {
    return (
        <div className="index">
            <h2>
                Organize everything with <br></br> Todo App
            </h2>
            <div style={{ width: "60%", margin: "auto" }}>
                <LinkHref href="/login">
                    <Button type="button">Get Started</Button>
                </LinkHref>
            </div>
        </div>
    );
}
