import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispacth = useDispatch();
  return (
    <Button type='small' onClick={() => dispacth(deleteItem(pizzaId))}>
      DELETE
    </Button>
  );
}

export default DeleteItem;
