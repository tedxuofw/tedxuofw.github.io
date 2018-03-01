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
    
    openModal(image, name, text) {
        this.setState({ isModalOpen: true, modalImage: image, modalName: name, modalText: text });
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
							img="/app/resources/images/erin-jones.jpg" 
							title="Erin Jones" 
							role="Superintendent"
							company="Office of Public Instruction"
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/Dummy Data/18.jpg" 
							title="Barry Bington" 
							role="Bouncer"
							company="The Bureau of Braniacs"
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/Dummy Data/5.jpg" 
							title="Danny D. Daniels" 
							role="Designer" 
							company="Deployable Dedicated Designs"
                            openModal={this.props.openModal}
						/>
					</td>
				</tr>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/Dummy Data/17.jpg" 
							title="Iggy Irena" 
							role="Irrigator" 
							company="Illustrations Incorporated"
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/Dummy Data/10.jpg"  
							title="Rodger Rabbit" 
							role="Realtor" 
							company="Relativistic Relations llc"
                            openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/Dummy Data/14.jpg" 
							title="Connor Cadewack" 
							role="Carrot Carver" 
							company="The Crystal Cutting Company"
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