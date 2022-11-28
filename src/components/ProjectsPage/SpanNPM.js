import React from "react";

export default function SpanNPM({setStatusNPM}){

    return(
        <>
        <span className="spanNPM" onClick={()=>setStatusNPM(true)}>+</span>
        </>
    )
}