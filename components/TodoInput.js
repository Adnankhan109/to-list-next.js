import React from "react";

const TodoInput = ({currenttodo, setCurrentTodo, handleAddOrEdit, isEditing }) => {
    return (
        <div className="flex items-center gap-4">
        <input
          type="text"
          value={currenttodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          placeholder="Enter a task"
          className="w-full p-2 mb-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400"
        />
        
        <button
          onClick={handleAddOrEdit}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none transition-colors duration-300"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      
    );
  };
  
  export default TodoInput;