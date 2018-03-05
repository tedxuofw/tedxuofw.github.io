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
		height:'5vh',
        textAlign: 'center'
	},
	textbox: {},
	emailtext: {
		display:'inline-block',
		border:'none',
		font:'Avenir',
		fontSize:'1.7vw',
		height:'5vh',
        marginLeft: '10px',
        outline: 'none',
        WebkitAppearance: 'none',
        WebkitBoxShadow: 'none',
        MozBoxShadow: 'none',
        boxShadow: 'none',
		"::-webkit-input-placeholder" : {
			fontStyle:'italic',
		},
		"::-moz-placeholder" : {
			fontStyle:'italic',
		},
	},
	submitbutton: {
        userSelect: 'none',
        border: 'none',
        borderRadius: '0px',
		display:'inline-block',
        textAlign: 'center',
		color:'#FFFFFF',
		backgroundColor:'#E62B25',
		fontSize: '1.5vw',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
	},
});