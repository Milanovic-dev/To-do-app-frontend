import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { getTodos } from "../../../store/actions/todoActions";
import {
    todoSelector,
    todoErrorSelector,
} from "../../../store/selectors/todoSelector";
import { userSelector } from "../../../store/selectors/authSelector";
import { loadingSelector } from "../../../store/selectors/loaderSelector";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

const Todos = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();
    const handleFetch = () => dispatch(getTodos(id));

    const error = useSelector(todoErrorSelector);
    const loading = useSelector(loadingSelector);
    const todos = useSelector(todoSelector);
    const user = useSelector(userSelector);

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <div className="todos">
            <p className="todoHeader">My Todos</p>
            <p className="todoUser">{user && user.name}</p>
            <span className="todoSort">Sort By</span>
            <select>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
            </select>
            <div className="separatorTodos"></div>
            <p className="error">{error}</p>
            {loading ? (
                <Skeleton count={5} height={80} />
            ) : (
                <TodoList todos={todos} />
            )}
        </div>
    );
};

const TodoList = ({ todos }) => {
    if (todos.length == 0) {
        return <p>Your todo list is empty!</p>;
    }

    return todos.map((item, i) => {
        return <TodoCard key={i} item={item} />;
    });
};

const TodoCard = ({ item }) => {
    return (
        <div className="todoCard">
            <div className="todoMain">
                <div className="todoTitle">{item.title}</div>
                <div className="todoPriority">{item.priority}</div>
            </div>
            <div className="todoCompleted">
                <div className="todoCompletedText">
                    {item.completed ? "Done" : "Unfinished"}
                </div>
                <div
                    className={clsx(
                        "todoCompletedIcon",
                        item.completed && "completed"
                    )}
                ></div>
            </div>
        </div>
    );
};

export default Todos;
