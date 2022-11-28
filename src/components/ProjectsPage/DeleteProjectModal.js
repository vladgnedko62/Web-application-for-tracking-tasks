import React from "react";

export default function DeleteProjectModal({ statusPDM, setStatusPDM }) {

if(statusPDM==null){
    return null;
}
function DeleteProject(projectName){
    let projects=JSON.parse(localStorage.getItem("Projects"));
    let newProjects=[];
    projects.map((el)=>{
        if(el.projectName!=projectName){
newProjects.push(el);
        }
    });
    localStorage.setItem("Projects",JSON.stringify(newProjects));
    setStatusPDM(null);
}
    return (
        <>
            <div className="overlay">
                <div className="modalDelete">
                <div className="infoDeleteView">
            Do you really want to delete the case "{String(statusPDM)}"?
        </div>
        <div className="caseButtons">
                    <div className="editButton caseButton" onClick={()=>setStatusPDM(null)}>NO</div>
                    <div className="deletButton caseButton" onClick={()=>DeleteProject(statusPDM)}>Delete</div>
                </div>
        <span className="spanDM" onClick={()=>setStatusPDM(null)}>+</span>
                </div>
                
            </div>
        </>
    )
}