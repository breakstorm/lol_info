import React from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update'
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
			selectedCount: 0,
			thisCount: 1,
			selectedCharacter: [],
			searchInput: '',
			statsInput: 'attackdamage',
			image: "test image",
			name: "Albatros",
			chracterstate: ChracterState,
			chracterjson: ChracterJson,
			nameArray: []
		}
		this.clickCharacter = this.clickCharacter.bind(this);
		this.clickBadge = this.clickBadge.bind(this);
		this.clickStatsBadge = this.clickStatsBadge.bind(this);
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

		/* LolReport1&2 공통 사용하던 기능 */
		this.setState({
			selectedReportComponent: 1
		})

		console.log("clickevent length test : ");
		console.log(this.state.selectedCharacter.length)
		console.log(this.state.selectedCharacter)

		/* LolReport2 Component에서 사용하는 기능 : 토글 처리문*/
		if(this.state.selectedCharacter.length > 0){
			console.log("check please : ")
			for(let i = 0; i < this.state.selectedCharacter.length; i++){
				if(this.state.selectedCharacter[i].name === e.target.textContent){
					console.log("crush error !!!")
					this.setState({
						selectedCharacter: update(this.state.selectedCharacter, 
						{
							$splice:[[i,1]]
						})
					})
					this.setState((prevState, props) => ({
					    selectedCount: prevState.selectedCount - 1,
					    thisCount: (2 - prevState.thisCount - 1) % 2
					}));
					return
				}
			}
		}		

		console.log("click test 2")
		/* LolReport2 Component에서 사용하는 기능 : 해당 캐릭터 정보 저장*/
		if(this.state.chracterjson.data[e.target.textContent] && this.state.selectedCount < 2 ){
			console.log("click event clear")
			console.log(this.state.chracterjson.data[e.target.textContent])
			this.setState({
				selectedCharacter: this.state.selectedCharacter.concat(this.state.chracterjson.data[e.target.textContent])
			})
			/* LolReport2 Component에서 사용하던 기능 */
			this.setState((prevState, props) => ({
			    selectedCount: prevState.selectedCount + 1,
			    thisCount: (prevState.thisCount + 1)%2
			})); 
			console.log(this.state.selectedCharacter)
		}
	}

	clickStatsBadge(e) {
		console.log("this is clickStatsBadge")
		console.log(e.target.firstElementChild.value)
		this.setState({
			statsInput: e.target.firstElementChild.value 
		})
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
    		selectedCount={this.state.selectedCount}
    		thisCount={this.state.thisCount}
    		clickStatsBadge={this.clickStatsBadge}
    		statsInput={this.state.statsInput}
		/>)
    	const viewBlank = (<div></div>)

    	let tempNameArray = [];
    	for(let i in ChracterJson.keys){
			tempNameArray.push(ChracterJson.keys[i])    		
    	}
    	tempNameArray.sort()
    	console.log("this is App render");
    	console.log(tempNameArray);
    	console.log("selectedCount event : " + this.state.selectedCount)
    	console.log("thisCount event : " + this.state.thisCount)
        return (
        	<div class="container">
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
				{this.state.selectedReportComponent ? viewReport : viewBlank }
            </div>
    
        );
    }
}


export default App;