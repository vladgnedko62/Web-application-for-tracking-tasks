import React from "react";
import DeleteModalView from "./DeleteModalView";
import EditCaseModalView from "./EditCaseModalView";
import HomeView from "./HomeView";
import NewCaseModalView from "./NewCaseModalView";
export default function HomePage() {
    const [statusHV, setStatusHV] = React.useState(null); //For searching cases
    const [statusDM, setStatusDM] = React.useState(null); //DeleteModal
    const [statusNCM, setStatusNCM] = React.useState(null);//NewCaseModal
    const [statusECM, setStatusECM] = React.useState(null);//EditCaseModal
    return (

        <>
            <HomeView setStatusHV={setStatusHV} statusHV={statusHV} setStatusDM={setStatusDM} setStatusNCM={setStatusNCM} setStatusECM={setStatusECM}/>
            <DeleteModalView setStatusDM={setStatusDM} statusDM={statusDM}/>
            <NewCaseModalView setStatusNCM={setStatusNCM} statusNCM={statusNCM}/>
            <EditCaseModalView setStatusECM={setStatusECM} statusECM={statusECM}/>
        </>
    )
}