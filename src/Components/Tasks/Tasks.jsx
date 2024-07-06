import Card from "../Card/TodoCard";
import AddTodo from "../AddTodo/AddTodo";
import styles from './tasks.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { fetchTodosAsync } from "../../redux/TodoReducer";
import { useEffect } from "react";

function Tasks() {
    const tasks = useSelector((state)=>state.todoReducers.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodosAsync());
    },[dispatch]);
    
    return(
        <div className={styles.tasksList}>
            <div className={styles.heading}>
                <img src="https://cdn-icons-png.flaticon.com/128/10024/10024117.png" alt="check" />
                <span>Todo App</span>
            </div>
            <div className={styles.tasks}>
               {tasks.map((task, index)=>
               <Card todo={task} key={index}/>
            )}                                            
            </div>
            <AddTodo/>
        </div>
    )
}

export default Tasks;