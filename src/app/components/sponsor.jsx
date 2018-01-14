import React from 'react';
import ReactDOM from 'react-dom';

export class Sponsor extends React.Component {
    render(){        
        return ( 
            <div className="tedsponsor">
                <div className="tedsponsorbar"></div>
                <div className="tedsponsorimage">
                    <img src={this.props.img} />
                </div>
                <div className="tedsponsorcontent">
                    <div className="tedsponsortitle">{this.props.title}</div>
                    <div className="tedsponsorsubtitle">{this.props.subtitle}</div>
                    <div className="tedsponsordescr">{this.props.descr}</div>
                </div>
            </div> 
        );
    }
}