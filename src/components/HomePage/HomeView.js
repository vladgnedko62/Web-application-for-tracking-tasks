import React, { createRef } from "react";
import Case from "./Case";
import SearchMenu from "./SearchMenu";
export default function HomeView({setStatusHV,statusHV,setStatusDM,setStatusNCM,setStatusECM}) {
    let cases = JSON.parse(localStorage.getItem("Cases"));
    console.log(cases);
    if(cases!=null){

    
    return (

        <>
        <div className="content">     
               <SearchMenu setStatusHV={setStatusHV}/>
        <div className="cases">
                <div className="case rowsInfo">
                    <div className="caseName">Case name:</div>
                    <div className="timeToComplate">Time to complate:</div>
                    <div className="caseDiscription">Case discription:</div>
                    <div className="tags">Tags:</div>
                    <div className="casePriority">Case priority:</div>
                </div>
                { cases.map((elem) => {
                    return (
                        <Case statusHV={statusHV} CaseInfo={elem} setStatusDM={setStatusDM} setStatusECM={setStatusECM} />
                    )
                })}
            </div>
            <div className="addNewCase" onClick={()=>setStatusNCM(true)}>+</div>
        </div>
            

        </>
    )
            }else{
                return (

                    <>
                    <div className="content">     
                           <SearchMenu setStatusHV={setStatusHV}/>
                    <div className="cases">
                            <div className="case rowsInfo">
                                <div className="caseName">Case name:</div>
                                <div className="timeToComplate">Time to complate:</div>
                                <div className="caseDiscription">Case discription:</div>
                                <div className="tags">Tags:</div>
                                <div className="casePriority">Case priority:</div>
                            </div>
                        </div>
                        <div className="addNewCase" onClick={()=>setStatusNCM(true)}>+</div>
                    </div>
                        
            
                    </>
                )
            }
}