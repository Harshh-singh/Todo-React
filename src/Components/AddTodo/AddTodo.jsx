import styles from './addtodo.module.css';

function AddTodo() {
    return(
        <div className={styles.addtodo}>
            <input type="text" name="Task" placeholder='What do you need to do?'/>
            <button type="submit" id='Task'>Add Todo</button>
        </div>
    )
}

export default AddTodo;