import React from "react";
import CaseClass from "./CaseClass";
import PriorityElement from "./PriorityElement";
export default function EditCaseModalView({statusECM,setStatusECM}){
    if(statusECM==null){
        return null;
    }
    let cases=JSON.parse(localStorage.getItem("Cases"));
    let currentCase=new CaseClass();
    cases.map((el)=>{
        if(el.caseName==statusECM){
            currentCase.caseName=el.caseName;
            currentCase.timeToComplate=el.timeToComplate;
            currentCase.caseDiscription=el.caseDiscription;
            currentCase.tags=el.tags;
            currentCase.casePriority=el.casePriority;
        }
    })
    function SaveCase(){
        let caseName=document.querySelector(".modalEditCase>.inpCaseName>input").value;
        let caseTimeToComplate=document.querySelector(".modalEditCase>.inpTimeToComplate>input").value;
        let caseDiscription=document.querySelector(".modalEditCase>.inpCaseDiscription>input").value;
        let tags=document.querySelector(".modalEditCase>.inpTags>input").value;
        let casePriority=document.querySelector(".modalEditCase>.inpCasePriority>select").value;
        if(caseName==""){
            alert("Input case name !");
            return null;   
        }
        if(caseTimeToComplate==""){
            alert("Input case time to complate !");
            return null;   
        }
        if(caseDiscription==""){
            alert("Input case discription !");
            return null;   
        }
        if(tags==""){
            alert("Input case tags !");
            return null;   
        }
            let editedCase=new CaseClass();
            editedCase.caseName=caseName;
        editedCase.timeToComplate=caseTimeToComplate;
        editedCase.caseDiscription=caseDiscription;
        editedCase.tags=tags;
        editedCase.casePriority=casePriority;
        cases.map((el)=>{
            if(el.caseName==statusECM){
                el.caseName=editedCase.caseName;
                el.timeToComplate=editedCase.timeToComplate;
                el.caseDiscription=editedCase.caseDiscription;
                el.tags=editedCase.tags;
                el.casePriority=editedCase.casePriority;
            }
        })
        localStorage.setItem("Cases",JSON.stringify(cases));
        setStatusECM(null);
    }
return(
    <>
        <>
            <div className="overlay">
                <div className="modalEditCase">
                    <div className="inpCaseName">
                        <div className="oldValue">
                            Old value: {currentCase.caseName}
                        </div>
                        <input type="text"  placeholder="case name"  />
                    </div>
                    <div className="inpTimeToComplate">
                    <div className="oldValue">
                            Old value: {currentCase.timeToComplate}
                        </div>
                        <input type="text" placeholder="input hours to complate" />
                    </div>
                    <div className="inpCaseDiscription">
                    <div className="oldValue">
                            Old value: {currentCase.caseDiscription}
                        </div>
                        <input type="text" placeholder="input description"/>
                    </div>
                    <div className="inpTags">
                    <div className="oldValue">
                            Old value: {currentCase.tags}
                        </div>
                        <input type="text" placeholder="input tags(t1,t2)"/>
                    </div>
                    <div className="inpCasePriority">
                    <div className="oldValue">
                            Old value: {currentCase.casePriority}
                        </div>
                        <PriorityElement/>
                    </div>
                    <div className="caseButtonsECM">
                        <div className="editButton caseButton" onClick={()=>SaveCase()}>Save</div>
                        <div className="deletButton caseButton" onClick={()=>setStatusECM(null)}>Canel</div>
                    </div>
                    <span className="spanNCM" onClick={() => setStatusECM(null)}>+</span>
                </div>
            </div>
        </>
    </>
)
}