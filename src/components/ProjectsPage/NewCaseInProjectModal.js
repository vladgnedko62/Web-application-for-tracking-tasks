import React, { createRef } from "react";
import Case from './CaseClass';
import ProjectC from './ProjectClass';
export default function NewCaseInProjectModal({statusNCPM,setStatusNCPM}){

    let caseName=createRef();
    let timeToComplate=createRef();
    let caseDiscription=createRef();
    let tags=createRef();
    let casePriority=createRef();
    function AddNewCase(){
        let projects=JSON.parse(localStorage.getItem("Projects"));
        console.log(projects);
        let IsSearched=false;
       let newProject=[];
       let newCase=new Case();
                newCase.caseName=caseName.current.value;
                newCase.caseDiscription=caseDiscription.current.value;
                newCase.timeToComplate=timeToComplate.current.value;
                newCase.tags=tags.current.value;
                newCase.casePriority=casePriority.current.value;
                let indexP=-1;
        projects.map((el)=>{
            if(!IsSearched){
                indexP++;
            }
            if(el.projectName==statusNCPM&&!IsSearched){
                if(caseName.current.value==""){
                    alert("Input case name !");
                    return null;   
                }
                if(timeToComplate.current.value==""){
                    alert("Input case time to complate !");
                    return null;   
                }
                if(caseDiscription.current.value==""){
                    alert("Input case discription !");
                    return null;   
                }
                if(tags.current.value==""){
                    alert("Input case tags !");
                    return null;   
                }
                IsSearched=true;
            }
        });
     let Project=new ProjectC();
      projects[indexP].cases.push(newCase);
      console.log(projects);
        localStorage.setItem("Projects",JSON.stringify(projects));
                setStatusNCPM(null);
    }
    if(statusNCPM==null){
        return null;
    }
    return(
        <>
         <div className="overlay">
                <div className="modalNewCase">
                    <div className="titleNCM">Create new <span>case</span></div>
                    <div className="inpCaseName">
                        <input type="text"  placeholder="case name" ref={caseName}/>
                    </div>
                    <div className="inpTimeToComplate">
                        <input type="text" placeholder="input hours to complate" ref={timeToComplate}/>
                    </div>
                    <div className="inpCaseDiscription">
                        <input type="text" placeholder="input description" ref={caseDiscription}/>
                    </div>
                    <div className="inpTags">
                        <input type="text" placeholder="input tags(t1,t2)" ref={tags}/>
                    </div>
                    <div className="inpCasePriority">
                        <select ref={casePriority}>
                            <option value={"high"}>High priority</option>
                            <option value={"normal"}>Normal priority</option>
                            <option value={"low"}>Low priority</option>
                        </select>
                    </div>
                    <div className="caseButtonsNCM">
                        <div className="editButton caseButton" onClick={() => {AddNewCase()}}>ADD</div>
                        <div className="deletButton caseButton" onClick={()=>setStatusNCPM(null)}>Canel</div>
                    </div>
                    <span className="spanNCM" onClick={() => setStatusNCPM(null)}>+</span>
                </div>
            </div>
        </>
    )
}