import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';
import {TedButton} from '../components/tedbutton.jsx';

const speakers =[ {name:"Kristi Straus", 	desc:"UW Environmental Studies", 	img:"/app/resources/images/kristi-straus.jpg"},
			{name:"Ansel Santosa", 	desc:"UW Information School", 				img:"/app/resources/images/ansel-santosa.jpg"},
			{name:"Heather Evans", 	desc:"University of Washington", 			img:"/app/resources/images/heather-evans.jpg"},
			{name:"Dr. Stephen Bezruchka", desc:"Departments of Health Services and Global Health", img:"/app/resources/images/stephen-bezruchka.jpg"},
			{name:"John Sinclair", desc:"Songwriter, Producer, and Performer", 	img:"/app/resources/images/john-sinclair.jpg"},
			{name:"Fauzia Lala", desc:"", 										img:"/app/resources/images/fauzia-lala.jpg"},
			{name:"Andrea Weatherhead", desc:"", 								img:"/app/resources/images/andrea-weatherhead.jpg"},
			{name:"Tyler Valentine", desc:"University of Washington", 			img:"/app/resources/images/tyler-valentine.jpg"},
			{name:"Sarah Mhyre", desc:"UW Department of Oceanography", 			img:"/app/resources/images/sarah-mhyre.jpg"},
			{name:"Jeffery Lew", desc:"", 										img:"/app/resources/images/jeffery-lew.jpg"},
			{name:"Izdihar Bailey", desc:"", 									img:"/app/resources/images/izdihar-bailey.jpg"},
			{name:"Karen Liftin", desc:"", 										img:"/app/resources/images/karen-liftin.jpg"},
			{name:"Tarah Wheeler", desc:"", 									img:"/app/resources/images/tarah-wheeler.jpg"} 
			];

export class Speakers extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.getSelection = this.getSelection.bind(this);
		this.state = {table:this.getSelection()};
	}
	
	getSelection() {
		var table = [];
		while (table.length < 3) {
			const num = Math.floor(Math.random() * speakers.length);
			if (!table.includes(speakers[num])) table.push(speakers[num]);
		}
		return table;
	}
	
	render() {
		var table = this.state.table;
		return (
			<div className={css(styles.container)}>
				<div className={css(styles.headercontainer)}>
					<p className={css(styles.header)}>Featuring</p>
				</div>
				<FeaturedSpeaker 
					name={table[0].name}
					desc={table[0].desc}
					img={table[0].img}
					flipped={true}
				/>
				<FeaturedSpeaker 
					name={table[1].name}
					desc={table[1].desc}
					img={table[1].img}
					flipped={false}
				/>
				<FeaturedSpeaker 
					name={table[2].name}
					desc={table[2].desc}
					img={table[2].img}
					flipped={true}
				/>
				<TedButton name="View All Speakers" linkTo="/speakers" />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	header: {
        fontFamily: 'AvenirBlack',
		fontSize:'3vw',
		color:'white',
		display:'inline-block',
		paddingLeft:'2vw',
		paddingRight:'2vw',
	},
	headercontainer: {
		width:'100%',
		color:'white',
		textAlign:'center',
	},
	container: {
		position:'relative',
		width: '100%',
		height: 'auto',
		margin:'0px, 0px, 0px, 0px',
	},
});