import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Education extends Component 
{
    render() 
    {
        return(
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title="B.Tech Computer Science Engineering" where="KTU University" from="August 2015" to="August 2019"/>
                <Widecard title="SSLC | HSC" where="Mary Mount Public School" from="2013" to="2015"/>
            </div>
        );
    }
}

export default Education;