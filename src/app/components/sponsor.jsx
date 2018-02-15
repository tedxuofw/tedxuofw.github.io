import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';


export class Sponsor extends React.Component {
    
    render() {        
        return ( 
            <div className={css(styles.tedsponsor)}>
                <div className={css(styles.tedsponsorbar)}></div>
                <div className={css(styles.tedsponsorimagecontainer)}>
                    <img className={css(styles.tedsponsorimage)} src={this.props.img} />
                </div>
                <div className={css(styles.tedsponsorcontent)}>
                    <div className={css(styles.tedsponsortitle)}>{this.props.title}</div>
                    <div className={css(styles.tedsponsorsubtitle)}>{this.props.subtitle}</div>
                    <div className={css(styles.tedsponsordescr)}>{this.props.descr}</div>
                </div>
            </div> 
        );
    }
}


const styles = StyleSheet.create({
    tedsponsor: {
        margin: '6vh 2vw 3vh 2vw',
        overflow: 'auto'
    },

    tedsponsorimagecontainer: {
        float: 'left'
    },

    tedsponsorimage: {
        display: 'block',
        maxWidth: '16vw'
    },

    tedsponsorcontent: {
        marginLeft: '21.5vw'
    },
    
    tedsponsortitle: {
        fontFamily: 'AvenirBlack',
        marginBottom: '5px',
        fontSize: '22px',
        textTransform: 'uppercase'
    },
    tedsponsorsubtitle: {
        marginBottom: '1.5vh',
        fontSize: '22px'
    },
    tedsponsorbar: {
        background: '#E62B25',
        height: '1vh',
        width: '8.2vw',
        marginLeft: '21.5vw',
        marginBottom: '3vh'
    },    
    tedsponsordescr: {}
});