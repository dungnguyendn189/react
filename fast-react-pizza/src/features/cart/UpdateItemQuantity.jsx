import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decresItemQuantity, incresItemQuantity } from './cartSlice';

function UpdateItemQuantity({ id, currentQuanlity }) {
  const dispacth = useDispatch();
  return (
    <div className='flex items-center gap-1 md:gap-3'>
      <Button type='round' onClick={() => dispacth(decresItemQuantity(id))}>
        -
      </Button>
      <span className='text-sm font-medium'>{currentQuanlity}</span>
      <Button type='round' onClick={() => dispacth(incresItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
