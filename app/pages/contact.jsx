import React from 'react';
import ReactDOM from 'react-dom';

import {TEDNavbar} from '../components/tednavbar.jsx';
import {TEDFooter} from '../components/tedfooter.jsx';
import {InputArea} from '../components/inputarea.jsx';
import {Section} from '../components/section.jsx';
import {Row, Input} from 'react-materialize';
import {StyleSheet, css} from 'aphrodite/no-important';
import {TedButton} from '../components/tedbutton.jsx';


export class Contact extends React.Component {
    componentDidMount() {
        document.title = "Contact - TEDxUofW";
        window.scrollTo(0, 0);
    }
    
    sendEmail() {
        let parameters = {
            from_name: $("#from_name").val(),
            reply_to: $("#reply_to").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        };
    
        if(parameters.from_name || parameters.reply_to || parameters.subject || parameters.message) {
            $("#ted-fieldset").prop("disabled", true);
            emailjs.send("default_service","tedxuofw_default_template", parameters)
                .then(function(response) {
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    $("#from_name").val("");
                    $("#reply_to").val("");
                    $("#subject").val("");
                    $("#message").val("");
                    $("#ted-fieldset").prop("disabled", false);
                    window.Materialize.toast('Email Sent!', 4000, 'green')

                }, function(err) {
                    console.log("FAILED. error=", err);
                    $("#ted-fieldset").prop("disabled", false, 'red');
                    window.Materialize.toast('Uh oh! Try again?', 4000)
                });
        } else {
            window.Materialize.toast('Please fill out some fields', 4000)
        }
    }
    
	render() {            
		return (
            <div>
                <TEDNavbar index='3'/>
                <Section title='Contact'>
                    <br/>
                    <div className={css(styles.wrapper)}>
                        <div className={css(styles.top)}>
                            <center>
                                <div className={css(styles.one)}>We'd love to hear from you!</div>
                                <div className={css(styles.two)}>Get in touch by leaving us a message below.</div>
                            </center>
                        </div>
                        <div className={css(styles.bottom)}>
                            <Row className={css(styles.row)}>
                                <fieldset id="ted-fieldset">
                                    <Input id="from_name" s={6} label="Name" />
                                    <Input id="reply_to" s={6} type="tedmail" label="Email" />
                                    <Input id="subject" s={12} label="Subject" />
                                    <Input id="message" s={12} type="textarea" label="Message"/>
                                    <center>
                                        <div onClick={this.sendEmail} className={css(styles.button)}>Send</div>
                                    </center>
                                </fieldset>
                            </Row>
                        </div>
                    </div>
                    <br/>
                </Section>
                <Section height="20vh">
                    <center>
                        <div class={css(styles.inputtext)}>Stay updated by signing up for our mailing list below!</div>
                    </center>
                    <InputArea ghostText="Enter your email here" buttonName="Sign up" name="Sign up"/>
                </Section>
                <TEDFooter />
            </div>
        );
	}
}

const styles = StyleSheet.create({
    row: { margin: '0' },
    wrapper: {
        width: '100%',
        margin: '0 auto'
    },
    top: {
        background: '#E62B25',
        width: '100%',
        padding: '20px',
        marginBottom: '0'
    },
    one: {
        color: 'white',
        fontSize: '24px'
    },
    two: {
        color: 'white',
        fontSize: '16px'
    },    
    bottom: {
        width: '100%',
        marginTop: '0',
        padding: '30px',
        borderStyle: 'solid',
        borderColor: '#BDBDBD',
        borderWidth: '0 1px 1px 1px'
    },
    button: {
        display:'inline-block',
		height:'3vw',
		paddingRight:'1vw',
		paddingLeft:'1vw',
        lineHeight: '3vw',
        textAlign: 'center',
		color:'#FFFFFF',
        border: 'none',
        backgroundColor:'#E62B25',
		fontSize: '1.1vw',
        fontFamily: 'AvenirBlack',
        transition: 'opacity 0.2s ease-out',
		textTransform:'uppercase',
        ":hover" : {
            opacity: ".8",
            transition: 'opacity 0.2s ease-out'
        },
    },
    inputtext: {
        fontSize: '32px',
        marginTop: '-10vh',
        maxWidth: '40vw',
        marginBottom: '5vh'
    }
});