import styles from './card.module.css';

function Card({title}) {
    return(
        <div className={styles.todocard}>
            <div className={styles.todoDetails}>
                <div className={styles.details}>
                    <input type="checkbox" name="todo" className={styles.todoCheckbox}/>
                    <span>{title}</span> 
                </div>   
                <img src="https://cdn-icons-png.flaticon.com/128/11502/11502974.png" alt="delete" />            
            </div>
        </div>
    )
}

export default Card;