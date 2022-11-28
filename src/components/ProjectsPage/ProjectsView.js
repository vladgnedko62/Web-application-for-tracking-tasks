import React, { useState } from "react";
import Project from "./Project";
import SelectCaseModal from "./SelectCaseModal";
import DeleteModalView from "./DeleteModalView";
import DeleteProjectModal from "./DeleteProjectModal";
import NewCaseInProjectModal from "./NewCaseInProjectModal";
import NewProjectModal from "./NewProjectModal";
import SpanNPM from "./SpanNPM";
export default function ProjectsView() {
    const [stateCase, setStateCase] = React.useState(null);//For modal window case in proj
    const [statusDM, setStatusDM] = React.useState(null); //DeleteModal
    const [statusNCM, setStatusNCM] = React.useState(null);//NewCaseModal
    const [statusECM, setStatusECM] = React.useState(null);//EditCaseModal
    const [statusPDM, setStatusPDM] = React.useState(null);//DeleteProjectModal
    const [statusNCPM, setStatusNCPM] = React.useState(null);//NewCaseInProjectModal
    const [statusNPM, setStatusNPM] = React.useState(null);//NewProjectModal
    
    let projects = JSON.parse(localStorage.getItem("Projects"));
    let i=-1;
    if(projects!=null){
    return (
        <>
            <div className="projects">
                {projects.map(element => {
                    i++;
                    return (
                        <Project
                        projectIndex={i}
                         project={element}
                            setStateCase={setStateCase}
                            setStatusPDM={setStatusPDM}
                            setStatusNCPM={setStatusNCPM}
                            setStatusNPM={setStatusNPM}
                        />
                    )
                })}
            </div>
                <SpanNPM setStatusNPM={setStatusNPM}/>
            <SelectCaseModal
                stateCase={stateCase}
                setStateCase={setStateCase}
                setStatusDM={setStatusDM}
                setStatusECM={setStatusECM}
            />

            <DeleteModalView
                statusDM={statusDM}
                setStatusDM={setStatusDM}
            />
            <DeleteProjectModal statusPDM={statusPDM} setStatusPDM={setStatusPDM}/>
            <NewCaseInProjectModal statusNCPM={statusNCPM} setStatusNCPM={setStatusNCPM}/>
            <NewProjectModal statusNPM={statusNPM} setStatusNPM={setStatusNPM} />
        </>
    )
            }else{
                return (
                    <>
                        <div className="projects">
                           
                        </div>
                            <SpanNPM setStatusNPM={setStatusNPM}/>
                        <SelectCaseModal
                            stateCase={stateCase}
                            setStateCase={setStateCase}
                            setStatusDM={setStatusDM}
                            setStatusECM={setStatusECM}
                        />
            
                        <DeleteModalView
                            statusDM={statusDM}
                            setStatusDM={setStatusDM}
                        />
                        <DeleteProjectModal statusPDM={statusPDM} setStatusPDM={setStatusPDM}/>
                        <NewCaseInProjectModal statusNCPM={statusNCPM} setStatusNCPM={setStatusNCPM}/>
                        <NewProjectModal statusNPM={statusNPM} setStatusNPM={setStatusNPM} />
                    </>
                )
            }
}