import React from 'react';

class LolReport extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props.selectedCharacter);

		return (
			<div class="">
				<h2>LolReport</h2>
				<h1></h1>
	 			<div class="bg-primary">Reporting space</div>
				<div class="row">
					<div class="col-sm-3 border border-primary">{this.props.selectedCharacter.name}</div>
					<div class="col-sm-9 border border-primary">
						<div>{this.props.selectedCharacter.desc}</div>
						{this.props.selectedCharacter.tags.map((data, i) => {
							return(<h4 key={i}>{data}</h4>)
						})}
					</div>
					
				</div>
			</div>
		)
	}
}

export default LolReport;