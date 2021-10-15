import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoActionCreators} from '../store/action-creator';
import { RootState } from '../store/reducers/rootReducer';
import Todo from "../component/Todo";
import {NextPage} from "next";

type Props={
    title?:string
}

const TodoList:NextPage<Props>=(props)=>{
    const [loading,setLoading]= useState(true)
    const todos = useSelector((state: RootState) => state.todo.todos)
    const dispatch = useDispatch();

    const { setTodos }:{setTodos:Function} = bindActionCreators(todoActionCreators, dispatch)



    useEffect(()=>{
        setTodos().then(()=>{
            setLoading(false)
        })
    },[])

    return(
        <div className="p-5">
            <h1 className="text-2xl mb-5">Todo {props.title}</h1>
            {loading&&<div>Loading...</div>}
            {todos.map((todo:ITodo,index:number)=>(
                <Todo key={index} data={todo} />
            ))}

        </div>
    )
}




export default TodoList
