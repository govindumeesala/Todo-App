import PropTypes from 'prop-types';
import { useState } from 'react';

export default function AppInput ({ addItem }) {

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addTask = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  }

  const addDate = (event) => {
    const newDate = event.target.value
    setDate(newDate)
  }

  const handleItem = () => {
    addItem(task, date);
    setTask("")
    setDate("")
  }

  return (
    <div className="container text-container">
          <div className="row">
            <div className="col-6">
              <input type="text" value={task} name="name" id="task" placeholder="Eg: cooking noodles" onChange={addTask} />
            </div>
            <div className="col-4">
              <input type="date" value={date} name="date" id="date" onChange={addDate} />
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success btn-wid" onClick={handleItem}>Add</button>
            </div>
          </div>
        </div>
  )
}

AppInput.propTypes = {
  addItem: PropTypes.func.isRequired
}