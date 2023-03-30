import classes from './Input.module.css';

export default function Input({ id, type, label, value, onChange, onBlur, isValid }) {
  return (
    <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
}
