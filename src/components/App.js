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
			searchInput: '',
			image: "test image",
			name: "Albatros",
			chracterstate: ChracterState
		}
		this.clickCharacter = this.clickCharacter.bind(this);
		this.clickBadge = this.clickBadge.bind(this);
		this.typeSearchInput = this.typeSearchInput.bind(this);
	}

	clickBadge(e) {
		console.log("active clickBadge")
		this.setState({
			searchInput: e.target.value
		})
	}

	typeSearchInput(e) {
		this.setState({
			searchInput: e.target.value
		})
	}

	clickCharacter(e) { 
		{/*console.log(e.target.textContent);
				console.log(this.state.selectedReportComponent);
				console.log(this.state.selectedCharacter);*/}
		this.setState({
			selectedReportComponent: 1
		})

		this.state.chracterstate.forEach((v, i, a) => { 
			if(v.name === e.target.textContent) {
				this.setState({
					selectedCharacter: v
				})
				console.log(e.target.textContent);
				if(e.target.textContent === this.state.selectedCharacter.name){
					this.setState({
						selectedReportComponent: 0
					})
				}
			}
		})
	}

    render(){
    	// console.log(ChracterState);
    	const viewReport = (<LolReport 
    		selectedReportComponent={this.state.selectedReportComponent}
    		selectedCharacter={this.state.selectedCharacter}
		/>)
    	const viewBlank = (<div></div>)

        return (
        	<div class="container">
				<Head />
				<br></br>
				<LolSearch 
					typeSearchInput={this.typeSearchInput}
					searchInput={this.state.searchInput}
				/>
				<hr></hr>
				<LolChracter 
					image={this.state.image} 
					name={this.state.name} 
					chracterstate={this.state.chracterstate} 
					clickCharacter={this.clickCharacter}
					searchInput={this.state.searchInput}
					clickBadge={this.clickBadge}
				/>
				<hr></hr>
				{this.state.selectedReportComponent ? viewReport : viewBlank }
            </div>
    
        );
    }
}

export default App;