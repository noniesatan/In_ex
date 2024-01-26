import { useState,useEffect } from 'react'
import './App.css'
import Transaction from './components/Transaction'
import FormComponents from './components/FormComponents'
import DataContext from './data/Datacontext'
import ReportComponent from './components/ReportComponent'




function App() {
  // const iniState = [
  //     {id:1,title:"rent",amount:-200},
  //     {id:2,title:"rental",amount:-400},
  //     {id:3,title:"salary",amount:1500},
  //     {id:4,title:"lent",amount:800},

  // ]
  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const [currentDate, setCurrentDate] = useState('');


  const onAddNewItem = (newItem) =>{
     setItems((prev)=>{
      return [newItem,...prev]
     })
  }

  useEffect(()=>{
        const amounts = items.map(items=>items.amount)
        const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
        const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
        setReportIncome(income)
        setReportExpense(expense)
        // Put the date on
        const now = new Date();
        const options = { weekday: 'short', year: '2-digit', month: 'short', day: '2-digit' };
        const formattedDate = now.toLocaleDateString('en-GB', options); // Use 'en-GB' locale to format as dd/mm/yy
        setCurrentDate(formattedDate);
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={{
      income: reportIncome,
      expense: reportExpense

    }}>
      <div id="appcon">
        <h2 className="text-3xl font-bold text-blue-600 mb-5  md:text-base">Income - Expense App</h2>
        <div className='text-blue-300 mb-2'>Date: {currentDate}</div>
        <ReportComponent/>
        <FormComponents onAddItem={onAddNewItem}/>
        <Transaction items ={items}/>
      </div>
    </DataContext.Provider>
  )
}

export default App
