import React from 'react';

class LolSearch extends React.Component {


	render() {
		return (
			<div>
				<h2>LolSearch</h2>
				<div class="card">
					<div class="card-body bg-primary">
						<div class="input-group">
							<input class="form-control" type="text"></input>
							<span class="input-group-btn"><button class="btn btn-secondary" type="button">lol</button></span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LolSearch;