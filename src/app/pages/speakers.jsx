import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';

import {StyleSheet, css} from 'aphrodite';

import {Profile} from '../components/profile.jsx';
import {Modal} from '../components/tedmodal.jsx';

const TABLET_WIDTH = 801;

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
                <TEDNavbar index='1' />
                <Section title='Speakers'>
                    <ProfileList openModal={this.openModal} />
                </Section>
				<Section title='Performers'>
					<PerformerList openModal={this.openModal} />
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
							img="/app/resources/images/speakers/kristi.png" 
							title="Dr. Kristi Straus" 
							role=""
							company=""
                            bio="Dr. Kristi Straus is a lecturer at the University of Washington Program on the Environment and the recipient of the 2017 University of Washington Distinguished Teaching Award. She is passionate about environmental conservation as well as science and sustainability education."
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
							img="/app/resources/images/speakers/bezruchka.jpg" 
							title="Dr. Steve Bezruchka" 
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
                            bio="Fauzia Lala is an ex-Microsoft engineer, motivational speaker and a serial entrepreneur. She has 3 startups including self-defense training for women in the Greater Seattle area. Fauzia loves to learn and read about all things psychology and personal/spiritual growth. She was a finalist of Forbes 30 Under 30 in 2016 and one of the winners of the Washington InnovateHer competition in 2017."
                            openModal={this.props.openModal}
						/>
					</td>
				</tr>
                <tr className={css(styles.tr)}>
                    <td className={css(styles.td)}>
                        <Profile 
                                img="/app/resources/images/speakers/andrea.png" 
                                title="Andrea Weatherhead" 
                                role=""
                                company=""
                                bio='Andrea has created award winning immersive environments for many museums across the country including the Experience Music Project (now called MoPOP) and the  Museum of History & Industry in Seattle. Her visionary educational and interactive exhibit environments have earned her numerous awards. Andrea was featured as the “woman to watch out for in technology in the 21st century” by Seattle Magazine and  was cited as “one of Seattle’s 36 most influential people” by Seattle Met Magazine.'
                                openModal={this.props.openModal}
                            />
                    </td>
                    <td className={css(styles.td)}>
                        <Profile 
                                img="/app/resources/images/speakers/tyler.png" 
                                title="Tyler Valentine" 
                                role=""
                                company=""
                                bio="Tyler is studying Earth and Space Sciences at University of Washington, with minors in Philosophy and Physics. He researches extraterrestrial water extraction with the Applied Physics Laboratory. He also values public engagement about science issues, speaking at events like the Seattle March for Science."
                                openModal={this.props.openModal}
                            />
                    </td>
                    <td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/sarah.png" 
                            title="Dr. Sarah Myhre" 
                            role=""
                            company=""
                            bio="Dr. Myhre is a paleoceanographer and science communicator, currently researching in the UW Department of Oceanography. She organized the Seattle chapter of 500 Women Scientists and has been recognized as an active voice for women in science and society."
                            openModal={this.props.openModal}
                          />
                    </td>
                </tr>
                <tr className={css(styles.tr)}>
                    <td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/jeffery.png" 
                            title="Jeffery Lew" 
                            role=""
                            company=""
                            bio="Jeffery Lew was born and raised in Seattle and graduated from the University of Washington with a BA in marketing. As a proud graduate of Seattle Public Schools (Ingraham High) and a father of three, the problem of school lunch debt and lunch shaming hit close to home for him. Jeff could not fathom students being shamed or going hungry for having lunch debt at their school cafeteria, a situation that children have no control over. In 2017, Jeff began a movement to end lunch shaming and find a permanent solution to the problem. Also known as the 'Lunch Dad,' Jeff launched a campaign to pay off all the lunch debt in Seattle, Tacoma and Spokane, the three largest school districts in the state of Washington. He has raised over $100,000 to date and is now aiming to pay off the lunch debt for every district in the state. Still, not everyone is aware of school lunch debt and the shaming that stems from it. Jeff is on a mission to raise awareness and find a way to end this practice once and for all."
                            openModal={this.props.openModal}
                          />
                    </td>
                    <td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/izdihar.png" 
                            title="Izdihar Bailey" 
                            role=""
                            company=""
                            bio="Izdihar Bailey is a Lobbyist and a former Government Affairs Team member at CAIR-Washington State, America's largest Muslim civil liberties and advocacy organization. As someone who has lived life without Islam and is now empowered by Islam, she believes her life experience allows her to create stronger link of communication with fellow Americans of all faiths and political alignments."
                            openModal={this.props.openModal}
                          />
                    </td>
                    <td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/karen.png" 
                            title="Karen Litfin" 
                            role=""
                            company=""
                            bio="Karen Litfin is Associate Professor of Political Science at the University of Washington, and author of <em>Ozone Discourses</em>; <em>The Greening Sovereignty</em>; and <em>Ecovillages: Lessons for Sustainable Community</em>."
                            openModal={this.props.openModal}
                          />
                    </td>
                </tr>
                <tr className={css(styles.tr)}>
                    <td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/tarah.png" 
                            title="Tarah Wheeler" 
                            role=""
                            company=""
							bio='<a href="http://twitter.com/tarah">Tarah Wheeler</a> (MS, CSM, CSD, CSP, CISSP) is an information security researcher, author, entrepreneur, keynote speaker, nonprofit founder, scientist, and poker player. She is currently <a href="https://www.newamerica.org/cybersecurity-initiative/2017-2018-cybersecurity-policy-fellows/">Cybersecurity Policy Fellow at New America</a> and Principal Security Advisor & CEO at <a href="https://redqueentech.com/">Red Queen Technologies.</a> She is the lead author of the best-selling <a href="http://amzn.to/2q9iFik"><em>Women In Tech: Take Your Career to The Next Level With Practical Advice And Inspiring Stories</em></a>. She has been Senior Director of Engineering and Principal Security Advocate at <a href="http://symantec.com/">Symantec</a> Website Security. She founded and now sits on the board of Fizzmint, an end-to-end secure HR management company. She has led projects at <a href="http://www.xbox.com/en-US/games/xbox-one">Microsoft Game Studios</a> (Halo and Lips) and architected systems at encrypted mobile communications firm <a href="http://silentcircle.com/">Silent Circle</a>. She founded <a="http://isunlocked.com/">Infosec Unlocked</a>, an initiative to add diversity in infosec conference speakers). Reach her at <a href="http://twitter.com/tarah">@tarah</a>.'
                            openModal={this.props.openModal}
                          />
                    </td>
					<td className={css(styles.td)}>
                        <Profile 
                            img="/app/resources/images/speakers/jeanne.png" 
                            title="Jeanne Suchodolski" 
                            role=""
                            company=""
							bio="Jeanne C. Suchodolski, Explorer's Club MN '09, is a multifaceted powerhouse of a woman with titles such as engineer, lawyer, pilot, and polar expedition member. She has remained within the technology and aerospace world throughout her career, from working as a rocket engineer at Boeing to acting as patent and corporate counsel for companies such as Boeing, Microsoft, and Honeywell. Jeanne is a multi-year veteran of the United States’ Antarctic Program and wintered-over as the Station Manager of  McMurdo Station. She is currently earning an LLM in Space, Cyber and Telecommunications Law."
							openModal={this.props.openModal}
                          />
                    </td>
                </tr>
				</tbody>
			</table>
		);
	}
}

