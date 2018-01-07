import React from 'react';
import ReactDOM from 'react-dom';

import {Footer} from 'react-materialize';

export class TEDFooter extends React.Component {
    render(){
        return (
            <Footer copyrights="© TEDxUofW 2018" id='tedfooter'>
                <h5 className="white-text">TEDxUofW 2018</h5>
                <p className="grey-text text-lighten-4">Date</p>
                <p className="grey-text text-lighten-4">Location</p>
            </Footer>
        );
    }
}