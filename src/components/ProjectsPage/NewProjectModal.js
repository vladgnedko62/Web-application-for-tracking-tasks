import React, { createRef } from "react";
import ProjectC from './ProjectClass';
export default function NewProjectModal({ statusNPM, setStatusNPM }) {
    if (statusNPM == null) {
        return null;
    }
    let projectName=createRef();
    function AddNewProject(){
        if(projectName.current.value!=""){
            let newProject=new ProjectC();
            newProject.projectName=projectName.current.value;
            newProject.cases=[];
let projects=JSON.parse(localStorage.getItem("Projects"));
if(projects!=null){
    projects.push(newProject);
    localStorage.setItem("Projects",JSON.stringify(projects));
    setStatusNPM(null);
}else{
    projects=[];
    projects.push(newProject);
    localStorage.setItem("Projects",JSON.stringify(projects));
    setStatusNPM(null);
}

        }else{
            alert("Input project name!");
            return null;
        }
    }
    return (
        <>
            <div className="overlay">
                <div className="modalNewProject">
                    <div className="titleNCM">Create new <span>project</span></div>
                    <div className="inpProjectName">
                        <input type="text" placeholder="project name" ref={projectName}/>
                    </div>
                    <div className="caseButtonsNPM">
                    <div className="editButton caseButton" onClick={() => {AddNewProject() }}>ADD</div>
                    <div className="deletButton caseButton" onClick={() => setStatusNPM(null)}>Canel</div>
                </div>
                </div>
                
            </div>

        </>
    )
}