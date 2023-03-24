import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(taskTitle, taskDescripcion) {
    setTask([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length,
        descripcion: taskDescripcion,
      },
    ]);
  }

  function deleteTask(idTask) {
    setTask(tasks.filter((n) => n.id !== idTask));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
