import React from "react";
import {GetServerSideProps, NextPage} from "next";

type Props={
    title:string
}

const TodoWrapper:NextPage<Props>=(props)=>{
    return(<div>
        {props.title}
        {props.children}
    </div>)
}

export const getServerSideProps:GetServerSideProps=async (context)=> {
    console.log(context.req.url)
    return {
        props: {title:'Hi how are you'}, // will be passed to the page component as props
    }
}
export default TodoWrapper
