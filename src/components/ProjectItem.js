import React , {Component} from 'react';
import projects from './Project';

class ProjectItem extends Component
{
    render()
    {
        return(
                <div className='row'>
                        {projects.map((project) => {
                            return (
                                <div className='card-container'>
                                    <div className='image-container'>
                                        <img src={project.imgSrc} alt='Empty'/>
                                    </div>
                                    <div className='card-content'>
                                        <div className='card-title'>
                                            <h3>{project.name}</h3>
                                        </div>
                                        <div className='card-body'>
                                            <p>{project.desc}</p>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='btn'>
                                        <button>
                                            <a style={{color: "black"}} href={project.demo} target='_blank' rel="noreferrer">
                                                View
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>  
        );
    }
}

export  default ProjectItem;