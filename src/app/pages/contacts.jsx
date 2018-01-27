import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {Contact} from '../components/contact.jsx';



export class Contacts extends React.Component {

    
   
    
    componentDidMount() {
        document.title = "Contact - TEDx";
    }
    
	render() {
                
		return (
            <div>
                <TEDNavbar index='3'/>
                <Section title='Contact'>
                   <Contact title = ' We would love to hear from you' subtitle = 'Get in touch by sending us a message below' />
                      
                                        
                </Section>
                                
                
                <TEDFooter />
            </div>
        );
	}
}