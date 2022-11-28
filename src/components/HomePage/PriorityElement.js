import React from "react";

export default function PriorityElement(){

    return(
        <>
        <select>
                            <option value={"high"}>High priority</option>
                            <option value={"normal"}>Normal priority</option>
                            <option value={"low"}>Low priority</option>
                        </select>
        </>
    )
}