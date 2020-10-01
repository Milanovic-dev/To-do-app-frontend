import Head from "next/head";
import { actionChannel } from "redux-saga/effects";
import styles from "../styles/Home.module.css";
import setLoading from "../store/actions/loaderActions";
import { useDispatch } from "react-redux";

export default function Home() {
    const dispatch = useDispatch();

    return (
        <div>
            <div>Home</div>
            <button onClick={() => dispatch(setLoading(true))}>Test</button>
        </div>
    );
}
