import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Section extends React.Component {
    render(){
        let title = this.props.title;
		let borderSize = this.props.border;
        let height = this.props.height;
		if (typeof height === 'undefined') {
			height = '75vh';
		}
		if (typeof borderSize === 'undefined') {
			borderSize = '15%';
		}
        
		var style = {
			paddingLeft: borderSize,
			paddingRight: borderSize,
            minHeight: height,
		}
		
        // No title given
        if (typeof title === 'undefined') {
            return ( <div style={style} className={css(styles.tedsection)}>{this.props.children}</div> );
        }
        
        return ( 
            <div style={style} className={css(styles.tedsection)}>
                <div className={css(styles.tedsectiontitle)}>{title}</div>
                {this.props.children}
            </div> 
        );
    }
}



const styles = StyleSheet.create({
    tedsection: {
        background: 'white',
		margin:'0px',
        paddingTop: '50px',
        paddingBottom: '50px'
    },
    tedsectiontitle: {
        fontSize: '6vw',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase'
    },
});