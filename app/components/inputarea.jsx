import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Form, Button, FormControl} from 'react-bootstrap';

export class InputArea extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value: ''};
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	render() {
		
		var textstyle = {
			fontStyle : this.state.fontStyle,
			color : this.state.fontColor,
		};
		
		return (
			<Form inline className={css(styles.emailcontainer)}>
				<FormControl
					id="formControlsEmail"
					type="email"
					placeholder={this.props.ghostText} 
					value={this.state.value} 
					onChange={this.handleChange} 
					className={css(styles.emailtext)} 
				/>
				<Button type="submit" className={css(styles.submitbutton)}>
					{this.props.buttonName}
				</Button>
			</Form>
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
		
	},
	emailtext: {
		display:'inline-block',
		border:'none',
		font:'AvenirBlack',
		fontSize:'1.7vw',
		width:'75%',
		height:'5vw',
	},
	submitbutton: {
		display:'inline-block',
		width:'25%',
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