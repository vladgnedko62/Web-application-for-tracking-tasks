import React from "react";

export default function Case({ statusHV, CaseInfo, setStatusDM, setStatusECM }) {
    let selectSearch = String(statusHV).split("-")[0];
    let valueSearch = String(statusHV).split("-")[1];
    if(valueSearch){
        let isState = false;
        switch (selectSearch) {
            case "1": if (CaseInfo.caseName == valueSearch) { isState = true; } break;
            case "2": if (CaseInfo.caseDiscription.includes(valueSearch)) { isState = true; } break;
            case "3": let mas=String(CaseInfo.tags).split(",");
            mas.forEach((el)=>{
                if(el==valueSearch){
                    isState=true;
                }
            }); break;
            case "4": if (CaseInfo.casePriority.toLowerCase().includes(valueSearch)) { isState = true; } break;
    
        }
        if(!isState){return null;}
    }
    
    const mystyle = {
        backgroundColor: "DodgerBlue",
    };
    switch (CaseInfo.casePriority) {
        case "low": mystyle.backgroundColor = "darkgrey"; break;
        case "normal": mystyle.backgroundColor = "rgb(0, 167, 45)"; break;
        case "high": mystyle.backgroundColor = "rgb(176, 1, 1)"; break;

        default:
            break;
    }
    return (
        <>
            <div className="case" style={mystyle}>
                <div className="caseInfo">
                    <div className="caseName">{CaseInfo.caseName}</div>
                    <div className="timeToComplate">{CaseInfo.timeToComplate}</div>
                    <div className="caseDiscription">{CaseInfo.caseDiscription}</div>
                    <div className="tags">{CaseInfo.tags}</div>
                    <div className="casePriority">{CaseInfo.casePriority}</div>
                </div>
                <div className="caseButtons">
                    <div className="editButton caseButton" onClick={() => { setStatusECM(CaseInfo.caseName) }}>Edit</div>
                    <div className="deletButton caseButton" onClick={() => { setStatusDM(CaseInfo.caseName) }}>Delete</div>
                </div>

            </div>
        </>
    )
}