import Card from "../Card/TodoCard";
import styles from './tasks.module.css';

function Tasks() {
    return(
        <div className={styles.tasksList}>
            <div className={styles.heading}>
            <img src="https://cdn-icons-png.flaticon.com/128/10024/10024117.png" alt="check" />
            <span>Todo App</span>
            </div>
            <Card title={"Complete Your Project"}/>
            <Card title={"Go to the Gym"}/>
            <Card title={"Drink 2 liter of water"}/>
            <Card title={"Eat 3000 calories"}/>
        </div>
    )
}

export default Tasks;