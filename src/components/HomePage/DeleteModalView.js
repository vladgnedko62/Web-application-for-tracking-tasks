import React from "react";

export default function DeleteView({statusDM,setStatusDM}){
    function DeleteCase(caseName){
        let cases=JSON.parse(localStorage.getItem("Cases"));
        let newCases=[];
        cases.map((elem)=>{
            if(elem.caseName!==caseName){
                newCases.push(elem);
            }
        })
        localStorage.setItem("Cases",JSON.stringify(newCases));
        setStatusDM(null);
    }
    if(statusDM==null){
        return null;
    }
    return(
        <>
        <div className="overlay">
    <div className="modalDelete">
        <div className="infoDeleteView">
            Do you really want to delete the case "{statusDM}"?
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