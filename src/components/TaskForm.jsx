import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(title, descripcion);
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus

          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2" 
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="descripcion de tarea"
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2" 
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
