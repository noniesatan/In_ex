import DataContext from '../data/Datacontext'
import './Item.css'
import PropsTypes from 'prop-types'





const Item = (props) =>{
   const {title,amount,other}  = props
   const status = amount<0 ? "expense" : "income"
   const symbol = amount<0 ? "-" : "+"
    
    return(
        <li id='list' className={status}>{title}{other}<span>{symbol}{Math.abs(amount)}</span>
       
        </li>
    )
}
Item.propsTypes={
    title: PropsTypes.string.isRequired,
    amount: PropsTypes.number.isRequired
}



export default Item