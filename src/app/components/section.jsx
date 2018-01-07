import React from 'react';
import ReactDOM from 'react-dom';

export class Section extends React.Component {
    render(){
        return (
            <div className="tedsection">
                {this.props.children}
            </div>
        );
    }
}