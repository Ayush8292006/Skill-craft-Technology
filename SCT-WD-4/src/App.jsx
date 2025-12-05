import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const addTask = () => {
    if (!taskText) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      date: taskDate,
      time: taskTime,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
    setTaskText('');
    setTaskDate('');
    setTaskTime('');
  };

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    const newText = prompt('Edit Task', task.text);
    if (newText !== null) {
      setTasks(prev => prev.map(t => t.id === id ? { ...t, text: newText } : t));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 font-sans text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-400 animate-fadeIn">React To-Do App</h1>
      
      <div className="flex flex-col md:flex-row gap-3 mb-6 justify-center">
        <input 
          type="text" 
          placeholder="Task" 
          value={taskText} 
          onChange={e => setTaskText(e.target.value)} 
          className="p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 shadow-sm text-gray-100"
        />
        <input 
          type="date" 
          value={taskDate} 
          onChange={e => setTaskDate(e.target.value)} 
          className="p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 shadow-sm text-gray-100"
        />
        <input 
          type="time" 
          value={taskTime} 
          onChange={e => setTaskTime(e.target.value)} 
          className="p-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200 shadow-sm text-gray-100"
        />
        <button 
          onClick={addTask} 
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`p-3 rounded-lg border flex justify-between items-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg 
                        ${task.completed ? 'bg-green-800 line-through border-green-600 text-gray-300' : 'bg-gray-800 border-gray-700'}`}
          >
            <div>
              <p className="font-medium">{task.text}</p>
              {task.date && <p className="text-sm text-gray-400">{task.date} {task.time}</p>}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => toggleComplete(task.id)} 
                className={`px-3 py-1 rounded-lg text-white transition-all duration-200 ${task.completed ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} shadow-sm hover:shadow-md`}
              >
                {task.completed ? 'Undo' : 'Done'}
              </button>
              <button 
                onClick={() => editTask(task.id)} 
                className="px-3 py-1 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
