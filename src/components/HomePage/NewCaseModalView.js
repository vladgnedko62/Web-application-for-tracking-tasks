import React from "react";
import CaseClass from "./CaseClass";
export default function NewCaseModalView({ statusNCM, setStatusNCM }) {

    if (statusNCM == null) {
        return null;
    }
    function AddNewCase(){
        let caseName=document.querySelector(".modalNewCase>.inpCaseName>input").value;
        let caseTimeToComplate=document.querySelector(".modalNewCase>.inpTimeToComplate>input").value;
        let caseDiscription=document.querySelector(".modalNewCase>.inpCaseDiscription>input").value;
        let tags=document.querySelector(".modalNewCase>.inpTags>input").value;
        let casePriority=document.querySelector(".modalNewCase>.inpCasePriority>select").value;
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
        let Case=new CaseClass();
        Case.caseName=caseName;
        Case.timeToComplate=caseTimeToComplate;
        Case.caseDiscription=caseDiscription;
        Case.tags=tags;
        Case.casePriority=casePriority;
        let cases=JSON.parse(localStorage.getItem("Cases"));
        if(cases!=null){
            cases.push(Case);
            localStorage.setItem("Cases",JSON.stringify(cases));
            setStatusNCM(null);
        }else{
            cases=[];
            cases.push(Case);
            localStorage.setItem("Cases",JSON.stringify(cases));
            setStatusNCM(null);
        }
        
    }
    return (
        <>
            <div className="overlay">
                <div className="modalNewCase">
                <div className="titleNCM">Create new <span>case</span></div>
                    <div className="inpCaseName">
                        <input type="text"  placeholder="case name" />
                    </div>
                    <div className="inpTimeToComplate">
                        <input type="text" placeholder="input hours to complate" />
                    </div>
                    <div className="inpCaseDiscription">
                        <input type="text" placeholder="input description" />
                    </div>
                    <div className="inpTags">
                        <input type="text" placeholder="input tags(t1,t2)" />
                    </div>
                    <div className="inpCasePriority">
                        <select>
                            <option value={"high"}>High priority</option>
                            <option value={"normal"}>Normal priority</option>
                            <option value={"low"}>Low priority</option>
                        </select>
                    </div>
                    <div className="caseButtonsNCM">
                        <div className="editButton caseButton" onClick={() => AddNewCase()}>ADD</div>
                        <div className="deletButton caseButton" onClick={()=>setStatusNCM(null)}>Canel</div>
                    </div>
                    <span className="spanNCM" onClick={() => setStatusNCM(null)}>+</span>
                </div>
            </div>
        </>
    )
    }
