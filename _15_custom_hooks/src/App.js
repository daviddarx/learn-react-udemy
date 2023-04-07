import React, { useEffect, useState } from 'react';

import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks(
      { url: 'https://react-http-d10a2-default-rtdb.firebaseio.com/tasks.json' },
      (taskObject) => {
        const loadedTasks = [];

        for (const taskKey in taskObject) {
          loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
        }

        setTasks(loadedTasks);
      },
    );
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
