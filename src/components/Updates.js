/*
* Gets all the site updates from the database's "updates" table and componentizes them into an easy to inject module
*/

import React, {Component} from 'react';
import {Fade} from 'reactstrap';

export class Updates extends Component {
    // Give the state the updates property
    constructor(props) {
        super(props);
        this.state = {
            updates: null
        };
    }
    render() {
        return (
            <Fade>
                <h2 class="text-center py-md-3 border-bottom">Site Updates</h2>
                <div align="center">
                    <div><b>2021/10/17</b>: Small updates to employment and resume.</div>
                    <div><b>2020/8/14</b>: Migrate this site from Heroku to Github Pages.</div>
                    <div><b>2019/11/16</b>: Implement this news feed!</div>
                </div>
            </Fade>
        )
    }
}