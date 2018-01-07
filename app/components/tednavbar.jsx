import React from 'react';
import ReactDOM from 'react-dom';

import {Navbar, NavItem} from 'react-materialize';

export class TEDNavbar extends React.Component {
    render(){
        return (
            <Navbar id='tednav' href='#' right>
                <NavItem className='tednavlink' href='about.html'>About</NavItem>
                <NavItem className='tednavlink' href='speakers.html'>Speakers</NavItem><NavItem className='tednavlink' href='sponsors.html'>Sponsors</NavItem>
                <NavItem className='tednavlink' href='contact.html'>Contact</NavItem>
                <NavItem className='tednavlink' href='attend.html'>Attend</NavItem>
            </Navbar>
        );
    }
}