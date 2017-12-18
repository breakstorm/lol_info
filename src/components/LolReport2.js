import React from 'react';
import {ReportChart} from './ReportChart';
import TableHead from './TableHead';
import StatsBadge from './StatsBadge';
import CharacterHead from './CharacterHead';
import CharacterContent from './CharacterContent';
import CharacterStats from './CharacterStats';

class LolReport2 extends React.Component {
	constructor(props){
		super(props);
		
	}

	componentWillMount() {
		
		
	}

	render() {
		console.log("LolReport2 component : ")
		console.log(this.props.selectedCharacter);

		function formula(b, g, level){
			return b + g * level * (0.685 + 0.0175 * (level+1))
		}
		/* 레벨 숫자값 부분 */
		let levelArray = []
		for(let i = 1; i < 19; i++){
			levelArray.push(i)
		}

		/* 능력치 연산 부분 */
		let stats = [];
		for(let j = 0; j < this.props.selectedCharacter.length; j++){
			stats[j] = new Array();
			let base = this.props.selectedCharacter[j].stats.attackdamage;
			let growth = this.props.selectedCharacter[j].stats.attackdamageperlevel;
			for(let k = 0; k < 18; k++){
				stats[j][k] = formula(base, growth, k);
			}
		}
		console.log(stats);

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
			return data.map((data2, i) =>{
				return data2.map((v,i) =>{
					return (<CharacterStats data={v} key={i} />)	
				})
			})
		}
		
		const chracterStats = (data) => {
			for(let i = 0; data.length; i++){
				return data[i].map((v,i) =>{
					console.log("test : " + v)
					return (<CharacterStats data={v} key={i} />)	
				})
			}
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
			 				{chracterContent(stats)}
			 			</tr>
		 			</tbody>
	 			</table>
			</div>
		)
	}
}

export default LolReport2;