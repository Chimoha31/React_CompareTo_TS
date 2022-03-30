import React, { useState } from "react";

const InputForm = ({ taskList, setTaskList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputValue,
      },
    ]);
    console.log(taskList);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputValue} />
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
