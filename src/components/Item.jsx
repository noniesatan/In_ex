import { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from '../data/Datacontext';
import './Item.css';
import { TiDeleteOutline } from "react-icons/ti";


const Item = (props) => {
  const { title, amount, other } = props;
  const status = amount < 0 ? 'expense' : 'income';
  const symbol = amount < 0 ? '-' : '+';
  const [titlelist, setTitleList] = useState([title]);

  const deleteByIndex = (index) => {
    const deletedAmount = titlelist[index]; 
    setTitleList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
      onDelete(deletedAmount);
     
      
    });
  };

  return (
    <ul>
      {titlelist.map((e, index) => (
        <li key={index} id='list' className={status} key={index}>
          {e}
          {other}
          <span>
            {symbol}
            {Math.abs(amount)}
            {' '}
            
            
            <button onClick={() => deleteByIndex(index)}   className='ml-5 p-2'><TiDeleteOutline /></button>
            
            
            
            
          </span>
        </li>
      ))}
    </ul>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
