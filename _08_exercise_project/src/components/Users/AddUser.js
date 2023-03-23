import Card from '../UI/Card';
import Button from '../UI/Button';

export default function AddUser() {
  const submitUser = (e) => {
    console.log(e.target);

    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={submitUser}>
        <div>
          <label htmlFor='username'>User name</label>
          <input type='text' id='username' />
          <label htmlFor='age'>Age</label>
          <input type='number' id='age' />
        </div>
        <Button type='submit'>Add user</Button>
      </form>
    </Card>
  );
}
