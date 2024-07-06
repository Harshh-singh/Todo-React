import styles from './addtodo.module.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodoAsync } from '../../redux/TodoReducer';

function AddTodo() {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState('');

    function handleAddTodo(todoTitle){
        const todo = {
            title: todoTitle
        }
        dispatch(addTodoAsync(todo));
        setTodoTitle('');
    }

    return(
        <div className={styles.addtodo}>
            <input type="text"
                   name="Task"
                   value={todoTitle}
                   onChange={(e)=>setTodoTitle(e.target.value)}
                   placeholder='What do you need to do?'/>
            <button type="submit" id='Task' 
            onClick={()=>handleAddTodo(todoTitle)}>Add Todo</button>
        </div>
    )
}

export default AddTodo;