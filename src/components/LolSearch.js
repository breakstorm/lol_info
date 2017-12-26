import React from 'react';
import PropTypes from 'prop-types';

class LolSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>LolSearch</h2>
				<div class="card">
					<div class="card-body bg-light">
						<div class="input-group">
							<input 
								class="form-control" 
								type="text" 
								onChange={(e) => {
									console.log("a");
									this.props.typeSearchInput(e)}}
								value={this.props.searchInput}></input>

							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Report</button></span>
							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Erase</button></span>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

LolSearch.defaultProps = {
	typeSearchInput: ()=> {console.error('typeSearchInput not defined')},
	searchInput: ''
};
LolSearch.propTypes = {
	typeSearchInput: PropTypes.func,
	searchInput: PropTypes.string
}

export default LolSearch;