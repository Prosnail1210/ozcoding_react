import { Component, useState } from "react";
import './App.css'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = ()=>{

  const [expenses,setExpenses] = useState([
    {id:1, charge:'콜라',amount:2000},
    {id:2, charge:'빵',amount:1000},
    {id:3, charge:'맥북',amount:20000}
  ])
  const [charge,setCharge] = useState("")
  const [amount,setAmount] = useState(0)
  const handleCharge = (e) => {
    setCharge(e.target.value)
  }
  const handleAmount = (e) => {
    setAmount(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(charge !== ''&&amount>0){
      let newExpenses = {id:crypto.randomUUID(),charge,amount}
      newExpenses = [...expenses,newExpenses]
      setExpenses(newExpenses)
      setCharge("")
      setAmount(0)
    }else{
      console.log('error')
    }
  }
const handleDelete = (id)=>{
  const newExpenses = expenses.filter(expense => expense.id !== id)
  setExpenses(newExpenses)
}
    return (
      <main className = 'main-container'>
        <div className = 'sub-container'>
          <h1>장바구니</h1>

          <div style={{width:'100%', backgroundColor: "white", padding: "1rem"}}>
            <ExpenseForm handleSubmit={handleSubmit} charge = {charge} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount}/>
          </div>

          
          <div style={{width:'100%', backgroundColor: "white", padding: "1rem"}}>
            <ExpenseList handleDelete = {handleDelete} expenses = {expenses}/>
          </div>

          <div style={{display: 'flex', justifyContent: 'start', marginTop: '1rem'}}>
            <p style={{fontSize: '2rem'}}>
              총합계:
            </p>
          </div>
          
        </div>
      </main>
    )
}
export default App;