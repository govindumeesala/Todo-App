import PropTypes from 'prop-types'
import { MdDelete } from "react-icons/md";

function TodoItem ({todoName, todoDate, deleteItem}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger btn-wid" onClick={() => deleteItem(todoName)}><MdDelete /></button>
        </div>
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default TodoItem;