"use client";
import { useState } from "react";

export default function Home() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([
  { id: 1, text: "Solicitar cita médica", completed: true, isEditing: false },
  { id: 2, text: "Comprar leche y pan", completed: false, isEditing: false }
]);
  const [deletedTasks, setDeletedTasks] = useState<string[]>([]);
  const [showDeleted, setShowDeleted] = useState(false);

  function handleAddTask() {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      isEditing: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  }

  function handleDeleteTask(id: number) {
    const taskToDelete = (tasks.find((task) => task.id === id));
    if (taskToDelete) {
      setDeletedTasks([...deletedTasks, taskToDelete.text])
    }
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleToggleShowDeleted()
  {
    setShowDeleted(!showDeleted);
  }

  function handleToggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleToggleEdit(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  }

  function handleUpdateText(id: number, newText: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }
  return (
    <main
      className="pagina"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <section
        className="todo"
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          width: "100%",
          maxWidth: "400px",
          border: "2px solid #333",
        }}
      >
        {/* ENCABEZADO */}
        <header className="todo-header">
          <h1>MIS TAREAS</h1>
        </header>

        <div className="separador"></div>

        {/* CREAR NUEVA TAREA */}
        <section className="crear-tarea">
          <input
            id="nuevaTarea"
            type="text"
            placeholder="+ Escribe una nueva tarea..."
            aria-label="Nueva tarea"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
          />

          <button
            id="btnAgregar"
            type="button"
            aria-label="Agregar tarea"
            onClick={handleAddTask}
          >
            +
          </button>
        </section>

        {/* LISTA DE TAREAS */}
        <section id="listaTareas" className="lista-tareas">
          {tasks.map((task) => (
            <article 
              key={task.id}
              className={`tarea ${task.completed ? "tarea-completada" : ""} ${
                task.isEditing ? "tarea-editando" : ""
              }`}
            >
              <button
                className={`btn-completar ${task.completed ? "completada" : ""}`}
                type="button"
                aria-label="Marcar tarea como completada"
                onClick={() => handleToggleTask(task.id)}
              >
                {task.completed ? "✓" : ""}
              </button>

              {task.isEditing ? (
                <input 
                  className="input-editar"
                  type="text"
                  value={task.text}
                  onChange={(e) => handleUpdateText(task.id, e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleToggleEdit(task.id)}
                  autoFocus
                />
              ) : (
                <span 
                  className="texto-tarea"
                  onDoubleClick={() => handleToggleEdit(task.id)}
                >
                  {task.text}
                </span>
              )}

              <button
                className="btn-editar"
                type="button"
                aria-label="Editar tarea"
                onClick={() => handleToggleEdit(task.id)}
              >
                ✎
              </button>

              <button
                className="btn-eliminar"
                type="button"
                aria-label="Eliminar tarea"
                onClick={() => handleDeleteTask(task.id)}
              >
                🗑
              </button>
            </article>
          ))}
        </section>
        
        {/* INFORMACIÓN INFERIOR */}
        <footer className="todo-footer">
          <span className="cuenta-tareas">
            Tareas totales: {tasks.length}
          </span>
          <span className="cuenta-completadas">
            Tareas completadas: {tasks.filter(value => value.completed === true).length}
          </span>
        </footer>
    </section> 

    <section
      className="seccion-papelera"
      style={{
        marginTop: "16px",
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        type="button"
        onClick={handleToggleShowDeleted}
        style={{
          padding: "8px 20px",
          cursor: "pointer",
          borderRadius: "12px",
          border: "1px solid #ccc",
          backgroundColor: "#eee",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        🗑 Papelera ({deletedTasks.length})
      </button>

      {showDeleted && (
        <div
          className="panel-eliminadas"
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            border: "1px dashed #999",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            color: "#000",
            boxSizing: "border-box",
          }}
        >
          <h4 style={{ margin: "0 0 8px 0", color: "#000", textAlign: "center" }}>
            Tareas Eliminadas
          </h4>
          {deletedTasks.length === 0 ? (
            <p style={{ fontSize: "12px", color: "#000", margin: 0, textAlign: "center" }}>
              No hay tareas en la papelera.
            </p>
          ) : (
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", color: "#000" }}>
              {deletedTasks.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      </section>
    </main>
  );
}