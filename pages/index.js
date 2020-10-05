import Button from "../components/Button";
import { Router } from "../i18n";

export default function Home() {
    return (
        <div className="index">
            <h2>
                Organize everything with <br></br> Todo App
            </h2>
            <div style={{ width: "60%", margin: "auto" }}>
                <Button
                    onClick={() => {
                        Router.push("/login");
                    }}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
