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
			image: "test image",
			name: "Albatros",
			chracterstate: ChracterState
		}
		this.clickCharacter = this.clickCharacter.bind(this);
	}

	clickCharacter(e) { 
		console.log(e.target);
	}

    render(){
    	// console.log(ChracterState);

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
				<LolReport />
            </div>
    
        );
    }
}

App.defaultProps = {

}

export default App;