import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class About extends Component
{
    render()
    {
        return(
            <div className='condiv'>
                <h1 className='subtopic'>About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Joji Sebastian</h1>
                <h3>Full Stack Web Developer</h3>
                <br></br>

                <p>I started my journey in the world of computers
                    from an young age, now I'm 24 years old, completed
                    my Engineering Degree in Computer Science from 
                    Mangalam College of Engineering. 
                                            As someone who was always
                    fond of building things, Web development is my area
                    of interest. 
                </p>
                <br></br>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title="B.Tech Computer Science Engineering" where="KTU University" from="August 2015" to="August 2019"/>
                <Widecard title="SSLC | HSC" where="Mary Mount Public School" from="2013" to="2015"/>
            </div>
        );
    }
}

export default About;