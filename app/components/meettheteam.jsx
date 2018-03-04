import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {Profiles} from '../components/tedprofiles.jsx'

const teams = ["", "curators", "design", "finance", "speaker selection", "production", "public relations", "web"];

const profiles=[/*{name:"Jimmy Two Shoes", 	role:"Dorito Tester", 			team:"curators", 	img:"/app/resources/images/Dummy Data/1.jpg"}, 
				{name:"Jimmy Three Shoes", 	role:"Dorito Approver", 		team:"curators", 	img:"/app/resources/images/Dummy Data/2.jpg"},
				{name:"[Redacted]", 		role:"Fashion Judger", 			team:"curators", 	img:"/app/resources/images/Dummy Data/3.jpg"},
				{name:"Squirtle", 			role:"Doing his best", 			team:"design", 		img:"/app/resources/images/Dummy Data/19.jpg"},
				{name:"Weirdly tall guy", 	role:"Two midgets in a coat",	team:"design", 		img:"/app/resources/images/Dummy Data/5.jpg"},
				{name:"Monty Python", 		role:"making good movies", 		team:"design", 		img:"/app/resources/images/Dummy Data/6.jpg"},
	{name:"Detective Richard D Johnson", 	role:"Existing", 				team:"finance", 	img:"/app/resources/images/Dummy Data/7.jpg"},
				{name:"Tony Hawk", 			role:"Being too old to skate", 	team:"finance", 	img:"/app/resources/images/Dummy Data/8.jpg"},
				{name:"Jeff Kaplan", 	role:"Fair and Balanced Gameplay", 	team:"finance", 	img:"/app/resources/images/Dummy Data/9.jpg"},
				{name:"Namey Namington", 	role:"Classified", 				team:"production", 	img:"/app/resources/images/Dummy Data/10.jpg"},
				{name:"Smellborp", 			role:"Not sure yet", 			team:"production", 	img:"/app/resources/images/Dummy Data/11.jpg"},
				{name:"Coolguy98", 			role:"Shoulder to cry on", 		team:"production", 	img:"/app/resources/images/Dummy Data/12.jpg"},
				{name:"Barack Obama", 		role:"Moral Compass", 			team:"public relations", img:"/app/resources/images/Dummy Data/18.jpg"},
			{name:"His holiness, bill", 	role:"Emoji Translator", 		team:"public relations", img:"/app/resources/images/Dummy Data/13.jpg"},
				{name:"Spongebob's uncle", 	role:"Door closer", 			team:"public relations", img:"/app/resources/images/Dummy Data/14.jpg"},
				{name:"Barack Obama (2)", 	role:"Moral Compass, but again",team:"public relations", img:"/app/resources/images/Dummy Data/18.jpg"},
				{name:"Boaty McBoatface", 	role:"Obama Coordinator", 		team:"web", img:"/app/resources/images/Dummy Data/15.jpg"},
				{name:"Danny Devito", 		role:"Funny bone tickler", 		team:"web", img:"/app/resources/images/Dummy Data/16.jpg"},
				{name:"Boaty McBoatface", 	role:"Obama Coordinator", 		team:"web", img:"/app/resources/images/Dummy Data/4.jpg"},*/
				{name:"Jenny Liang", 		role:"Team Lead", 		team:"web", img:"/app/resources/images/Dummy Data/1.jpg"} ];
				
const descriptions=["The TEDxUofW team is a community of creative thinkers, leaders, and lovers of TED. We are passionate UW undergrads who collaborate to host the TEDxUofW conference. We are in charge of the conference from start to finish in finance, design, website development, PR, production, and speaker selection.",
					"Curators oversee the conference and planning in its entirety, including the management of team members, communication, and all-team and exec meetings. Their tasks include recruiting team managers and members, selecting the conference's theme, and representing TEDxUofW in professional inquiries.",
					"The design team creates the branding for each TEDxUofW conference to tie in the theme within TEDx general guidelines. These graphics are used for print ads, digital media, a mobile app, and a website, which shape the face of the event, inspire people to attend and create appealing products.",
					"The finance and sponsorship team ensures that TEDxUofW’s financial needs are always met. They control the organization’s money, its collection, and disbursement. They track organization expenses, oversee the master budget, and develop relationships with sponsors to get the conference running.",
					"The speaker selection committee recruits a diverse, interesting, and cohesive group of speakers. These speakers embody the conference's theme and shape the conference. They reach out to a variety of speakers and help shape their speech into an iconic TED talk that inspires our audience.",
					"The production team ensures our guests receive the full TED experience during the conference. They create an environment that allows our speakers to inspiring guests, from when they enter until they leave. Our production committee may not be in the spotlight, but the light shines because of them.",
					"The public relations committee creatively and strategically promotes the TEDxUofW conference. They own all promotion leading up to the event, “hyping” people about TEDxUofW. They work to create stellar content and reach out to communities around UW to spread the message of what TEDxUofW is all about!",
					"The web committee builds all of the technology that TEDxUofW uses to connect to their audience, including www.tedxuofw.com and our day-of-conference application. They are completely in charge of these products, from the initial designs until they are completely built and ready for the conference."];

export class Descriptions extends React.Component {
	
	render() {		
		return (
			<div className={css(styles.descriptioncontainer)}>
				<Content>
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
		var tempArr = profiles.slice(0);
		tempArr.splice(0, 0, {txt:descriptions[this.state.index], team:teams[this.state.index]});
		return (
				<Profiles profiles={tempArr} team={teams[this.state.index]} />
		);
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
	tab: {
		width:'10%',
		fontSize:'1.3vw',
		color:'gray',
		fontWeight: 'bold',
        fontFamily: 'Avenir',
        textTransform: 'uppercase',
		marginTop:'0px',
		cursor: 'pointer',
		':hover': {
			color:'black',
        }
	},
	tabcontainer: {
		display:'inline-block',
		height:'2vw',
		marginRight:'15px',
		marginTop:'0px',
		marginBottom:'4vw',
	},
	selectedtab: {
		width:'10%',
		color:'#E62B25',
		fontSize:'1.3vw',
		fontWeight: 'bold',
        fontFamily: 'AvenirBlack',
        textTransform: 'uppercase',
		marginTop:'0px',
		lineHeight:'0px',
		cursor: 'pointer',
	},
	selectedbar: {
		background: '#E62B25',
		position:'absolute',
        height: '0.4vw',
        width: '100%',
        marginLeft: '0px',
        marginBottom: '0px',
		marginTop:'19.2px',
	},
	selectedtabcontainer: {
		position:'relative',
		height:'2vw',
		display:'inline-block',
		height:'2vw',
		marginTop:'0px',
		marginBottom:'4vw',
	},
});