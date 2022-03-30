import React from "react";

const TodoList = () => {
  return (
    <div className="todoList">
      <div className="todos">
        <div className="todo">
          <div className="todoText">
            <span>Programming</span>
          </div>
          <div className="icons">
            <button>
              <i className="fas fa-check"></i>
            </button>
            <button>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
