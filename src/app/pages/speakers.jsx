import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';
import {Modal} from '../components/tedmodal.jsx';

export class Speakers extends React.Component {
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
       // this.setState({ isModalOpen: true, modalImage: image, modalName: name, modalRole: role, modalText: text });
        let tmp = '<div style="margin: 20px 20px 0 0;"> <div style="width: 25%; float:left "><img src="'+ image +'" style="display: block; width: 100%; height: auto;"/></div> <div style="margin-left: 30%"> <h3 style="font-weight: bold; font-size: 200%">'+ name +'</h3> <p>' + text + ' </p> </div> </div>';
        vex.dialog.alert("");
        $(".vex-content").html(tmp);
        
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }
    
	render() {
                
		return (
            <div>
                <TEDNavbar index='1' />
                <Section title='Speakers'>
                    <ProfileList openModal={this.openModal} />
                </Section>
                <Modal 
                    isOpen={this.state.isModalOpen} 
                    onClose={() => this.closeModal()}
                    modalImage={this.state.modalImage}
                    modalName={this.state.modalName}
                    modalText={this.state.modalText}
                    />
                <TEDFooter />
            </div>
        );
	}
}

class ProfileList extends React.Component {
    
	render() {
		return (
		<table className={css(styles.table)}>
			<tbody>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/kirsti.png" 
							title="Kristi Straus" 
							role=""
							company=""
                            bio="Kristi Straus is a lecturer in the College’s Environmental Studies program and the recipient of the 2017 University of Washington Distinguished Teaching Award. She is passionate about environmental conservation and education surrounding environmental topics."
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/ansel.png" 
							title="Ansel Santosa" 
                            role=""
							company=""
                            bio="Ansel is an engineer and educator. He graduated from the University of Washington Information School in 2013 where he now serves as an advisory board member. He works as a software engineer and early business validator at Pioneer Square Labs, a local startup studio and seed stage venture fund. He is passionate about helping entrepreneurs be successful and building great companies in Seattle."
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/heather.png" 
							title="Heather Evans" 
							role=""
							company=""
                            bio="Heather is a lecturer at the University of Washington, teaching several courses pertaining to disability studies. Her work revolves around better understanding ‘invisible disability,’ empowering disability identity, and breaking down institutional marginalization of disabled individuals."
                            openModal={this.props.openModal}
						/>
					</td>
				</tr>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/stephen.png" 
							title="Steve Bezruchka" 
							role=""
							company=""
                            bio="Dr. Stephen Bezruchka is a Senior Lecturer in the Departments of Health Services and Global Health, with degrees from Harvard, Stanford and Johns Hopkins. His courses and research focus on population health and their socioeconomic determinants. Prior to his time at the University of Washington, he spent 30 years as an emergency physician and trained doctors in remote hospitals in Nepal. Throughout his career, he has continued to be involved with international health issues."
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/john.png"  
							title="John Sinclair" 
							role=""
							company=""
                            bio="John Sinclair (also known as Saint Claire) is a rising songwriter, producer, and performer in Seattle.  His work in singing, writing, producing, and composing for strings has led to recent music collaborations with prominent musicians, including Macklemore and Ryan Lewis."
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/speakers/fauzia.png" 
							title="Fauzia Lala" 
							role=""
							company=""
                            bio="Fauzia Lala is an ex-Microsoft engineer, motivational speaker and a serial entrepreneur. She has 3 startups including self-defense trainings for women. She loves to train, both physically and mentally. She loves learning from books and by taking courses on Lynda.com. Fauzia is fanatic fan of all things psychology and personal/spiritual growth. Fauzia was a finalist of Forbes 30 Under 30 in 2016 and has won the Washington InnovateHer competition in 2017."
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