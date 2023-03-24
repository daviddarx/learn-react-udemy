export default function UserItem(props) {
  return (
    <div className='user-item'>
      {props.name} ({props.age} years old)
    </div>
  );
}
