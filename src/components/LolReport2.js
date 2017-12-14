import React from 'react';
import {ReportChart} from './ReportChart';
import TableHead from './TableHead';
import StatsBadge from './StatsBadge';

class LolReport2 extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log("this is LolReport2 component : ")
		console.log(this.props.selectedCharacter);
		let levelArray = []
		for(let i = 1; i < 19; i++){
			levelArray.push(i)
		}

		const head = (data) => {
			return data.map((v, i) => {
				return (<TableHead data={v} key={i} />)
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
			 				<td scope="row">ChracterA</td>
			 				<td>4</td>
			 				<td>4</td>
			 				<td>4</td>
			 				<td>4</td>
			 			</tr>
		 			</tbody>
	 			</table>
			</div>
		)
	}
}

export default LolReport2;