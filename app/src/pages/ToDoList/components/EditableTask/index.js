import React, { useState } from "react";

const EditableTask = ({ taskText, handleEdit, handleSave, handleUndo }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "yellow",
      }}
    >
      <input value={taskText} onChange={handleEdit} />
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleUndo}>Undo</button>
      </div>
    </div>
  );
};

export default React.memo(EditableTask);
