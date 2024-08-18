import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import {MdDelete} from 'react-icons/md'



const ExpenseList = React.memo(({handleEdit, expenses,handleDelete,clearItems}) => {
  return (
    <>
    <ul className='list'>
        {expenses.map(expense=> {
            return(
                <ExpenseItem key={expense.id} expense={expense}
                handleDelete={handleDelete} handleEdit={handleEdit}/>
            )
        })}
    </ul>
    <button className='btn' onClick={clearItems}>
        목록지우기<MdDelete className='btn-icon'/>
    </button>
  </>
  )
})

export default ExpenseList
