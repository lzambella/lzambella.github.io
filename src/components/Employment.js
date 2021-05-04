import React, { Component } from 'react';
import { Fade } from "reactstrap" 

export class Employment extends React.Component {

    render() {
        return (
            <Fade>
                <h1 class="text-center py-md-3 border-bottom">Employment</h1>
                <div class="px-md-5 text-large">
                    <p/>
                    <h3 class="font-weight-bold">Verizon Communications</h3>
                    <div class="font-italic d-flex flex-row">
                        <div class="mr-auto flex-column justify-content-start">
                            Network Engineering Intern
                        </div>
                        <div class="d-flex flex-column justify-content-end">
                            June 1, 2020 - August 7, 2020
                            </div>

                    </div>
                    <p/>
                    <ul>
                        <li>Managed a 4 member team and ensured that all had adequate knowledge on the architecture and technologies of each project design.</li>
                        <li>Reduced microservice cloud hosting costs by 70% by migrating a service that stores important customer service information to a database from an AWS EC2 server to AWS Lambda. The service was originally a Java Spring application and was migrated to Python.</li>
                        <li>Streamlined the Dialog Flow agent release cycle by developing a Jenkins job with Python scripts that allows a user to archive an agent to source control with options to tokenize any parameter via a configuration file. The program was designed with modularity in mind such that a user can dynamically update the configuration file and any credentials for API calls whenever it is needed.</li>
                        <li>Developed a second Jenkins job that acts as the reverse of above where a user is able to select a tokenized agent from source control and restore it to its corresponding agent in any project group in Dialog Flow. A configuration file is used to determine what to replace the tokens with.</li>
                        <li>Designed an easy to use React single-page application that enables employees without direct access to the Dialog Flow console the ability to view any agent in any project and make simple edits to the agent's intent phrases. The user may also test that any given phrase maps to the correct intent.</li>
                    </ul>
                </div>
            </Fade>
        )
    }
}

export default Employment