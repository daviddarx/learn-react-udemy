import Button from './Button';
import Card from './Card';
import './ErrorModal.css';

export default function ErrorModal(props) {
  const discard = () => {
    props.onDiscard();
  };

  return (
    <div className='error-modal'>
      <Card className='error-modal__content'>
        <header>
          <h2>Error found</h2>
        </header>
        <p>{props.message}</p>
        <footer>
          <Button onClick={discard}>Ok, I'll, fix that</Button>
        </footer>
      </Card>
    </div>
  );
}
