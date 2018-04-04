import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {Section} from '../components/section.jsx';
import {Sponsor} from '../components/sponsor.jsx';

export class Sponsors extends React.Component {
    componentDidMount() {
        document.title = "Sponsors - TEDxUofW";
        window.scrollTo(0, 0);
    }
    
	render() {            
		return (
            <div>
                <TEDNavbar index='2'/>
                <Section title='Sponsors'>
                    <Sponsor title='ASUW' subtitle='Associated Students of the University of Washington'
                        img='/app/resources/images/sponsors/sponsor-asuw.jpg'
                        descr='The ASUW Special Appropriations Fund is a student levied, student distributed fund to support and enhance the out of class experience of students. The fund provides one-time funding grants to student initiated and developed event-centered programs which enrich the cultural, emotional, intellectual, and social well-being of the student.'/>
                    
                    <Sponsor title='UMAC' subtitle='UW University Marketing and Communications'
                        img='/app/resources/images/sponsors/sponsor-asuw.jpg'
                        descr='At UMAC we consider ourselves enthusiastic ambassadors of the University of Washington and its brand. We build awareness and increase support for the UW by collaborating with campus partners, valued supporters, and the community to further the mission of this great university!'/>
                    
                    <Sponsor title='Buerk Center'
                        img='/app/resources/images/sponsors/sponsor-buerk.jpg'
                        descr='The Buerk Center offers an exceptional curriculum, real-world experiences, and connections to the Seattle entrepreneurial community to inspire students from all majors and disciplines across campus to pursue their entrepreneurial passions.'/>
                    
                     
                    <Sponsor title='Wells Fargo'
                        img='/app/resources/images/sponsors/sponsor-wells.png'
                    />
                    
                    
                    <Sponsor title='Amazon Catalyst'
                        img='/app/resources/images/sponsors/sponsor-amazon.png'
                        descr='The Amazon Catalyst program is a collaboration between UW CoMotion and Amazon to encourage innovation within the UW community and awards grants from $10,000 to $100,000 per project. The goal of the program is to inspire people to think big, invent solutions to real-world problems, and make a positive impact on the world. Open to all three UW campuses and all disciplines, the program provides the winners with mentorship, community through the Amazon Catalyst Fellows, and funding. Amazon Catalyst is not a traditional research fund; it is a different kind of funding model to stimulate big ideas with immediate impact.'/>
                    <Sponsor title='UWAA' subtitle='UW Alumni Association'
                        img='/app/resources/images/sponsors/sponsor-uwaa.png'
                        descr='The UW Alumni Association supports the UW and higher education in the state of Washington. In pursuit of that mission, UWAA member dues fund programs and services to help students, to inform the public about the UW community’s remarkable achievements and to bring UW alumni and the public together for learning, fun and advocacy. With more than 56,000 members, UWAA is one of the largest alumni organizations in the United States.'/>
                </Section>
                <TEDFooter />
            </div>
        );
	}
}
