import React from 'react';
import ReactDOM from 'react-dom';

export class TEDFooter extends React.Component {
    render(){
        return (
            <footer id='tedfooter'>
                <h3>TEDxUofW 2018</h3>
                <p>Date</p>
                <p>Location</p>
                <img id='tedfooterlogo' src="/app/resources/images/logo-red.png" />
                <h4><b>Envision the Future</b></h4>
                <div className="tedfootergroup">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </div>
                <h5>This independent TEDx event is</h5>
                <h5>operated under license from TED.</h5>
                <br/>
            </footer>
        );
    }
}