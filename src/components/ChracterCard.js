import React from 'react';

class ChracterCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card bg-secondary">
				<img src="" alt="" />
				<div className="card-img-overlay" onClick={(e)=>{
					this.props.clickCharacter(e);
			}}>{this.props.data}</div>
			</div>
		)
	}
}

export default ChracterCard; 