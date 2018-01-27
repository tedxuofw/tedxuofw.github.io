import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Profiles} from '../components/tedprofiles.jsx'

export class Descriptions extends React.Component {
	
	render() {
		const profiles=[	{name:"Jenny Liang", role:"Web Lead", team:"web", img:"/app/resources/images/generic.jpg"}, 
					{name:"Name", role:"Role", team:"curators", img:"/app/resources/images/generic.jpg"}, 
					{name:"Name", role:"Role", team:"finance", img:"/app/resources/images/generic.jpg"},
					{name:"Name", role:"Role", team:"production", img:"/app/resources/images/generic.jpg"},
					{name:"Name", role:"Role", team:"public relations", img:"/app/resources/images/generic.jpg"},
					{name:"Name", role:"Role", team:"web", img:"/app/resources/images/generic.jpg"} ];
					
		return (
			<div className={css(styles.descriptioncontainer)}>
				<Content>
					<Body>
						<p className={css(styles.description)}> The TEDxUofW team is a community of creative thinkers, leaders, and lovers of TED. We are passionate UW undergrads who collaborate to host the TEDxUofW conference. We are in charge of the conference from start to finish in finance, design, website development, PR, production, and speaker selection. </p>
						<Profiles profiles={profiles} />
					</Body>
					
					<Body>
						<p className={css(styles.description)}> Curators oversee the conference and planning in its entirety, including the management of team members, communication, and all-team and exec meetings. Their tasks include recruiting team managers and members, selecting the conference's theme, and representing TEDxUofW in professional inquiries. </p>
						<Profiles profiles={profiles} team="curators" />
					</Body>
					
					<Body>
						<p className={css(styles.description)}> The design team creates the branding for each TEDxUofW conference to tie in the theme within TEDx general guidelines. These graphics are used for print ads, digital media, a mobile app, and a website, which shape the face of the event, inspire people to attend and create appealing products. </p>
						<Profiles profiles={profiles} team="design" />
					</Body>

					<Body>
						<p className={css(styles.description)}>  The finance and sponsorship team ensures that TEDxUofW’s financial needs are always met. They control the organization’s money, its collection, and disbursement. They track organization expenses, oversee the master budget, and develop relationships with sponsors to get the conference running. </p>
						<Profiles profiles={profiles} team="finance" />
					</Body>
					<Body>
						<p className={css(styles.description)}> The speaker selection committee recruits a diverse, interesting, and cohesive group of speakers. These speakers embody the conference's theme and shape the conference. They reach out to a variety of speakers and help shape their speech into an iconic TED talk that inspires our audience. </p>
						<Profiles profiles={profiles} team="speaker selection" />
					</Body>
					
					<Body>
						<p className={css(styles.description)}> The production team ensures our guests receive the full TED experience during the conference. They create an environment that allows our speakers to inspiring guests, from when they enter until they leave. Our production committee may not be in the spotlight, but the light shines because of them. </p>
						<Profiles profiles={profiles} team="production" />
					</Body>
					
					<Body>
						<p className={css(styles.description)}> The public relations committee creatively and strategically promotes the TEDxUofW conference. They own all promotion leading up to the event, “hyping” people about TEDxUofW. They work to create stellar content and reach out to communities around UW to spread the message of what TEDxUofW is all about! </p>
						<Profiles profiles={profiles} team="public relations" />
					</Body>
					
					<Body>
						<p className={css(styles.description)}> The web committee builds all of the technology that TEDxUofW uses to connect to their audience, including www.tedxuofw.com and our day-of-conference application. They are completely in charge of these products, from the initial designs until they are completely built and ready for the conference. </p>
						<Profiles profiles={profiles} team="web" />
					</Body>
				</Content>
			</div>
		);
	}
}

class Body extends React.Component {
	render() {
		return (
			<div>
				<div className={css(styles.descriptioncontainer)}>
					<span className={css(styles.teddescriptionbar)} />
						{this.props.children[0]}
				</div>
				{this.props.children[1]}
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
        fontFamily: 'Avenir',
		fontSize:'15px',
		marginLeft:'50px',
		marginTop:'28px',
	},
	teddescriptionbar: {
        background: '#E62B25',
		position:'absolute',
        height: '100%',
        width: '10px',
        marginLeft: '0px',
        marginBottom: '0px',
		marginTop:'0px',
    },
});