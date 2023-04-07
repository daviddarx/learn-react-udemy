import React, { useEffect, useState, useCallback } from 'react';

import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [isLoading, error, sendRequest] = useHttp();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback((taskText) => {
    sendRequest('https://react-http-d10a2-default-rtdb.firebaseio.com/tasks.json', null, (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    });
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
