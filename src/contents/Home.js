import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactRoundedImage from 'react-rounded-image';
import profilepic from '../img/Jojiseb.jpg';
import Social from '../components/Social';

class Home extends Component
{
    render() 
    {
        return(
            <div className='condiv home'>

               <ReactRoundedImage image={profilepic} /> 

                <ReactTypingEffect className='typingeffect' 
                                   text={['I am Joji Sebastian','I am a Web Developer']} 
                                   speed={100} 
                                   eraseDelay={700}/>
                
                <Social/>
            
            </div>
        );
    }
}

export default Home;
