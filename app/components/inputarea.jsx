import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class InputArea extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value: this.props.ghostText, touched: 'false', fontStyle: 'italic', fontColor: '#707070'};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
	}
	
	handleEnter(event) {
		if (this.state.touched == 'false') {
			this.setState({touched:'true'});
			this.setState({fontColor: '#000000'});
			this.setState({fontStyle: 'normal'});
			
			this.setState({value: ''});
		}
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	handleSubmit(event) {
		//Placeholder until mailing list stuff is working.
		const value = this.state.value;
		
		if (value.includes('@')) {
			const domain = value.split('@')[1];
			if (domain.includes('.')) {
				alert("Signing " + this.state.value + " up to receive mail.");
			} else {
				alert("Please input valid email address");
			}
		} else {
			alert("Please input valid email address");
		}
		
	}
	
	render() {
		
		var textstyle = {
			fontStyle : this.state.fontStyle,
			color : this.state.fontColor,
		};
		
		return (
			<div className={css(styles.emailcontainer)}>
				<form onSubmit={this.handleSubmit} onClick={this.handleEnter}>
					<label className={css(styles.textbox)}>
						<input type={this.props.name} value={this.state.value} onChange={this.handleChange} className={css(styles.emailtext)} style={textstyle} />
					</label>
					<input type="submit" value={this.props.buttonName} className={css(styles.submitbutton)}/>
				</form>
			</div>
		);
	}
}

const styles = StyleSheet.create({
    emailcontainer: {
		width:'42vw',
		height:'5vw',
		marginLeft:'28vw',
		marginRight:'30vw',
		marginBottom:'10vh',
		marginTop:'2vh',
	},
	textbox: {
		display:'inline-block',
		width:'30vw',
		border:'none',
	},
	emailtext: {
		font:'AvenirBlack',
		fontSize:'1.7vw',
		border: 'none',
		width:'100%',
	},
	submitbutton: {
		display:'inline-block',
		width:'12vw',
		height:'5vw',
        lineHeight: '5vw',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '2vw',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
	},
});