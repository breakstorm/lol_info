import React from 'react';

class ChracterCard extends React.Component {
	constructor(props) {
		super(props);
		this.clickTest = this.clickTest.bind(this)
	}

	clickTest(e) {
		console.log(e.target)
		console.log(e.target.value)
	}

	render() {
		return (
			<div class="card bg-secondary">
				<img src="" alt={this.props.data.id} />
				<div class="card-img-overlay" onClick={(e)=>{
					console.log("A");
					{/*this.clickTest(e);*/}z
					this.props.clickCharacter(e);
			}}>{this.props.data.name}</div>
			</div>
		)
	}
}

export default ChracterCard; 