class PerformerList extends React.Component {
	render() {
		return (
		<table className={css(styles.table)}>
			<tbody>
				<tr className={css(styles.tr)}>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/awaaz.png" 
							title="UW Awaaz" 
							role=""
							company=""
							bio="Awaaz is the premiere co-ed South Asian fusion a cappella team at the University of Washington. Founded in 2009, Awaaz (which means “voice” in Hindi), is made up of singers who come from various musical backgrounds. This group aims to fuse South Asian and Western vocal music through melodious and rhythmic a cappella arrangements. Awaaz competes at collegiate a cappella competitions at various universities across the country. They most recently competed at Anahat at UC Berkeley and Sahana at UCLA. All of the group members enjoy working together to celebrate and share their South Asian heritage and unique experiences in America through musical performances in the UW community and the greater Seattle area."
							openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/aura.png" 
							title="Aura Dance Collective" 
							role=""
							company=""
							bio="Aura is a collaborative contemporary dance company. Aura performs a variety of styles, emphasizing jazz, contemporary, and lyrical styling in their performances."
							openModal={this.props.openModal}
						/>
					</td>
					<td className={css(styles.td)}>
						<Profile 
							img="/app/resources/images/gaultier.png" 
							title="Raphaël Gaultier" 
							role=""
							company=""
							bio="Raphaël is the founder of Human Condition Magazine, a collective dedicated to providing a platform and building a community for emerging artists in Seattle. Raphaël is concerned with creating conversations around what the Human Condition is and how we can be more empathetic to the people around us!"
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
