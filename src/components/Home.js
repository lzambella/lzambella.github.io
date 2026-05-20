import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Skills } from '../Skills';
import pdf from '../dat/zambella_resume.pdf';
import {Fade} from 'reactstrap'
import {Updates} from './Updates'
export class Home extends Component {
  static displayName = Home.name;

  
  render () {
    return (
      <Fade>
        <div>
          <h1 class="text-center py-md-3 border-bottom">Welcome</h1>
          <h3 class="text-center py-md-3 text-large text-bold"><a href={pdf}>Click here</a> to see my most up to date resume.</h3>
          <div class="px-md-5 text-large">
            <div>
              Hi there! My name is Luke and I am a computer guy from the Jersey Shore. I have studied at The College of New Jersey and received my Bachelor of Science in Computer Engineering. Before that, I obtained my Associates degree in Mathematics at Ocean County College. Currently, I am working as a backend web developer providing APIs for internal generative AI services.
            </div>
            <p/>
            <div>
                My interests include robotics, software engineering, hardware design, and embedded systems. I also have an interest in cloud technologies, having used both AWS and GCP to solve business problems.
                In my free time, I like to draw, play piano, make music with old synthesizers, mess with my server and host useful applications, design electronics I'd actually use like keyboards.
            </div>
            <p/>
            <div>
              To view more information about my completed and in-progress projects, <Link to="/projects">click here</Link> or click on <b>Projects</b> in the top menu. 
              More information about what this site runs on is located <Link to="/about">here</Link> or by clicking "About" in the top menu.
              Otherwise, below is a quick overview of my skills.
            </div>
            <p/>
            <div class="py-md-5">
            <Skills/>
          </div>
          <p/>
          <div>
            For professional inquiries, I can easily be contacted through E-mail at <a href="mailto:luke.zambella@gmail.com">Luke.Zambella@gmail.com</a>. <b>Note</b>: I am currently not looking for work.
          </div>
        </div>
        <div>
          <Updates/>
        </div>

        </div>
      </Fade>
    );
  }
}
/*

*/