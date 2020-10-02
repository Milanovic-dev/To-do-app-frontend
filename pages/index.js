import Head from "next/head";
import { actionChannel } from "redux-saga/effects";
import styles from "../styles/Home.module.css";
import { setLoading } from "../store/actions/loaderActions";
import { useDispatch } from "react-redux";

import Header from "../components/header";

export default function Home() {
    const dispatch = useDispatch();

    return <div>Index</div>;
}
