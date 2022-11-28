import React from "react";

export default function ProjectCase({Case,projectIndex,setStateCase}){
    
function setterState(){
    let str=String(projectIndex);
    str+="-"+Case.caseName;
    setStateCase(str);
}
    return(
        <>
        <div className="projectCase" onClick={()=>{setterState()}}>{Case.caseName}</div>
        </>
    )
}