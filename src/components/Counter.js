import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter({ count, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="counter">
      <button className="btn btn-warning">{count}</button> 
      <button className="btn btn-primary" onClick={onIncrement}>+</button> 
      <button className="btn btn-info" onClick={onDecrement}>-</button> 
      <button className="btn btn-danger" onClick={onDelete}>Delete</button> 
    </div>
  );
}

export default Counter;
