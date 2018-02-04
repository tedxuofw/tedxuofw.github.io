import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

export class Contact extends React.Component {
    componentDidMount() {
        document.title = "Contact - TEDxUofW";
    }
    
	render() {            
		return (
            <div>
                <TEDNavbar index='3'/>
                <Section title='Contact'>
                   
                </Section>
                <TEDFooter />
            </div>
        );
	}
}