import React from "react";

export default function DeleteModalView({statusDM,setStatusDM}){
    function DeleteCase(caseName){

        let projects=JSON.parse(localStorage.getItem("Projects"));
        let strIndex=String(statusDM).split("-")[0];
        let currentCaseName=String(statusDM).split("-")[1];
        let index=parseInt(strIndex);
        let cases=projects[index].cases;
        let newCases=[];
        cases.map((elem)=>{
            if(elem.caseName!==currentCaseName){
                newCases.push(elem);
            }
        })
        projects[index].cases=newCases;
        localStorage.setItem("Projects",JSON.stringify(projects));
        setStatusDM(null);
        window.open('projects', '_self');
    }
    if(statusDM==null){
        return null;
    }
    return(
        <>
        <div className="overlay">
    <div className="modalDelete">
        <div className="infoDeleteView">
            Do you really want to delete the case "{String(statusDM).split("-")[1]}"?
        </div>
        <div className="caseButtons">
                    <div className="editButton caseButton" onClick={()=>setStatusDM(null)}>NO</div>
                    <div className="deletButton caseButton" onClick={()=>DeleteCase(statusDM)}>Delete</div>
                </div>
        <span className="spanDM" onClick={()=>setStatusDM(null)}>+</span>
    </div>
</div>
        </>
    )
    
}