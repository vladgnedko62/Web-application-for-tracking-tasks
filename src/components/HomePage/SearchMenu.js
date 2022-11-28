import React, { createRef } from "react";

export default function SearchMenu({setStatusHV}) {
    let selectedValue;
    function onChangeCheker() {
        let inputValue = document.querySelector('.inputData');
         selectedValue = document.querySelector('.typeSearch').value;
        if (selectedValue == "priority") {
            inputValue.innerHTML=` <select class="selectStyle">
            <option value="high">High priority</option>
            <option value="normal">Normal priority</option>
            <option value="low">Low priority</option>
        </select>`;
           
           
        }else{
            inputValue.innerHTML=`<input class="inputStyle" type="text" placeholder="input value" ref=${inputValue}/>`;
        }
    }
function setterStatusHV(){
    let value;
   let status="1-";
   switch(selectedValue){
    case "name":status="1-";break;
    case "words":status="2-";break;
    case "tags":status="3-";break;
    case "priority":status="4-";break;
   }
   if(selectedValue=="priority"){
    
     value=document.querySelector('.inputData>select').value;
   }else{
    value=document.querySelector('.inputData>input').value;
   }
   status+=value;
   setStatusHV(status);
}
    return (
        <>
            <div className="searchMenu">
                <div className="searchTitle">
                    Select search type:
                </div>
                <div className="selectTypeOfSearch">
                    <select className="typeSearch" onChange={() => { onChangeCheker(); }}>
                        <option value={"name"}>Case name</option>
                        <option value={"words"}>Words in description</option>
                        <option value={"tags"}>Tag-tags {"(tag)-(tag1,tag2)"}</option>
                        <option value={"priority"}>Priority</option>
                    </select>

                </div>
                <div className="inputData">
                    <input className="inputStyle" type="text" placeholder="input value" />
                </div>
                <div className="searchDiv">
                    <button className="searchButton" onClick={()=>{setterStatusHV()}}>Search</button>
                </div>
            </div>
        </>
    )
}