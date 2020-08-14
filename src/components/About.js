import React, { Component } from 'react';
import {Fade} from 'reactstrap'
/*
    This page informs the user how this website works
*/
export class About extends Component {
    static displayName = About.name

    render() {
        return (
            <Fade>
                <div>
                    <h1 class="text-center py-md-3 border-bottom">About this website</h1>
                    <div class="px-md-5 text-large">
                        <div>
                            This website was made to refamiliarize and reinforce web development concepts including API programming. 
                            The front-end uses the React framework with Bootstrap for layout. 
                            It was chosen for it's ease of use and that many other websites are built using this framework, allowing for familiarity should I ever work on similiar projects.
                            React uses Javascript and AJAX giving it a responsive look and feel for the modern web.
                        </div>
                        <p/>
                        <div>
                            This site is written entirely in Javascript and React. I chose this because of my familiarity with it from experience and because it is easy to learn and use.
                            This site originally ran on an ASP.NET backend with a postgres database for a few things but I ultimately thought this was overkill for the scope of the site.
                            As such, I migrated this site to a pure Javascript one with GitHub as my hosting provider.
                        </div>
                        <p/>
                        <div>
                            To view the code in its entirety, click the link <a href="https://github.com/lzambella/personal-site">here</a>.
                        </div>
                    </div>

                    
                </div>
            </Fade>
        )
    }
}