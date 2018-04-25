import React from 'react';
import ReactDOM from 'react-dom';

import {Section} from '../components/section.jsx';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';
import {Modal} from '../components/tedmodal.jsx';

const TABLET_WIDTH = 801;

export class ConferenceSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
        this.openModal = this.openModal.bind(this); // Important!
    }
    
    componentDidMount() {
        document.title = "Speakers - TEDxUofW";
        window.scrollTo(0, 0);
    }
    
    openModal(image, name, role, text) {
        if(text && text != ""){
           // this.setState({ isModalOpen: true, modalImage: image, modalName: name, modalRole: role, modalText: text });
            let tmp = window.innerWidth < TABLET_WIDTH ? '<div style="margin: 20px 20px 0 0; display: table; "> <div style="padding: 20px; display: table-cell; vertical-align: middle"> <h3 style="font-weight: bold; font-size: 200%">'+ name +'</h3> <p>' + text + ' </p> </div> </div>' :
				'<div style="margin: 20px 20px 0 0; display: table; "> <div style="width: 25%; display: table-cell; vertical-align: middle "><img src="'+ image +'" style="display: block; width: 100%; height: auto;"/></div> <div style="padding: 20px; display: table-cell; vertical-align: middle"> <h3 style="font-weight: bold; font-size: 200%">'+ name +'</h3> <p>' + text + ' </p> </div> </div>';
            vex.dialog.alert("");
            $(".vex-content").html(tmp);
        }
        
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }
    
	render() {
                
		return (
            <div>
				<SupportList openModal={this.openModal} />
				
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    onClose={() => this.closeModal()}
                    modalImage={this.state.modalImage}
                    modalName={this.state.modalName}
                    modalText={this.state.modalText}
                    />
            </div>
        );
	}
}

class SupportList extends React.Component {
	render() {
		return (
		<table className={css(styles.table)}>
			<tbody>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/barrett.png" 
							title="Barrett Vandiver" 
							role="Emcee"
							company=""
							bio="Barrett is elated to be returning to the TedXUofW conference for a third consecutive year as emcee. He graduated from UW in 2017, earning a bachelors in Mathematics with a minor in Education, Learning, and Society. While at UW, he performed improv comedy with The Collective. He currently lives in Tacoma, WA where he is a substitute teacher for the Clover Park School District. When not improvising, Barrett likes to pet his cat, play board games with friends, and watch Survivor."
							openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/ro.png" 
							title="Ro Verdeja" 
							role="Presentation Curator"
							company=""
							bio="Ro is new to Seattle, recently relocating from Bali, Indonesia and is spending most of his time playing with his new presentation toys at Microsoft. In his spare time, he has graciously donated his skills as a storyteller, performer and master slide editor to the TEDxUofW 2018 team to help curate the presentations you will see today. Ro is also partner at Inkling Consulting, loves to sing, travel and is looking for a new volleyball team to play with."
							openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/rami.png" 
							title="Rami Slim" 
							role="Technical Director"
							company=""
							bio="Rami is excited to once again serve as the Lead Technical Producer for TEDxUofW. Having held this position for three years, Rami oversees all aspects of light, sound, and video the day of the conference. Rami is a senior in the UW Aeronautics and Astronautics Department and will work as an aerodynamicist for Boeing. Rami currently lives in Seattle and enjoys flying, photography, and travelling."
							openModal={this.props.openModal}
						/>
					</td>
				</tr>
			</tbody>
		</table>
		);
	}
}

const styles = StyleSheet.create({
    table: {
		width: '100%',
	},
	tr: {
		padding: '1%',
	},
	td: {
		padding: '1%',
		':first-child': {
			paddingLeft: '0px',
		},
		':last-child': {
			paddingRight: '0px',
		},
	},
});