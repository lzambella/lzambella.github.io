/*
*   Represents the /project page of the app, each project gets shown here.
*/
import React, { Component } from 'react';
import {ProjectCard} from './ProjectCard'
import {Fade} from 'reactstrap';

function GetProject(project) {
    console.log("GetProject reached")
    return (
        <div>
            {console.log("Hello world")}
            <div class="text-large">{project}</div>
        </div>
    )
}

export default GetProject;

    // Create the card for each project, the specific card should point to a database entry with more info on the project
export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          projects : null,
          projectPopup : null
        };
      }

    // Get each project from the database and compile into easy to view cards.
    render() {
        return (
            <Fade>
                <div>
                    <h1 class="text-center py-md-3 border-bottom">Projects</h1>
                    <div class="px-md-5 text-large">
                        <div>UNDER CONSTRUCTION</div>
                        <div>To see all of the projects I have publicly worked on, plese visit my GitHub <a href="https://github.com/lzambella">here</a></div>
                        <p/>
                    </div>
            </div>
            </Fade>
        )
    }
}