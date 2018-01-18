import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Descriptions extends React.Component {
	render() {
		return (
			<div className={css(styles.descriptioncontainer)}>
				
				<div className={css(styles.teddescriptionbar)}></div>
				<Content>
					<p className={css(styles.description)}> Content 0 </p>
					<p className={css(styles.description)}> Content 1 </p>
					<p className={css(styles.description)}> Content 2 </p>
					<p className={css(styles.description)}> Content 3 </p>
					<p className={css(styles.description)}> Content 4 </p>
					<p className={css(styles.description)}> Content 5 </p>
					<p className={css(styles.description)}> Content 6 </p>
					<p className={css(styles.description)}> Content 7 </p>
				</Content>
			</div>
		);
	}
}

class Tab extends React.Component {
	render() {
		return (
			<span onClick={this.props.onClick}  className={css(styles.tab)}>
				{this.props.label}
			</span>
		);
	}
}

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {index: 0};
	
		this.setTab = this.setTab.bind(this);
	}
	
	setTab(n) {
		this.setState(prevState => ({
			index: n
		}));
	}
	
	content() {
		return this.props.children[this.state.index];
	}
	
	render() {
		return (
			<div>
				<Tab label="All" onClick={() => this.setTab(0)} />
				<Tab label="Curators" onClick={() => this.setTab(1)} />
				<Tab label="Design" onClick={() => this.setTab(2)} />
				<Tab label="Finance" onClick={() => this.setTab(3)} />
				<Tab label="Speaker Selection" onClick={() => this.setTab(4)} />
				<Tab label="Production" onClick={() => this.setTab(5)} />
				<Tab label="Public Relations" onClick={() => this.setTab(6)} />
				<Tab label="Web" onClick={() => this.setTab(7)} />
				
				{this.content()}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	descriptioncontainer: {
		marginBottom:'70px',
	},
	tab: {
		width:'10%',
		fontSize:'15px',
		fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		cursor: 'pointer',
		marginRight:'15px'
	},
	description: {
		fontWeight: 'normal',
        fontFamily: 'Avenir-Heavy',
		marginLeft:'50px',
	},
	teddescriptionbar: {
        background: '#E62B25',
		position:'absolute',
        height: '60px',
        width: '10px',
        marginLeft: '0px',
        marginBottom: '30px',
		marginTop:'35px',
    },
});