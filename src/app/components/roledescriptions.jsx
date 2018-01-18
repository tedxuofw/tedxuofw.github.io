import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

export class Descriptions extends React.Component {
	render() {
		return (
			<div className={css(styles.descriptioncontainer)}>
				
				<div className={css(styles.teddescriptionbar)}></div>
				<Content>
					<p className={css(styles.description)}> The TedxUofW team works to bring new ideas to dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, for a brighter future. </p>
					<p className={css(styles.description)}> The Curators hold the team together, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur making us a better team. </p>
					<p className={css(styles.description)}> Design focuses on holding the team's image together, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt, but the public always knows who we are. </p>
					<p className={css(styles.description)}> Finance brings in the much needed funding, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit dolor sit amet, consectetur adipiscing elit, sed do eiusmod keeps us on budget. </p>
					<p className={css(styles.description)}> On the speaker selection team, many decisions sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
					<p className={css(styles.description)}> Production is there when the presentations starts, until  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor working towards bringing  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor for the viewing pleasure of our audiences. </p>
					<p className={css(styles.description)}> Public relations works closely with many teams to make sure Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation And that we have a consistent image throughout all of our TEDx ventures. </p>
					<p className={css(styles.description)}> Web team is clearly the best, and fastest working team. We are just so awesome all the time, I mean look at this cool website. Are you still reading this? Don't I'm just using filler text here, but I have to make it look like its talking about Web Development Strategies, so this is about where I end. Striving to connect the information to the people. </p>
				</Content>
			</div>
		);
	}
}

class Tab extends React.Component {
	render() {
		if (this.props.selected) {
			return (
				<span className={css(styles.tabcontainer)}>
					<span className={css(styles.selectedtabcontainer)}>
						<span className={css(styles.selectedbar)}></span>
						<span onClick={this.props.onClick} className={css(styles.selectedtab)}>
							{this.props.label}
						</span>
					</span>
				</span>
				
			);
		} else {
			return (
				<span className={css(styles.tabcontainer)}>
					<span onClick={this.props.onClick} className={css(styles.tab)}>
						{this.props.label}
					</span>
				</span>
			);
		}
		
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
				<Tab label="All" 				selected={this.state.index == 0} onClick={() => this.setTab(0)} />
				<Tab label="Curators" 			selected={this.state.index == 1} onClick={() => this.setTab(1)} />
				<Tab label="Design" 			selected={this.state.index == 2} onClick={() => this.setTab(2)} />
				<Tab label="Finance" 			selected={this.state.index == 3} onClick={() => this.setTab(3)} />
				<Tab label="Speaker Selection" 	selected={this.state.index == 4} onClick={() => this.setTab(4)} />
				<Tab label="Production" 		selected={this.state.index == 5} onClick={() => this.setTab(5)} />
				<Tab label="Public Relations" 	selected={this.state.index == 6} onClick={() => this.setTab(6)} />
				<Tab label="Web" 				selected={this.state.index == 7} onClick={() => this.setTab(7)} />
				
				{this.content()}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	descriptioncontainer: {
		marginBottom:'70px',
		position:'relative',
	},
	tab: {
		width:'10%',
		fontSize:'15px',
		color:'gray',
		fontWeight: 'normal',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		cursor: 'pointer',
		
	},
	tabcontainer: {
		marginRight:'15px'
	},
	selectedtab: {
		width:'10%',
		color:'#E62B25',
		fontSize:'15px',
		fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		cursor: 'pointer',
	},
	selectedbar: {
		background: '#E62B25',
		position:'absolute',
        height: '6px',
        width: '100%',
        marginLeft: '0px',
        marginBottom: '10px',
		marginTop:'20px',
	},
	selectedtabcontainer: {
		position:'relative',
	},
	description: {
		fontWeight: 'normal',
        fontFamily: 'Avenir-Heavy',
		marginLeft:'50px',
	},
	teddescriptionbar: {
        background: '#E62B25',
		position:'absolute',
        height: '70%',
        width: '10px',
        marginLeft: '0px',
        marginBottom: '0px',
		marginTop:'35px',
    },
});