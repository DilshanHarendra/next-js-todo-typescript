import type { NextPage } from 'next'
import React from "react";

const BaseLayout:NextPage=(props)=>{
    return(<div className="mx-auto container">
        {props.children}
    </div>)
}
export default BaseLayout
