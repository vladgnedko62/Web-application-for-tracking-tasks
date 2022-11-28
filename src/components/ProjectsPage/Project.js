import React from "react";
import ProjectCase from "./ProjectCase";

export default function Project({ project, setStateCase,setStatusPDM,setStatusNCPM,projectIndex }) {
    return (
        <>
            <div className="project">
                <div className="projectName">{project.projectName}</div>
                <div className="projectCases">
                    {project.cases.map(element => {
                        return (
                            <ProjectCase
                                Case={element}
                                projectIndex={projectIndex}
                                setStateCase={setStateCase} 
                                />
                        )
                       
                    })}
                </div>
                <div className="projectButtons">
                    <div className="projectButtonDelete" onClick={()=>{setStatusPDM(project.projectName)}}>
                        +
                    </div>
                    <div className="projectButtonAddCase" onClick={()=>{setStatusNCPM(project.projectName)}}>
                        +
                    </div>
                    
                </div>
            </div>
        </>
    )
}