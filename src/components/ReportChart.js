import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3'

class ReportChart extends React.Component {
	constructor(props) {
		super(props);
	}

	renderBubbles(data){
	    d3.select('svg').append('h1').text("Hello World");
	}

	componentWillReceiveProps(nextProps) {
        // we have to handle the DOM ourselves now
        if (nextProps.data !== this.props.data) {
            this.renderBubbles(nextProps.data)
        }
    }

    shouldComponentUpdate() { return false }

    render() {
        const { width, height } = this.props
        return (
            <svg>
            	<g id="xG" transform="translate(0,20)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="#000" d="M50.5,160V0.5H950.5V160"></path><g class="tick" opacity="1" transform="translate(50.5,0)"><line stroke="#000" y2="160"></line><text fill="#000" y="163" dy="0.71em">0</text></g><g class="tick" opacity="1" transform="translate(300.5,0)"><line stroke="#000" y2="160"></line><text fill="#000" y="163" dy="0.71em">5</text></g><g class="tick" opacity="1" transform="translate(550.5,0)"><line stroke="#000" y2="160"></line><text fill="#000" y="163" dy="0.71em">10</text></g><g class="tick" opacity="1" transform="translate(800.5,0)"><line stroke="#000" y2="160"></line><text fill="#000" y="163" dy="0.71em">15</text></g></g><g id="yG" transform="translate(950,0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="#000" d="M-900,180.5H0.5V20.5H-900"></path><g class="tick" opacity="1" transform="translate(0,180.5)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">0</text></g><g class="tick" opacity="1" transform="translate(0,159.55951025429607)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">20</text></g><g class="tick" opacity="1" transform="translate(0,138.61902050859214)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">40</text></g><g class="tick" opacity="1" transform="translate(0,117.67853076288822)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">60</text></g><g class="tick" opacity="1" transform="translate(0,96.73804101718429)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">80</text></g><g class="tick" opacity="1" transform="translate(0,75.79755127148036)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">100</text></g><g class="tick" opacity="1" transform="translate(0,54.85706152577643)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">120</text></g><g class="tick" opacity="1" transform="translate(0,33.9165717800725)"><line stroke="#000" x2="-900"></line><text fill="#000" x="-903" dy="0.32em">140</text></g></g><circle r="5" cx="100" cy="106.7396966246548" fill="lightgray"></circle><circle r="5" cx="150" cy="104.19542712055177" fill="lightgray"></circle><circle r="5" cx="200" cy="101.52747784888818" fill="lightgray"></circle><circle r="5" cx="250" cy="98.73584880966403" fill="lightgray"></circle><circle r="5" cx="300" cy="95.82054000287931" fill="lightgray"></circle><circle r="5" cx="350" cy="92.78155142853404" fill="lightgray"></circle><circle r="5" cx="400" cy="89.61888308662819" fill="lightgray"></circle><circle r="5" cx="450" cy="86.33253497716177" fill="lightgray"></circle><circle r="5" cx="500" cy="82.9225071001348" fill="lightgray"></circle><circle r="5" cx="550" cy="79.38879945554726" fill="lightgray"></circle><circle r="5" cx="600" cy="75.73141204339917" fill="lightgray"></circle><circle r="5" cx="650" cy="71.9503448636905" fill="lightgray"></circle><circle r="5" cx="700" cy="68.04559791642126" fill="lightgray"></circle><circle r="5" cx="750" cy="64.01717120159147" fill="lightgray"></circle><circle r="5" cx="800" cy="59.865064719201115" fill="lightgray"></circle><circle r="5" cx="850" cy="55.58927846925019" fill="lightgray"></circle><circle r="5" cx="900" cy="51.1898124517387" fill="lightgray"></circle><circle r="5" cx="950" cy="46.66666666666666" fill="lightgray"></circle><path d="M100,106.7396966246548L150,104.19542712055177L200,101.52747784888818L250,98.73584880966403L300,95.82054000287931L350,92.78155142853404L400,89.61888308662819L450,86.33253497716177L500,82.9225071001348L550,79.38879945554726L600,75.73141204339917L650,71.9503448636905L700,68.04559791642126L750,64.01717120159147L800,59.865064719201115L850,55.58927846925019L900,51.1898124517387L950,46.66666666666666" fill="none" stroke="lightblue" stroke-width="2"></path>
            </svg>
        )
    }
}

export default ReportChart;