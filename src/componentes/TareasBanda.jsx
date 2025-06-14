import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import "../assets/scss/_03-Componentes/_TareasBanda.scss";

function TareasBanda() {
  const [tasksData, setTasksData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [assignedFilter, setAssignedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('/TareasBanda.json');
        if (!response.ok) throw new Error('Error al cargar las tareas');
        const data = await response.json();

        const cleanedData = data.categories.map(category => ({
          ...category,
          id: category.id.replace(/\s+/g, ''),
          name: category.name.replace(/\n/g, ' ').trim(),
          tasks: category.tasks.map(task => ({
            ...task,
            name: task.name.replace(/\n/g, ' ').trim()
          }))
        }));

        setTasksData(cleanedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    if (tasksData.length > 0) {
      localStorage.setItem('bandTasks', JSON.stringify(tasksData));
    }
  }, [tasksData]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setTasksData((prevTasks) => {
        const oldIndex = prevTasks.findIndex(cat => cat.tasks.some(t => t.id === active.id));
        const newIndex = prevTasks.findIndex(cat => cat.tasks.some(t => t.id === over.id));

        if (oldIndex === newIndex) {
          const category = prevTasks[oldIndex];
          const oldTaskIndex = category.tasks.findIndex(t => t.id === active.id);
          const newTaskIndex = category.tasks.findIndex(t => t.id === over.id);

          const updatedCategory = {
            ...category,
            tasks: arrayMove(category.tasks, oldTaskIndex, newTaskIndex)
          };

          return prevTasks.map((cat, idx) =>
            idx === oldIndex ? updatedCategory : cat
          );
        }
        return prevTasks;
      });
    }
    setActiveId(null);
  };

  const toggleTask = (categoryId, taskId) => {
    setTasksData(prevTasks =>
      prevTasks.map(category =>
        category.id === categoryId
          ? {
              ...category,
              tasks: category.tasks.map(task =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : category
      )
    );
  };

  const assignTask = (categoryId, taskId, assignee) => {
    setTasksData(prevTasks =>
      prevTasks.map(category =>
        category.id === categoryId
          ? {
              ...category,
              tasks: category.tasks.map(task =>
                task.id === taskId
                  ? { ...task, assigned: assignee }
                  : task
              )
            }
          : category
      )
    );
  };

  const filteredCategories = tasksData.map(category => ({
    ...category,
    tasks: category.tasks.filter(task => {
      if (filter === 'completed' && !task.completed) return false;
      if (filter === 'pending' && task.completed) return false;
      if (assignedFilter !== 'all' && task.assigned !== assignedFilter) return false;
      if (searchTerm && !task.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    })
  })).filter(category => category.tasks.length > 0);

  const totalTasks = tasksData.flatMap(category => category.tasks).length;
  const completedTasks = tasksData.flatMap(category => category.tasks).filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  if (loading) {
    return (
      <div className="pantalla-tareasbanda">
        <div className="loading-message">
          <i className="bi bi-hourglass-split"></i> Cargando lista de tareas...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pantalla-tareasbanda">
        <div className="error-message">
          <i className="bi bi-exclamation-triangle-fill"></i> Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="pantalla-tareasbanda">
      <div className="contenedor-tareasbanda">
        <div className="encabezado-banda">
          <h1>Lista de Tareas de la Banda</h1>
        </div>

        <div className="controles-filtrado">
          <div className="search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Buscar tareas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filtros">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todas las tareas</option>
              <option value="completed">Completadas</option>
              <option value="pending">Pendientes</option>
            </select>

            <select value={assignedFilter} onChange={(e) => setAssignedFilter(e.target.value)}>
              <option value="all">Todos los responsables</option>
              <option value="both">Todos</option>
              <option value="alejandro">Alejandro</option>
              <option value="fabiola">Fabiola</option>
            </select>
          </div>
        </div>

        <div className="resumen-estadisticas">
          <div className="estadistica">
            <span className="numero">{totalTasks}</span>
            <span className="etiqueta">Total</span>
          </div>
          <div className="estadistica">
            <span className="numero">{completedTasks}</span>
            <span className="etiqueta">Completadas</span>
          </div>
          <div className="estadistica">
            <span className="numero">{pendingTasks}</span>
            <span className="etiqueta">Pendientes</span>
          </div>
        </div>

        <div className="lista-tareas">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <motion.div
                  key={category.id}
                  className="categoria"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="encabezado-categoria">
                    <i className={`bi ${getCategoryIcon(category.id)}`}></i>
                    <h3>{category.name}</h3>
                    <span className="contador-tareas">
                      {category.tasks.length} tareas
                    </span>
                  </div>

                  <SortableContext
                    items={category.tasks.map(task => task.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <ul className="tareas">
                      {category.tasks.map((task) => (
                        <SortableItem
                          key={task.id}
                          id={task.id}
                          task={task}
                          toggleTask={toggleTask}
                          assignTask={assignTask}
                          categoryId={category.id}
                        />
                      ))}
                    </ul>
                  </SortableContext>
                </motion.div>
              ))
            ) : (
              <div className="sin-resultados">
                <i className="bi bi-search"></i>
                <p>No se encontraron tareas con los filtros seleccionados</p>
              </div>
            )}
            <DragOverlay>
              {activeId ? (
                <div className="tarea-arrastrando">
                  {tasksData.flatMap(cat => cat.tasks).find(t => t.id === activeId)?.name}
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

function SortableItem({ id, task, toggleTask, assignTask, categoryId }) {
  return (
    <motion.li
      className={`tarea ${task.completed ? 'completada' : ''} asignada-${task.assigned}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 200 }
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mango-arrastre">
        <i className="bi bi-grip-vertical"></i>
      </div>

      <input
        type="checkbox"
        id={`tarea-${id}`}
        checked={task.completed}
        onChange={() => toggleTask(categoryId, id)}
      />

      <label htmlFor={`tarea-${id}`}>
        <span className="nombre-tarea">{task.name}</span>
        <span className="fecha-vencimiento">{task.dueDate}</span>
      </label>

      <div className="asignacion-tarea">
        <select
          value={task.assigned}
          onChange={(e) => assignTask(categoryId, id, e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          <option value="both">Todos</option>
          <option value="alejandro">Alejandro</option>
          <option value="fabiola">Fabiola</option>
        </select>
      </div>
    </motion.li>
  );
}

function getCategoryIcon(categoryId) {
  const icons = {
    'salon': 'bi-music-note-beamed',
    'vestuario': 'bi-person',
    'menu': 'bi-list-task',
    'invitaciones': 'bi-envelope',
    'entretenimiento': 'bi-camera',
    'fotografia': 'bi-camera-video',
    'regalos': 'bi-gift',
    'web': 'bi-globe',
    'ceremonia': 'bi-calendar-event',
    'transporte': 'bi-truck'
  };
  return icons[categoryId] || 'bi-list-check';
}

export default TareasBanda;
