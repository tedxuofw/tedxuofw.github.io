import React from 'react';
import ReactDOM from 'react-dom';

import {StyleSheet, css} from 'aphrodite';

import {FeaturedSpeaker} from '../components/featuredspeaker.jsx';
import {TedButton} from '../components/tedbutton.jsx';

const speakers =[ {name:"Kristi Straus", desc:"", 	img:"/app/resources/images/speakers/kristi.png"},
			{name:"Ansel Santosa", 	desc:"", 		img:"/app/resources/images/speakers/ansel.png"},
			{name:"Heather Evans", 	desc:"", 		img:"/app/resources/images/speakers/heather.png"},
			{name:"Dr. Bezruchka", desc:"", 		img:"/app/resources/images/speakers/stephen.png"},
			{name:"John Sinclair", desc:"", 		img:"/app/resources/images/speakers/john.png"},
			{name:"Fauzia Lala", desc:"", 			img:"/app/resources/images/speakers/fauzia.png"},
			{name:"Andrea Weatherhead", desc:"", 	img:"/app/resources/images/speakers/andrea.png"},
			{name:"Tyler Valentine", desc:"", 		img:"/app/resources/images/speakers/tyler.png"},
			{name:"Sarah Mhyre", desc:"", 			img:"/app/resources/images/speakers/sarah.png"},
			{name:"Jeffery Lew", desc:"", 			img:"/app/resources/images/speakers/jeffery.png"},
			{name:"Izdihar Bailey", desc:"", 		img:"/app/resources/images/speakers/izdihar.png"},
			{name:"Karen Liftin", desc:"", 			img:"/app/resources/images/speakers/karen.png"},
			{name:"Tarah Wheeler", desc:"", 		img:"/app/resources/images/speakers/tarah.png"} 
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