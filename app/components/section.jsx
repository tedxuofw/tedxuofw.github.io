import React from 'react';
import ReactDOM from 'react-dom';

export class Section extends React.Component {
    render(){
        let title = this.props.title;
        
        // No title given
        if (typeof title === 'undefined') {
            return ( <div className="tedsection">{this.props.children}</div> );
        }
        
        return ( 
            <div className="tedsection">
                <div className="tedsectiontitle">{title}</div>
                {this.props.children}
            </div> 
        );
    }
}