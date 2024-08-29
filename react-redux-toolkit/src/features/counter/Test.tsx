import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUsersAsync, incrementAsync } from './counterSlice';

const Test = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const promis = dispatch(fetchUsersAsync())
        return ()=>{
            promis.abort()
        }
    },[])
    return (
        <div>Test</div>
    )
}

export default Test