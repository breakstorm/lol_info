import React from 'react';
import ReactDOM from 'react-dom';
import Head from './Head';
import LolSearch from './LolSearch';
import LolChracter from './LolChracter';
import LolReport from './LolReport';
import LolReport2 from './LolReport2';
import Test from './Test';
import ChracterState from './../../public/lol-champions.json'
import ChracterJson from './../../stats.json'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedReportComponent: 0,
			selectedCharacter: {},
			searchInput: '',
			image: "test image",
			name: "Albatros",
			chracterstate: ChracterState,
			chracterjson: ChracterJson,
			nameArray: []
		}
		this.clickCharacter = this.clickCharacter.bind(this);
		this.clickBadge = this.clickBadge.bind(this);
		this.typeSearchInput = this.typeSearchInput.bind(this);
	}

	clickBadge(e) {
		{/*console.log("active clickBadge")*/}
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

		if(this.state.chracterjson.data[e.target.textContent]){
			console.log("click event clear")
			console.log(this.state.chracterjson.data[e.target.textContent])
			this.setState({
				selectedCharacter: this.state.chracterjson.data[e.target.textContent]
			})
		}

		// this.state.chracterstat.forEach((v, i, a) => { 
		// 	if(v.name === e.target.textContent) {
		// 		console.log(v)
		// 		this.setState({
		// 			selectedCharacter: v
		// 		})

		// 		// 캐릭터 카드 2번 선 
		// 		if(e.target.textContent === this.state.selectedCharacter.name){
		// 			this.setState({
		// 				selectedReportComponent: 0
		// 			})
		// 		}
		// 	}
		// }) 
	}

	componentWillMount(){
		let tempNameArray = [];
    	console.log(ChracterJson);
    	for(let i in ChracterJson.keys){
			tempNameArray.push(ChracterJson.keys[i])    		
    	}
    	tempNameArray.sort()
    	this.setState({nameArray: this.state.nameArray.concat(tempNameArray)})
    	console.log(tempNameArray)
	}

    render(){
		{/*console.log(ChracterState);*/}
    	const viewReport = (<LolReport2 
    		selectedCharacter={this.state.selectedCharacter}
		/>)
    	const viewBlank = (<div></div>)

    	let tempNameArray = [];
    	for(let i in ChracterJson.keys){
			tempNameArray.push(ChracterJson.keys[i])    		
    	}
    	tempNameArray.sort()
    	console.log("this is App render");
    	console.log(tempNameArray);
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
					chracterstate={this.state.nameArray} 
					clickCharacter={this.clickCharacter}
					searchInput={this.state.searchInput}
					clickBadge={this.clickBadge}
				/>
				<hr></hr>
				{/*<Test 
									nameArray={this.state.nameArray}
								/>*/}
				<hr></hr>
				{this.state.selectedReportComponent ? viewReport : viewBlank }
            </div>
    
        );
    }
}


export default App;