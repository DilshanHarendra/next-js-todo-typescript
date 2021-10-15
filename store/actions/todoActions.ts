
// @ts-ignore
import {TodoTypes} from '../types/todoTypes';


interface addTodoAction {
    type: TodoTypes.ADD_TODO;
    payload: ITodo;
};

interface setTodosAction {
    type: TodoTypes.SET_TODOS;
    payload: ITodo[];
};



export type todoAction=addTodoAction|setTodosAction

