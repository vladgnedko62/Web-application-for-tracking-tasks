import React from "react"
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import ProjectsView from "./ProjectsPage/ProjectsView";
export default function RouteDesign(){
  
    return(
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/projects" component={ProjectsView} />
        </Switch>
    )
}

