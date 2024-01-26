import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'
import { string } from 'prop-types';


const FormComponents = (props) => {
    
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
   
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }

    const saveItem  = (event)=>{
        event.preventDefault()
        // alert("Add Item Complete.")
        const itemData = {
            id:uuidv4(),
            title: title,
            amount: Number(amount)
        }
    //    console.log(itemData);
        // send the data to App.jsx child to mom
        props.onAddItem(itemData)
       setTitle('')
       setAmount(0)
    }
useEffect (()=>{
    const checkData = title.length>0  && amount !==0
    
    
            setFormValid(checkData)
    
    
},[title,amount])


    return(
        <div>
            <form action="" onSubmit={saveItem}>
                <div className="" id="form-control">
                    <label htmlFor="">Income List :</label>
                    {/* <input className='text-black p-2' type="text" placeholder="List Item"  onChange={inputTitle} value={title}/> */}
                    
                    <select
                        id="incomelist"
                        onChange={inputTitle}
                        value={title}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Income List +</option>
                       
                        <option value="Salary">+ Salary</option>
                        <option value="PartTimeJob">+ PartTimeJob</option>
                        <option value="Forex">+ Forex</option>
                        
                    </select>
                    <label htmlFor="">Expense List :</label>
                    {/* <input className='text-black p-2' type="text" placeholder="List Item"  onChange={inputTitle} value={title}/> */}
                    <select
                        id="expenselist"
                        onChange={inputTitle}
                        value={title}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Expense List -</option>
                        <option value="Rent">- Rent</option>
                        <option value="Travel">- Travel Opal</option>
                        <option value="Food">- Food</option>
                        <option value="Shopping">- Shopping</option>
                        
                    </select>
                </div>
                <div id="form-control">
                    <label htmlFor="">Other :</label>
                    <input className='text-black p-2' type="text" placeholder="Other income/expense"  onChange={inputTitle} value={title}/>
                </div>
                <div id="form-control">
                    <label htmlFor="">Amount :</label>
                    <input className='text-black p-2' type="text" placeholder="+ income , - expense" name='newTodo' onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button  type="submit" disabled={!formValid}  id='btn'>Add</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponents