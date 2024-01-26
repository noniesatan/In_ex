import { useContext } from "react";
import DataContext from "../data/Datacontext";
import './Report.css'

const ReportComponent = ()=> {
    const {income , expense} = useContext(DataContext)
   
    
    return (
        <div className="flex space-x-10 mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            <div id="Totalin">
            <p className="text-lg mb-2 text-green-500">Total Income: {income}</p>
            <p className="text-lg mt-3 text-red-400">Total Expense: {expense}</p>
            </div>
            <div>
               <p className="text-black ">Total: (AUD)</p>
               <h1 className="text-black text-4xl">{income-expense}</h1>
            </div>
            
        </div>
    );

}
export default ReportComponent