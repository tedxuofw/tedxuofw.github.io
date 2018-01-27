import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Section extends React.Component {
    render(){
        let title = this.props.title;
        
        // No title given
        if (typeof title === 'undefined') {
            return ( <div className={css(styles.tedsection)}>{this.props.children}</div> );
        }
        
        return ( 
            <div className={css(styles.tedsection)}>
                <div className={css(styles.tedsectiontitle)}>{title}</div>
                {this.props.children}
            </div> 
        );
    }
}



const styles = StyleSheet.create({
    tedsection: {
        width: '70%',
        minHeight: '75vh',
        background: 'white',

        paddingTop: '50px',
        paddingLeft: '15%',
        paddingRight: '15%',
        paddingBottom: '50px'
    },
    tedsectiontitle: {
        fontSize: '65px',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase'
    },
});