"use client"
import React, { useState, useEffect } from "react";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
// import { json } from "stream/consumers";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [currenttodo , setCurrentTodo] = useState<string>("");
  const [editindex, setEditIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   setTodos(savedTodos);
  // }, []);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
    setTodos(parsedTodos);
  }, []);
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos)); 
  },[todos])

  const handleAddOrEdit = ()=>{
    if (editindex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editindex ? currenttodo : todo
      );

      setTodos(updatedTodos);
      setEditIndex(null);
    }
    else{
      setTodos([...todos, currenttodo]);
    }
    setCurrentTodo("")
  }

  const handleDelete = (index: number) =>{
    setTodos(todos.filter((_,i)=> i !== index))
  }

  const handleEdit = (index: number)=>{
    setCurrentTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          ToDo Application
        </h1>
        <TodoInput
          currenttodo={currenttodo}
          setCurrentTodo={setCurrentTodo}
          handleAddOrEdit={handleAddOrEdit}
          isEditing={editindex !== null}
        />
        <TodoList
          todos={todos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};


export default App;
