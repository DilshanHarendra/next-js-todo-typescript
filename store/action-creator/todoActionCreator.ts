import {AnyAction, Dispatch} from "redux";
import {todoAction} from "../actions/todoActions";
import {todoTypes} from '../types/todoTypes'
import axios from "axios";
import {ThunkAction} from "redux-thunk";



export  const addTodo=(todo:ITodo)=>{
    return (dispatch:Dispatch<todoAction>)=>{
        dispatch({
            type:todoTypes.ADD_TODO,
            payload:todo
        })
    }
}




export function setTodos(): ThunkAction<Promise<any>, void, void, AnyAction> {
    return (dispatch) => {
        return new Promise((resolve: any, reject: any) => {
            axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
                dispatch({
                    type:todoTypes.SET_TODOS,
                    payload:res.data
                })
                resolve(res.data)
            }).catch(err=>{
                console.log(err)
                reject(err)
            })
        });
    };
}
