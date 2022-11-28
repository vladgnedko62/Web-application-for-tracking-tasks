import React from "react";
import Case from "./Case";

export default function SelectCaseModal({stateCase,setStateCase,setStatusDM,setStatusECM}){

if(!stateCase){
return null;
}
let projects=JSON.parse(localStorage.getItem("Projects"));
let indexProject=String(stateCase).split("-")[0];
let caseName=String(stateCase).split("-")[1];
let i= parseInt(indexProject);
let currentProject=projects[i];
let currentCase;
currentProject.cases.map((el)=>{
    if(el.caseName==caseName){
        currentCase=el;
    }
})
    return(
        <>
         <div className="overlay">
                <div className="modalProjectCase">
                    <Case 
                    CaseInfo={currentCase}
                    forStatus={stateCase}
                    setStatusDM={setStatusDM}
                    setStatusECM={setStatusECM}
                    setStateCase={setStateCase}
                    />
                   
                </div>
            </div>
        </>
    )
}