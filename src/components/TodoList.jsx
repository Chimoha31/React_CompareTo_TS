import React from "react";

const TodoList = ({ taskList, setTaskList }) => {

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleCheck = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={task.id}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCheck(task.id)}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
