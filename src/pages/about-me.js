/*
 * An About Me section (brief, succinct professional biography),
 */

import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/Jasmine Emanouel Resume.pdf';
import me from '../images/me.jpeg';

export default class HomeAgain extends Component {
  render() {
    return (
        <div class="about-container">
          <div class="about-block">
            <img class="about-sidebar" src={me} alt="Jasmine Emanouel"/>
            <div class="about-right">
              <div class="about-text">
                <h4><br/> I am currently studying a <b>Bachelor of Engineering</b> (Honours) in (Software), Diploma in Professional Practice
                at the <b>University of Technology Sydney</b> with a graduation date of May 2022.</h4>
                <br/>
                I grew up in an interesting time for technology. Whilst  in my
                early years the internet was not common in every household, I was lucky
                enough to grow up using it. Thanks to my dad who gave me my
                very first laptop at the age of 2, my main hobby was playing
                games from Bob the Builder to Stardoll. This morphed into Youtube
                and social media as I grew up. Technology has shaped my very essence.
                <br/><br/>
                Despite this, I did not grow up wanting to work in the Technology
                sector. For most of my life, I didn't know my hobby could turn
                into a job. Even when I was trying to sort my life out (at
                the crisp age of 15), the thought did not cross my mind. At the
                time, my favourite TV show was Arrow, and my favourite character
                was Felicity Smoak (yes, I am now aware of how unrealistic those
                scenes were). That's where my sister suggested I just go into
                the tech world. It made sense with my history and at the time I
                thought <i>"why not, if I don't like it I can just change degrees".</i>
                <br/><br/>
                Now, at the tail end of my degree with many internships and jobs
                under my belt, I can thank Felicity Smoak and my sister for
                pushing me in this direction.
                <br/><br/>
                <h5>My goal is to use software to better the world and work with
                a company and team whose goals align to mine.</h5>
              </div>
              <a role="button" href={resume} download="Jasmine Emanouel Resume"><button class="resume">Download Resume</button></a>
            </div>
          </div>
        </div>
    );
  }
}
