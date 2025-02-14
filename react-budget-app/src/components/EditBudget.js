import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

const EditBudget = ({setIsEditing,budget}) => {
    const {dispatch}=useContext(AppContext)
    const [value, setValue] = useState('')
    const handleSaveClick = (value) =>{
        dispatch({type:'SET_BUDGET',payload:value})
        setIsEditing(false)
    }
  return (
    <>
        <input required='required'
        type='number'
        className='form-contral me-3'
        id='name'
        value={value}
        onChange={e=>setValue(e.target.value)}/>
        <button type='button' className='btn btn-primary'
        style={{minWidth:55}}
        onClick={()=>handleSaveClick(value)}>수정</button>

    </>
  )
}

export default EditBudget