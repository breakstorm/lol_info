import React from 'react';
import PropTypes from 'prop-types';

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


	render() {
		function formula(b, g, level){
			return Math.round(b + g * level * (0.685 + 0.0175 * (level+1)));
		}
		console.log("LolReport2 Component selectedCharacter : ")
		console.log(this.props.selectedCharacter)


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
			stats[j][1] = Math.round(base);
			let growth = this.props.selectedCharacter[j].stats.attackdamageperlevel;
			stats[j][0] = this.props.selectedCharacter[j].name;
			for(let k = 2; k < 19; k++){
				stats[j][k] = formula(base, growth, k);
			}
			if(this.props.selectedCharacter.length === 2 && j === 1){
				console.log("enter check")
				stats[2] = new Array();
				stats[2][0] = stats[0][0] + " - " + stats[1][0];		
				for(let k = 1; k < 19; k++){
					stats[2][k] = Math.round(stats[0][k] - stats[1][k]);		
				}
			}
		}
		console.log("LolReport2 Component stats : ")
		console.log(stats)
		
		const viewBlank = (<div></div>)

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
		
		const chracterStats = (data, index) => {
			for(let i = index; i < data.length; i++){
				return data[i].map((v,i) =>{
					return (<CharacterStats data={v} key={i} />)	
				})
			}
		}


		return (
			<div class="">
				{this.props.selectedCharacter.length > 0 ? 
					<div>
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
					 				{chracterStats(stats, 0)}
					 			</tr>
					 			<tr>
					 				{chracterStats(stats, 1)}
					 			</tr>
					 			<tr>
					 				{chracterStats(stats, 2)}
					 			</tr>
				 			</tbody>
			 			</table>


			 			<div className="row">
			 				<div className="col-sm-3">
			 					<div className="card bg-light">{this.props.selectedCharacter[0].name}</div>
			 				</div>
			 				<div className="col-sm-9">
			 					<div className="card bg-light">
			 						<div> Title : {this.props.selectedCharacter[0].title}</div>
			 						<div> AttackDamage : {this.props.selectedCharacter[0].stats.attackdamage} / Armor : {this.props.selectedCharacter[0].stats.armor} / HP : {this.props.selectedCharacter[0].stats.hp} / Spellblock : {this.props.selectedCharacter[0].stats.spellblock}</div>
			 					</div>
			 				</div>
			 			</div>
		 			</div>
					: viewBlank}
	 			

	 			{this.props.thisCount === 1 && this.props.selectedCharacter.length > 1 ? 
 					<div className="row">
		 				<div className="col-sm-3">
		 					<div className="card bg-light">{this.props.selectedCharacter[1].name}</div>
		 				</div>
		 				<div className="col-sm-9">
		 					<div className="card bg-light">
		 						<div> Title : {this.props.selectedCharacter[1].title}</div>
		 						<div> AttackDamage : {this.props.selectedCharacter[1].stats.attackdamage} / Armor : {this.props.selectedCharacter[0].stats.armor} / HP : {this.props.selectedCharacter[0].stats.hp} / Spellblock : {this.props.selectedCharacter[0].stats.spellblock}</div>
		 					</div>
		 				</div>
		 			</div>
	 				: viewBlank }

			</div>
		)
	}
}

LolReport2.defaultProps = {
	thisCount: 0,
	selectedCount: 0
}
LolReport2.propTypes = {
	thisCount: PropTypes.number,
	selectedCount: PropTypes.number
}

export default LolReport2;