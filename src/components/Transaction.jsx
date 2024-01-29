import { useContext } from 'react'
import Item from './Item';

import DataContext from '../data/Datacontext';




const Transaction= (props)=> {

    const {items} = props
    const name = useContext(DataContext)

  console.log(items)

  const deletedAmount = (oldItem) =>{
    setItems((prev)=>{
     return amount
    })
 }

  return (
    <ul>
       {/* <Item title={data[0].title} amount={data[0].amount}/>
       <Item title={data[1].title} amount={data[1].amount}/> */}
       {items.map((e)=> {
          return <Item {...e} key={e.id} onDelete={deletedAmount} />
       })}
            
      
     
    </ul>
       
      
    
  );
}

export default Transaction