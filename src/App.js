import React from 'react';

import { BrowserRouter, } from 'react-router-dom'
import Menu from './components/Menu';
import RouteDesign from './components/RouteDesign';
import './style.css';
import Project from './components/ProjectsPage/ProjectClass';
import Case from "./components/HomePage/CaseClass";


const App = () => {
//  let projects=[new Project()];
//  let case1=new Case();
//  let case2=new Case();
//  case1.caseName="Case1";
//   case1.caseDiscription="Discription case1"
//   case1.tags="tag1,tag2";
//   case1.casePriority="high";
//   case1.timeToComplate="2";
//   case2.caseName="Case2";
//   case2.caseDiscription="Discription case2"
//   case2.tags="tag1,tag2";
//   case2.casePriority="normal";
//   case2.timeToComplate="6";
//   projects[0].projectName="Project1";
//  projects[0].cases=[case1,case2];
//  localStorage.setItem("Projects",JSON.stringify(projects));
  return (

    <>
      <div className='mainBlock'>
        <BrowserRouter>
          <Menu />
          <RouteDesign />
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;
