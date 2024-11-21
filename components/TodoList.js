import React from "react";
import PropTypes from "prop-types";

const TodoList = ({todos, onDelete, onEdit }) => {
  return (
    <div className="space-x-4 sm:space-x-0 sm:flex sm:flex-col sm:space-y-2">
        {todos.length  === 0 ? (
             <p className="text-center text-lg text-gray-500">No tasks added yet!</p>
        ):(
            todos.map((todo , index)=>(
                <div key={index}>
                <p className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-300">{todo}</p>
                <div >
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none transition-colors duration-300"
                onClick={() => onEdit(index)} >Edit</button>
                <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none transition-colors duration-300"
                onClick={() => onDelete(index)}  >Delete</button>
                </div>
                </div>
            ))
        )}
          
    </div>
  );
};

export default TodoList;
