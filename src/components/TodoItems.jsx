import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';
import styles from "./TodoItems.module.css"

const TodoItems = ({todoItems, deleteItem}) => {
  if (todoItems.length === 0) {
    return (
      <div className={styles.noTasksMsg}>
        <center><h3>No tasks to show.</h3></center>
      </div>
    )
  } 
  
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            deleteItem={deleteItem}
          >

          </TodoItem>
        )
      )}
    </div>
  )
  
}

TodoItems.propTypes = {
  todoItems: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default TodoItems;