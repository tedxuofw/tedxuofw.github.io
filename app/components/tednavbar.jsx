import React from 'react';
import ReactDOM from 'react-dom';

import {Link} from 'react-router-dom';

export class TEDNavbar extends React.Component {
    render(){
        var links = [ {text: 'About', className: 'tednavlink', link: '/about'},
                      {text: 'Speakers', className: 'tednavlink', link: '/'},
                      {text: 'Sponsors', className: 'tednavlink', link: '/sponsors'},
                      {text: 'Contact', className: 'tednavlink', link: '/'},
                      {text: 'Attend', className: 'tednavlink tednavgold', link: '/'}]
        
        return (
            <nav id='tednav' href='#'>
                <span className='tednavcontainer'>
                    <img id='tednavlogo' src="/app/resources/images/logo-red.png" />
                </span>
                <span className='tednavcontainer'>
                    { links.map(item => { return <span className={item.className} key={item.text}><Link to={item.link}>{item.text}</Link></span> }) }
                </span>
            </nav>
        );
    }
}