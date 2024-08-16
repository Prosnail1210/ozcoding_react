import React, { Component } from 'react'
import './ExpenseForm.css'

const ExpenseForm =({handleSubmit, charge,handleCharge,amount,handleAmount}) => {

    return (
      <form>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor='charge'>상품</label>
                <input type='text' 
                    className='form-control' 
                    id='charge' 
                    name='charge'
                    placeholder='예) 콜라'
                    value={charge}
                    onChange={handleCharge} />
            </div>
            <div className='form-group'>
                <label htmlFor='amount'>비용</label>
                <input type='number' 
                    className='form-control' 
                    id='amount' 
                    name='amount'
                    placeholder='예) 100'
                    value={amount}
                    onChange={handleAmount}/>
            </div>
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>제출</button>
      </form>
    )
}

export default ExpenseForm;
