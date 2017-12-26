import React from 'react';
import PropTypes from 'prop-types';

class LolSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const preview = (<div class="card">
							<ul class="menu" role="menu" aria-labelledby="dropdownMenu">
							  <li><a tabindex="-1" href="#">행동</a></li>
							  <li><a tabindex="-1" href="#">다른 행동</a></li>
							  <li><a tabindex="-1" href="#">여기에는 또 다른</a></li>
							  <li><a tabindex="-1" href="#">따로 떨어진 링크</a></li>
							</ul>
						</div>);
		const viewBlank = (<div></div>);

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
								value={this.props.searchInput}
								onFocus={(e)=>this.props.onFocusSearchInput(e)}
								onMouseLeave={(e)=>this.props.outFocusSearchInput(e)}
								data-toggle="dropdown"></input>

							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Report</button></span>
							<span class="input-group-btn"><button class="btn btn-secondary" type="button">Erase</button></span>
						</div>
						{this.props.selectedFocusState ? preview : viewBlank}
						
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