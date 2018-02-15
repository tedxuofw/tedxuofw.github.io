import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';


export class Flair extends React.Component {
	constructor(props) {
        super(props);
        this.state = {degrees: "32.5deg", alignment: 'right', offset: '-150px'};
        if(typeof props.left !== 'undefined') {
            this.state = {degrees: "-32.5deg", alignment: 'left', offset: this.state.offset};
        }
        if(typeof props.offset !== 'undefined') {
            this.state = {degrees: this.state.degrees, alignment: this.state.assignment, offset: this.props.offset};
        }
        
    }
    
	render() {
		return (
            <div className="ted-flair">
                <div style={{float: this.state.alignment}} className={css(styles.top)}>
                    <div style={{WebkitTransform: 'skew(' + this.state.degrees + ')', MozTransform: 'skew(' + this.state.degrees + ')', OTransform: 'skew(' + this.state.degrees + ')', marginTop: this.state.offset }} className={css(styles.one)}></div>
                    <div style={{WebkitTransform: 'skew(' + this.state.degrees + ')', MozTransform: 'skew(' + this.state.degrees + ')', OTransform: 'skew(' + this.state.degrees + ')'}} className={css(styles.two)}></div>
                    <div style={{WebkitTransform: 'skew(' + this.state.degrees + ')', MozTransform: 'skew(' + this.state.degrees + ')', OTransform: 'skew(' + this.state.degrees + ')'}} className={css(styles.thr)}></div>
                    <div style={{WebkitTransform: 'skew(' + this.state.degrees + ')', MozTransform: 'skew(' + this.state.degrees + ')', OTransform: 'skew(' + this.state.degrees + ')'}} className={css(styles.fou)}></div>
                    <div style={{WebkitTransform: 'skew(' + this.state.degrees + ')', MozTransform: 'skew(' + this.state.degrees + ')', OTransform: 'skew(' + this.state.degrees + ')'}} className={css(styles.fiv)}></div>
                </div>
            </div>
		);
	}
}

var styles = StyleSheet.create({
    top: {
        zIndex: '100'
    },
	one: {
        width: '30px',
        height: '100px',
        marginRight: '-200px',
        background: '#bdc3c7'
	}, 
    two: {
        width: '30px',
        height: '150px',
        marginTop: '-60px',
        background: '#bdc3c7'
	}, 
    thr: {
        width: '30px',
        height: '400px',
        marginTop: '-210px',
        background: '#bdc3c7'
	}, 
    fou: {
        width: '30px',
        height: '450px',
        marginTop: '-360px',
        background: '#bdc3c7'
	}, 
    fiv: {
        width: '30px',
        height: '500px',
        marginTop: '-410px',
        background: '#bdc3c7'
	}, 
});