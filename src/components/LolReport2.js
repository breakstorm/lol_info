import React from 'react';
import {ReportChart} from './ReportChart';
import TableHead from './TableHead';
import StatsBadge from './StatsBadge';
import CharacterHead from './CharacterHead';
import CharacterContent from './CharacterContent';

class LolReport2 extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log("LolReport2 component : ")
		console.log(this.props.selectedCharacter);

		function formula(b, g, level){
			return b + g * level * (0.685 + 0.0175 * (level+1))
		}

		let levelArray = []
		for(let i = 1; i < 19; i++){
			levelArray.push(i)
		}
		/* 능력치 연산 부분 */
		let characterStats = [];
		// for(let j = 0; j < this.props.selectedCharacter.length; j++){
		// 	characterStats = new Array();
		// }
		for(let j = 0; j < this.props.selectedCharacter.length; j++){
			characterStats[j] = new Array();
			let base = this.props.selectedCharacter[j].stats.attackdamage;
			let growth = this.props.selectedCharacter[j].stats.attackdamageperlevel;
			for(let k = 0; k < 18; k++){
				characterStats[j][k] = formula(base, growth, k);
			}
		}
		// for(let j = 0; j < 18; j++){
		// 	characterStats[j] = test(j);
		// }
		console.log(characterStats);


		const head = (data) => {
			return data.map((v, i) => {
				return (<TableHead data={v} key={i} />)
			})
		}

		const chracterHead = (data) => {
			return data.map((v, i) =>{
				return (<CharacterHead data={v} key={i} />)
			})
		}

		const chracterContent = (data) => {
			return data.map((v, i) =>{
				return (<CharacterContent data={v} key={i} />)
			})
		}


		return (
			<div class="">
				<h2>LolReport</h2>
				<StatsBadge />
				<h1></h1>

	 			<table className="table">
	 				<thead >
			 			<tr>
			 				<th scope='col'>Lv.</th>
			 				{head(levelArray)}
			 			</tr>
		 			</thead>
		 			<tbody>
		 				<tr>
			 				{chracterHead(this.props.selectedCharacter)}
			 				{chracterContent(this.props.selectedCharacter)}
			 			</tr>
		 			</tbody>
	 			</table>
			</div>
		)
	}
}

export default LolReport2;