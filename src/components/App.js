import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import LolSearch from './LolSearch';
import LolChracter from './LolChracter';
import LolReport from './LolReport';
import ChracterState from './../../public/lol-champions.json'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedReportComponent: 0,
			selectedCharacter: {},
			image: "test image",
			name: "Albatros",
			chracterstate: ChracterState
		}
		this.clickCharacter = this.clickCharacter.bind(this);
	}

	clickCharacter(e) { 
		console.log(e.target.textContent);
		console.log(this.state.selectedReportComponent);
		console.log(this.state.selectedCharacter);
		this.setState({
			selectedReportComponent: !this.state.selectedReportComponent
		})
		this.state.chracterstate.forEach((v, i, a) => { 
			if(v.name === e.target.textContent) {
				this.setState({
					selectedCharacter: v
				})
				console.log(e.target.textContent);
			}
		})
	}

    render(){
    	// console.log(ChracterState);
    	const viewReport = (<LolReport selectedReportComponent={this.state.selectedReportComponent}/>)
    	const viewBlank = (<div></div>)
        return (
        	<div class="container">
				<Head />
				<br></br>
				<LolSearch />
				<hr></hr>
				<LolChracter 
					image={this.state.image} 
					name={this.state.name} 
					chracterstate={this.state.chracterstate} 
					clickCharacter={this.clickCharacter}
				/>
				<hr></hr>
				{this.state.selectedReportComponent ? viewReport : viewBlank }
            </div>
    
        );
    }
}

export default App;