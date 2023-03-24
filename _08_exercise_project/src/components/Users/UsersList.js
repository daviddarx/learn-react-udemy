import Card from '../UI/Card';
import UserItem from './UserItem';

export default function UserList(props) {
  return (
    <Card className='users-list'>
      <h1>Users:</h1>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <UserItem name={user.name} age={user.age} />
          </li>
        ))}
      </ul>
    </Card>
  );
}
