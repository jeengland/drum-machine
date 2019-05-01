import './styles.scss'
import React from 'react';
import ReactDOM from 'react-dom';

const bank = [
        {
        id: 'Q',
        displayName: 'Heater 1',
        keyId: 81,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
        {
        id: 'W',
        displayName: 'Heater 2',
        keyId: 87,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
        {
        id: 'E',
        displayName: 'Cymbal',
        keyId: 69,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
        {
        id: 'A',
        displayName: 'Lighter',
        keyId: 65,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
        {
        id: 'S',
        displayName: 'Hat/Kick',
        keyId: 83,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
        {
        id: 'D',
        displayName: 'Kick 1',
        keyId: 68,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
        {
        id: 'Z',
        displayName: 'Snare',
        keyId: 90,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    },
        {
        id: 'X',
        displayName: 'Side Stick',
        keyId: 88,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
        {
        id: 'C',
        displayName: 'Kick 2',
        keyId: 67,
        src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }
]

class Drum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bank: bank,
            display: 'Sample Name Display'
        }
        this.playSample = this.playSample.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    playSample(e) {
        let sample = e.target.getElementsByClassName('clip')[0];
        sample.currentTime = 0;
        sample.play();
        this.setState({
            display: e.target.id
        })
    }
    handleKeyDown(event) {
        let id = String.fromCharCode(event.keyCode);
        let sample = document.getElementById(id);
        sample.currentTime = 0;
        sample.play();
        this.setState({
            display: sample.parentElement.id
        })
    } 
    render() {
        return (
            <div id = 'drum-machine'>
                <div id = 'display'>
                    { this.state.display }
                </div>
                <div id = { this.state.bank[0].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[0].id}
                    <audio className = 'clip' src = { this.state.bank[0].src } id = 'Q'></audio>
                </div>
                <div id = { this.state.bank[1].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[1].id}
                    <audio className = 'clip' src = { this.state.bank[1].src } id = 'W'></audio>
                </div>
                <div id = { this.state.bank[2].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[2].id}
                    <audio className = 'clip' src = { this.state.bank[2].src } id = 'E'></audio>
                </div>
                <div id = { this.state.bank[3].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[3].id}
                    <audio className = 'clip' src = { this.state.bank[3].src } id = 'A'></audio>
                </div>
                <div id = { this.state.bank[4].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[4].id}
                    <audio className = 'clip' src = { this.state.bank[4].src } id = 'S'></audio>
                </div>
                <div id = { this.state.bank[5].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[5].id}
                    <audio className = 'clip' src = { this.state.bank[5].src } id = 'D'></audio>
                </div>
                <div id = { this.state.bank[6].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[6].id}
                    <audio className = 'clip' src = { this.state.bank[6].src } id = 'Z'></audio>
                </div>
                <div id = { this.state.bank[7].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[7].id}
                    <audio className = 'clip' src = { this.state.bank[7].src } id = 'X'></audio>
                </div>
                <div id = { this.state.bank[8].displayName } className = 'drum-pad' onClick = { this.playSample }>
                    {this.state.bank[8].id}
                    <audio className = 'clip' src = { this.state.bank[8].src } id = 'C'></audio>
                </div>
            </div>
        )
    }
}

const rootDiv = document.getElementById('root');

ReactDOM.render(<Drum />, rootDiv);