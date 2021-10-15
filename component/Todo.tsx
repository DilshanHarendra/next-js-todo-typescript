import React from "react";
import type {NextPage} from "next";

type props={
    data:ITodo
}

const Todo:NextPage<props>=(props)=>{
    return(<div className="w-full px-4 py-4 border shadow mb-5 text-sm ">
        {props.data.id} {props.data.title}
    </div>)
}
export default Todo
