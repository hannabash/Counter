import React from "react";

const Task = ({
  text,
  isCompleted,
  handleEdit,
  handleRemove,
  handleComplete,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: isCompleted ? "red" : "",
      }}
    >
      <div>{text}</div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleComplete}>Complete</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default React.memo(Task);
