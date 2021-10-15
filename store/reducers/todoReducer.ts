// @ts-ignore

import {todoTypes} from "../types/todoTypes";
import {todoAction} from "../actions/todoActions";

export interface todoState{
    todos:ITodo[],
    counter:number
}

const init:todoState={
    todos:[],
    counter:0
}

export default function todoReducer(state=init,action:todoAction):todoState{
    switch (action.type){
        case todoTypes.ADD_TODO:{
            let arr=state.todos
            arr.push(action.payload)
            return{
                todos:arr,
                counter:state.counter++
            }
        }
        case todoTypes.SET_TODOS:{
            return {
                todos: action.payload,
                counter:action.payload.length
            }
        }
        default:{
            return state
        }
    }

}
