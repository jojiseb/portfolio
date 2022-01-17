import React , {Component} from 'react';
import ProjectItem from '../components/ProjectItem';

class Projects extends Component
{
    render()
    {
        return(
                 <div className='condiv'>
                    <h1>Projects</h1>
                            <ProjectItem/>
                </div>
        );
    }
}

export default Projects;