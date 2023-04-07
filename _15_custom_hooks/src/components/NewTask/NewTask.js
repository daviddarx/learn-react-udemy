import useHttp from '../../hooks/use-http';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const [isLoading, error, sendRequest] = useHttp();

  const enterTaskHandler = (taskText) => {
    sendRequest(
      'https://react-http-d10a2-default-rtdb.firebaseio.com/tasks.json',
      { text: taskText },
      (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
      },
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
