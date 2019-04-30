import './styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';

class Drum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            q: {
                id: 'Q',
                displayName: 'Heater 1',
                keyId: 81,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            w: {
                id: 'W',
                displayName: 'Heater 2',
                keyId: 87,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            e: {
                id: 'E',
                displayName: 'Cymbal',
                keyId: 69,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            a: {
                id: 'A',
                displayName: 'Lighter',
                keyId: 65,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
            },
            s: {
                id: 'S',
                displayName: 'Hat/Kick',
                keyId: 83,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            },
            d: {
                id: 'D',
                displayName: 'Kick 1',
                keyId: 68,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            },
            z: {
                id: 'Z',
                displayName: 'Snare',
                keyId: 90,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
            },
            x: {
                id: 'X',
                displayName: 'Side Stick',
                keyId: 88,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
            },
            c: {
                id: 'C',
                displayName: 'Kick 2',
                keyId: 67,
                src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
            }
        }
    }
    render() {
        return (
            <div id = 'drum-machine'>
                <div id = 'display'>
                    sample name here
                </div>
                
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<Drum />, rootDiv);