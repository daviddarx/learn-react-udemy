export default function AddUser() {
  const submitUser = (e) => {
    console.log(e.target);

    e.preventDefault();
  };

  return (
    <form onSubmit={submitUser}>
      <label htmlFor='username'>User name</label>
      <input type='text' id='username' />
      <label htmlFor='age'>Age</label>
      <input type='number' id='age' />
      <button type='submit'>Add user</button>
    </form>
  );
}
