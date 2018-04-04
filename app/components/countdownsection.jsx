import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {TedButton} from '../components/tedbutton.jsx';

export class CountdownSection extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {date: new Date()}
		
		this.getDays = this.getDays.bind(this);
		this.getHours = this.getHours.bind(this);
		this.getMinutes = this.getMinutes.bind(this);
		this.getSeconds = this.getSeconds.bind(this);
		this.getSecondsRemaining = this.getSecondsRemaining.bind(this);
	}
	
	componentDidMount() {
	this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({date: new Date()});
	}
	
	render(){
		
		return (
			<div className={css(styles.section)}>
				<div className={css(styles.textcontainer)}>
					<p className={css(styles.title1)}> Early bird </p>
					<p className={css(styles.title2)}> ticket special ends in </p>
				</div>
				
				<div className={css(styles.countdowncontainer)}>
					<NumberSlot num={this.getDays()} label='days' />
					<NumberSlot num={this.getHours()} label='hours' />
					<NumberSlot num={this.getMinutes()} label='minutes' />
					<NumberSlot num={this.getSeconds()} label='seconds' />
				</div>
                
                <div className={css(styles.container)}>
                    <div className={css(styles.linkButton)}>
                        <a className={css(styles.link)} target="_blank" href="https://tedxuofw.ticketleap.com/2018/">Get Now</a>
                    </div>
                </div>
                
				<p className={css(styles.subtext)}> Promotion ends April 8th at 8 pm PST </p>
			</div>
		);
    }
	
	getDays() {
		return Math.floor(this.getSecondsRemaining() / (60 * 60 * 24));
	}
	
	getHours() {
		//number of seconds remaining, discluding days
		const secondsFromDay = this.getSecondsRemaining() - this.getDays() * (60 * 60 * 24); 
		return Math.floor(secondsFromDay / (60 * 60));
	}
	
	getMinutes() {
		//number of seconds remaining, discluding days and hours
		const secondsFromHour = this.getSecondsRemaining() - this.getDays()*(60 * 60 * 24) - this.getHours()*(60 * 60); 
		return Math.floor(secondsFromHour / (60));
	}
	
	getSeconds() {
		//number of seconds remaining, discluding days and hours
		const secondsFromMinute = this.getSecondsRemaining() - this.getDays()*(60 * 60 * 24) - this.getHours()*(60 * 60) - this.getMinutes()*(60);
		return Math.floor(secondsFromMinute);
	}
	
	getSecondsRemaining() {
		const time = Math.round(this.state.date.getTime() / 1000);//current time, in seconds
		const deadline = 1523242800; //time of promotion end, in seconds
		return deadline - time; //time until promotion end, in seconds
	}
}

class NumberSlot extends React.Component {
	render() {
		return (
			<div className={css(styles.numbercontainer)}>
				<p className={css(styles.number)}> {this.props.num} </p>
				<p className={css(styles.label)}> {this.props.label} </p>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	section: {
        minHeight: '5vh',
		backgroundColor:'#EEEEEE',
		margin:'0px',
        paddingTop: '11.5vw',
        paddingBottom: '7vw'
    },
    title1: {
        fontSize: '4.1vw',
        fontWeight: 'normal',
        fontFamily: 'Avenir',
		display:'inline-block',
		color:'#E62B25',
		marginRight:'1.3vw',
		marginTop:'0vw',
		minHeight: '0vh',
    },
	title2: {
        fontSize: '4.1vw',
        fontWeight: 'normal',
        fontFamily: 'Avenir',
		display:'inline-block',
		color:'black',
		marginTop:'0vw',
		minHeight: '0vh',
    },
	textcontainer: {
		textAlign: 'center',
		width:'80vw',
		marginLeft:'10vw',
	},
	subtext: {
		fontSize: '1vw',
        fontWeight: 'normal',
        fontFamily: 'Avenir',
		textAlign:'center',
		color:'black',
	},
	countdowncontainer: {
		width:'80vw',
		marginLeft:'10vw',
	},
	numbercontainer: {
		display: 'inline-block',
		width:'20vw',
		marginTop:'2vw',
		marginBottom:'2vw',
	},
	number: {
		fontSize: '11vw',
		textAlign:'center',
        fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
		marginBottom:'0px',
		color:'black',
	},
	label: {
		fontSize: '4vw',
		textAlign:'center',
        fontWeight: 'normal',
        fontFamily: 'Avenir',
		color:'black',
	},
    
    container : {
		textAlign:'center',
	},
	linkButton : {
        border: 'none',
        userSelect: 'none',
        cursor: 'pointer',
		display:'inline-block',
		minWidth:'10vw',
		height:'5vw',
		paddingRight:'1.5vw',
		paddingLeft:'1.5vw',
		marginRight:'0px',
		marginLeft:'0px',
		marginBottom:'10vh',
		marginTop:'3vw',
        lineHeight: '5vw',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '14px',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
	},
    link : {
        color: 'white',
        textDecoration: 'none',
    },
});