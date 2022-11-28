import React from "react";

export default function Case({ CaseInfo1, setStatusDM, setStatusECM,forStatus,setStateCase }) {
    const mystyle = {
        backgroundColor: "DodgerBlue",
    };
    let CaseInfo=CaseInfo1;
    if(CaseInfo==undefined){
        
        let projects=JSON.parse(localStorage.getItem("Projects"));
        let strIndex=String(forStatus).split("-")[0];
        let currentCaseName=String(forStatus).split("-")[1];
        let index=parseInt(strIndex);
        let cases=projects[index].cases;
        let newCases=[];
        console.log(cases);
        cases.map((elem)=>{
            if(elem.caseName==currentCaseName){
                CaseInfo=elem;
            }
        })
    }
    switch (CaseInfo.casePriority) {
        case "low": mystyle.backgroundColor = "darkgrey"; break;
        case "normal": mystyle.backgroundColor = "rgb(0, 167, 45)"; break;
        case "high": mystyle.backgroundColor = "rgb(176, 1, 1)"; break;

        default:
            break;
    }
    return (
        <>
            <div className="caseP" style={mystyle}>
                <div className="caseInfoP">
                    <div className="caseNameP">{CaseInfo.caseName}</div>
                    <div className="timeToComplate">{CaseInfo.timeToComplate}</div>
                    <div className="caseDiscription">{CaseInfo.caseDiscription}</div>
                    <div className="tags">{CaseInfo.tags}</div>
                    <div className="casePriority">{CaseInfo.casePriority}</div>
                </div>
                <div className="caseButtonsP">
                    <div className="deletButton caseButton" onClick={() => { setStatusDM(forStatus) }}>Delete</div>
                </div>
                <span onClick={()=>{setStateCase(null)}}>+</span>
            </div>
        </>
    )
}