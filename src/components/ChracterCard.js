import React from 'react';

class ChracterCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="card bg-secondary">
				<img src="" alt={this.props.data.id} />
				<div class="card-img-overlay" onClick={(e)=>{
					this.props.clickCharacter(e);
			}}>{this.props.data.name}</div>
			</div>
		)
	}
}

export default ChracterCard; 