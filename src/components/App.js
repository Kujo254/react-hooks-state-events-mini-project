import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data"; // ✔ correct path

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const visibleTasks = tasks.filter((task) => {
    return selectedCategory === "All" || task.category === selectedCategory;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={visibleTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
