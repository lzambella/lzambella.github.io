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
              Hi there! My name is Luke and I'm a technology afficinado from the Jersey Shore. Currently, I study at The College of New Jersey pursuing a Bachelor of Science in Computer Engineering with a focus on robotics. 
              Before that, I obtained my Associates degree in Mathematics at Ocean County College. 
            </div>
            <p/>
            <div>
                My career interests include robotics, software engineering, and embedded systems. I also have a huge interest in cloud technologies, having used AWS and GCP to solve business problems.
                In my free time, I also tinker with electronics such as making new things, repairing broken devices, or tearing stuff down to see how they work and sometimes reverse engineer it. 
                I very much enjoy learning new skills if it allows me to more efficiently accomplish the task at hand.
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