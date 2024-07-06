import styles from './card.module.css';
import { useDispatch } from 'react-redux';
import { updateTodoAsync } from '../../redux/TodoReducer';
import { deleteTodoAsync } from '../../redux/TodoReducer';

function Card({todo}) {
    const dispatch = useDispatch();

    //for updating a todo
    function handleIsComplete(selectedTodo){
        const updatedtodo = {
                id: selectedTodo.id,
                title:selectedTodo.title,
                completed: !selectedTodo.completed
        }
        dispatch(updateTodoAsync(updatedtodo));
    }

    //to delete a todo
    function handleDelete(todoId){
        dispatch(deleteTodoAsync(todoId));
    }

    return(
        <div className={styles.todocard}>
            <div className={styles.todoDetails}>
                <div className={styles.details}>
                    <input type="checkbox" name="todo" className={styles.todoCheckbox}
                    defaultChecked={todo.completed}
                    onClick={()=>handleIsComplete(todo)}/>
                    <span>{todo.title}</span>
                </div>   
                <img src="https://cdn-icons-png.flaticon.com/128/11502/11502974.png" 
                     alt="delete"
                     onClick={()=>handleDelete(todo.id)} />            
            </div>
        </div>
    )
}

export default Card;